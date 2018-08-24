module kogi::demo::Statemachine

extend lang::std::Layout;

start syntax Machine 
  = "machine" Id State*;

syntax State
  = "state" Id "{" Trans* "}";

syntax Trans = Id "to" Id;

lexical Id = [a-zA-Z]+;
