module kogi::simplification::MergeLiterals

import kogi::demo::cloudlang::Syntax;
import ParseTree;
import IO;



set[Production] mergeLiterals(type[&T <: Tree] grammar) {
	map[Symbol, Production] e = skipLayoutElements(grammar.definitions);
	map[Symbol, Production] mergedLiterals = mergeLiteral(e);
	
	return {};
}

map[Symbol, Production] skipLayoutElements(map[Symbol, Production] prods) 
	= (s: prods[s] | Symbol s <- prods, \layouts(_) !:= s);

void mergeLiteral(map[Symbol, Production] productions) {
	
	for (Symbol s <- productions) {
		alternatives = productions[s].alternatives;
		
		for (a <- alternatives) {
			symbs = a.symbols;
		}
		
		
	}
	
}


void testGrammar() {
	mergeLiterals(#Resources);
}