module kogi::demo::pico::Eval

import Prelude;
import kogi::Load;
import kogi::demo::pico::AST;


data PicoValue = natval(int n) | strval(str s) | errorval(loc l, str msg);

alias VENV = map[str, PicoValue];

// Evaluate Expressions.

PicoValue evalExp(exp:natCon(natural(int N)), VENV env) = natval(N);

PicoValue evalExp(exp:strCon(string(str S)), VENV env) = strval(S);

PicoValue evalExp(exp:idP(Id id, blockLocation = loc blockLoc), VENV env) =
	env[id.t]?  ? env[id.t] : errorval(exp@location, "Uninitialized variable <id.t>");

PicoValue evalExp(exp:add(Expression E1, Expression E2), VENV env) =
   (natval(n1) := evalExp(E1, env) && 
    natval(n2) := evalExp(E2, env)) ? natval(n1 + n2)
                                    : errorval(exp@location, "+ requires natural arguments");
  
PicoValue evalExp(exp:sub(Expression E1, Expression E2), VENV env) = 
   (natval(n1) := evalExp(E1, env) && 
    natval(n2) := evalExp(E2, env)) ? natval(n1 - n2)
                                    : errorval(exp@location, "- requires natural arguments");
                                                                     
PicoValue evalExp(exp:conc(Expression E1, Expression E2), VENV env) = 
   (strval(s1) := evalExp(E1, env) && 
    strval(s2) := evalExp(E2, env)) ? strval(s1 + s2)
                                    : errorval(exp@location, "|| requires string arguments");

// Evaluate a statement

VENV evalStat(stat:asgStat(Id id, Expression Exp), VENV env) {
  env[id.t] = evalExp(Exp, env);
  return env;
}
	
VENV evalStat(stat:ifElseStat(Expression Exp, 
                              list[Statement] Stats1,
                              list[Statement] Stats2),
              VENV env) =
  evalStats(evalExp(Exp, env) != natval(0) ? Stats1 : Stats2, env);

VENV evalStat(stat:whileStat(Expression Exp, list[Statement] Stats1), VENV env) {
    while (evalExp(Exp, env) != natval(0)) {
       env = evalStats(Stats1, env);
    }
    return env;
}

// Evaluate a list of statements
VENV evalStats(list[Statement] Stats1, VENV env) {
  for (S <- Stats1) {
      env = evalStat(S, env);
  }
  return env;
}
  
// Eval declarations

VENV evalDecls(list[Declaration] Decls) 
	= ( id.t : getType(tp) | decl(Id id, Ttype tp) <- Decls);

PicoValue getType(Ttype \type)
	= (	kogi::demo::pico::AST::natural(blockLocation = loc blockLoc) := \type || 
		kogi::demo::pico::AST::natural() := \type ) ? natval(0) : strval("");

// Evaluate a Pico program
public VENV evalProgram(Program P) {
  if (program(declarations(list[Declaration] Decls), list[Statement] Series) := P) {
     VENV env = evalDecls(Decls);
     return evalStats(Series, env);
  } 
  else
    throw "Cannot happen";
}

public VENV evalProgram(type[&T<:node] grammar, loc input) = evalProgram(loadXML(grammar, input));

public VENV evalProgram(type[&T<:node] grammar, str input) = evalProgram(loadXML(grammar, input));
