module kogi::demo::testStateMachine::TestServer

import Content;
import Exception;
import IO;
import ParseTree;
import util::IDEServices;
import kogi::demo::stateMachine::StateMachine;

Response (Request) webServer() {
    Response reply(get("/test")) {
        return plain("Test!");
    }

    Response reply(get(/^\/parse/, parameters = pms)) {
        str hasError = "false";
        str code = pms["code"];

        try {
            Tree parseResult = parse(#Machine, code);
        } catch ParseError(l): {
            return response("Parse error found at line <l.begin.line> and column <l.begin.column>.");
        }

        return response("Code is correct!");
    }

    default Response reply(get(_)) {
        return response(|project://kogi/src/kogi/demo/testStateMachine/Hybrid_IDE_Demo.html|);
    }

    return reply;
}

public void main() {
    showInteractiveContent(content("Hybrid Editor", webServer()));
}