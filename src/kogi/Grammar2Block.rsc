module kogi::Grammar2Block

import IO;
import Set;
import String;
import Type;
import ParseTree;
import kogi::Block;
import lang::json::IO;
import kogi::Production2Block;


alias BlockLang = set[Block];

//TODO: List of tuples and each tuple should contain a color field
//alias Toolbox = tuple[str id, str category, set[str] bls];

set[Production] getAllProductionz(type[&T <: Tree] grammar){
     return ({} | it + grammar.definitions[s].alternatives | Symbol s <- grammar.definitions);
}

Toolbox createToolbox(BlockLang blocks, str id = "toolbox"){
	return <id,"Unnamed", {"<block["type"]>" | block <- blocks}>;
}

list[Block] grammar2blocks(type[&T<:Tree] g){
    allProds = getAllProductionz(g);
    prods = { p | /p:prod(_,_,_) := allProds, !isEmpty(p.symbols), layouts(_) !:= p.def};
    blocks = [ production2Block(production) | production <- prods, isEmpty(production.attributes)]; // TODO: ignore productions with attrs tag("category"("Comment"))
    return [block | block <- blocks, Block::none() !:= block];
}

map[str, list[str]] defs = ();
set[str] lexicals ={};
set[Symbol] nonTerminal ={};

tuple[Symbol, Production] cachedStartSymbol = <\empty(), skipped()>;
  
Block production2Block(Production production){
	// starting block
	if(\start(symbol) := production.def){
		cachedStartSymbol = <symbol, production>;
		return Block::none();
	}
	// lexicals
	else if(lex(name) := production.def){
		if( name == "Whitespace")
			return Block::none();
		else	
			return lexical2Block(name, production);
	}
	//else if(lex(name) := production.def && !(name in lexicals)){
	//	lexicals += name;
	//	return lexical2Block(name, production);
	//}
	else if(symbol:sort(name) := production.def){
		if(symbol == cachedStartSymbol[0])
			return createMainBlock(name, production);
		else		
			return nonTerminal2Block(name, production);
	}
	// It seems this is no longer needed
	else{
		return Block::none();
	}
}

//int blockId = 0;
//Block createStandarBlock(Production production){
//	messag ="";
//	list[map[str, value]] fields = [];
//	int i = 1;
//	for(Symbol symbol <- production.symbols){
//		if(lit(string) := symbol){
//			messag += "<string> %<i> ";
//			i += 1;
//			fields += ("type":"input_dummy");
//		}
//		else if(sort(string) := symbol){
//			messag += "%<i> ";
//			nonTerminal += symbol;
//			i += 1;
//			fields += ("type":"input_value", "name":"<string>");
//		}
//		else{
//			//TODO: figure out what to do with these elements. Are they uselss? I don't know…
//			println(symbol);
//		}
//	}
//	blockId +=1;
//	//TODO: Labels are needed to define the type of the block.
//	return createBlock("<production.def[0]><blockId>", messag, fields, 120, output="null");
//}

//Block lexical2Block(str name, Production p){
//	for(symbols <- p.symbols){
//		if(a:/\char-class([range(min, max)]) := symbols){
//			try{
//				// If it doesn't throw an exception we asume it is numerical field
//				toInt(stringChar(max));
//				return createBlock(name, "%1", [("name":"<name>", "type":"field_number", "value":0)], 120, output="null");
//			}
//			catch:
//				return createBlock(name, "%1", [("name":"<name>", "type":"field_input", "value":0)], 110, output="null");
//		}
//	}
//	return createBlock(name, "%1", [("name":"<name>", "type":"field_input", "value":0)], 110, output="null"); 
//}

//Block createBlock(str \type, str message, list[map[str, value]] args0, int colour, str tooltip ="", str helpurl="", str output=""){
//	if(output != "")
//		return ("type": \type, "message0": message, "args0": args0, "colour":colour, "tooltip":(tooltip != "")?tooltip:"", "helpurl":(helpurl!="")?helpurl:"", "output": output);
//	else
//		return ("type": \type, "message0": message, "args0": args0, "colour":colour, "tooltip":(tooltip != "")?tooltip:"", "helpurl":(helpurl!="")?helpurl:"");
//}


// TODO: Fix args0, is it possible to have many args0
//data Block 
//	= block(str \type, str message0, list[map[str, value]] args0, int colour, str tooltip, str helpurl, str output = "")
//	| blockz()
//	;
	
//data Field
//	= fieldNumber(str name, str \type = "", int \value=0, int min=-100000, int max=1000000, int precision=0)
//	|imageField(str src, int height, int width, str alt)
//	|text(str txt) // 
//	|field(str \type, str name = "")
//	; 
