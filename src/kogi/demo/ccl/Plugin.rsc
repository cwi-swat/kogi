module kogi::demo::ccl::Plugin

import ParseTree;
import kogi::Compile;
import kogi::demo::ccl::Syntax;

import kogi::simplification::MergeLiterals;


/**
* Raw version
*/
void createBBE() {
  createBlocklyApp(#Resources, targetPath = |project://kogi-examples/src/kogi/ccl/v0|, blockly = "../../lib");
}

/**
* This version uses the simplification
*/
void createBBE2() {
  set[Production] prods = mergeLiterals(#Resources); 
  createBlocklyApp(prods, targetPath = |project://kogi-examples/src/kogi/ccl/v1|, blockly = "../../lib");
}