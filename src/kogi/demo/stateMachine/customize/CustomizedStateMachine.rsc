module kogi::demo::stateMachine::customize::CustomizedStateMachine

import kogi::Block;


Toolbox customBlocks() {
	// Blocks
	machine = block("machine", "", [], tooltip="This block represents a State Machine with and Id and some states", colour = hsv(0));
	state = block("state", "", [], tooltip="This block represents a state.", colour = hsv(315));
	transitions = block("transitions", "", [],tooltip="This block represents a transition.", colour = hsv(180));
	id = block("Id", "", [], tooltip = "This block is used to define an Id", colour = hsv(270));
	
	// Sections
	terminals = section("Terminals", hsv(0), [id]);
	nonTerminals = section("NonTerminals", hsv(45), [machine, state, transitions]);
	return toolbox([nonTerminals, terminals]);
}

Toolbox groupBlocks() {
	// Blocks
	machine = block("machine", "", []);
	state = block("state", "", []);
	transitions = block("transitions", "", []);
	id = block("Id", "", []);
	
	// Sections
	sectionMachine = section("Machine", hsv(0), [machine]);
	sectioState = section("State", hsv(10), [state]);
	sectionTransitions = section("Transitions", hsv(20), [transitions]);
	sectionId = section("Id", hsv(30), [id]);
	return toolbox([sectionMachine, sectioState, sectionTransitions, sectionId]);
}