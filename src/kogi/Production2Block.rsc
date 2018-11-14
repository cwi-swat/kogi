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


list[Block] production2Block(prod(\start(sort(str name)), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity) {
	kogi::Block::Message message = message( "%1", [ arg("start", statement(check = [name])) ] );
	return [block("start", name, [message], inputsInline = true, colour = hsv(90))];
}

@doc{
	This function creates a block from a context-free non-terminal production rule.
	It was assumed that, if the multiplicity is false this means the block will have ONLY a previous statement.
}
list[Block] production2Block(prod(symbol:sort(str name), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str labelName = "") {
	result = [];
	if(/\iter-star-seps(_,_) := symbols){
		filteredSymbols = [ ss | ss <- symbols, /\iter-star-seps(_,_) !:= ss ];
		kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(filteredSymbols), lexicalName = name, ignoreStar = true);
		if(name in multiplicity && !multiplicity[name])
			result = result + block(setBlockName(labelName + "-gen", name), name, [message], previous = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)), tooltip = (labelName + "gen"));
		else
			result = result + block(setBlockName(labelName + "-gen", name), name, [message], previous = Ref::block(name), next = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)), tooltip = (labelName + "gen")); 
	}
	kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols), lexicalName = name);
	if(name in multiplicity && !multiplicity[name])
		return result + block(setBlockName(labelName, name), name, [message], previous = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)), tooltip = labelName);
	else
		return result + block(setBlockName(labelName, name), name, [message], previous = Ref::block(name), next = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)), tooltip = labelName);
}
  
list[Block] production2Block(prod(lex("Whitespace"), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str labelName = "")
	= [Block::none()];
	
list[Block] production2Block(prod(lex("WhitespaceOrComment"), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str labelName = "")
	= [Block::none()];
	
list[Block] production2Block(prod(lex("WhitespaceAndComment"), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str labelName = "")
	= [Block::none()];

list[Block] production2Block(prod(lex(str name), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity, str labelName = "") {
	kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols), lexicalName = name);
	if(name in multiplicity && multiplicity[name])
		return [block(name, name, [message], previous = Ref::block(name), next = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)))];
	else	
		return [block(name, name, [message], output = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)))];
}

list[Block] production2Block(prod(\label(str name, Symbol symbol), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity)
	= production2Block(prod(symbol, symbols, attributes), multiplicity, labelName = name);

list[Block] production2Block(Production production, map[str, bool] multiplicity, str labelName = "") 
	= [Block::none()];