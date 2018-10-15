module kogi::demo::stateMachine::customize::CustomizedStateMachine

import kogi::Block;


Toolbox customBlocks() {
	machine = block("machine", "", [], tooltip="This block represents a State Machine with and Id and some states", colour = hsv(0));
	state = block("state", "", [], tooltip="This block represents an state.", colour = hsv(90));
	transitions = block("transitions", "", [],tooltip="This block represents a transition.", colour = hsv(180));
	id = block("Id", "", [], tooltip = "This block is used to define an Id", colour = hsv(270));
	terminals = section("terminals", hsv(0), [id]);
	nonTerminals = section("nonTerminals", hsv(360), [machine, state, transitions]);
	return toolbox([nonTerminals, terminals]);
}