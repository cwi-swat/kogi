module kogi::demo::exp::Syntax

lexical IntegerLiteral = [0-9]+;

start syntax Exp
  = IntegerLiteral
  | bracket "(" Exp ")"
  > left Exp "*" Exp
  > left Exp "+" Exp
  ;
