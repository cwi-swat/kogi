module kogi::symbol2Message::Symbol2Arg

import ParseTree;
import kogi::Block;
import kogi::util::Util;

Arg symbol2Arg(lit(str string), str labeledName = "", str lexicalName = "")
	= arg(labeledName, dummy());

Arg symbol2Arg(lex(str name), str labeledName = "lex", str lexicalName = "")
	= arg(labeledName, kogi::Block::\value(check = [name]));

Arg symbol2Arg(\sort(str name), str labeledName = "stmt", str lexicalName = "")
	= arg(name, statement(check = [name]));

Arg symbol2Arg(\iter(Symbol symbol), str labeledName = "", str lexicalName = "") 
	= symbol2Arg(symbol, lexicalName=lexicalName);

Arg symbol2Arg(\iter-star-seps(Symbol symbol, list[Symbol] separators), str labeledName = "stmt", str lexicalName = "") 
	= arg(labeledName, statement(check = (getSyntaxCheck(symbol) + "epsilon")));

Arg symbol2Arg(\iter-seps(Symbol symbol, list[Symbol] separators), str labeledName = "stmt", str lexicalName = "") 
	= arg(labeledName, statement(check = getSyntaxCheck(symbol)));

Arg symbol2Arg(\iter-star(\char-class([range(48,57)])), str labeledName = "", str lexicalName = "")
    = arg(lexicalName + "Name", number(0));

Arg symbol2Arg(\iter-star(Symbol symbol), str labeledName = "stmt", str lexicalName = "") 
	= symbol2Arg(symbol, labeledName = labeledName, lexicalName = lexicalName); //arg(labeledName, statement(check = symbol.name));}

Arg symbol2Arg(\opt(Symbol symbol), str labeledName = "stmt", str lexicalName = "") 
	= arg(labeledName, statement(check = (getSyntaxCheck(symbol) + "epsilon")));

Arg symbol2Arg(\label(str name, Symbol s), str labeledName = "", str lexicalName = "")
	= symbol2Arg(s, labeledName = name);

// CharRange = range(int begin, int end);
Arg symbol2Arg(\char-class(list[CharRange] ranges), str lexicalName = "") 
	= arg(lexicalName + "Name", input(lexicalName)); // TODO: This needs a name
	
Arg symbol2Arg(\conditional(Symbol symbol, set[Condition] conditions), str lexicalName = "") 
	= symbol2Arg(symbol, lexicalName = lexicalName);

Arg symbol2Arg(\empty(), str labeledName = "", str lexicalName = "") 
	= arg(labeledName, dummy());
//TODO: Not clear how to deal with this kind of symbol
Arg symbol2Arg(alt(set[Symbol] alternatives), str labeledName = "", str lexicalName = "") 
	= arg(labeledName, dummy());

//TODO:	
Arg symbol2Arg(\parameterized-sort(str name, list[Symbol] parameters), str labeledName = "", str lexicalName = "") 
	= arg(labeledName, dummy());	

//TODO
Arg symbol2Arg(\seq([
      conditional(\char-class([range(65,90)]),{\not-precede(\char-class([range(65,90)]))}),
      conditional(
        \iter-star(\char-class([
              range(48,57),
              range(65,90),
              range(95,95),
              range(97,122)
            ])),
        {\not-follow(\char-class([
                range(48,57),
                range(65,90),
                range(95,95),
                range(97,122)
              ]))})
    ]), str labeledName = "", str lexicalName = "")
    = arg(lexicalName + "Name", input(lexicalName));
    
//TODO:	
Arg symbol2Arg(\seq(list[Symbol] symbols), str labeledName = "", str lexicalName = "") 
	= arg(labeledName, dummy());	

default Arg symbol2Arg(Symbol s, str labeledName = "", str lexicalName = "") 
	= Arg::none();