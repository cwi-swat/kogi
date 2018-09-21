module kogi::Symbol2Message

import Type;
import kogi::Block;

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

Arg symbol2Arg(Symbol symbol, str labeledName = "", str lexicalName = ""){
	if(lit(string) := symbol){
		return arg(labeledName, dummy());
	}
	else if(lex(name) := symbol){
		kogi::Block::Type t = kogi::Block::\value(check = "<name>");
		return arg("<labeledName>", t);
	}
	else if(\iter(symb) := symbol){
		if(\char-class(_) := symb)
			return arg(lexicalName+"Name", input(lexicalName)); // TODO: This needs a name
	}
	else if(\iter-star-seps(symb, separators) := symbol){
		// We can use it in the same way as the next case. The \iter… give us some information about the block or the behaviour of the block.
		// \iter-star-seps( sort("Trans"), […]) -> The symb can be used to define de type check
		return arg(labeledName, statement()); // TODO: how to type check? missing, I guess.
	}
	else if(\label(str name, Symbol s) := symbol){
		return symbol2Arg(s, labeledName = name);
	}
	else{
		return Arg::none();
	}
}