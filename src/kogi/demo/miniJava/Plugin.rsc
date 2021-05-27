module kogi::demo::miniJava::Plugin

import ParseTree;
import kogi::Compile;
import kogi::simplification::Main;
import kogi::demo::miniJava::Syntax;
//import kogi::simplification::RemoveUnitProduction;


void createBBE() {
  createBlocklyApp(#Program, targetPath = |project://kogi/src/kogi/demo/minijava/v0|, blockly = "../../lib");
}

void createSimplifiedBBE() {
  set[Production] prods = kogification(#Program); 
  createBlocklyApp(prods, targetPath = |project://kogi/src/kogi/demo/minijava/v1|, blockly = "../../lib");
}