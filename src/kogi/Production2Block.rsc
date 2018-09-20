module kogi::Production2Block

import IO;
import List;
import Type;
import kogi::Grammar2Block;
import kogi::Block;

/*
* This function takes the raw data and produces a Block. 
*/
Block createMainBlock(str name, Production production){
	kogi::Block::Message message = symbols2Message(production.symbols);
	return block(name, [message], colour = hsv(10)); // Fixed value for this block? Green?
	
	//return createBlock(name, "<name> %1", [("type":"input_value", "name":"NAME")], 10);
	
	//block(name, 
	//	[message(
	//		"name %1 %2 %3",
	//		[ arg("", dummy()), 
	//		  arg("ID", \value("Id")),
	//		  arg(statement()) //Name and check is missing?
	//		]
	//	)]
	//);
}

Block lexical2Block(str name, Production production){
	kogi::Block::Message message = symbols2Message(production.symbols, lexicalName = name);
	return block(name, [message], output = Ref::block(""), colour = hsv(20));
}

Block nonTerminal2Block(str name, Production production){
	kogi::Block::Message message = symbols2Message(production.symbols, lexicalName = name);
	return block(name, [message], previous = Ref::block(""), next = Ref::block(""), inputsInline = true, colour = hsv(30));
}

kogi::Block::Message symbols2Message(list[Symbol] symbols, str lexicalName = ""){
	symbolsToProcess = [ symbol |symbol <- symbols, layouts(_) !:= symbol];
	format = symbols2format(symbolsToProcess);
	args = symbols2Args(symbolsToProcess,lexicalName = lexicalName);
	return message(format, args);
}

int counter = 0;

//FIX: if the last symbol is a lit, it shouldn't add  the last %n 
str symbols2format(list[Symbol] symbols){
	result =  (""|it + formt(symbol)| symbol <- symbols);
	counter = 0;
	return result;
}

str formt(Symbol symbol){
	counter += 1;
	if(lit(string) := symbol){
		return "<string> %<counter> ";
	}
	//else if(lex(name) := symbol){ 
	// TODO: Not sure if this is completely true, but it reduces the number of conditionals(e.g., lex(…), \iter-start(…))
	else{
		return "%<counter> ";
	}
}

list[Arg] symbols2Args(list[Symbol] symbols, str lexicalName = "") =
	[ symbol2Arg(symbol, lexicalName = lexicalName) | symbol <- symbols];
	//return [arg | arg <- args, Arg::none()!:= arg];


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

//str symbol2Arg((Symbol)`label(<str name>,<Symbol s>)`){
//
//	return "";
//}

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