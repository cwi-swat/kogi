module kogi::demo::javascript::Plugin

import ParseTree;
import kogi::Compile;
import kogi::demo::javascript::Syntax;

import kogi::simplification::Main;


/**
* Raw version
*/
void createBBE() {
  createBlocklyApp(#Source, targetPath = |project://kogi/src/kogi/demo/javascript/v0|, blockly = "../../lib");
}

/**
* This version uses the simplification
*/
void createBBE2() {
  set[Production] prods = kogification(#Source); 
  createBlocklyApp(prods, targetPath = |project://kogi/src/kogi/demo/javascript/v4|, blockly = "../../lib");
}

