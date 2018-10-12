module kogi::Production2Block

import IO;
import List;
import Type;
import ParseTree;
import kogi::Util;
import util::Math;
import kogi::Block;
import kogi::Grammar2Block;
import kogi::Symbol2Message;


Block production2Block(prod(\start(sort(str name)), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity){ 
	kogi::Block::Message message = message( "%1", [ arg("start", statement(check = name)) ] );
	return block("start", name, [message], inputsInline = true, colour = hsv(90));
}

@doc{
	This function creates a block from a context-free non-terminal production rule.
	It was assumed that, if the multiplicity is false this means the block will have ONLY a previous statement.
}
Block production2Block(prod(symbol:sort(str name), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str labelName = "") { 

	//Block nonTerminal2Block(str name, list[Symbol] symbols, map[str, bool] multiplicity){
		kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols), lexicalName = name);
		if(name in multiplicity && !multiplicity[name])
			return block(labelName, name, [message], previous = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)), tooltip = labelName);
		else
			return block(labelName, name, [message], previous = Ref::block(name), next = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)));
	//}
	//return nonTerminal2Block(name, symbols, multiplicity);
}
  
Block production2Block(prod(lex("Whitespace"), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str labelName = "")
	= Block::none();
	
Block production2Block(prod(lex("WhitespaceOrComment"), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str labelName = "")
	= Block::none();
	
Block production2Block(prod(lex("WhitespaceAndComment"), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str labelName = "")
	= Block::none();

Block production2Block(prod(lex(str name), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str labelName = "") {
	kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols), lexicalName = name);
	return block(name, name, [ message ], output = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)));
}

Block production2Block(prod(\label(str name, Symbol symbol), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity){
	Block block = production2Block(prod(symbol, symbols, attributes), multiplicity, labelName = name);
	return block;
	//return block := Block::none() ? block :	setBlockName(name, block);
}

Block production2Block(Production production, map[str, bool] multiplicity, str labelName = "") 
	= Block::none();
