module kogi::Production2BinaryBlock

import Set;
import Type;
import List;
import String;
import ParseTree;
import util::Math;
import IO;
import kogi::Block;
import kogi::util::Util;
import kogi::symbol2Message::Symbol2Message;
import kogi::util::Util;

tuple [list[Block], set[Production]] production2BinaryBlock(set[Production] productions) {
    
    list[Block] blockList = [];

    //binaryOperation block variables
    lrel[str, str] binaryOptions = [];
    str binaryBlockName = "binaryOperation";
	str intType = "";
    str binName = "";
	
    //simple dropdown block variables
    list[str] dropdownCategories = [];
    lrel[str, str] dropdownOptions = [];
    str dropdownName = "simpleDropdown";

    for (P <- productions) {
        //get name of integer
        // println(P);
        //println(P.def);
        //println(P.symbols);
        
        if (P.symbols[0] == iter(\char-class([range(48,57)]))) { //corresponds to 0-9
            if (P.def is label) intType = P.def.symbol[0];
            else if (P.def is lex && isEmpty(intType)) intType = P.def.name;
        }

        //binary operation 
        if (size(P.symbols) == 5 && P.symbols[2] is lit && !(P.symbols[0] is lit) && !(P.symbols[4] is lit)) {
            
            if (P.symbols[0] is lex && isEmpty(intType)) intType = P.symbols[0][0];
            if (P.def is label && isEmpty(binName)) binName = P.def.symbol[0];
            literal = P.symbols[2][0];
            if (!lrelContains(binaryOptions, literal)) {
                
                // println("BINARY OP SYMBOLS:");
                // for (A <- P.symbols) println(A);

                if (P.def is label) binaryOptions += <literal, P.def[0]>;
                else binaryOptions += <literal, "tempName">;
                productions = productions - P;
            };
            
        };

        //simple dropdown block
        if (P.def is label && size(P.symbols) == 1 && P.symbols[0] is lit) {
            if (!listContains(dropdownCategories, P.def.symbol[0])) {
                dropdownCategories = dropdownCategories + P.def.symbol[0];      
            };
            dropdownOptions += <P.symbols[0][0],P.def.symbol[0]>;
            productions = productions - P; 
        };
    };

    if (size(binaryOptions) != 0) {
		//construct the arguments and the message
		operandLeft = arg("OpLeft", kogi::Block::\value(check = [intType]));
		operator = arg("Operator", dropdown(binaryOptions));
		operandRight = arg("OpRight", kogi::Block::\value(check = [intType]));
        
        list[Arg] args = [];
		args += operandLeft;
		args += operator;
		args += operandRight;
		Message msg = message("%1 %2 %3", args);
		
		//creation of the block
		Block binOpsBlock = block(setBlockName(binaryBlockName, binName), setBlockType(binName, binaryBlockName), [msg], colour = hsv(120));
		binOpsBlock.inputsInline = true;
        binOpsBlock.output = Ref::block(binName);
        blockList += binOpsBlock;
	} else println("No binary operation found");
    
    if (size(dropdownCategories) != 0) {
        //println(dropdownCategories);
        //println(dropdownOptions);
        
        for (cat <- dropdownCategories) {
            lrel[str, str] options = [];
            for (I <- dropdownOptions) {
                if (I[1] == cat) {
                    options += <I[0], randomString(10)>;
                }
            };

            //construct the arguments and the message
            item = arg("Item", dropdown(options));
            list[Arg] args = [];
            args += item;
            Message msg = message("%1", args);

            //creation of the block
            Block binOpsBlock = block(setBlockName(dropdownName, cat), setBlockType(cat, dropdownName), [msg], colour = hsv(120));
		    binOpsBlock.inputsInline = true;
            binOpsBlock.output = Ref::block(cat);
            blockList += binOpsBlock;

        }
    } else println("No simple dropdown block made");

    return <blockList, productions>;
}



