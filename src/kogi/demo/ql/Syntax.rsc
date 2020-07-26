module kogi::demo::ql::Syntax

extend lang::std::Layout;
extend lang::std::Id;

import kogi::demo::ql::Lexical;

start syntax Form
  = form: "form" Id name "{" Question* questions "}"
  ;

syntax Question
  = question: Label label Id name ":" QType tipe
  | computed: Label label Id name ":" QType tipe "=" Expr expr
  | ifThen: "if" "(" Expr cond ")" Question body () !>> "else"
  | ifThenElse: "if" "(" Expr cond ")" Question body "else" Question elseBody
  | @Foldable group: "{" Question* questions "}"
  ;

syntax Expr
  = var: Id name
  | integer: IntegerValue
  | string: StringValue
  | money: FloatValue
  | \true: "true"
  | \false: "false"
  | bracket "(" Expr ")"
  > not: "!" Expr
  > left (
      mul: Expr "*" Expr
    | div: Expr "/" Expr
  )
  > left (
      add: Expr "+" Expr
    | sub: Expr "-" Expr
  )
  > non-assoc (
      lt: Expr "\<" Expr
    | leq: Expr "\<=" Expr
    | gt: Expr "\>" Expr
    | geq: Expr "\>=" Expr
    | eq: Expr "==" Expr
    | neq: Expr "!=" Expr
  )
  > left and: Expr "&&" Expr
  > left or: Expr "||" Expr
  ;
  
keyword Keywords = "true" | "false" ;