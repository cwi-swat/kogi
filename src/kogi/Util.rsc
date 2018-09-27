module kogi::Util

import List;
import Set;
import Type;
import kogi::Block;


map[str, bool] nonTerminalMultiplicity(set[Production] productions) =
	( () | it + extractMultiplicity(symbol) | symbol <- ( [] | it + production.symbols | production <- productions, isEmpty(production.attributes) ) );

map[str, bool] extractMultiplicity(\iter-star-seps(Symbol symbol, _))
	= ( symbol.name : true );
	
map[str, bool] extractMultiplicity(\sort(str name))
	= ( name : false );
	
map[str, bool] extractMultiplicity(\label(str name, Symbol symbol))
	= extractMultiplicity(symbol);
	
default map[str, bool] extractMultiplicity(Symbol symbol)
	= ( "" : false );

list[Symbol] ignoreLayoutSymbols(list[Symbol] symbols) =
	[ symbol |symbol <- symbols, layouts(_) !:= symbol];
	
@doc{
	This function calculates the average HSV color of the list of blocks given as parameter.
}	
int getAverageColor(list[Block] blocks)
	= (0| it + block.colour.hsv | block <- blocks)/size(blocks);
	
Block setBlockName(str name, Block block){
	block.name = name;
	return block;
}	