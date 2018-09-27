Blockly.Blocks['multiplication'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Exp",
					"message0" : "%1 * %2 %3 ",
					"args0" : [
						{
							"name" : "Exp",
							"type" : "input_statement",
							"check" : "Exp"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "Exp",
							"type" : "input_statement",
							"check" : "Exp"
						}
					],
					"colour" : 155,
					
					"previousStatement" : "Exp",
					
					// "inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['addition'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Exp",
					"message0" : "%1 + %2 %3 ",
					"args0" : [
						{
							"name" : "Exp",
							"type" : "input_statement",
							"check" : "Exp"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "Exp",
							"type" : "input_statement",
							"check" : "Exp"
						}
					],
					"colour" : 99,
					
					"previousStatement" : "Exp",
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['start'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Exp",
					"message0" : "%1",
					"args0" : [
						{
							"name" : "start",
							"type" : "input_statement",
							"check" : "Exp"
						}
					],
					"colour" : 90,
					
					
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['numbers'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Exp",
					"message0" : "%1 ",
					"args0" : [
						{
							"name" : "lex",
							"type" : "input_value"
						}
					],
					"colour" : 3,
					
					"previousStatement" : "Exp",
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['IntegerLiteral'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "IntegerLiteral",
					"message0" : "%1 ",
					"args0" : [
						{
						"name" : "IntegerLiteralName",
						"type" : "field_input",
						"text" : "IntegerLiteral"
						}
					],
					"colour" : 335,
					"output" : "IntegerLiteral",
					
					
					"inputsInline" : false,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
function loadBlockly(){
	 Blockly.BlockSvg.START_HAT = true;
    var workspace = Blockly.inject('blockDiv', {
            toolbox: document.getElementById('toolbox'),
            collapse: true,
            toolboxPosition: 'start', // end
            trashcan: true
    });
	 workspace.addChangeListener(Blockly.Events.disableOrphans);
}