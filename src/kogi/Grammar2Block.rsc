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
	isSingleGrammar(productions);
    // FIX: Ignore only the productions with some layout tags
    blocks = [ production2Block(production, multiplicityInfo) | production <- productions, containLayoutAttributes(production.attributes) ];
    return [ block | block <- blocks, Block::none() !:= block ];
}

bool isSingleGrammar(set[Production] productions){
	nonTerminals = size( { symbol |/Symbol symbol <- productions, sort(name) := symbol } );
	if( nonTerminals > 1)
		return true;
	else
		return false;	
}

//{bracket()}
//{tag("lineComment"()),tag("category"("Comment"))}
bool containLayoutAttributes(set[Attr] attributes){
	filtered = [ attribute | attribute <- attributes, \bracket() := attribute || \tag("lineComment") := attribute || \tag("category"("Comment")) := attribute ];
	return isEmpty(filtered);
}