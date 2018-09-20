module kogi::demo::stateMachine::StateMachine

extend lang::std::Layout;

start syntax Machine 
  = "machine" Id id State* states;

syntax State
  = "state" Id id "{" Trans* transitions "}";

syntax Trans = "on" Id on "to" Id to;

lexical Id = [a-zA-Z]+;
