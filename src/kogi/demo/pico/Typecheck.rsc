module kogi::demo::pico::Typecheck

import Prelude;
import kogi::Load;
import kogi::demo::pico::AST;

alias TENV = tuple[ map[Id, Ttype] symbols, list[tuple[loc l, str msg]] errors]; // <1>

//TENV addError(TENV env, loc l, str msg) = env[errors = env.errors + <l, msg>]; // <2>
TENV addError(TENV env, str msg) = env[errors = env.errors + <|tmp:///|, msg>]; // <2>

str required(Ttype t, str got) = "Required <getName(t)>, got <got>"; // <3>
str required(Ttype t1, Ttype t2) = required(t1, getName(t2));

// compile Expressions.

TENV checkExp(exp:natCon(natural(int N)), Ttype req, TENV env) = // <4>
	req == natural() ? env : addError(env, required(req, "natural"));
  //req == natural() ? env : addError(env, exp@location, required(req, "natural"));

TENV checkExp(exp:strCon(string(str S)), Ttype req, TENV env) =
	req == string() ? env : addError(env, required(req, "string"));

TENV checkExp(exp:idp(Id Id), Ttype req, TENV env) { // <5>
  if (!env.symbols[Id]?)
     return addError(env, "Undeclared variable <Id>");
  tpid = env.symbols[Id];
  return req == tpid ? env : addError(env, required(req, tpid));
}

TENV checkExp(exp:add(Expression E1, Expression E2), Ttype req, TENV env) = // <6>
  req == natural() ? checkExp(E1, natural(), checkExp(E2, natural(), env))
                   : addError(env, required(req, "natural"));
  
TENV checkExp(exp:sub(Expression E1, Expression E2), Ttype req, TENV env) = // <7>
  req == natural() ? checkExp(E1, natural(), checkExp(E2, natural(), env))
                   : addError(env, required(req, "natural"));

TENV checkExp(exp:conc(Expression E1, Expression E2), Ttype req, TENV env) = // <8>  
  req == string() ? checkExp(E1, string(), checkExp(E2, string(), env))
                   : addError(env, required(req, "string"));

// check a statement

TENV checkStat(stat:asgStat(Id Id, Expression Exp), TENV env) { // <9>
  if (!env.symbols[Id]?)
     return addError(env, "Undeclared variable <Id>");
  tpid = env.symbols[Id];
  return checkExp(Exp, tpid, env);
}
	
TENV checkStat(stat:ifElseStat(Expression Exp, // <10>
                              list[Statement] Stats1,
                              list[Statement] Stats2),
               TENV env){
    env0 = checkExp(Exp, natural(), env);
    env1 = checkStats(Stats1, env0);
    env2 = checkStats(Stats2, env1);
    return env2;
}

TENV checkStat(stat:whileStat(Expression Exp, list[Statement] Stats1), TENV env) {
    env0 = checkExp(Exp, natural(), env);
    env1 = checkStats(Stats1, env0);
    return env1;
}

// check a list of statements
TENV checkStats(list[Statement] Stats1, TENV env) { // <11>
  for (S <- Stats1) {
      env = checkStat(S, env);
  }
  return env;
}
  
// check declarations

TENV checkDecls(list[Declaration] Decls)
	= <( Id : tp  | decl(Id Id, Ttype tp) <- Decls), []>;    

// check a Pico program

public TENV checkProgram(Program P) {
	if (program(declarations(list[Declaration] Decls), list[Statement] Series) := P) {
		TENV env = checkDecls(Decls);
		return checkStats(Series, env);
	} 
	else
    	throw "Cannot happen";
}

public list[tuple[loc l, str msg]] checkProgram(loc input) = checkProgram(loadXML(input)).errors;