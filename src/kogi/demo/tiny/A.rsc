module kogi::demo::tiny::A

extend lang::std::Layout;

import kogi::Compile;
import kogi::simplification::RemoveUnitProduction;

start syntax A
  = p1: "a"
  | p2: B b
  ;
  
syntax B
  = b: "b"
  ;