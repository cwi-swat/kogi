Blockly.Blocks['Statement/ifElseStat'] = {
	init: function () {
		this.jsonInit({
			"type": "Statement/ifElseStat",
			"message0": "if %1 %2 then %3 %4 else %5 %6 fi %7 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "thenPart",
					"type": "input_statement",
					"check": ["Statement", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "elsePart",
					"type": "input_statement",
					"check": ["Statement", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 26,

			"previousStatement": "Statement",
			"nextStatement": "Statement",
			"inputsInline": true,
			"tooltip": "ifElseStat",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/sub'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/sub",
			"message0": "%1 - %2 %3 ",
			"args0": [{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},

			],
			"colour": 24,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "sub",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/add'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/add",
			"message0": "%1 + %2 %3 ",
			"args0": [{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},

			],
			"colour": 257,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "add",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Program'] = {
	init: function () {
		this.jsonInit({
			"type": "Program",
			"message0": "%1",
			"args0": [{
					"name": "start",
					"type": "input_value",
					"check": ["Program"]
				},

			],
			"colour": 90,



			"inputsInline": false,
			"tooltip": "",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Statement/asgStat'] = {
	init: function () {
		this.jsonInit({
			"type": "Statement/asgStat",
			"message0": "%1 := %2 %3 ",
			"args0": [{
					"name": "var",
					"type": "input_value",
					"check": ["Id"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},

			],
			"colour": 133,

			"previousStatement": "Statement",
			"nextStatement": "Statement",
			"inputsInline": true,
			"tooltip": "asgStat",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Ttype/string'] = {
	init: function () {
		this.jsonInit({
			"type": "Ttype/string",
			"message0": "string",

			"colour": 356,
			"output": "Ttype",


			"inputsInline": true,
			"tooltip": "string",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Declaration/decl'] = {
	init: function () {
		this.jsonInit({
			"type": "Declaration/decl",
			"message0": "%1 : %2 %3 ",
			"args0": [{
					"name": "id",
					"type": "input_value",
					"check": ["Id"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Ttype",
					"type": "input_value",
					"check": ["Ttype"]
				},

			],
			"colour": 150,

			"previousStatement": "Declaration",
			"nextStatement": "Declaration",
			"inputsInline": true,
			"tooltip": "decl",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/conc'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/conc",
			"message0": "%1 || %2 %3 ",
			"args0": [{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},

			],
			"colour": 31,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "conc",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Declarations/declarations'] = {
	init: function () {
		this.jsonInit({
			"type": "Declarations/declarations",
			"message0": "declare %1 %2 ; %3 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "decls",
					"type": "input_statement",
					"check": ["Declaration", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 62,
			"output": "Declarations",


			"inputsInline": true,
			"tooltip": "declarations",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/natural'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/natural",
			"message0": "%1 ",
			"args0": [{
					"name": "ExpressionName",
					"type": "field_number",
					"value": 0
				},

			],
			"colour": 182,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "natural",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Ttype/natural'] = {
	init: function () {
		this.jsonInit({
			"type": "Ttype/natural",
			"message0": "natural",

			"colour": 104,
			"output": "Ttype",


			"inputsInline": true,
			"tooltip": "natural",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Id/id'] = {
	init: function () {
		this.jsonInit({
			"type": "Id/id",
			"message0": "%1",
			"args0": [{
					"name": "Id",
					"type": "field_input",
					"text": "variable"
				},

			],
			"colour": 163,
			"output": "Id",


			"inputsInline": true,
			"tooltip": "",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Program/program'] = {
	init: function () {
		this.jsonInit({
			"type": "Program/program",
			"message0": "begin %1 %2 %3 end %4 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Declarations",
					"type": "input_value",
					"check": ["Declarations"]
				},
				{
					"name": "body",
					"type": "input_statement",
					"check": ["Statement", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 163,
			"output": "Program",


			"inputsInline": true,
			"tooltip": "program",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/string'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/string",
			"message0": "\" %1 %2 \" %3 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "ExpressionName",
					"type": "field_input",
					"text": "Expression"
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 276,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "string",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Statement/whileStat'] = {
	init: function () {
		this.jsonInit({
			"type": "Statement/whileStat",
			"message0": "while %1 %2 do %3 %4 od %5 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expression",
					"type": "input_value",
					"check": ["Expression"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "body",
					"type": "input_statement",
					"check": ["Statement", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 74,

			"previousStatement": "Statement",
			"nextStatement": "Statement",
			"inputsInline": true,
			"tooltip": "whileStat",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expression/id'] = {
	init: function () {
		this.jsonInit({
			"type": "Expression/id",
			"message0": "%1 ",
			"args0": [{
					"name": "ExpressionName",
					"type": "field_input",
					"text": "Expression"
				},

			],
			"colour": 93,
			"output": "Expression",


			"inputsInline": true,
			"tooltip": "id",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['epsilon'] = {
	init: function () {
		this.jsonInit({
			"type": "epsilon",
			"message0": "epsilon",
			"args0": [

			],
			"colour": 90,

			"previousStatement": null,

			"inputsInline": false,
			"tooltip": "",
			"helpUrl": ""
		});
	}
}
Blockly.BlockSvg.START_HAT = true;
var workspace = Blockly.inject('blockDiv', {
	toolbox: document.getElementById('toolbox'),
	collapse: true,
	toolboxPosition: 'start', // end
	trashcan: true
});
workspace.addChangeListener(Blockly.Events.disableOrphans);

//Storage options
BlocklyStorage.backupOnUnload();
window.setTimeout(BlocklyStorage.restoreBlocks, 0);

function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}