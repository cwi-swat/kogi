module kogi::Production2Block

import IO;
import List;
import Type;
import kogi::Grammar2Block;
//import kogi::Block;

/*
* This function takes the raw data and produces a Block. 
*/
Block createMainBlock(str name, Production production){
	println("Syze: <symbols2Message(production.symbols)>");
	return createBlock(name, "<name> %1", [("type":"input_value", "name":"NAME")], 10);
	
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

//Message symbols2Format(list[Symbol] symbols){
int symbols2Message(list[Symbol] symbols){
	symbolsToProcess = [ symbol |symbol <- symbols, layouts(_) !:= symbol];
	
	format = symbols2format(symbolsToProcess);
	 f = symbols2Args(symbolsToProcess);
	return size(symbolsToProcess);
}

int counter = 0;
str symbols2format(list[Symbol] symbols){
	result =  (""|it + formatz(symbol)| symbol <- symbols);
	counter = 0;
	return result;
}

str formatz(Symbol symbol){
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

//list[Arg]
void symbols2Args(list[Symbol] symbols){
	a =(""|it + symbol2Arg(symbol)|symbol<-symbols);
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

//str symbol2Arg((Symbol)`label(<str name>,<Symbol s>)`){
//
//	return "";
//}

//Arg
str symbol2Arg(Symbol symbol){
	if(lit(string) := symbol){
		//arg("", dummy());
		println("");
	}
	else if(lex(name) := symbol){
		//arg("<name>", \value(check="<name>"));
		println("");
	}
	else if(\iter-star-seps(symb, separators) := symbol){
		//arg();
		println("");
	}
	else if(\label(str name, Symbol s) := symbol){
		println("");
	}
	else{
		println("");
	}
	return "";
}