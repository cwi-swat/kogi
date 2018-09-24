module kogi::Util

import Set;
import Type;


map[str, bool] nonTerminalMultiplicity(set[Production] productions) =
	( () | it + extractMultiplicity(symbol) | symbol <- ( [] | it + production.symbols | production <- productions, isEmpty(production.attributes) ) );

// True -> *,+
// False -> rest of the cases
map[str, bool] extractMultiplicity(Symbol symbol){
	if(\iter-star-seps(Symbol sy, _):=symbol){
		return (sy.name: true);
	}
	else if(\sort(str name) := symbol){
		return (name: false);
	}
	else if(\label(str name, Symbol s):=symbol){
		return extractMultiplicity(s);
	}
	else{
		return ("": false);
	}
}