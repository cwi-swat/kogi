module kogi::demo::stateMachine::StateMachineAST

//data Machine(loc src = |tmp:///|)
data Machine
	= machine(Id id, list[State] states)
	;
	
//data State(loc src = |tmp:///|)
data State
	= state(Id id, list[Trans] transitions)
	;

//data Trans(loc src = |tmp:///|)
data Trans
	= transition(Id on, Id to)
	;
	
//data Id(loc src = |tmp:///|)
data Id
	= id(str name)
	;
	
	
//Example
//machine(id("state"), [ state(id("holaa"), [transition(id("x"), id("y"))])])
//
//id = make(#Id, "id", [""]);
//transition =make(#Trans, "transition", [id, id]);
//state = make(#State, "state", [id, [transition]]);
//machine = make(#StateMachine, "machine", [id, [state]] );