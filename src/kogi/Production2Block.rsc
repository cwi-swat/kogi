module kogi::Production2Block

import IO;
import List;
import Type;
import ParseTree;
import kogi::Block;
import kogi::Grammar2Block;
import kogi::Symbol2Message;


tuple[Symbol, list[Symbol]] cachedStartProduction = <\empty(), []>;

Block production2Block(prod(\start(Symbol symbol), list[Symbol] symbols, set[Attr] attributes)){ 
	cachedStartSymbol = <symbol, symbols>;
	return Block::none();
}

Block production2Block(prod(symbol:sort(str name), list[Symbol] symbols, set[Attr] attributes)){ 
	if(symbol == cachedStartProduction[0])
			return createMainBlock(name, symbols);
		else		
			return nonTerminal2Block(name, symbols);
}
  
Block production2Block(Production production) = Block::none();

Block production2Block(prod(lex("Whitespace"), list[Symbol] symbols, set[Attr] attributes))
	= Block::none();

Block production2Block(prod(lex(str name), list[Symbol] symbols, set[Attr] attributes)){
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
