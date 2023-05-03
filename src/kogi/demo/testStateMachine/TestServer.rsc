module kogi::demo::testStateMachine::TestServer

import Content;
import Exception;
import IO;
import ParseTree;
import util::IDEServices;
import vis::Text;
import kogi::demo::stateMachine::StateMachine;
import kogi::demo::testStateMachine::TestVisit;

Response (Request) webServer() {
    Response reply(get("/test")) {
        return plain("Test!");
    }

    Response reply(get(/^\/parse/, parameters = pms)) {
        str hasError = "false";
        str code = pms["code"];
        Tree parseResult;

        try {
            parseResult = parse(#Machine, code);
        } catch ParseError(l): {
            return response("Error: Parse error found at line <l.begin.line> and column <l.begin.column + 1>.");
        }

        return response(treeToRes(parseResult));
    }

    default Response reply(get(_)) {
        return response(|project://kogi/src/kogi/demo/testStateMachine/Hybrid_IDE_Demo.html|);
    }

    return reply;
}

public void main() {
    showInteractiveContent(content("Hybrid Editor", webServer()));
}