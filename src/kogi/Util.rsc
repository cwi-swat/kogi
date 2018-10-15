module kogi::Util

import Set;
import List;
import Type;
import kogi::Block;


map[str, bool] nonTerminalMultiplicity(set[Production] productions) 
	= ( () | it + extractMultiplicity(symbol) | symbol <- ( [] | it + production.symbols | production <- productions, isEmpty(production.attributes) ) );

map[str, bool] extractMultiplicity(\iter-star-seps(Symbol symbol, _))
	= ( symbol.name : true );
	
map[str, bool] extractMultiplicity(\sort(str name))
	= ( name : false );
	
map[str, bool] extractMultiplicity(\label(str name, Symbol symbol))
	= extractMultiplicity(symbol);
	
default map[str, bool] extractMultiplicity(Symbol symbol)
	= ( "" : false );

list[Symbol] ignoreLayoutSymbols(list[Symbol] symbols) 
	= [ symbol |symbol <- symbols, layouts(_) !:= symbol];
	
@doc{
	This function calculates the average HSV color of the list of blocks given as parameter.
}	
int getAverageColor(list[Block] blocks)
	= (0| it + block.colour.hsv | block <- blocks)/size(blocks);

bool containLayoutAttributes(set[Attr] attributes) {
	filtered = [ attribute | attribute <- attributes, \bracket() := attribute || \tag("lineComment") := attribute || \tag("category"("Comment")) := attribute ];
	return isEmpty(filtered);
}

list[Block] getBlocks(Toolbox toolbox)
	= [ block | section <- toolbox.sections, block <- section.blocks];
	
tuple[int,Block] getBlock(str name, list[Block] blocks){
	int i = 0;
	for(block <- blocks){
		if(block.name == name)
			return <i, block>;
		i += 1;	
	}
	return < -1, Block::none() >;
}