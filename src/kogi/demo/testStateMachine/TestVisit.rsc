module kogi::demo::testStateMachine::TestVisit

import ParseTree;
import String;
import lang::json::IO;
import vis::Text;

data ResponseStructure = createResponseStructure(SubResponseStructure blocks) | emptyRes();
data SubResponseStructure = createSubResponseStructure(int languageVersion, list[Block] blocks) | emptySubRes();
data Block =  createBlock(str \type)
            | createBlock(str \type, Fields fields)
            | createBlock(str \type, Fields fields, Inputs inputs)
            | createBlock(str \type, Fields fields, NextBlock next)
            | createBlock(str \type, Fields fields, Inputs inputs, NextBlock next)
            | createBlock(str \type, Inputs inputs)
            | createBlock(str \type, Inputs inputs, NextBlock next)
            | createBlock(str \type, NextBlock next)
            | emptyBlock();
data Fields = machineFields(str id) | stateFields(str id) | transitionFields(str on, str to) | emptyFields();
data Inputs = machineInputs(InputBlock states) | stateInputs(InputBlock transitions) | emptyInputs();
data InputBlock = inputBlock(Block block);
data NextBlock = nextBlock(Block block) | emptyNext();

str getBlockId(list[Tree] t) {
    str blockId = "";

    top-down visit(t) {
        case appl(prod(label("id", _), _, _), [appl(_, list[Tree] characters)]): {
            top-down visit(characters) {
                case char(int j): blockId = blockId + stringChar(j);
            }

            return blockId;
        }
    }

    return blockId;
}

list[str] getTransValues(list[Tree] t) {
    list[str] transValues = [];

    top-down visit(t) {
        case appl(prod(label("id", _), _, _), [appl(_, list[Tree] characters)]): {
            str currentId = "";
            top-down visit(characters) {
                case char(int j): currentId = currentId + stringChar(j);
            }

            transValues = transValues + currentId;
        }
    }

    return transValues;
}

Inputs getStateInputs(list[Tree] stateElements) {
    Inputs currentStateInputs = emptyInputs();

    top-down visit(stateElements) {
        case appl(regular(\iter-star-seps(sort("Trans"),_)), list[Tree] transElements): {
            if(transElements != []) {
                list[Block] allTransBlocks = [emptyBlock()];
                allTransBlocks = allTransBlocks[1..];

                top-down visit(transElements) {
                    case appl(prod(label("transition", _), _, _), list[Tree] currentTransElements): {
                        list[str] transValues = getTransValues(currentTransElements);
                        str onValue = transValues[0];
                        str toValue = transValues[1];

                        Block currentTransBlock = createBlock("Trans/transition", transitionFields(onValue, toValue));
                        allTransBlocks = currentTransBlock + allTransBlocks;
                    }
                }

                if(allTransBlocks != []) {
                    int transBlockCounter = 0;

                    while(allTransBlocks[transBlockCounter + 1 ..] != []) {
                        Fields currentTransFields = allTransBlocks[transBlockCounter + 1].fields;
                        allTransBlocks[transBlockCounter + 1] = createBlock("Trans/transition", currentTransFields, nextBlock(allTransBlocks[transBlockCounter]));
                        transBlockCounter = transBlockCounter + 1;
                    }

                    currentStateInputs = stateInputs(inputBlock(allTransBlocks[-1]));
                }
            }
        }
    }

    return currentStateInputs;
}

Inputs getMachineInputs(list[Tree] machineElements) {
    Inputs currentMachineInputs = emptyInputs();

    top-down-break visit(machineElements) {
        case appl(regular(\iter-star-seps(sort("State"),_)), list[Tree] stateElements): {
            if(stateElements != []) {
                list[Block] allStateBlocks = [emptyBlock()];
                allStateBlocks = allStateBlocks[1..];
                list[bool] stateBlockHasInputs = [];

                top-down visit(stateElements) {
                    case appl(prod(label("state", _), _, _), list[Tree] currentStateElements): {
                        str currentStateId = getBlockId(currentStateElements);
                        Block currentStateBlock = createBlock("State/state", stateFields(currentStateId));
                        bool hasInputs = false;
                        Inputs currentStateInputs = getStateInputs(currentStateElements);

                        if(currentStateInputs != emptyInputs()) {
                            hasInputs = true;
                            currentStateBlock = createBlock("State/state", stateFields(currentStateId), currentStateInputs);
                        }

                        allStateBlocks = currentStateBlock + allStateBlocks;
                        stateBlockHasInputs = hasInputs + stateBlockHasInputs;
                    }
                }

                if(allStateBlocks != []) {
                    int stateBlockCounter = 0;

                    while(allStateBlocks[stateBlockCounter + 1 ..] != []) {
                        Fields currentStateFields = allStateBlocks[stateBlockCounter + 1].fields;

                        if(!stateBlockHasInputs[stateBlockCounter + 1]) {
                            allStateBlocks[stateBlockCounter + 1] = createBlock("State/state", currentStateFields, nextBlock(allStateBlocks[stateBlockCounter]));
                        } else {
                            Inputs currentStateInputs = allStateBlocks[stateBlockCounter + 1].inputs;
                            allStateBlocks[stateBlockCounter + 1] = createBlock("State/state", currentStateFields, currentStateInputs, nextBlock(allStateBlocks[stateBlockCounter]));
                        }
                                
                        stateBlockCounter = stateBlockCounter + 1;
                    }

                    currentMachineInputs = machineInputs(inputBlock(allStateBlocks[-1]));
                }
            }
        }
    }

    return currentMachineInputs;
}

str treeToRes(Tree t) {
    ResponseStructure res = emptyRes();
    SubResponseStructure subRes = emptySubRes();
    list[Block] startBlocks = [emptyBlock()];
    str responseString = "";

    top-down visit(t) {
        case appl(prod(label("machine", _), _, _), list[Tree] machineElements) : {
            str idString = getBlockId(machineElements);
            Block currentMachineBlock = createBlock("Machine/machine", machineFields(idString));
            Inputs currentMachineInputs = getMachineInputs(machineElements);

            if(currentMachineInputs != emptyInputs()) {
                currentMachineBlock = createBlock("Machine/machine", machineFields(idString), currentMachineInputs);
            }

            startBlocks = startBlocks + currentMachineBlock;
        }
    }

    subRes = createSubResponseStructure(0, startBlocks[1..]);
    res = createResponseStructure(subRes);
    return asJSON(res);
}

