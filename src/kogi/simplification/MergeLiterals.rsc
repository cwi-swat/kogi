module kogi::simplification::MergeLiterals

import kogi::demo::cloudlang::Syntax;
import ParseTree;
import IO;
import List;



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
			origSymbs = a.symbols;
			symbs = [ ss | ss <- origSymbs, \layouts(_) !:= ss]; 
			symbs = [ \label(_, _) := ss ? ss.symbol : ss | ss <- symbs]; 
			newSymbs = [];
			
			if (!isEmpty(symbs)) {
				skipNext = 0;
				for (i <- [0..size(symbs)]) {
					if (skipNext > 0) {
						skipNext -= 1;
						continue;
					}
					sym = symbs[i];
					ahead = 1;
					if ((\lit(_) := sym) && i < size(symbs) - 1) {
						combinedLiteral = sym.string;
						while (i + ahead < size(symbs)) {
							next = symbs[i + ahead];
							if (\lit(_) := next) {
								combinedLiteral += next.string;
							} else {
								skipNext = ahead - 2;
								newSymbs += \lit(combinedLiteral);
								break;
							}
							ahead += 1;
						}
						if (i + ahead == size(symbs)) {
							newSymbs += \lit(combinedLiteral);
						}
					} else {
						newSymbs += sym;
					}
				}
			}
			a.symbols = newSymbs;
		}
	}
}


void testGrammar() {
	mergeLiterals(#Resources);
}