module kogi::simplification::UselessProductions

import ParseTree;

import kogi::simplification::Util;


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