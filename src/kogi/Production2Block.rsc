module kogi::Production2Block

import IO;
import List;
import Type;
import ParseTree;
import util::Math;
import kogi::Block;
import kogi::Grammar2Block;
import kogi::Symbol2Message;


tuple[Symbol, list[Symbol]] cachedStartProduction = <\empty(), []>;

Block production2Block(prod(\start(Symbol symbol), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity){ 
	cachedStartProduction = <symbol, symbols>;
	return Block::none();
}

Block production2Block(prod(symbol:sort(str name), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity){ 
	if(symbol == cachedStartProduction[0])
			return createMainBlock(name, symbols);
		else		
			return nonTerminal2Block(name, symbols, multiplicity);
}
  
Block production2Block(prod(lex("Whitespace"), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity)
	= Block::none();

Block production2Block(prod(lex(str name), list[Symbol] symbols, set[Attr] attributes), map[str, bool] multiplicity){
	kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols), lexicalName = name);
	return block(name, [ message ], output = Ref::block(""), colour = hsv(arbInt(360)));
}

Block production2Block(Production production, map[str, bool] multiplicity) = Block::none();

list[Symbol] ignoreLayoutSymbols(list[Symbol] symbols) =
	[ symbol |symbol <- symbols, layouts(_) !:= symbol];
	
Block nonTerminal2Block(str name, list[Symbol] symbols, map[str, bool] multiplicity){
	kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols), lexicalName = name);
	// If multiplicity =false then only has previous.	
	if(name in multiplicity && !multiplicity[name])
		return block(name, [message], previous = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)));
	else
		return block(name, [message], previous = Ref::block(name), next = Ref::block(name), inputsInline = true, colour = hsv(arbInt(360)));
}

/*
* This function takes the raw data and produces a Block. 
*/
Block createMainBlock(str name, list[Symbol] symbols){
	kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols));
	return block(name, [message], inputsInline = true, colour = hsv(90)); // Fixed value for this block Green.
}

//data Symbol
//     = \empty() 
//     | \opt(Symbol symbol)  
//     | \iter(Symbol symbol) 
//     | \iter-star(Symbol symbol)  
//     | \iter-seps(Symbol symbol, list[Symbol] separators)      
//     | \iter-star-seps(Symbol symbol, list[Symbol] separators) 
//     | \alt(set[Symbol] alternatives) 
//     | \seq(list[Symbol] symbols)     
//     ;
