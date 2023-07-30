module kogi::GetLexicalRules

import Type;
import List;
import String;
import ParseTree;
import kogi::util::Util;

lrel[str, str] getLexicalRules(set[Production] productions) {
    lrel[str, str] rules = [];
    
    for (P <- productions) {

        if (size(P.symbols) == 1 && P.symbols[0] is label && P.symbols[0].symbol is lex) {
            rules += <P.def.symbol[0], P.symbols[0].symbol[0]>;
        }
    }

    return rules;
}

