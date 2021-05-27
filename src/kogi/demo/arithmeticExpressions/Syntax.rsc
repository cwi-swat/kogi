module kogi::demo::arithmeticExpressions::Syntax

extend lang::std::Id;
extend lang::std::Layout;


start syntax Exp
  = left simple: Exp lhs Op op Exp rhs
  | bracket "(" Exp e ")"
  | left negative: "-" Exp e
  | id: Id id
  ;
  
syntax Op
  = times: "*"
  > add: "+"
  | sub: "-"
  | div: "/"
  ;