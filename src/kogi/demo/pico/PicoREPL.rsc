module kogi::demo::pico::PicoREPL

import util::REPL;
import kogi::demo::pico::Eval;
import kogi::demo::pico::AST;

REPL myRepl() {
	// Blockly AST (XML)
	CommandResult myHandler(str line) {
	//Eval program using kogi
	rest = evalProgram(#Program, line);
	return commandResult("<rest>", messages = []);
	}
	
	Completion myCompletor(str prefix, int offset)
    =  <0, [ x | x <- env, startsWith(x, prefix) ]>; 
    
    return repl(myHandler, myCompletor);
}