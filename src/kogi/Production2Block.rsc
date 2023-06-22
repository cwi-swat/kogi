module kogi::Production2Block

import List;
import Type;
import ParseTree;
import util::Math;
import IO;
import kogi::Block;
import kogi::util::Util;
import kogi::symbol2Message::Symbol2Message;

str initialBlock = "";

// TODO: this works for now.
Block production2Block(prod(\start(sort(str name)), _, _), map[str, bool] multiplicity, str startProduction, lrel[str, str] lexRules, str labelName = "") {
	//initialBlock = name;
	kogi::Block::Message message = Message::message( "%1", [ arg("start", kogi::Block::\value(check = [name])) ] );
 	return block("start", name, [message], colour = hsv(120));
}
// FIX: The java grammar returns this as empty
map[str, bool] getSymbolsMultiplicity(list[Symbol] symbols, map[str, bool] multiplicity)
	= ( n : multiplicity[n] | n <- [ name | symbl <- symbols, /sort(name) := symbl ], n in multiplicity );
	
@doc{
	This function creates a block from a context-free non-terminal production rule.
	It was assumed that, if the multiplicity is false this means the block will have ONLY a previous statement.
}
Block production2Block(prod(symbol:sort(str name), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str startProduction, lrel[str, str] lexRules,  str labelName = "") {
	
	//remove blocks already handled by binary simplification
	if (size(symbols) == 1 && symbols[0] is label && symbols[0].symbol is lex) {
		println("removing unnecessary block:");
		println(symbols);
		return Block::none();
	}

	kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols), getSymbolsMultiplicity(symbols, multiplicity), lexRules, lexicalName = name);
	if(startProduction == name) {
		return block(setBlockName(labelName, name), setBlockType(name, labelName), [message], colour = hsv(120));
	}
	else if (name in multiplicity && !multiplicity[name]) {
		return block(setBlockName(labelName, name), setBlockType(name, labelName), [message], output = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)), tooltip = labelName);
	}
	else {
		return block(setBlockName(labelName, name), setBlockType(name, labelName), [message], previous = Ref::block(name), next = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)), tooltip = labelName);	
	}
}
  
Block production2Block(prod(lex("Whitespace"), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str startProduction, lrel[str, str] lexRules,  str labelName = "")
	= Block::none();
	
Block production2Block(prod(lex("WhitespaceOrComment"), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str startProduction, lrel[str, str] lexRules,  str labelName = "")
	= Block::none();
	
Block production2Block(prod(lex("WhitespaceAndComment"), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str startProduction, lrel[str, str] lexRules,  str labelName = "")
	= Block::none();

Block production2Block(prod(lex(str name), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str startProduction, lrel[str, str] lexRules,  str labelName = "") {
	kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols), multiplicity, lexRules, lexicalName = name);
	if (name in multiplicity && multiplicity[name])
		return block(name, setBlockType(name, labelName), [message], previous = Ref::block(name), next = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)));
	else	
		return block(name, setBlockType(name, labelName), [message], output = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)));
}

Block production2Block(prod(\label(str name, Symbol symbol), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str startProduction, lrel[str, str] lexRules)
	= production2Block(prod(symbol, symbols, attributes), multiplicity, startProduction, lexRules, labelName = name);

Block production2Block(Production production, map[str, bool] multiplicity, str startProduction, lrel[str, str] lexRules,  str labelName = "") 
	= Block::none();