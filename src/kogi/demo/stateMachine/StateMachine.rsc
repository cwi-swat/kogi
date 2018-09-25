module kogi::demo::stateMachine::StateMachine

extend lang::std::Layout;

start syntax Machine 
	= machine: "machine" Id id State* states;

syntax State
  	= state: "state" Id id "{" Trans* transitions "}";

syntax Trans 
	= transitions: "on" Id on "to" Id to;

lexical Id 
	= [a-zA-Z]+;
