module kogi::CategoryReduction

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
import kogi::symbol2Message::Symbol2Arg;

tuple[list[Block], set[Production]] categoryReduction(set[Production] productions, list[Block] optionBlocks, map[str, bool] multiplicity, lrel[str, str] lexRules) { 
    
    list[Block] blocks = [];
    list[str] epsilonBlocks = [];
    list[tuple[str, Production]] prod = [];
    set[str] categories = {};
    
    //make temporary list of categories and their associated production rules; needed to check if a category only has 1 block (a.k.a 1 production rule)
    for (P <- productions) {
        if (P.def is label) {
            categories += P.def.symbol[0];
            prod += <P.def.symbol[0], P>; 
        }   
    }


    //See if a block is an epsilon block, so if it needs to have Ref::output, or Ref::previous and Ref::next
    for(P <- productions) {
        for (S <- P.symbols) {
            if (S is label) {
               if (\iter-star-seps(_,_) := S.symbol) {
                    list[str] name = getSyntaxCheck(S.symbol[0]);
                    epsilonBlocks += name[0];
                    println("       Epsilon block found:" + name[0]);
                } 
            }
        }
    }

    for(P <- productions) {
        
        println("\n" + "---- next production ----" + "\n" + "<P>");
        
        str msg = ""; //final message for the new block
        list[Arg] arguments = []; //its list of arguments
        
        if (P.def is label && P.def.symbol is sort) { //if the production is not a lexical rule, we proceed checking the inputs
            int argCount = 0;
          
            for (A <- P.symbols) {
                if (layouts(_) !:= A) println(A);
                
                if (A is lit) { //if its a literal (terminal), we just add it to the final message
                    println("   A is lit, adding to msg");
                    msg = msg + "<A[0]> "; 
                }
                
                if (A is label) { //label indicates it points to another block
                    println("   A is label, it points to another block");
                    
                    str cat = "<A.symbol[0]>";
                    
                    //count if the associated category only has 1 option
                    int nrOfBlocksInCategory = 0;
                    for (C <- prod) {
                        if (cat == C[0]) nrOfBlocksInCategory += 1;
                    }
                    for (O <- optionBlocks) {
                        if (cat == O.output[0]) nrOfBlocksInCategory += 1;
                    }

                    if (nrOfBlocksInCategory == 1) { //if the category indeed only has 1 block
                        for (C <- prod) {
                            if (cat == C[0]) {
                                needsRecursion = false;
                                
                                for (S <- C[1].symbols) {
                                    if (S is label && S.symbol is sort || S is sort) needsRecursion = true;
                                }

                                if (!needsRecursion) {    
                                    println("       No recursion needed, args belonging to block in input:");
                                    for (S <- C[1].symbols) {
                                        if (layouts(_) !:= S) println("           <S>");
                                        
                                        if (S is label ) {
                                            if (!(S.symbol is sort)) {
                                                arg_= symbol2Arg(S, getMultiplicity(S, multiplicity), lexRules, lexicalName = "");
                                                println("               adding:<arg_>");
                                                arguments += arg_;

                                                argCount += 1;
                                                msg = msg + "<S.name> %<argCount> ";
                                                println("               MSG so far:<msg>");
                                            } else {
                                                arg_ = arg(C[0], kogi::Block::\value(check = [C[0]]));
                                                println("               arg needs recursion:<arg_>");
                                                arguments += arg_;

                                                argCount += 1;
                                                msg = msg + "<S.name> %<argCount> ";
                                                println("               MSG so far:<msg>");
                                            }  
                                        }
                                        else if (iter(_) := S) {
                                            arg_= symbol2Arg(S, getMultiplicity(S, multiplicity), lexRules, lexicalName = "");
                                            println("               adding:<arg_>");
                                            arguments += arg_;

                                            argCount += 1;
                                            msg = msg + " %<argCount> ";
                                            println("               MSG so far:<msg>");
                                        } else {
                                            arg_ = arg(C[0], kogi::Block::\value(check = [C[0]]));
                                            println("               arg is a sort:<arg_>");
                                            arguments += arg_;

                                            argCount += 1;
                                            msg = msg + "<A.name> %<argCount> ";
                                            println("               MSG so far:<msg>");  
                                        }

                                    }
                                } else {
                                    println("       Needs recursion");
                                    arg_ = arg(C[0], kogi::Block::\value(check = [C[0]]));
                                    println("               inserting original arg:<arg_>");
                                    arguments += arg_;

                                    argCount += 1;
                                    msg = msg + "<A.name> %<argCount> ";
                                    println("               MSG so far:<msg>");
                                }
                            }
                        }
                        for (O <- optionBlocks) {
                            if (cat == O.output[0]) {
                                arg_ = O.messages[0].args[0];
                                println("   adding optionsblock:<arg_>");
                                arguments += arg_;

                                argCount += 1;
                                msg = msg + " %<argCount>";
                                println("               MSG so far:<msg>");
                            }
                        }
                    } else {
                       
                        arg_= symbol2Arg(A, getMultiplicity(A, multiplicity), lexRules, lexicalName = "");
                         println("   Category has more than 1 block, adding original arg:<arg_>");
                        arguments += arg_;

                        argCount += 1;
                        msg = msg + "<A.name> %<argCount> ";
                        println("               MSG so far:<msg>"); 
                    }
                } else if (layouts(_) !:= A) { //PROBLEMOS HIERO
                    arg_= symbol2Arg(A, getMultiplicity(A, multiplicity), lexRules, lexicalName = "");
                    println("               A is sort, adding arg:<arg_>");
                    arguments += arg_;

                    argCount += 1;
                    msg = msg + " %<argCount> ";
                    println("               MSG so far:<msg>");
                }
            }
        }
        
        //construction of new block
        if (size(arguments) != 0) {
            finalMsg = message(msg, arguments);
            bool epsi = false;
            Block superBlock = block(setBlockName(P.def.name, P.def.symbol[0]), setBlockType(P.def.symbol[0], P.def.name), [finalMsg], colour = hsv(120));
            superBlock.colour = Colour::hsv(arbInt(360));
            superBlock.inputsInline = true;

            println("\nEpsilon blocks:");
            for (E <- epsilonBlocks) {
                println("checking if:<P.def.symbol[0]> == <E>"); 
                if (E == P.def.symbol[0]) epsi = true;
            }

            if (epsi) {
                superBlock.previous = Ref::block(P.def.symbol[0]);
                superBlock.next = Ref::block(P.def.symbol[0]);
            } else if (P.def.symbol[0] != "Program"){
                superBlock.output = Ref::block(P.def.symbol[0]);
            } else superBlock.inputsInline = false;
            
            blocks += superBlock;

            //remove this production from the original list so the old block does not get made
            productions = productions - P;
        }
    }

    println("\nBLOCKS CHANGED:");
    for (B <- blocks) println(B);
    return <blocks, productions>;
}