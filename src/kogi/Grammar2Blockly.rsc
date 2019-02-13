module kogi::Grammar2Blockly

import IO;
import Set;
import Map;
import Type;
import String;
import ParseTree;
import kogi::Block;
import kogi::util::Util;
import kogi::Production2Block;


set[Production] getAllProductions(type[&T <: Tree] grammar) {
     return { p | /p:prod(_,_,_) := 
     	( {} | it + grammar.definitions[s].alternatives | Symbol s <- grammar.definitions ), !isEmpty(p.symbols), \layouts(_) !:= p.def };
}
list[Block] grammar2blocks(type[&T<:Tree] grammar) {
    productions = getAllProductions(grammar);
	multiplicityInfo = nonTerminalMultiplicity(productions);
	//isSingleGrammar(productions);
    blocks = [ production2Block(production, multiplicityInfo) | production <- productions, containLayoutAttributes(production.attributes) ];
    blocks += createEpsilonBlock(productions);
    return [ block | block <- blocks, Block::none() !:= block ];
}

Block createEpsilonBlock(set[Production] productions) {
	if(/\iter-star-seps(_,_) := productions)
		return block("epsilon", "epsilon", [message("epsilon",[Arg::none()])], previous = Ref::block(""), colour = hsv(90));
	else
		return Block::none();
}
//bool isSingleGrammar(set[Production] productions){
//	nonTerminals = size( { symbol |/Symbol symbol <- productions, sort(name) := symbol } );
//	if( nonTerminals > 1)
//		return true;
//	else
//		return false;	
//}