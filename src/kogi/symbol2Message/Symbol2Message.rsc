module kogi::symbol2Message::Symbol2Message

import Type;
import String;
import ParseTree;
import kogi::Block;
import kogi::util::Util;
import kogi::symbol2Message::Symbol2Arg;

list[str] defaultValues = ["Id", "FloatValue", "IntegerValue", "AngleValue", "BooleanValue", "ImageValue"];

kogi::Block::Message symbols2Message(list[Symbol] symbols, map[str, bool] multiplicity, str lexicalName = "") {
	if (lexicalName in defaultValues) {
		format = "%1";
		args = [symbol2Arg(lexicalName)];
		return message(format, args);
	}
	else {
		format = symbols2format(symbols);
		args = [ symbol2Arg(symbol, getMultiplicity(symbol, multiplicity), lexicalName = lexicalName) | symbol <- symbols, Symbol::\layouts(_) !:= symbol, contains(format,"%") ];
		return message(format, [ arg | arg <- args, Arg::none() !:= arg ]);
	}
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
	if (size(symbols) == 1 && lit(string) := symbols[0])
		return escape(string);
	else
		return ( "" | it + format(symbol) | symbol <- symbols, Symbol::\layouts(_) !:= symbol );	
}

bool getMultiplicity(Symbol s, map[str, bool] multiplicity)
	= /sort(name) := s ? multiplicity[name] : false;