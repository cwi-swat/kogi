module kogi::Grammar2Blockly

import Set;
import String;
import Type;
import IO;
import ParseTree;
import kogi::Block;
import kogi::util::Util;
import kogi::Production2Block;
import kogi::Production2BinaryBlock;
import kogi::GetLexicalRules;
import kogi::CategoryReduction;

tuple[set[Production], str] getProductionsAndStart(set[Production] productions) {
	Production startProd = getStartProduction(productions);
	str startP = startProd.def.symbol.name;
	return <productions - startProd, startP>;
}

list[Block] grammar2blocks(set[Production] productions, bool epsilon = false) {
	
	multiplicityInfo = nonTerminalMultiplicity(productions);
	// Remove the start production from the productions and retrieve the start symbol name to set the 'hat' block
	tuple[set[Production] prods, str name] p = getProductionsAndStart(productions);
	
	//binary simplification and simpledropdown TODO: make seperate functions out of these
	// - binary simplification: we turn all 'Expr Lit Expr' forms into a block with a dropdown field in the middle
	// - simpledropdown: if we have a category which exclusively exists of 'options', e.g: colours, names or types, we turn it into a block with a dropdown field
	tuple[list[Block], set[Production]] binSimplification = production2BinaryBlock(p.prods);
	newP = binSimplification[1];

	//get all the lexical rules and assigned categories so we can safely remove 'empty' blocks that have has input a lexical rule;
	//	so if B -> A, A -> S, S -> string then we remove A and make B -> S
	lrel[str, str] lexicalRules = getLexicalRules(p.prods);

	//tuple[list[Block], set[Production]] catReduction = categoryReduction(newP, binSimplification[0], multiplicityInfo, lexicalRules);
	//newP = catReduction[1];

    blocks = [ production2Block(production, multiplicityInfo, p.name, lexicalRules) | production <- newP, containLayoutAttributes(production.attributes)];
    if (epsilon) blocks += createEpsilonBlock(newP);
	for (B <- binSimplification[0]) blocks += B;
	//for (B <- catReduction[0]) blocks += B;
	
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