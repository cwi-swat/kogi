module kogi::Grammar2Block

import IO;
import Set;
import Map;
import Type;
import String;
import ParseTree;
import kogi::Util;
import kogi::Block;
import kogi::Production2Block;


set[Production] getAllProductions(type[&T <: Tree] grammar){
     return { p | /p:prod(_,_,_) := 
     	( {} | it + grammar.definitions[s].alternatives | Symbol s <- grammar.definitions ), !isEmpty(p.symbols), layouts(_) !:= p.def };
}

list[Block] grammar2blocks(type[&T<:Tree] grammar){
    productions = getAllProductions(grammar);
	multiplicityInfo = nonTerminalMultiplicity(productions);
    // FIX: Ignore only the productions with some layout tags
    blocks = [ production2Block(production, multiplicityInfo) | production <- productions, isEmpty(production.attributes) ];
    return [ block | block <- blocks, Block::none() !:= block ];
}