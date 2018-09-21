module kogi::Production2Block

import IO;
import List;
import Type;
import ParseTree;
import kogi::Block;
import kogi::Symbol2Block;
import kogi::Grammar2Block;
import kogi::Symbol2Message;


tuple[Symbol, list[Symbol]] cachedStartProduction = <\empty(), []>;

Block production2Block(prod(\start(Symbol symbol), list[Symbol] symbols, set[Attr] attributes)){ 
	cachedStartSymbol = <symbol, symbols>;
	return Block::none();
}

Block production2Block(prod(lex(str name), list[Symbol] symbols, set[Attr] attributes)){ 
	if( name == "Whitespace")
			return Block::none();
		else	
			return lexical2Block(name, symbols);
}

Block production2Block(prod(symbol:sort(str name), list[Symbol] symbols, set[Attr] attributes)){ 
	if(symbol == cachedStartProduction[0])
			return createMainBlock(name, symbols);
		else		
			return nonTerminal2Block(name, symbols);
}
  
Block production2Block(Production production) = Block::none();
