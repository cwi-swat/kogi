module kogi::demo::ccl::Plugin

import ParseTree;
import kogi::Compile;
import kogi::demo::ccl::Syntax;

import kogi::simplification::Main;


/**
* Raw version
*/
void createBBE() {
  createBlocklyApp(#Resources, targetPath = |project://kogi/src/kogi/demo/ccl/v0|, blockly = "../../lib");
}

/**
* This version uses the simplification
*/
void createBBE2() {
  set[Production] prods = kogification(#Resources); 
  createBlocklyApp(prods, targetPath = |project://kogi/src/kogi/demo/ccl/v1|, blockly = "../../lib");
}

