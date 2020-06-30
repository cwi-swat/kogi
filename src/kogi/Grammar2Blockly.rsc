module kogi::Grammar2Blockly

import Set;
import Type;
import ParseTree;
import kogi::Block;
import kogi::util::Util;
import kogi::Production2Block;


set[Production] getAllProductions(type[&T <: Tree] grammar) {
     return { p | /p:prod(_,_,_) := 
     	( {} | it + grammar.definitions[s].alternatives | Symbol s <- grammar.definitions ), !isEmpty(p.symbols), \layouts(_) !:= p.def };
}
list[Block] grammar2blocks(type[&T<:Tree] grammar) {
	set[Production] productions = getAllProductions(grammar);
	multiplicityInfo = nonTerminalMultiplicity(productions);
	startProd = getStartProduction(productions);
	production2Block(startProd);
	//isSingleGrammar(productions);
    blocks = [ production2Block(production, multiplicityInfo) | production <- (productions - startProd), containLayoutAttributes(production.attributes) ];
    blocks += createEpsilonBlock(productions);
    return [ block | block <- blocks, Block::none() !:= block ];
}

list[Block] grammar2blocks(set[Production] productions) {
	multiplicityInfo = nonTerminalMultiplicity(productions);
	startProd = getStartProduction(productions);
	production2Block(startProd);

    blocks = [ production2Block(production, multiplicityInfo) | production <- (productions - startProd), containLayoutAttributes(production.attributes) ];
    blocks += createEpsilonBlock(productions);
    return [ block | block <- blocks, Block::none() !:= block ];
}

Block createEpsilonBlock(set[Production] productions) {
	if(/\iter-star-seps(_,_) := productions)
		return block("epsilon", "epsilon", [message("epsilon",[Arg::none()])], previous = Ref::block(""), colour = hsv(90));
	else
		return Block::none();
}

Production getStartProduction(set[Production] productions) 
	= getOneFrom({ p | p <- productions, prod(\start(sort(_)),_,_) := p });
	

//bool isSingleGrammar(set[Production] productions){
//	nonTerminals = size( { symbol |/Symbol symbol <- productions, sort(name) := symbol } );
//	if( nonTerminals > 1)
//		return true;
//	else
//		return false;	
//}