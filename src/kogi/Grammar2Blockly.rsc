module kogi::Grammar2Blockly

import List;
import Set;
import Type;
import String;
import ParseTree;
import kogi::Block;
import kogi::util::Util;
import kogi::Production2Block;

tuple[set[Production], str] getProductionsAndStart(set[Production] productions) {
	Production startProd = getStartProduction(productions);
	str startP = startProd.def.symbol.name;
	return <productions - startProd, startP>;
}

list[str] getStartBlocks(set[Production] productions) {
	list[Production] startProds = toList({ p | p <- productions, prod(\start(sort(_)),_,_) := p });
	list[str] content = [];
	
	for (Production x <- startProds) {
		for (Production y <- productions) {
			try { 
				if (y.def.symbol.name == x.def.symbol.name) {
				 	str startBlock = "<y.def.symbol.name>/<y.def.name>";
					content += startBlock;
				}
			} catch: content = content;
		}
	}
	
	return content;
}

list[Block] grammar2blocks(set[Production] productions, bool epsilon = false) {
	multiplicityInfo = nonTerminalMultiplicity(productions);
	// Remove the start production from the productions and retrieve the start symbol name to set the 'hat' block
	tuple[set[Production] prods, str name] p = getProductionsAndStart(productions);

    blocks = [ production2Block(production, multiplicityInfo, p.name) | production <- p.prods, containLayoutAttributes(production.attributes) ];
    if (epsilon)
    	blocks += createEpsilonBlock(productions);
    // remove empty blocks
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