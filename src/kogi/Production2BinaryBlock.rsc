module kogi::Production2BinaryBlock

import Type;
import List;
import String;
import ParseTree;
import util::Math;
import IO;
import kogi::Block;
import kogi::util::Util;
import kogi::symbol2Message::Symbol2Message;

tuple[Block, lrel[str,str]] production2BinaryBlock(set[Production] productions) {
    lrel[str, str] options = [];
    str labelName = "binaryOperation";
	str intType = "";
    str name = "";
	list[Arg] args = [];

    for (P <- productions) {
        //get name of integer 
        if (P.symbols[0] == iter(\char-class([range(48,57)]))) { //corresponds to 0-9
            if (P.def is label) intType = P.def.symbol[0];
            else if (P.def is lex && isEmpty(intType)) intType = P.def.name;
        }
     
        if (size(P.symbols) == 5 && P.symbols[2] is lit && !(P.symbols[0] is lit) && !(P.symbols[4] is lit)) {
            if (P.symbols[0] is lex && isEmpty(intType)) intType = P.symbols[0][0];
            if (P.def is label && isEmpty(name)) name = P.def.symbol[0];
            literal = P.symbols[2][0];
            if (!listContains(options, literal)) {
                if (P.def is label) options += <literal, P.def[0]>;
                else options += <literal, "tempName">;
            };
        };
    };

    if (size(options) != 0) {
		//construct the arguments and the message
		operandLeft = arg("OpLeft", kogi::Block::\value(check = [intType]));
		operator = arg("Operator", dropdown(options));
		operandRight = arg("OpRight", kogi::Block::\value(check = [intType]));
		args += operandLeft;
		args += operator;
		args += operandRight;
		Message msg = message("%1 %2 %3", args);
		
		//creation of the block
		Block binOpsBlock = block(setBlockName(labelName, name), setBlockType(name, labelName), [msg], colour = hsv(120));
		binOpsBlock.inputsInline = true;
        binOpsBlock.output = Ref::block(name);
        T = <binOpsBlock, options>;
		return T;
	} else {
        println("No binary operation found");
        T = <Block::none(), options>;
        return T;
    }
}



