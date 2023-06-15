module kogi::demo::exp::Syntax

lexical IntegerLiteral = [0-9]+;

start syntax Exp
  = numbers: IntegerLiteral
  | bracket brackets: "(" Exp ")"
  > left IntegerLiteral "*" IntegerLiteral
    | left division: IntegerLiteral "/" IntegerLiteral
  > left subtraction: IntegerLiteral "-" IntegerLiteral
    | left addition: IntegerLiteral "+" IntegerLiteral
  ;
