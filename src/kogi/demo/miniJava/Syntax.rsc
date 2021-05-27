module kogi::demo::miniJava::Syntax

extend lang::std::Layout;

lexical Integer = natural: [0-9]+;
//lexical Letter = [a-zA-Z];
lexical Identifier = id: [a-zA-Z]+;
//lexical ID = Letter IdChar* !>> [A-Za-z0-9_] ;
//lexical IdChar = (Letter | [0-9] | [_]);

//keyword Keywords = "String" | "System" | "boolean"
//				 | "class"
//                 | "else"
//                 | "extends"
//                 | "false"
//                 | "if"
//                 | "int"
//                 | "length"
//               | "main"
//               | "new"
//               | "out"
//               | "println"
//               | "public"
//               | "return"
//               | "static"
//               | "this"
//               | "true"
//               | "void";

syntax Expression
	= i: Integer inte
	| len: Expression ex "." "length"
	| t: "true" t
	| f: "false" f
	| i: Identifier i
	| this: "this" this
	| ne: "new" "int" "[" Expression a "]"
	| ne2: "new" Identifier b "(" ")"
	| bracket "(" Expression x ")"
	| a: Expression "[" Expression v "]" 
           | v: Expression a "." Identifier v "(" ExpressionList? opt ")"
	>  d: "!" Expression e
	> a: Expression e "*" Expression e
	> b: Expression e "+" Expression e
	       | c:Expression e "-" Expression e
	> e: Expression e "\<" Expression e
	> and: Expression e "&&" Expression e
	;
	
syntax ExpressionList
	=  e: Expression e ExpressionList*  bla
	;
	
syntax Statement 
	= s1: "{" Statement* body "}"
	| s2: "if" "(" Expression e ")" Statement s "else" Statement s
	| s3:"while" "(" Expression  e")" Statement s
	| s4:"System" "." "out" "." "println" "(" Expression e ")" ";"
	| s5: Identifier i "=" Expression e ";"
	| s6: Identifier i "[" Expression e "]" "=" Expression e ";"
	| s67: Expression ";"
	;
	
syntax FormalList = lst: Type t Identifier i ;

syntax Type = i: "int" "[" "]" | b: "boolean" | i2: "int" | id: Identifier i;

syntax MethodDecl = mtd: "public" Type Identifier "(" FormalList  v")" "{"
                       VarDecl* a Statement* s "return" Expression ";" 
                     "}";
syntax VarDecl = var: Type Identifier ";";

syntax ClassDecl = clsdcl: "class" Identifier "{"
                     VarDecl* dcls MethodDecl*  mtds
                    "}";
                    
syntax MainClass = main: "class" Identifier "{" 
                      "public" "static" "void" "main" "(" "String" "[" "]" Identifier ")" "{"
                         Statement
                      "}"
                    "}";
                  
start syntax Program = pro:  MainClass c ClassDecl* cls;