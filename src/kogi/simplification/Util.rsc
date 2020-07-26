module kogi::simplification::Util

import ParseTree;

bool areEqual(\iter-star(Symbol s), Symbol def)
  = s == def ? true : false;
  
bool areEqual(\iter-seps(Symbol s, _), Symbol def)
  = s == def ? true : false;
  
bool areEqual(\iter-star-seps(Symbol s, _), Symbol def)
  = s == def ? true : false;
  
bool areEqual(\opt(Symbol s	), Symbol def)
  = s == def ? true : false;
  
bool areEqual(Symbol s, Symbol def)
  = s == def ? true : false;
  
bool isNonterminal(label(_, sort(_)))
  = true;
  
bool isNonterminal(sort(_))
  = true;
  
default bool isNonterminal(_)
  = false;  
  
bool isLexical(lex(_))
  = true;

bool isLexical(label(_, lex(_)))
  = true;
  
default bool isLexical(_)
  = false;  
  
bool includeProduction(sort(_))
  = true;

bool includeProduction(\start(_))
  = true;

bool includeProduction(lex("Comment"))
  = false;
  
bool includeProduction(lex("Whitespace"))
  = false;
  
bool includeProduction(lex("WhitespaceOrComment"))
  = false;      

bool includeProduction(lex(_))
  = true;  

default bool includeProduction(Symbol _)
  = false;
  
bool isLiteral(lit(_))
  = true;
  
bool isLiteral(label(_, lit(_)))
  = true;  
  
bool isLiteral(Symbol s)
  = false;  
