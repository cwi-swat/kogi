module kogi::simplification::Main

import ParseTree;
import kogi::simplification::MergeLiterals;
import kogi::simplification::RemoveUnitProduction;



set[Production] kogification(type[&T <: Tree] grammar) {
	
	// S0: ignore layout elements
	map[Symbol, Production] s0 = skipLayoutElements(grammar.definitions);
	
	// S1: merge literals
	map[Symbol, Production] s1 = mergeLiterals(s0);
	
	// remove chain rules
	//map[Symbol, Production] s2 = removeChainRules(s1);
	
	
	
	
	map[Symbol, Production] result = s1;
	
	return ({} | it + result[p].alternatives | p <- result );
}

map[Symbol, Production] skipLayoutElements(map[Symbol, Production] prods) 
	= (s: prods[s] | Symbol s <- prods, \layouts(_) !:= s);