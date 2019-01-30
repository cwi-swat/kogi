module kogi::Util

import Set;
import List;
import Type;
import String;
import util::Math;
import kogi::Block;


map[str, bool] nonTerminalMultiplicity(set[Production] productions) 
	= ( () | it + extractMultiplicity(symbol) | symbol <- ( [] | it + production.symbols | production <- productions, isEmpty(production.attributes) ) );

map[str, bool] extractMultiplicity(\iter-star-seps(alt(set[Symbol] symbols), _))
	= ("<symbols>" : true);
	
map[str, bool] extractMultiplicity(\iter-star-seps(lit(str name), _))
	{ return (name : true);}

map[str, bool] extractMultiplicity(\iter-star-seps(Symbol symbol, _))
	{ return (symbol.name : true);}
	
// TODO: Fix extract multiplicity
map[str, bool] extractMultiplicity(\alt(set[Symbol] alternatives))
	= ( "alternative" : false );
	
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

list[str] getSyntaxCheck(Symbol symbol)
	{return  getSyntaxCheck(symbol);}

list[str] getSyntaxCheck(label(str lab, Symbol symbol))
	= getSyntaxCheck(symbol);

list[str] getSyntaxCheck(\opt(Symbol symbol))
	= getSyntaxCheck(symbol);
	
list[str] getSyntaxCheck(sort(str name))
	= [name];

list[str] getSyntaxCheck(lex(str name))
	= [name];
	
list[str] getSyntaxCheck(\parameterized-sort(str name, list[Symbol] parameters))
	= [name] + getSyntaxCheck(parameters);

list[str] getSyntaxCheck(list[Symbol] parameters)
	= ([]| it + getSyntaxCheck(param)| param <- parameters);	

list[str] getSyntaxCheck(\alt(set[Symbol] alternatives))
	=  ([]|it + getSyntaxCheck(symbol) | symbol <- alternatives);
	
list[str] getSyntaxCheck(\seq(list[Symbol] alternatives))
	=  ([]|it + getSyntaxCheck(symbol) | symbol <- alternatives);	
	
list[str] getSyntaxCheck(\char-class(_))
	= [""];
	
list[str] getSyntaxCheck(\lit(_))
	= [""];
	
str setBlockName(str name, str typeName)
	=  name == "" ? toLowerCase(typeName) + "<arbInt(400)>" : name;

str setBlockType(str name, str constructor)
	= constructor != "" ? name + "/" + constructor: name;
	
	
Block renameBlock(Block block){
	b = block;
	b.name = "<block.name><arbInt(40)>";
	return b;
}

list[Block] renameDuplicatedBlocks(list[Block] blocks){
	// The set of names is initialized with names that create conflict with Blockly.
	set[str] names = {"constructor"};
	list[Block] updatedBlocks = [];
	for(block <- blocks){
		if(block.name notin names){
			names += block.name;
			updatedBlocks += block;
		}
		else{
			newBlock = renameBlock(block);
			names += newBlock.name;
			updatedBlocks += newBlock;
		}
	}
	return updatedBlocks;
}