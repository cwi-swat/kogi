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
	else if(symbol:sort(name) := production.def){
		if(symbol == cachedStartSymbol[0])
			return createMainBlock(name, production);
		else		
			return nonTerminal2Block(name, production);
	}
	else{
		return Block::none();
	}
}