module kogi::Plugin

import util::IDE;
import ParseTree;
import kogi::Syntax;


import kogi::Compile;
import kogi::simplification::RemoveUnitProduction;

public void main() { 
  registerLanguage("Kogi", "kogi", Tree(str src, loc l) {
    return parseKogi(src, l);
  });
}

start[Kogi] parseKogi(str input, loc src) {
   return parse(#start[Kogi], input, src);
}


void kogify(type[&T <: Tree] grammar, str folderName) {
  createBlocklyApp(simplifyGrammar(grammar), targetPath = |project://kogi/src/kogi/demo/<folderName>|);
}

void kogify2(type[&T <: Tree] grammar, str folderName) {
  createBlocklyApp(grammar, targetPath = |project://kogi/src/kogi/demo/<folderName>-std|);
}