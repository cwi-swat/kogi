module kogi::Symbol2Message

import Type;
import ParseTree;
import kogi::Block;

kogi::Block::Message symbols2Message(list[Symbol] symbols, str lexicalName = ""){
	format = symbols2format(symbols);
	args = [ symbol2Arg(symbol, lexicalName = lexicalName) | symbol <- symbols ];
	return message(format, args);
}

//FIX: If the last symbol is a lit, it shouldn't add  the last %n
//FIX: Not sure if this is completely true, but it reduces the number of conditionals(e.g., lex(…), \iter-start(…)) 
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

Arg symbol2Arg(lit(str string), str labeledName = "", str lexicalName = "")
	= arg(labeledName, dummy());

Arg symbol2Arg(lex(str name), str labeledName = "lex", str lexicalName = "")
	= arg(labeledName, kogi::Block::\value(check = name));

Arg symbol2Arg(\sort(str name), str labeledName = "", str lexicalName = "")
	= arg(name, statement(check = name));

Arg symbol2Arg(\iter(Symbol symbol), str labeledName = "", str lexicalName = "") =
	symbol2Arg(symbol, lexicalName=lexicalName);

Arg symbol2Arg(\iter-star-seps(Symbol symbol, list[Symbol] separators), str labeledName = "", str lexicalName = "") =
	arg(labeledName, statement(check = symbol.name));

Arg symbol2Arg(\iter-seps(Symbol symbol, list[Symbol] separators), str labeledName = "", str lexicalName = "") =
	arg(labeledName, statement(check = symbol.name));

Arg symbol2Arg(\iter-star(Symbol symbol), str labeledName = "", str lexicalName = "") =
	arg(labeledName, statement(check = symbol.name));

Arg symbol2Arg(\opt(Symbol symbol), str labeledName = "", str lexicalName = "") =
	arg(labeledName, statement(check = symbol.name));

Arg symbol2Arg(\label(str name, Symbol s), str labeledName = "", str lexicalName = "")
	= symbol2Arg(s, labeledName = name);

// CharRange = range(int begin, int end);
Arg symbol2Arg(\char-class(list[CharRange] ranges), str lexicalName = "") 
	= arg(lexicalName + "Name", input(lexicalName)); // TODO: This needs a name
	
default Arg symbol2Arg(Symbol s, str labeledName = "", str lexicalName = "") 
	= Arg::none();