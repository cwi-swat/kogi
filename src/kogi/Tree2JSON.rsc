module kogi::Tree2JSON

import IO;
import List;
import Node;
import ParseTree;
import String;
import ValueIO;
import lang::json::IO;
import vis::Text;

import kogi::Block;

data BlockInput = blockInput(str name, str \type, bool isStar, int pos) | none();
data BlockField = blockField(str name, str \type, int pos, str text)
                | blockField(str name, str \type, int pos, num \value, Range range = none())
                //| blockField(str name, str \type, int pos, str src, int width, int height, str alt = "\"\"")
                ;

list[Block] tempBlockList = readTextValueFile(#list[Block], |project://kogi/src/kogi/demo/testSonification/blocks.txt|);
Tree tempTree = readTextValueFile(#Tree, |project://kogi/src/kogi/demo/testSonification/parseTree.txt|);

// str getFieldValue(list[Tree] t, str fieldName) {
//     return "";
// }

node getBlocks(Tree t, list[Block] blocks, str alternativeType = "") {
    node returnBlock = "returnBlock"();

    switch(t) {
        case appl(prod(label(str blockName, sort(str blockType)), list[Symbol] inputSymbols, _), list[Tree] elements) : {
            if (alternativeType != "") {
                blockType = alternativeType;
            }
            list[Block] refBlockList = [x | x <- blocks, x.\type == blockType + "/" + blockName];
            println("getBlocks call for <blockType>/<blockName>");

            // If an non-terminal consists of only an immediate redirection to another grammar rule, 
            // it'll be simplified and won't exist in the blocks structure.
            // So we need to find the block that carries the non-temrinal's type, but actually is another rule.
            if (size(inputSymbols) == 1 && label(_,_) := inputSymbols[0]) {
                println("Block <blockType>/<blockName> doesn\'t/shouldn\'t exist");
                return getBlocks(elements[0], blocks, alternativeType = blockType);
            }

            Block refBlock = refBlockList[0];
            list[BlockInput] refBlockInputs = getBlockInputs(refBlock);
            list[BlockField] refBlockFields = getBlockFields(refBlock);
            node returnBlockInputs = "inputs"();
            node returnBlockFields = "fields"();
            node returnBlockNext = "next"();
            map[str \type, int counter] typeMap = ();
            map[str \type, int counter] fieldTypeMap = ();
            rel[str name, str \type, int pos] validFields = {};

            for (inputSymbol <- inputSymbols) {
                switch (inputSymbol) {
                    case label(str inputName, lex(str inputType)): {
                        println("Checking inputsymbols for <blockType>/<blockName>");
                        for (refBlockField <- refBlockFields) {
                            if (refBlockField.name == inputName) {
                                println("Field symbol found, with name <inputName>");
                                int typeCounter = 0;

                                for (validField <- validFields) {
                                    if (inputType == validField.\type) {
                                        typeCounter += 1;
                                    }
                                }

                                println("Input type of <inputName> is <inputType>");

                                validFields = validFields + {<inputName, inputType, typeCounter>};
                            }
                        }
                    }
                }
            }

            for (element <- elements) {
                switch(element) {
                    case appl(prod(label(str inputBlockName, sort(str inputBlockType)), _, _), _) : {
                        if (typeMap[inputBlockType]?) {
                            println("inputBlockType \"<inputBlockType>\" already there!");
                            typeMap[inputBlockType] += 1;
                        } else {
                            println("New inputBlockType \"<inputBlockType>\"");
                            typeMap = typeMap + (inputBlockType: 0);
                        }

                        str inputName = "";

                        for (refBlockInput <- refBlockInputs) {
                            if (refBlockInput.\type == inputBlockType && refBlockInput.pos == typeMap[inputBlockType]) {
                                inputName = refBlockInput.name;
                                break;
                            }
                        }

                        returnBlockInputs = setKeywordParameters(returnBlockInputs, getKeywordParameters(returnBlockInputs) + (inputName: "inputName"(block = getBlocks(element, blocks))));
                        println("returnBlockInputs: <returnBlockInputs>");
                    }

                    case appl(regular(\iter-star-seps(sort(str inputBlockType),_)), list[Tree] inputElements) : {
                        if (typeMap[inputBlockType]?) {
                            println("inputBlockType \"<inputBlockType>\" already there!");
                            typeMap[inputBlockType] += 1;
                        } else {
                            println("New inputBlockType \"<inputBlockType>\"");
                            typeMap = typeMap + (inputBlockType: 0);
                        }

                        str inputName = "";
                            
                        for (refBlockInput <- refBlockInputs) {
                            if (refBlockInput.\type == inputBlockType && refBlockInput.pos == typeMap[inputBlockType]) {
                                inputName = refBlockInput.name;
                                break;
                            }
                        }

                        list[node] inputBlocks = [];
                        int inputBlockCounter = 0;

                        for (inputElement <- inputElements) {
                            node inputBlock = getBlocks(inputElement, blocks);

                            if (inputBlock != "returnBlock"()) {
                                inputBlocks = inputBlock + inputBlocks;
                            }
                        }

                        while (inputBlocks[inputBlockCounter + 1 ..] != []) {
                            inputBlocks[inputBlockCounter + 1] = setKeywordParameters(inputBlocks[inputBlockCounter + 1], getKeywordParameters(inputBlocks[inputBlockCounter + 1]) + ("next": "next"(block = inputBlocks[inputBlockCounter])));
                            inputBlockCounter += 1;
                        }

                        if (inputBlocks[0]?) {
                            returnBlockInputs = setKeywordParameters(returnBlockInputs, getKeywordParameters(returnBlockInputs) + (inputName: "inputName"(block = inputBlocks[-1])));
                        }
                        
                        println("returnBlockInputs: <returnBlockInputs>");
                    }

                    case appl(prod(label(_, lex(str fieldType)), _, _), [appl(_, list[Tree] characters)]) : {
                        bool isValidField = false;

                        println("Lex sort found, of type <fieldType>");

                        for (validField <- validFields) {
                            if (validField.\type == fieldType) {
                                isValidField = true;
                                break;
                            }
                        }

                        if (isValidField) {
                            println("Lex field of type <fieldType> is valid! :D");
                            if (fieldTypeMap[fieldType]?) {
                                fieldTypeMap[fieldType] += 1;
                            } else {
                                fieldTypeMap = fieldTypeMap + (fieldType: 0);
                            }

                            str fieldName = "";

                            for (validField <- validFields) {
                                if (validField.\type == fieldType && validField.pos == fieldTypeMap[fieldType]) {
                                    fieldName = validField.name;
                                    break;
                                }
                            }

                            println("fieldName for block <blockType>/<blockName>: <fieldName>");

                            str fieldValue = "";

                            top-down visit(characters) {
                                case char(int i): fieldValue = fieldValue + stringChar(i);
                            }

                            println("fieldValue for block <blockType>/<blockName>: <fieldValue>");

                            returnBlockFields = setKeywordParameters(returnBlockFields, getKeywordParameters(returnBlockFields) + (fieldName: fieldValue));
                            println("returnBlockFields: <returnBlockFields>");
                        } else {
                            println("Lex field of type <fieldType> is invalid! :x");
                        }
                    }

                    case appl(prod(lex(str fieldType), _, _), list[Tree] characters) : {
                        bool isValidField = false;

                        println("Lex sort found, of type <fieldType>");

                        for (validField <- validFields) {
                            if (validField.\type == fieldType) {
                                isValidField = true;
                                break;
                            }
                        }

                        if (isValidField) {
                            println("Lex field of type <fieldType> is valid! :D");
                            if (fieldTypeMap[fieldType]?) {
                                fieldTypeMap[fieldType] += 1;
                            } else {
                                fieldTypeMap = fieldTypeMap + (fieldType: 0);
                            }

                            str fieldName = "";

                            for (validField <- validFields) {
                                if (validField.\type == fieldType && validField.pos == fieldTypeMap[fieldType]) {
                                    fieldName = validField.name;
                                    break;
                                }
                            }

                            println("fieldName for block <blockType>/<blockName>: <fieldName>");

                            str fieldValue = "";

                            top-down visit(characters) {
                                case char(int i): fieldValue = fieldValue + stringChar(i);
                            }

                            println("fieldValue for block <blockType>/<blockName>: <fieldValue>");

                            returnBlockFields = setKeywordParameters(returnBlockFields, getKeywordParameters(returnBlockFields) + (fieldName: fieldValue));
                            println("returnBlockFields: <returnBlockFields>");
                        } else {
                            println("Lex field of type <fieldType> is invalid! :x");
                        }
                    }
                }
            }

            println("refBlockInputs for block <blockType>/<blockName>: <refBlockInputs>");
            println("refBlockFields for block <blockType>/<blockName>: <refBlockFields>");
            returnBlock = "returnBlock"(\type = blockType + "/" + blockName, fields = returnBlockFields, inputs = returnBlockInputs);
            //if (returnBlockInputs != "inputs"()) returnBlock = setKeywordParameters(returnBlock, getKeywordParameters(returnBlock) + ("inputs": returnBlockInputs));
            //if (returnBlockNext != "next"()) returnBlock = setKeywordParameters(returnBlock, getKeywordParameters(returnBlock) + ("next": returnBlockNext));
            //if (returnBlockFields != "fields"()) returnBlock = setKeywordParameters(returnBlock, getKeywordParameters(returnBlock) + ("fields": returnBlockFields));
        }
    }
    println("Return value:");
    println(returnBlock);
    return returnBlock;
}

list[BlockField] getBlockFields(Block refBlock) {
    list[BlockField] refBlockFields = [];

    if(!isEmpty(refBlock.messages)) {
        for (message <- refBlock.messages) {
            if (!isEmpty(message.args)) {
                for (arg <- message.args) {
                    switch(arg.\type) {
                        case input(str inputText): {
                            int typeCounter = 0;
                            println("Field of type input with name <arg.name> and value \"<inputText>\"");

                            for (refBlockField <- refBlockFields) {
                                if(refBlockField.\type == "input") {
                                    typeCounter += 1;
                                }
                            }

                            refBlockFields = refBlockFields + blockField(arg.name, "input", typeCounter, inputText);
                        }

                        case number(int inputNumber): {
                            int typeCounter = 0;
                            println("Field of type number with name <arg.name> and value \"<inputNumber>\"");

                            for (refBlockField <- refBlockFields) {
                                if(refBlockField.\type == "number") {
                                    typeCounter += 1;
                                }
                            }

                            refBlockFields = refBlockFields + blockField(arg.name, "number", typeCounter, inputNumber);
                        }

                        default: println("<refBlock.\type> has a non-field input of type <arg.\type>");
                    }
                }
            }
        }
    }

    return refBlockFields;
}

list[BlockInput] getBlockInputs(Block refBlock) {
    list[BlockInput] refBlockInputs = [];

    if(!isEmpty(refBlock.messages)) {
        for (message <- refBlock.messages) {
            if (!isEmpty(message.args)) {
                for (arg <- message.args) {
                    if (arg.\type.check?) {
                        bool isStar = false;
                        int typeCounter = 0;

                        if (arg.\type.check[1..] == []) {
                            isStar = true;
                        }
                        println("Input: \<<arg.name>, <arg.\type.check[0]>\>");

                        for (refBlockInput <- refBlockInputs) {
                            if(arg.\type.check[0] == refBlockInput.\type) {
                                typeCounter += 1;
                            }
                        }

                        refBlockInputs = refBlockInputs + blockInput(arg.name, arg.\type.check[0], isStar, typeCounter);
                    }
                }
            }
        }
    }

    return refBlockInputs;
}

str treeToRes(list[Block] blocks, Tree t) {
    // if (blocks == []) {
    //     blocks = tempBlockList;
    //     t = tempTree;
    // }

    list[node] rootBlocks = [getBlocks(t, blocks)];
    node res = "res"(blocks = "block"(languageVersion = 0, blocks = rootBlocks));
    println(res);

    return asJSON(res);
}