module kogi::Symbol2Message

import Type;
import kogi::Block;
import kogi::Symbol2Arg;

kogi::Block::Message symbols2Message(list[Symbol] symbols, str lexicalName = ""){
	format = symbols2format(symbols);
	args = [ symbol2Arg(symbol, lexicalName = lexicalName) | symbol <- symbols ];
	return message(format, args);
}

//FIX: if the last symbol is a lit, it shouldn't add  the last %n
//FIX : Not sure if this is completely true, but it reduces the number of conditionals(e.g., lex(…), \iter-start(…)) 
str symbols2format(list[Symbol] symbols){
	int counter = 0;
	str format(Symbol symbol){
		counter += 1;
		if(lit(string) := symbol)
			return "<string> %<counter> ";
		else
			return "%<counter> ";
	}
	return ( "" | it + format(symbol) | symbol <- symbols );
}