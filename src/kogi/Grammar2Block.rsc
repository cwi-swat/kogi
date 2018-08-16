module kogi::Grammar2Block

import IO;
import Set;
import String;
import Type;
import ParseTree;
import lang::json::IO;

set[Production] getAllProductionz(type[&T <: Tree] grammar){
     return ({} | it + grammar.definitions[s].alternatives | Symbol s <- grammar.definitions);
}

alias BlockLang = list[Block];

alias Block = map[str, value];

void grammar2blocks(type[&T<:Tree] g){
	set[Block] blocks = {};
	
	BlockLang bs = [];
	
    allProds = getAllProductionz(g);
    prods = { p | /p:prod(_,_,_) := allProds, !isEmpty(p.symbols)};
    
    for(production <- prods){
    	//println(production);
    	//blocks += toBlockJSON(production2Block(production));
    	
    	pr = production2Block(production);
    	//toBlockJSON(pr);
    	blocks += pr;
    }
    //println(toJSON(blocks[0]));
    writeJSON(|project://kogi/src/kogi/rest.json|, blocks);
}

//void fromFields(list[Field] fields){
//	map[str, value] rest =();
//	for(x<- fields){
//		if(field(b,name=bb) := x){
//			println("<x>");
//		}
//		else if(field(_) := x)
//		{	
//			println("Field1");
//		}
//	}
//}

map[str, list[str]] defs = ();
set[str] lexicals ={};
set[Symbol] nonTerminal ={};

int tt =0;
Block production2Block(Production p){
	// starting block
	if(\start(sort(st)) := p.def){
		return createMainBlock(st, p);
	}
	// lexicals
	else if(lex(nombre) := p.def && !(nombre in lexicals)){
		lexicals += nombre;
		return lexical2Block(nombre, p);
	}
	else{
		message ="";
		list[map[str, value]] fields = [];
		int i = 1;
		for(Symbol s <- p.symbols){
			if(lit(ss) := s){
				message += "<ss> %<i> ";
				i+=1;
				fields += ("type":"input_dummy");
			}
			else if(sort(ss) := s){
				message += "%<i> ";
				nonTerminal += s;
				i+=1;
				fields += ("type":"input_value", "name":"<ss>");
			}
			else{
				//TODO: figure out what to do with these elements. Are they uselss? I don't know…
				println(s);
			}
		}
		tt +=1;
		//TODO: Labels are needed to define the type of the block.
		//return block("<p.def[0]><tt>", message, fields, 10, "", "", output = "");
		return createBlock("<p.def[0]><tt>", message, fields, 120, output="");
	}
	
	//if( startsWith("<p.def>", "start(")){
	//	name = "<p.def[0]>"[6..-2];
	//}
	//println(p);
}

Block createMainBlock(str name, Production p){
	//return block("<name>", "<name> %1", [("type":"input_value", "name":"NAME")], 10, "","");
	return createBlock(name, "<name> %1", [("type":"input_value", "name":"NAME")], 10);
}

Block lexical2Block(str name, Production p){
	for(vv <- p.symbols){
		if(a:/\char-class([range(min, max)]) := vv){
			try{
				// If it doesn't throw an exception we asume it is numerical field
				toInt(stringChar(max));
				//return block("<name>", "%1", [("name":"<name>", "type":"field_number", "value":0)], 120, "","", output="" );
				//return ("type": "<name>", "message0": "%1", "args0":[("name":"<name>", "type":"field_number", "value":0)], "colour":120, "tooltip":"", "helpurl":"", "output":"");
				return createBlock(name, "%1", [("name":"<name>", "type":"field_number", "value":0)], 120);
			}
			catch:
				//return block("<name>", "%1", [("name":"<name>", "type":"field_input", "value":0)], 110, "","", output="" );
				//return ("type": "<name>", "message0": "%1", "args0":[("name":"<name>", "type":"field_input", "value":0)], "colour":110, "tooltip":"", "helpurl":"", "output":"");
				return createBlock(name, "%1", [("name":"<name>", "type":"field_input", "value":0)], 110);
		}
	}
}

Block createBlock(str \type, str message, list[map[str, value]] args0, int colour, str tooltip ="", str helpurl="", str output=""){
	return ("type": \type, "message0": message, "args0": args0, "colour":colour, "tooltip":(tooltip != "")?tooltip:"", "helpurl":(helpurl!="")?helpurl:"", "output":(output!="")?output:"");
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
