module kogi::demo::pico::AST

data Id
	= id(str t);

data Natural
	= natural(int n);

data String
	= string(str val);
	
data Program
	= program (Declarations decls, list[Statement] body);
	
data Declarations
	= declarations(list[Declaration] decls);

data Declaration
	= decl(Id id, \Ttype tp);
	
data Ttype
	= natural()
	| string()
	;	 		 	

data Statement
	= asgStat(Id id, Expression val)
	| ifElseStat(Expression cond, list[Statement] thenPart, list[Statement] elsePart)
	| whileStat(Expression cond, list[Statement] body)
	;
	
data Expression
	= idp(Id id)
	| strCon(str t)
	| natcon(int n)
	| conc(Expression lhs, Expression rhs)
	| add(Expression lhs, Expression rhs)
	| sub(Expression lhs, Expression rhs)
	;