module kogi::optimizations::RemoveUnitProduction

import IO;
import Set;
//import List;
import ParseTree;


set[Production] removeUnitProductions(type[&T <: Tree] grammar) {
	
	// Filter the grammar to get only non-terminals and start symbol. We exclude layout or other stuff
	map[Symbol, Production] nonTerminals = filterGrammar(grammar.definitions);
	
	map[Symbol, Production] grammarWChainRules = fooRemoverUnitProductions(nonTerminals);
	
	// remove useless productions
	grammarWChainRules = removeUselessProductions(grammarWChainRules);
	
	// Filter unit productions
	//set[Production] unitProductions = getUnitProductions(nonTerminals);
	//
	//list[Production] sorted = sortUnitProductions(nonTerminals, unitProductions);
	//
	//map[Symbol, Production] updatedG = updateGrammar(nonTerminals, sorted);
	
	return ({} | it + grammarWChainRules[p].alternatives | p <- grammarWChainRules );
}

map[Symbol, Production] removeUselessProductions(map[Symbol, Production] grammar ) {
	map[Symbol, Production] uselessProds = ();
	
	for (Symbol s <- grammar) {	
		Production p = grammar[s];
		Symbol def = p.def;
		
		bool found = false;
		for (Symbol s2 <- grammar, found == false && s != s2) {
			Production p2 = grammar[s2];
			
			for (Production p2 <- p2.alternatives) {
				for (Symbol x <- p2.symbols) {
					if (label(_, Symbol ss) := x && ss == def) {
						found  = true;
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
	return grammar - uselessProds;
}

bool symbolIn(Symbol s, list[Symbol] symbols)
  = s in symbols;

map[Symbol, Production] fooRemoverUnitProductions(map[Symbol, Production] grammar) {
	set[Production] units = getUnitProductions(grammar);
	
	if (isEmpty(units)) {
		return grammar;
	}
	else {
		Production chainRule = getOneFrom(units);
		
		Symbol s =  label(_, Symbol s) := chainRule.def ? s : chainRule.def;
		
		Symbol toInclude = label(_, Symbol s) := chainRule.symbols[0] ? s : chainRule.def;
		
		
		// Retrieve the alternatives to include
		Production alt2Include = grammar[toInclude];
		
		// Get the nonterminal to update its productions
		Production zzz = removeChainRuleAlternative(grammar[s], chainRule);
		
		// Update the production from the grammar 
		grammar[zzz.def] = addNewAlternatives(zzz, alt2Include);
		
		
		// replace grammar with the update current grammar and launch recursion
		return fooRemoverUnitProductions(grammar);
	}
}

Production removeChainRuleAlternative(Production p, Production unitProduction) {
	Production tmp = p;
	tmp.alternatives = { pp | pp <- p.alternatives, pp != unitProduction };
	return tmp;
}

Production addNewAlternatives(Production p, Production p2Include) {
	Production tmp = p;
	
	for (Production p1 <- p2Include.alternatives) {
		if (label(str a, _) := p1.def) {
			// TODO: fix the label
			p1.def = label(a, p.def);
			// add alternatives
			tmp.alternatives = tmp.alternatives + {p1};
		}
	}
	return tmp;
}

set[Production] getUnitProductions(map[Symbol, Production] grammar) 
  = ( {} | it + containsUnitProduction(grammar[s]) | s <- grammar, !isStartSymbol(grammar[s]));
  
//{
//	set[Production] ans = {};
//	for (Symbol s <- grammar) {
//		Production p = grammar[s];
//		if (!isStartSymbol(p)) {
//			ans += containsUnitProduction(p);
//		}
//	}
//	return ans;
//}

set[Production] getAlternativeWithChainRule(choice(_, set[Production] alternatives))
  = { a | a <- alternatives, hasChainRule(a) };

bool isStartSymbol(choice(\start(_),_))
  = true;
  
bool isStartSymbol(choice(_,_))
  = false;  

// This function returns a production that contains chain rules
//Production getPR() {
//	// Check if the production has chain rules 
//}

// A unit production is a production that has only 1 non-terminal
set[Production] containsUnitProduction(choice(_, set[Production] alternatives))	
  = { p | p <- alternatives, hasChainRule(p) };
  
default set[Production] containsUnitProduction(Production p)
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
	return size(symbs) == 1 && lit(_) !:= symbs[0] ? true : false;
}

default bool hasChainRule(Production p)
  = true;


//////////////////////---------------------------
//
//map[Symbol, Production] updateGrammar(map[Symbol, Production] prods, list[Production] units) {
//	if (isEmpty(units))
//		return prods;
//	else {
//		map[Symbol, Production] n = replaceProductionRule(prods, head(units));
//		// start recursion without the head
//		return updateGrammar(n, delete(units,0));
//	}
//}
//
//map[Symbol, Production] replaceProductionRule(map[Symbol, Production] grammar, Production p) {
//	Production toRemove = grammar[p.symbols[0]];
//	set[Production] alternatives = toRemove.alternatives;
//	set[Production] alts = {};
//	
//	// 1. remove nonterminal
//	map[Symbol, Production] newGrammar = ( s : grammar[s] | Symbol s <- grammar, p.symbols[0] != s );
//	
//	// 2. Update references to the removed nonterminal
//	if (label(_, Symbol s) := p.def ) {
//		alts = { a | a <- newGrammar[s].alternatives, a != p };
//		// 3. update production rule with the removed one productions
//		newGrammar[s].alternatives = alts + prod(s, getOneFrom(alternatives).symbols, {});
//	}
//	else {
//		alts = { a | a <- newGrammar[p.def].alternatives, a != p };
//		
//		// 3. update production rule with the removed one productions
//		newGrammar[p.def].alternatives = alts + prod(p.def, getOneFrom(alternatives).symbols, {});
//	}
//	return newGrammar;
//}
//
//set[Production] getUnitProductions(map[Symbol, Production] grammar)
//  = ( {} | it + grammar[s] | Symbol s <- grammar, getUnitProduction(grammar[s]) );
//  //= ( {} | it + filterUnitProductions(grammar[s]) | Symbol s <- grammar );
//
//
//bool getUnitProduction(choice(Symbol s, set[Production] prods)) {
//	// query the prods to find if the prod only has one element AND the elements is a terminal.
//	println("");
//	return size(prods) == 1 && isNonterminal(prods[0]) ? true : false; 
//}
//
//bool getUnitProduction(Production p) {
// return true;
//}
//
//set[Production] filterUnitProductions(set[Production] prods)
//  {return { p | p <- prods, isNonTerminal(p) };}
//
/**
*	Retrieve only the nonterminals. We skip all layout stuff.
*/
map[Symbol, Production] filterGrammar(map[Symbol, Production] prods)
  {return ( p : prods[p] | p <- prods, sort(_) := p || \start(_) := p);}
//
//
//list[Production] sortUnitProductions(map[Symbol, Production] dfs, set[Production] unitProds) {
//	list[Production] ordered = [];
//	list[Production] rest = [];
//
//	for ( pp <- unitProds) {
//		if (givesNonTerminal(dfs, pp) )
//			ordered += pp;		
//		else
//			rest += pp;
//	}
//	return ordered + sortProductions(rest);
//}
//
///**
//* This method is required to find dependencies between unit productions.
//* Z->M and Y->Z, we must remove the first production to avoid inconsistencies
//*/
//list[Production] sortProductions(list[Production] prods) {
//	list[Production]  new = [];
//	list[Production]  others = [];
//	
//	for (p <- prods) {
//		bool flag = false;
//		for (p2 <- prods, p != p2) {
//			if (label(_, Symbol s) := p.def) {
//				if(s in p2.symbols) {
//					new += p;
//					flag = true;
//				}
//			}
//			else {
//				if (p.def in p2.symbols) {
//					new += p;
//					flag = true;
//				}
//			}
//		}
//		if (!flag)
//			others += p;
//	}
//	return new + others;
//}
//
//// P has the form A -> B
//// p.def gives A
//// p.symbols gives B
//bool givesNonTerminal(map[Symbol, Production] dfs, Production p) {
//	// Look into the symbols to se if one of them is a terminal (literal)
//	
//	// We want to replace B (p.symbols)
//	for (Symbol s <- p.symbols) {
//		Production p2  = dfs[s];
//		if (hasTerminalAlternatives(p2)) {
//			return true;
//		}
//	}
//	//Production p  = grammar.definitions[p.def];
//	return false;
//}
//
//
//bool hasTerminalAlternatives(choice(_, set[Production] prods)) {
//	// Have to iterate over the productions to check whether there is a terminal production or not.
//	list[Production] d = [ p | p <- prods, isTerminal(p) ];
//	return isEmpty(d) ? false : true;
//}
//
//bool isTerminal(Production p) {
//	list[Symbol] d = [ s | s <- p.symbols, lit(_) !:= s];
//	if (isEmpty(d))
//		return true;
//	else
//		return false;
//}
//
//// FIX ME: 
//bool isNonTerminal(priority(_, list[Production] choices)) {
//	//Production p = alternatives;
//	list[Symbol] d = [ s | s <- choices, /sort(_) !:= s];
//	if (isEmpty(d))
//		return true;
//	else
//		return false;
//}
//
//bool isNonTerminal(associativity(_,_, set[Production] alternatives)) {
//	//Production p = alternatives;
//	list[Symbol] d = [ s | s <- getOneFrom(alternatives).symbols, /sort(_) !:= s];
//	if (isEmpty(d))
//		return true;
//	else
//		return false;
//}
//
//bool isNonTerminal(Production p) {
//	list[Symbol] d = [ s | s <- p.symbols, sort(_) !:= s];
//	if (isEmpty(d))
//		return true;
//	else
//		return false;
//}