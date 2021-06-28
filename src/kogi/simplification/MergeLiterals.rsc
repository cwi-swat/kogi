module kogi::simplification::MergeLiterals

import ParseTree;
import IO;
import List;
import kogi::simplification::Util;

import IO;
import kogi::simplification::RemoveUnitProduction;



map[Symbol, Production] mergeLiterals(map[Symbol, Production] productions) {
	map[Symbol, Production] merged = productions;
	
	for (Symbol s <- productions) {
		Production prod = productions[s];
		
		newAlts = {};
		// FIX ME: Not all productions have alternatives. Some have choices (e.g., minijava -> Expression).
		
		prod = skipPrecedenceRules(prod);
		alternatives = prod.alternatives;
		for (Production a <- alternatives) {

				list[Symbol] origSymbs = a.symbols;
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
				newAlts += a;
			}
		prod.alternatives = newAlts;
		merged[s] = prod;
	}
	return merged;
}

void something(prod(def, symbols, attributes)) {
	println("prod");
}
void something(priority(_, choices)) {
	for (c <- choices) {
		println(c);
	}
}

void testGrammar() {
	mergeLiterals(#Resources);
}

Production skipPrecedenceRules(Production prod) {
	Production newProd = prod;
	
	set[Production] newAlternatives = { p | p <- prod.alternatives, priority(_, choices) !:= p};
	
	
	newAlternatives = fixInnerPrecedence(newAlternatives);
	for (p <- prod.alternatives) {
		if (priority(_, choices) := p) {
			newAlternatives += { c | c <- choices };
		}
	}
	newAlternatives = fixInnerPrecedence(newAlternatives);
	newProd.alternatives = newAlternatives;
	return newProd;
}

set[Production] fixInnerPrecedence(set[Production] prods) {
	set[Production] result = {};
	for (p <- prods) {
		if ( choice(_, alts) := p) {
			result += alts;
		}
		else {
			result += p;
		}
	}
	return result;
}