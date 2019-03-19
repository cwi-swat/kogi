module kogi::demo::pico::AST

data Id(loc blockLocation = |tmp:///|)
	= id(str t);

data Natural(loc blockLocation = |tmp:///|)
	= natural(int n);

data String(loc blockLocation = |tmp:///|)
	= string(str val);
	
data Program(loc blockLocation = |tmp:///|)
	= program (Declarations decls, list[Statement] body);
	
data Declarations(loc blockLocation = |tmp:///|)
	= declarations(list[Declaration] decls);

data Declaration(loc blockLocation = |tmp:///|)
	= decl(Id id, \Ttype tp);
	
data Ttype(loc blockLocation = |tmp:///|)
	= natural()
	| string()
	;	 		 	

data Statement(loc blockLocation = |tmp:///|)
	= asgStat(Id id, Expression val)
	| ifElseStat(Expression cond, list[Statement] thenPart, list[Statement] elsePart)
	| whileStat(Expression cond, list[Statement] body)
	;
	
data Expression(loc blockLocation = |tmp:///|)
	= idP(Id id)
	| strCon(String t)
	| natCon(Natural n)
	| conc(Expression lhs, Expression rhs)
	| add(Expression lhs, Expression rhs)
	| sub(Expression lhs, Expression rhs)
	;
	
anno loc Expression@location;
anno loc Program@location;
anno loc Ttype@location;
anno loc Statement@location;
anno loc Declaration@location;