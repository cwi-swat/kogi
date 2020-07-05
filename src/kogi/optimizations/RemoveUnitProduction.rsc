module kogi::optimizations::RemoveUnitProduction

import IO;
import Set;
import ParseTree;


set[Production] simplifyGrammar(type[&T <: Tree] grammar) {
	// Filter the grammar to get only non-terminals and start symbol. We exclude layout or other stuff
	map[Symbol, Production] nonTerminals = filterGrammar(grammar.definitions);
	
	map[Symbol, Production] grammarWChainRules = removeChainRules(nonTerminals);
	
	// remove useless productions
	grammarWChainRules = removeUselessProductions(grammarWChainRules);
	
	return ({} | it + grammarWChainRules[p].alternatives | p <- grammarWChainRules );
}

map[Symbol, Production] removeUselessProductions(map[Symbol, Production] grammar ) {
	map[Symbol, Production] uselessProds = ();
	
	for (Symbol s <- grammar) {	
		Production p = grammar[s];
		Symbol def = p.def;
		
		bool found = false;
		// Compare againts all the productions except itself
		for (Symbol s2 <- grammar, found == false && s != s2) {
			Production p2 = grammar[s2];
			// Check all p2 alternatives
			for (Production p2 <- p2.alternatives, found == false) {
				// Iterate over p2 symbols
				for (Symbol x <- p2.symbols, found == false) {
					//Check if p is used within an alternative
					if (label(_, Symbol ss) := x) {
						// TODO: Check whether there's a nested structure like stars
						if (ss == def || areEqual(ss, def)) {
							found  = true;
							break;
						}
					}
					else if (x == def) {
						found = true;
						break;
					}
					// TODO: if x is not a labeled symbol
				}
			}	
		}
		
		//if found ==  false means the production p is not used within the grammar. Therefore, it is a useless production
		if (!found && choice(\start(_),_) !:= p) {
			uselessProds += (s : p);
		}
	}
	// get the difference between the maps
	diff = grammar - uselessProds;
	return diff;
}

bool areEqual(\iter-star(Symbol s), Symbol def)
  = s == def ? true : false;
  
bool areEqual(\iter-seps(Symbol s, _), Symbol def)
  = s == def ? true : false;
  
bool areEqual(\iter-star-seps(Symbol s, _), Symbol def)
  = s == def ? true : false;
  
bool areEqual(\opt(Symbol s	), Symbol def)
  = s == def ? true : false;
  
bool areEqual(Symbol s, Symbol def)
  = s == def ? true : false;  

bool symbolIn(Symbol s, list[Symbol] symbols)
  = s in symbols;

map[Symbol, Production] removeChainRules(map[Symbol, Production] grammar) {
	set[Production] chainRules = getChainRules(grammar);
	
	if (isEmpty(chainRules)) {
		return grammar;
	}
	else {
		Production chainRule = getOneFrom(chainRules);
		
		Symbol s =  label(_, Symbol s) := chainRule.def ? s : chainRule.def;
		
		// Symbol of the nonterminal we want to include
		Symbol toInclude = label(_, Symbol s) := chainRule.symbols[0] ? s : chainRule.def;
		
		// Retrieve the alternatives to include
		Production alt2Include = grammar[toInclude];
		
		// Production we want to update
		Production p = removeAlternative(grammar[s], chainRule);
		
		// Update the production from the grammar with the removal of the chainrule 
		grammar[p.def] = mergeAlternatives(p, alt2Include);
		
		// replace grammar with the update current grammar and launch recursion
		return removeChainRules(grammar);
	}
}

Production removeAlternative(Production p, Production chainRule) {
	Production tmp = p;
	tmp.alternatives = { pp | pp <- p.alternatives, pp != chainRule };
	return tmp;
}

Production mergeAlternatives(Production p, Production p2Include) {
	// make a copy of the production we are going to update
	Production tmp = p;
	
	// This is needed to update the def field of the alternatives to include
	for (Production p1 <- p2Include.alternatives, !duplicateAlternative(tmp, p1)) {
		if (label(str a, _) := p1.def) {
			// TODO: fix the label
			p1.def = label(a, p.def);
			// add alternatives
			tmp.alternatives = tmp.alternatives + {p1};
		}
	}
	return tmp;
}

// returns true if the alternatives are the same, meaning the symbols are the same.
bool duplicateAlternative(Production old, Production alternative2Include) {
	for (Production p <- old.alternatives) {
		if (p.symbols == alternative2Include.symbols)
			return true;
	}
	return false;
}

set[Production] getChainRules(map[Symbol, Production] grammar) 
  = ( {} | it + containsChainRule(grammar[s]) | s <- grammar, !isStartSymbol(grammar[s]) && isNonterminal(s) );
  
set[Production] getAlternativeWithChainRule(choice(_, set[Production] alternatives))
  = { a | a <- alternatives, hasChainRule(a) };

bool isStartSymbol(choice(\start(_),_))
  = true;
  
bool isStartSymbol(choice(_,_))
  = false;  

// A unit production is a production that has 1 non-terminal
set[Production] containsChainRule(choice(_, set[Production] alternatives))	
  = { p | p <- alternatives, hasChainRule(p) };
  
default set[Production] containsChainRule(Production p)
  = {};

bool isNonterminal(label(_, sort(_)))
  = true;
  
bool isNonterminal(sort(_))
  = true;
  
default bool isNonterminal(_)
  = false;  

bool hasChainRule(prod(_, list[Symbol] symbols, _)) {
	// remove layout symbols
	list[Symbol] symbs = [ smb | Symbol smb <- symbols, layouts(_) !:= smb ];
	// check if the alternative contains ONLY 1 non-terminal. If so, it is a chain rule
	return size(symbs) == 1 && isNonterminal(symbs[0]) ? true : false;
	//return size(symbs) == 1 && lit(_) !:= symbs[0] ? true : false;
}

default bool hasChainRule(Production p)
  = true;

/**
*	Retrieve only the nonterminals. We skip layout stuff, also from alternatives and symbols.
*/
map[Symbol, Production] filterGrammar(map[Symbol, Production] prods)
	{return ( s : filterProduction(prods[s]) | Symbol s <- prods, includeProduction(s) );}
  //{return ( p : filterProduction(prods[p]) | p <- prods, sort(_) := p || \start(_) := p || lex(_) := p );}

bool includeProduction(sort(_))
  = true;

bool includeProduction(\start(_))
  = true;

bool includeProduction(lex("Comment"))
  = false;
  
bool includeProduction(lex("Whitespace"))
  = false;
  
bool includeProduction(lex("WhitespaceOrComment"))
  = false;      

bool includeProduction(lex(_))
  = true;  

default bool includeProduction(Symbol _)
  = false;
  
  
/*
* Remove layout symbols
*/
Production filterProduction(Production p) {
	Production updatedP = p;	
	updatedP.alternatives = filterAlternatives(p.alternatives);
	return updatedP;
}

set[Production] filterAlternatives(set[Production] alts)
 = { filterAlternative(a) | a <- alts };

Production filterAlternative(Production p) {
	p.symbols = filterLayoutSymbols(p.symbols); 
	return p;
}

list[Symbol] filterLayoutSymbols(list[Symbol] symbols)
  = [ s | s <- symbols, layouts(_) !:= s ];