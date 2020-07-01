module kogi::demo::chainRules::Example2


extend lang::std::Layout;

import ParseTree;
import kogi::Compile;
import kogi::optimizations::RemoveUnitProduction;

start syntax S
  = as: A a S s
  | a: A a
  ;
  
syntax A
  = a: "a" A a
  | b: "b" B b
  | c: C c
  ;
  
syntax B
  = b1: "b" B b
  | b2: "b"
  ;
  
syntax C
  = c: "c" C c
  | b: B b
  ;
  
void createBlockGUI(type[&T <: Tree] grammar) {
  createBlocklyApp(simplifyGrammar(grammar), targetPath = |project://kogi/src/kogi/demo2/withoutUnits|);
}

void createBlockGUI() {
  createBlocklyApp(simplifyGrammar(#S), targetPath = |project://kogi/src/kogi/Example2/withoutChains|);
}

void createBlockGUIWithChainRules() {
  createBlocklyApp(#S, targetPath = |project://kogi/src/kogi/Example2/withChains|);
}