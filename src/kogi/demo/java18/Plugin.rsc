module kogi::demo::java18::Plugin

import ParseTree;
import kogi::Compile;
import kogi::demo::java18::Syntax;

import kogi::simplification::Main;


/**
* Raw version
*/
void createBBE() {
  createBlocklyApp(#CompilationUnit, targetPath = |project://kogi/src/kogi/demo/case-studies/java18/v0|, blockly = "../../lib");
}

/**
* This version uses the simplification
*/
void createBBE2() {
  set[Production] prods = kogification(#CompilationUnit); 
  createBlocklyApp(prods, targetPath = |project://kogi/src/kogi/demo/ccl/v4|, blockly = "../../lib");
}
