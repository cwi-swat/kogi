module kogi::Grammar2Block

import IO;
import Set;
import String;
import Type;
import ParseTree;


alias BlockLang = set[Block];

alias Block = map[str, value];

//TODO: List of tuples and each tuple should contain a color field
alias Toolbox = tuple[str id, str category, set[str] bls];

set[Production] getAllProductionz(type[&T <: Tree] grammar){
     return ({} | it + grammar.definitions[s].alternatives | Symbol s <- grammar.definitions);
}

Toolbox createToolbox(BlockLang blocks, str id = "toolbox"){
	return <id,"Unnamed", {"<block["type"]>" | block <- blocks}>;
}

BlockLang grammar2blocks(type[&T<:Tree] g){
    allProds = getAllProductionz(g);
    prods = { p | /p:prod(_,_,_) := allProds, !isEmpty(p.symbols), layouts(_) !:= p.def};
    BlockLang blocks = { production2Block(production) | production <- prods};
    toolbox = createToolbox(blocks);
    
    //println(toJSON(blocks[0]));
    //writeJSON(|project://kogi/src/kogi/rest.json|, blocks);
    return blocks;
}

map[str, list[str]] defs = ();
set[str] lexicals ={};
set[Symbol] nonTerminal ={};

int tt =0;
tuple[Symbol, Production] cachedStartSymbol = <\empty(), skipped()>;  
Block production2Block(Production production){
	// starting block
	if(\start(symbol) := production.def){
		cachedStartSymbol = <symbol, production>;
		// This case shouldn't create something
		return createMainBlock("", production);
	}
	// lexicals
	else if(lex(name) := production.def && !(name in lexicals)){
		lexicals += name;
		return lexical2Block(name, production);
	}
	else if(symbol:sort(name) := production.def){
		if(symbol == cachedStartSymbol[0])
			return createMainBlock(name, production);
		else		
			return createStandarBlock(production);
	}
	// It seems this is no longer needed
	else{
		return createStandarBlock(production);
	}
}

Block createStandarBlock(Production production){
	message ="";
	list[map[str, value]] fields = [];
	int i = 1;
	for(Symbol symbol <- production.symbols){
		if(lit(string) := symbol){
			message += "<string> %<i> ";
			i += 1;
			fields += ("type":"input_dummy");
		}
		else if(sort(string) := symbol){
			message += "%<i> ";
			nonTerminal += symbol;
			i += 1;
			fields += ("type":"input_value", "name":"<string>");
		}
		else{
			//TODO: figure out what to do with these elements. Are they uselss? I don't know…
			println(symbol);
		}
	}
	tt +=1;
	//TODO: Labels are needed to define the type of the block.
	return createBlock("<production.def[0]><tt>", message, fields, 120, output="null");
}

/*
* This function takes the raw data and produces a Block. 
*/
Block createMainBlock(str name, Production p){
	return createBlock(name, "<name> %1", [("type":"input_value", "name":"NAME")], 10);
}

Block lexical2Block(str name, Production p){
	for(symbols <- p.symbols){
		if(a:/\char-class([range(min, max)]) := symbols){
			try{
				// If it doesn't throw an exception we asume it is numerical field
				toInt(stringChar(max));
				return createBlock(name, "%1", [("name":"<name>", "type":"field_number", "value":0)], 120, output="null");
			}
			catch:
				return createBlock(name, "%1", [("name":"<name>", "type":"field_input", "value":0)], 110, output="null");
		}
	}
	return createBlock(name, "%1", [("name":"<name>", "type":"field_input", "value":0)], 110, output="null"); 
}

Block createBlock(str \type, str message, list[map[str, value]] args0, int colour, str tooltip ="", str helpurl="", str output=""){
	if(output != "")
		return ("type": \type, "message0": message, "args0": args0, "colour":colour, "tooltip":(tooltip != "")?tooltip:"", "helpurl":(helpurl!="")?helpurl:"", "output": output);
	else
		return ("type": \type, "message0": message, "args0": args0, "colour":colour, "tooltip":(tooltip != "")?tooltip:"", "helpurl":(helpurl!="")?helpurl:"");
}


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
