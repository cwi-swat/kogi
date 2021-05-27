module kogi::simplification::Main

import ParseTree;
import kogi::simplification::MergeLiterals;



set[Production] kogification(type[&T <: Tree] grammar) {
	
	// S0: ignore layout elements
	map[Symbol, Production] s0 = skipLayoutElements(grammar.definitions);
	
	// S1: merge literals
	map[Symbol, Production] s1 = mergeLiterals(s0);
	
	// bla
	
	return ({} | it + s1[p].alternatives | p <- s1 );
}

map[Symbol, Production] skipLayoutElements(map[Symbol, Production] prods) 
	= (s: prods[s] | Symbol s <- prods, \layouts(_) !:= s);