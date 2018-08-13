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

void grammar2blocks(type[&T<:Tree] g){
	set[Block] blocks = {};
	
    allProds = getAllProductionz(g);
    prods = { p | /p:prod(_,_,_) := allProds, !isEmpty(p.symbols)};
    
    for(production <- prods){
    	//println(production);
    	blocks += production2Block(production);
    }
    
    writeJSON(|project://kogi/src/kogi/rest.json|, blocks);
    //for(x <- symbolz){
    //    if(lex(nam) <- x){
    //    	blocks += lexical2Block(nam);
    //        //println("this is a lex <nam>");
    //    }
    //    else{
    //        println(x);
    //        //break;
    //        //println("this is not a lex, is <x>");
    //    }
    //    println("chao");
    //    
    //}
}

map[str, list[str]] defs = ();
set[str] lexicals ={};

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
		for( s <- p.symbols){
			Symbol rr = s;
			println(rr);
		}
		println("@@@");
		
		
		return blockz();
		
	}
	
	//if( startsWith("<p.def>", "start(")){
	//	name = "<p.def[0]>"[6..-2];
	//}
	//println(p);
}

Block createMainBlock(str name, Production p){
	return block("<name>", "<name> %1", [field("input_value", "NAME")], 10, "","");
}

Block lexical2Block(str name, Production p){
	for(vv <- p.symbols){
		if(a:/\char-class([range(min, max)]) := vv){
			try{
				// If it doesn't throw an exception we asume it is numerical field
				toInt(stringChar(max));
				return block("<name>", "%1", [fieldNumber("<name>", \type= "field_number", \value=0)], 120, "","", output="" );
			}
			catch:
				return block("<name>", "%1", [fieldNumber("<name>", \type= "field_input", \value=0)], 120, "","", output="" );
		}
	}
    //writeJSON(|project://kogi/src/kogi/rest.json|, tmp);
    return tmp;
}

data Block 
	= block(str \type, str message0, list[Field] args0, int colour, str tooltip, str helpurl, str output = "")
	| blockz()
	;
	
data Field
	= fieldNumber(str name, str \type = "", int \value=0, int min=-100000, int max=1000000, int precision=0)
	|imageField(str src, int height, int width, str alt)
	|text(str txt) // 
	|field(str \type, str name)
	; 
