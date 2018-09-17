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
	return size(symbolsToProcess);
}

str symbols2format(list[Symbol] symbols){
	counter = 1;
	(""|it + format(symbol, counter)| symbol <- symbols);
}

str format(Symbol symbol, int counter){
	if(lit(string) := symbol){
		return "<string> ";
	}
	//else if(lex(name) := symbol){ 
	// TODO: Not sure if this is completely true, but it reduces the number of conditionals(e.g., lex(…), \iter-start(…))
	else{
		counter += 1;
		return "%<counter-1>";
	}
}