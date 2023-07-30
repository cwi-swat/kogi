module kogi::symbol2Message::Symbol2Arg

import ParseTree;
import String;
import IO;
import kogi::Block;
import kogi::util::Util;

Arg symbol2Arg(lit(str string), bool mult, lrel[str, str] lexRules, str labeledName = "", str lexicalName = "")
	= arg(labeledName, dummy());

Arg symbol2Arg(lex("Id"), bool mult, lrel[str, str] lexRules, str labeledName = "lex", str lexicalName = "")
	= arg(labeledName, input(lexicalName));

// FIX: src and sizes ... 
Arg symbol2Arg(lex("ImageValue"), bool mult, lrel[str, str] lexRules, str labeledName = "lex", str lexicalName = "")
	= arg(labeledName, image("https://maveme.s3.amazonaws.com/Kogi/static/sine.svg", 50, 30));
	
Arg symbol2Arg(lex("IntegerValue"), bool mult, lrel[str, str] lexRules, str labeledName = "lex", str lexicalName = "")
	= arg(labeledName, number(0));

Arg symbol2Arg(lex("FloatValue"), bool mult, lrel[str, str] lexRules, str labeledName = "lex", str lexicalName = "")
	= arg(labeledName, number(0, range = Range::range(-1, 100000, .01)));
	
Arg symbol2Arg(lex("BooleanValue"), bool mult, lrel[str, str] lexRules, str labeledName = "lex", str lexicalName = "")
	= arg(labeledName, checkbox());

Arg symbol2Arg(lex("AngleValue"), bool mult, lrel[str, str] lexRules, str labeledName = "lex", str lexicalName = "")
	= arg(labeledName, angle(90));

Arg symbol2Arg(lex(str name), bool mult, lrel[str, str] lexRules, str labeledName = "lex", str lexicalName = "")
	{ 
    list[str] final = checkLexical(lexRules, name);
    return arg(labeledName + "/" + randomString(10) , kogi::Block::\value(check = [name]));
  } //needed unique argument names for identifier shadow blocks

Arg symbol2Arg(\sort(str name), true, lrel[str, str] lexRules, str labeledName = "stmt", str lexicalName = "")
	{
    list[str] final = checkLexical(lexRules, name);
    return arg(name, statement(check = [name]));
  }

Arg symbol2Arg(\sort(str name), false, lrel[str, str] lexRules, str labeledName = "stmt", str lexicalName = "")
	{
    list[str] final = checkLexical(lexRules, name);
    return arg(name, kogi::Block::\value(check = final));
  }

Arg symbol2Arg(\iter(Symbol symbol), bool mult, lrel[str, str] lexRules, str labeledName = "", str lexicalName = "") 
	= symbol2Arg(symbol, mult, lexRules, lexicalName=lexicalName);

Arg symbol2Arg(\iter-star-seps(Symbol symbol, list[Symbol] separators), bool mult, lrel[str, str] lexRules, str labeledName = "stmt", str lexicalName = "") 
	{ return arg(labeledName, statement(check = (getSyntaxCheck(symbol) + "epsilon")));}

Arg symbol2Arg(\iter-seps(Symbol symbol, list[Symbol] separators), bool mult, lrel[str, str] lexRules, str labeledName = "stmt", str lexicalName = "") 
	{ return arg(labeledName, statement(check = getSyntaxCheck(symbol)));}

Arg symbol2Arg(\iter-star(\char-class([range(48,57)])), bool mult, lrel[str, str] lexRules, str labeledName = "", str lexicalName = "")
    = arg(lexicalName + "Name", number(0));

Arg symbol2Arg(\iter-star(Symbol symbol), bool mult, lrel[str, str] lexRules, str labeledName = "stmt", str lexicalName = "") 
	= symbol2Arg(symbol, mult, lexRules, labeledName = labeledName, lexicalName = lexicalName); //arg(labeledName, statement(check = symbol.name));}

Arg symbol2Arg(\opt(Symbol symbol), bool mult, lrel[str, str] lexRules, str labeledName = "stmt", str lexicalName = "") 
	{ return arg(labeledName, statement(check = (getSyntaxCheck(symbol) + "epsilon")));}

Arg symbol2Arg(\label(str name, Symbol s), bool mult, lrel[str, str] lexRules, str labeledName = "", str lexicalName = "")
	= symbol2Arg(s, mult, lexRules, labeledName = name);

Arg symbol2Arg(\char-class([range(48,57)]), bool mult, lrel[str, str] lexRules, str lexicalName = "") 
	= arg(lexicalName + "Name", number(0)); //TODO add more info 

// CharRange = range(int begin, int end);
Arg symbol2Arg(\char-class(list[CharRange] ranges), bool mult, lrel[str, str] lexRules, str lexicalName = "") 
	= arg(lexicalName + "Name", input("")); // TODO: This needs a name
	
Arg symbol2Arg(\conditional(Symbol symbol, set[Condition] conditions), bool mult, lrel[str, str] lexRules, str lexicalName = "") 
	= symbol2Arg(symbol, mult, lexRules, lexicalName = lexicalName);

Arg symbol2Arg(\empty(), bool mult, lrel[str, str] lexRules, str labeledName = "", str lexicalName = "") 
	= arg(labeledName, dummy());
//TODO: Not clear how to deal with this kind of symbol
Arg symbol2Arg(alt(set[Symbol] alternatives), bool mult, lrel[str, str] lexRules, str labeledName = "", str lexicalName = "") 
	= arg(labeledName, dummy());

//TODO:	
Arg symbol2Arg(\parameterized-sort(str name, list[Symbol] parameters), bool mult, lrel[str, str] lexRules, str labeledName = "", str lexicalName = "") 
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
    ]), bool mult, lrel[str, str] lexRules, str labeledName = "", str lexicalName = "")
    = arg(lexicalName + "Name", input(lexicalName));
    
//TODO:	
Arg symbol2Arg(\seq(list[Symbol] symbols), bool mult, lrel[str, str] lexRules, str labeledName = "", str lexicalName = "") 
	= arg(labeledName, dummy());	

default Arg symbol2Arg(Symbol s, bool mult, lrel[str, str] lexRules, str labeledName = "", str lexicalName = "") 
	= Arg::none();

Arg symbol2Arg("ImageValue")
  = arg("IntegerValue", image("https://maveme.s3.amazonaws.com/Kogi/static/sine.svg", 50, 30));

Arg symbol2Arg("Id")
  = arg("Id", input("variable"));	
	
Arg symbol2Arg("IntegerValue")
  = arg("IntegerValue", number(0));
  
Arg symbol2Arg("FloatValue")
  = arg("FloatValue", number(0, range = Range::range(-1, 100000, .01)));
  
Arg symbol2Arg("BooleanValue")
  = arg("StringValue", checkbox());
  
Arg symbol2Arg("AngleValue")
  = arg("AngleValue", angle(90));
  
default Arg symbol2Arg(str _)
  = arg("NN", input("string"));