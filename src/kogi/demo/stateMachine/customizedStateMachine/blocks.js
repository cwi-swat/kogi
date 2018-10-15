Blockly.Blocks['machine'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Machine",
			  "message0" : "machine %1 %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "id",
			  	  "type" : "input_value",
			  	  "check" : "Id"
			  	},
			  	  	{
			  	  "name" : "states",
			  	  "type" : "input_statement",
			  	  "check" : "State"
			  	},
			  	
			  ],
			  "colour" : 0,
			  
			  "previousStatement" : "Machine",
			  
			  "inputsInline" : true,
			  "tooltip" : "This block represents a State Machine with and Id and some states",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['state'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "State",
			  "message0" : "state %1 %2 { %3 %4 } %5 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "id",
			  	  "type" : "input_value",
			  	  "check" : "Id"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "transitions",
			  	  "type" : "input_statement",
			  	  "check" : "Trans"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 315,
			  
			  "previousStatement" : "State",
			  "nextStatement" : "State",
			  "inputsInline" : true,
			  "tooltip" : "This block represents a state.",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['transitions'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Trans",
			  "message0" : "on %1 %2 to %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "on",
			  	  "type" : "input_value",
			  	  "check" : "Id"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "to",
			  	  "type" : "input_value",
			  	  "check" : "Id"
			  	},
			  	
			  ],
			  "colour" : 180,
			  
			  "previousStatement" : "Trans",
			  "nextStatement" : "Trans",
			  "inputsInline" : true,
			  "tooltip" : "This block represents a transition.",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['Id'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Id",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "IdName",
			  	  "type" : "field_input",
			  	  "text" : "Id"
			  	},
			  	
			  ],
			  "colour" : 270,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "This block is used to define an Id",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['start'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Machine",
			  "message0" : "%1",
			  "args0" : [
			  	{
			  	  "name" : "start",
			  	  "type" : "input_statement",
			  	  "check" : "Machine"
			  	},
			  	
			  ],
			  "colour" : 90,
			  
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
function loadBlockly(){
	 Blockly.BlockSvg.START_HAT = true;
    var workspace = Blockly.inject('kogiDiv', {
            toolbox: document.getElementById('toolbox'),
            collapse: true,
            toolboxPosition: 'start', // end
            trashcan: true
    });
	 workspace.addChangeListener(Blockly.Events.disableOrphans);
}