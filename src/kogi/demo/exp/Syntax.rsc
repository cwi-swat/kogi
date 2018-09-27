module kogi::demo::exp::Syntax

lexical IntegerLiteral = [0-9]+;

start syntax Exp
  = numbers: IntegerLiteral
  | bracket brackets: "(" Exp ")"
  > left multiplication: Exp "*" Exp
  > left addition: Exp "+" Exp
  ;
