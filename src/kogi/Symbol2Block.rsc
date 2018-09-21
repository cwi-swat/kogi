module kogi::Symbol2Block

import Type;
import kogi::Block;
import kogi::Symbol2Message;


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

Block lexical2Block(str name, list[Symbol] symbols){
	kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols), lexicalName = name);
	return block(name, [ message ], output = Ref::block(""), colour = hsv(20));
}

list[Symbol] ignoreLayoutSymbols(list[Symbol] symbols) =
	[ symbol |symbol <- symbols, layouts(_) !:= symbol];
	
Block nonTerminal2Block(str name, list[Symbol] symbols){
	kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols), lexicalName = name);
	return block(name, [message], previous = Ref::block(""), next = Ref::block(""), inputsInline = true, colour = hsv(30));
}

/*
* This function takes the raw data and produces a Block. 
*/
Block createMainBlock(str name, list[Symbol] symbols){
	kogi::Block::Message message = symbols2Message(ignoreLayoutSymbols(symbols));
	return block(name, [message], colour = hsv(10)); // Fixed value for this block? Green?
}