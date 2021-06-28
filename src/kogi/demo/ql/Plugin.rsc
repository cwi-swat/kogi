module kogi::demo::ql::Plugin


import ParseTree;
import kogi::Compile;
import kogi::simplification::Main;
import kogi::demo::ql::Syntax2;
//import kogi::simplification::RemoveUnitProduction;


void createBBE() {
  createBlocklyApp(#Form, targetPath = |project://kogi/src/kogi/demo/ql/v0|, blockly = "../../lib");
}

void createSimplifiedBBE() {
  set[Production] prods = kogification(#Form); 
  createBlocklyApp(prods, targetPath = |project://kogi/src/kogi/demo/ql/v1|, blockly = "../../lib");
}
