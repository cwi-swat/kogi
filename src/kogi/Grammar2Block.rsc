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


set[Production] getAllProductionz(type[&T <: Tree] grammar){
     return ({} | it + grammar.definitions[s].alternatives | Symbol s <- grammar.definitions);
}

list[Block] grammar2blocks(type[&T<:Tree] grammar){
    allProductions = getAllProductionz(grammar);
    productions = { p | /p:prod(_,_,_) := allProductions, !isEmpty(p.symbols), layouts(_) !:= p.def };
    //TODO: Extract information from the productions to know the multiplicity of the non-terminals (e.g. one, one or more, zero or more)
    // Then this information should be used before creating each block.
	multiplicityInfo = nonTerminalMultiplicity(productions);
    // FIX: ignore only the productions with attrs tag("category"("Comment"))
    blocks = [ production2Block(production, multiplicityInfo) | production <- productions, isEmpty(production.attributes) ];
    return [ block | block <- blocks, Block::none() !:= block ];
}