module kogi::Util

import List;
import Set;
import Type;
import kogi::Block;


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

list[Symbol] ignoreLayoutSymbols(list[Symbol] symbols) =
	[ symbol |symbol <- symbols, layouts(_) !:= symbol];
	
@doc{
	This function calculates the average HSV color of the list of blocks given as parameter.
}	
int getAverageColor(list[Block] blocks)
	= (0| it + block.colour.hsv | block <- blocks)/size(blocks);