module kogi::symbol2Message::Symbol2Message

import Type;
import ParseTree;
import kogi::Block;
import kogi::util::Util;
import kogi::symbol2Message::Symbol2Arg;

kogi::Block::Message symbols2Message(list[Symbol] symbols, str lexicalName = "") {
	format = symbols2format(symbols);
	args = [ symbol2Arg(symbol, lexicalName = lexicalName) | symbol <- symbols, Symbol::\layouts(_) !:= symbol ];
	return message(format, [ arg | arg <- args, Arg::none() !:= arg ]);
}

//FIX: If the last symbol is a lit, it shouldn't add  the last %n
//FIX: Not sure about this, but it reduces the number of conditionals(e.g., lex(…), \iter-start(…)) 
str symbols2format(list[Symbol] symbols) {
	int counter = 0;
	str format(Symbol symbol) {
		counter += 1;
		if (lit(string) := symbol)
			return "<escape(string)> %<counter> ";
		else
			return "%<counter> ";
	}
	if(size(symbols) == 1 && lit(string) := symbols[0])
		return escape(string);
	else
		return ( "" | it + format(symbol) | symbol <- symbols, Symbol::\layouts(_) !:= symbol );	
}