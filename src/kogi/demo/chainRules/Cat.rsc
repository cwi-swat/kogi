module kogi::demo::chainRules::Cat


extend lang::std::Layout;

import kogi::Compile;
import kogi::optimizations::RemoveUnitProduction;

start syntax NP
  = d: D d N n
  | n: NP np PP pp
  ;
  
syntax PP
  = p: P p NP n
  ;
  
syntax	 D
  = the: "the"
  ;
  
syntax N
  = cat: "cat"
  | hat: "hat"
  ;
  
syntax P
  = i: "in"
  ;
  
void createBlockGUI() {
  createBlocklyApp(simplifyGrammar(#NP), targetPath = |project://kogi/src/kogi/cat/withoutUnits|);
}