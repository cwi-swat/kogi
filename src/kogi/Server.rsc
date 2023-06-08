module kogi::Server

import Content;
import Exception;
import IO;
import ParseTree;
import util::IDEServices;
import kogi::Block;
import kogi::Grammar2Blockly;
import kogi::Plugin;
import kogi::simplification::RemoveUnitProduction;
import kogi::Tree2JSON;
import kogi::util::Util;

Response (Request) webServer(type[&T <: Tree] grammar, str folderName, list[Block] blocks) {
    Response reply(get(/^\/parse/, parameters = pms)) {
        str hasError = "false";
        str code = pms["code"];
        Tree parseResult;

        try {
            parseResult = parse(grammar, code);
        } catch ParseError(l): {
            return response("Error: Parse error found at line <l.begin.line> and character <l.begin.column + 1>.");
        }

        return response(treeToRes(blocks, parseResult));
    }

    Response reply(get("/blocks.js")) {
        return response(|project://kogi/src/kogi/demo/<folderName>/blocks.js|);
    }

    default Response reply(get(_)) {
        return response(|project://kogi/src/kogi/demo/<folderName>/index.html|);
    }

    return reply;
}

// Right now, foldername can be abused to have access to other folders than the demo folder by adding "../" in front of the name
// Validation has to be done on this input.
public void main(type[&T <: Tree] grammar, str folderName) {
    bool alreadyExists = exists(|project://kogi/src/kogi/demo/<folderName>/index.html|);

    if (!alreadyExists) {
        kogify(grammar, folderName);
    }

    set[Production] simplifiedGrammar = simplifyGrammar(grammar);
    list[Block] blocks = renameDuplicatedBlocks(grammar2blocks(simplifiedGrammar));

    showInteractiveContent(content("Hybrid Editor", webServer(grammar, folderName, blocks)));
}