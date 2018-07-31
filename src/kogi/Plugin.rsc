module kogi::Plugin

import util::IDE;
import ParseTree;
import kogi::Syntax;

public void main() { 
  registerLanguage("Kogi", "kogi", Tree(str src, loc l) {
    return parseKogi(src, l);
  });
}

start[Kogi] parseKogi(str input, loc src) {
   return parse(#start[Kogi], input, src);
}