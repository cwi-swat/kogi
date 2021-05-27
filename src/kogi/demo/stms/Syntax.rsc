module kogi::demo::stms::Syntax


start syntax  Program
  = prog: If el;
  
syntax If
  = state: "if" Id id "{" Stmt* transitions "}";
  
syntax Stmt
  = tmp: "example"
  ;
  
lexical Id 
	= id: [a-zA-Z]+;