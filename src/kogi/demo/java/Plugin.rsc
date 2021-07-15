module kogi::demo::java::Plugin


import ParseTree;
import kogi::Compile;
import kogi::simplification::Main;
import kogi::demo::java::Syntax;
//import kogi::simplification::RemoveUnitProduction;


void createBBE() {
  createBlocklyApp(#CompilationUnit, targetPath = |project://kogi/src/kogi/demo/ql/v0|, blockly = "../../lib");
}

void createSimplifiedBBE() {
  set[Production] prods = kogification(#Form); 
  createBlocklyApp(prods, targetPath = |project://kogi/src/kogi/demo/ql/v1|, blockly = "../../lib");
}
