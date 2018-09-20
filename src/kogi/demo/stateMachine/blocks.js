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
						}
					],
					"colour" : 20,
					"output" : null,
					
					
					"inputsInline" : false,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['State'] = {
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
							"type" : "input_value"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "transitions",
							"type" : "input_statement",
							"check" : "transitions"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						}
					],
					"colour" : 30,
					
					"previousStatement" : null,
					"nextStatement" : null,
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['Trans'] = {
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
							"type" : "input_value"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "to",
							"type" : "input_value"
						}
					],
					"colour" : 30,
					
					"previousStatement" : null,
					"nextStatement" : null,
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['Machine'] = {
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
							"type" : "input_value"
						},
						{
							"name" : "states",
							"type" : "input_statement",
							"check" : "states"
						}
					],
					"colour" : 10,
					
					
					
					"inputsInline" : false,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
function loadBlockly(){
    var workspace = Blockly.inject('aqui', {
            toolbox: document.getElementById('toolbox'),
            collapse: true,
            toolboxPosition: 'start', // end
            trashcan: true
    });
}