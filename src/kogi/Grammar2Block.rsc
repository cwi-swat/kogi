module kogi::Grammar2Block

import IO;
import Set;
import String;
import Type;
import ParseTree;
import kogi::Block;
import kogi::Symbol2Block;
import kogi::Production2Block;


set[Production] getAllProductionz(type[&T <: Tree] grammar){
     return ({} | it + grammar.definitions[s].alternatives | Symbol s <- grammar.definitions);
}

list[Block] grammar2blocks(type[&T<:Tree] grammar){
    allProductions = getAllProductionz(grammar);
    productions = { p | /p:prod(_,_,_) := allProductions, !isEmpty(p.symbols), layouts(_) !:= p.def };
    // FIX: ignore only the productions with attrs tag("category"("Comment"))
    blocks = [ production2Block(production) | production <- productions, isEmpty(production.attributes) ];
    return [ block | block <- blocks, Block::none() !:= block ];
}