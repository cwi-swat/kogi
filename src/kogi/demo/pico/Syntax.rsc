module kogi::demo::pico::Syntax

import Prelude;

lexical Id  = id: [a-zA-Z]+;
lexical Natural = natural: [0-9]+ ;
lexical String = string: "\"" ![\"]*  "\"";

layout Layout = WhitespaceAndComment* !>> [\ \t\n\r%];

lexical WhitespaceAndComment 
   = [\ \t\n\r]
   | @category="Comment" ws2: "%" ![%]+ "%"
   | @category="Comment" ws3: "%%" ![\n]* $
   ;

start syntax Program 
   = program: "begin" Declarations decls {Statement  ";"}* body "end" ;

syntax Declarations 
   = declarations: "declare" {Declaration ","}* decls ";" ;  
 
syntax Declaration = decl: Id id ":" Ttype tp;

syntax Ttype 
   = natural:"natural" 
   | string :"string" 
   ;

syntax Statement 
   = asgStat: Id var ":="  Expression val 
   | ifElseStat: "if" Expression cond "then" {Statement ";"}*  thenPart "else" {Statement ";"}* elsePart "fi"
   | whileStat: "while" Expression cond "do" {Statement ";"}* body "od"
  ;  
     
syntax Expression 
   = idP: Id name
   | strCon: String string
   | natCon: Natural natcon
   | bracket "(" Expression e ")"
   > left conc: Expression lhs "||" Expression rhs
   > left ( add: Expression lhs "+" Expression rhs
          | sub: Expression lhs "-" Expression rhs
          )
  ;