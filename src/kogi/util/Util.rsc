module kogi::util::Util

import Set;
import List;
import Type;
import String;
import ParseTree;
import util::Math;
import kogi::Block;


map[str, bool] newnonTerminalMultiplicity(set[Production] productions) {
	map[str, bool] rta = ();
	list[Symbol] symbols = ( [] | it + production.symbols | production <- productions, isEmpty(production.attributes) );
	for (s <- symbols) {
		tuple[str name, bool val] tmp = extractMultiplicity(s);
		
		// If there's a production with * or + we keep that with higher priority
		if (tmp.name notin rta || rta[tmp.name] != true) {
			rta += (tmp.name : tmp.val);
		}
	}
	return rta;
	//return ( () | it + extractMultiplicity(s) | s <- symbols );
}

map[str, bool] nonTerminalMultiplicity(set[Production] productions) {
	map[str, bool] rta = ();
	list[Symbol] symbols = ( [] | it + production.symbols | production <- productions, isEmpty(production.attributes) );
	for (s <- symbols) {
		tuple[str name, bool val] tmp = extractMultiplicity(s);
		
		// If there's a production with * or + we keep that with higher priority
		if (tmp.name notin rta || rta[tmp.name] != true) {
			rta += (tmp.name : tmp.val);
		}
	}
	return rta;
	//return ( () | it + extractMultiplicity(s) | s <- symbols );
}

// FIX ME: Fix the way the multiplicity is handled. There must be a better way for doing this.
tuple[str name, bool val] extractMultiplicity(\iter-star-seps(alt(set[Symbol] symbols), _))
	= <"<symbols>", true>;
	
tuple[str name, bool val] extractMultiplicity(\iter-star-seps(lit(str name), _))
	= <name, true>;

tuple[str name, bool val] extractMultiplicity(\iter-seps(lit(str name), _))
	= <name, true>;	

tuple[str name, bool val] extractMultiplicity(\iter-seps(sort(str name), _))
	= <name, true>;

tuple[str name, bool val] extractMultiplicity(\iter-star-seps(Symbol symbol, _))
	= <symbol.name, true>;
	
// TODO: Fix extract multiplicity
tuple[str name, bool val] extractMultiplicity(\alt(set[Symbol] alternatives))
	= <"alternative", false>;
	
tuple[str name, bool val] extractMultiplicity(\sort(str name))
	= <name, false>;
	
tuple[str name, bool val] extractMultiplicity(\label(str name, Symbol symbol))
	= extractMultiplicity(symbol);
	
default tuple[str name, bool val] extractMultiplicity(Symbol symbol)
	= <"" , false>;

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
	

Block getBlock(str name, list[Block] blocks)
	= ( Block::none() | block | block <- blocks, block.name == name );


list[str] getSyntaxCheck(Symbol symbol)
	=  getSyntaxCheck(symbol);

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
	= ( [] | it + getSyntaxCheck(param) | param <- parameters );	

list[str] getSyntaxCheck(\alt(set[Symbol] alternatives))
	=  ( [] | it + getSyntaxCheck(symbol) | symbol <- alternatives );
	
list[str] getSyntaxCheck(\seq(list[Symbol] alternatives))
	=  ( [] | it + getSyntaxCheck(symbol) | symbol <- alternatives );	
	
list[str] getSyntaxCheck(\char-class(_))
	= [""];
	
list[str] getSyntaxCheck(\lit(_))
	= [""];
	
str setBlockName(str name, str typeName)
	= (name == "") ? toLowerCase(typeName) + "<arbInt(400)>" : name;

str setBlockType(str name, str constructor)
	= constructor != "" ? name + "/" + constructor: name;
	
Block renameBlock(Block block, str name = "<arbInt(40)>") {
	Block b = block;
	b.name = "<block.name><name>";
	return b;
}

@doc{Blocks names must be unique. Therefore this function checks that. 
If there are duplicates, the first occurrence remains and the others are renamed}
list[Block] renameDuplicatedBlocks(list[Block] blocks){
	// The set of names is initialized with names that create conflict with Blockly.
	set[str] names = {"constructor"};
	list[Block] updatedBlocks = [];
	for (block <- blocks) {
		if (block.name notin names) {
			names += block.name;
			updatedBlocks += block;
		}
		else {
			newBlock = renameBlock(block);
			names += newBlock.name;
			updatedBlocks += newBlock;
		}
	}
	return updatedBlocks;
}

str getColour(Colour colour) {
	switch (colour) {
		case hsv(hsv):
			return "<hsv>";
		case rgb(rgb):
			return rgb;
		case bky(bky):
			return bky;
		case none():
			return "";
		default:
			throw "Unsupported Colour definition: <colour>";	
	}
}

str escape(str string) {
		if (string == "\"")
			return "\\\"";
		else if (string == "\n")
			return "\\n";
		else if (string == "%")
			return "%%";
		else
			return string;
}