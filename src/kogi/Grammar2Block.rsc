module kogi::Grammar2Block

import IO;
import Set;
import String;
import Type;
import ParseTree;
import kogi::Block;
import kogi::Production2Block;


set[Production] getAllProductionz(type[&T <: Tree] grammar){
     return ({} | it + grammar.definitions[s].alternatives | Symbol s <- grammar.definitions);
}

list[Block] grammar2blocks(type[&T<:Tree] grammar){
    allProductions = getAllProductionz(grammar);
    productions = { p | /p:prod(_,_,_) := allProductions, !isEmpty(p.symbols), layouts(_) !:= p.def};
    // FIX: ignore only the productions with attrs tag("category"("Comment"))
    blocks = [ production2Block(production) | production <- productions, isEmpty(production.attributes)];
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