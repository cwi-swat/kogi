module kogi::demo::chainRules::Example

extend lang::std::Layout;

import ParseTree;
import kogi::Compile;
import kogi::optimizations::RemoveUnitProduction;




start syntax S
  = s: X x Y y
  ;
  
syntax X 
  = a: "a";
  
syntax Y 
  = z: Z z
  | b: "b";
  
syntax Z 
  = m: M m;
  
syntax M 
  = n: N n;
  
syntax N 
  = a: "a";


void createBlockGUI(type[&T <: Tree] grammar) {
  createBlocklyApp(removeUnitProductions(grammar), targetPath = |project://kogi/src/kogi/demo/withoutUnits|);
}

void createBlockGUI() {
  createBlocklyApp(removeUnitProductions(#S), targetPath = |project://kogi/src/kogi/Example/withoutChains|);
}

void createBlockGUIWithChainRules() {
  createBlocklyApp(#S, targetPath = |project://kogi/src/kogi/Example/withChains|);
}