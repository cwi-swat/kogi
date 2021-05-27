Blockly.Blocks['QType/boolean'] = {
	init: function () {
		this.jsonInit({
			"type": "QType/boolean",
			"message0": "boolean",

			"colour": 22,
			"output": "QType",


			"inputsInline": true,
			"tooltip": "boolean",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/leq'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/leq",
			"message0": "%1 <= %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 162,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "leq",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/sub'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/sub",
			"message0": "%1 - %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 351,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "sub",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/mul'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/mul",
			"message0": "%1 * %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 199,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "mul",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Question/computed'] = {
	init: function () {
		this.jsonInit({
			"type": "Question/computed",
			"message0": "%1 %2 : %3 %4 = %5 %6 ",
			"args0": [{
					"name": "label",
					"type": "input_value",
					"check": ["Label"]
				},
				{
					"name": "name",
					"type": "input_value",
					"check": ["Id"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "QType",
					"type": "input_value",
					"check": ["QType"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 153,

			"previousStatement": "Question",
			"nextStatement": "Question",
			"inputsInline": true,
			"tooltip": "computed",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Question/group'] = {
	init: function () {
		this.jsonInit({
			"type": "Question/group",
			"message0": "{ %1 %2 } %3 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "questions",
					"type": "input_statement",
					"check": ["Question", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 186,

			"previousStatement": "Question",
			"nextStatement": "Question",
			"inputsInline": true,
			"tooltip": "group",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Question/ifThen'] = {
	init: function () {
		this.jsonInit({
			"type": "Question/ifThen",
			"message0": "if %1 ( %2 %3 ) %4 %5 %6 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value"
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Question",
					"type": "input_statement",
					"check": ["Question"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 172,

			"previousStatement": "Question",
			"nextStatement": "Question",
			"inputsInline": true,
			"tooltip": "ifThen",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Question/question'] = {
	init: function () {
		this.jsonInit({
			"type": "Question/question",
			"message0": "%1 %2 : %3 %4 ",
			"args0": [{
					"name": "label",
					"type": "input_value",
					"check": ["Label"]
				},
				{
					"name": "name",
					"type": "input_value",
					"check": ["Id"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "QType",
					"type": "input_value",
					"check": ["QType"]
				},

			],
			"colour": 298,

			"previousStatement": "Question",
			"nextStatement": "Question",
			"inputsInline": true,
			"tooltip": "question",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/div'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/div",
			"message0": "%1 / %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 39,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "div",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Question/ifThenElse'] = {
	init: function () {
		this.jsonInit({
			"type": "Question/ifThenElse",
			"message0": "if %1 ( %2 %3 ) %4 %5 else %6 %7 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Question",
					"type": "input_statement",
					"check": ["Question"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Question",
					"type": "input_statement",
					"check": ["Question"]
				},

			],
			"colour": 68,

			"previousStatement": "Question",
			"nextStatement": "Question",
			"inputsInline": true,
			"tooltip": "ifThenElse",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Id'] = {
	init: function () {
		this.jsonInit({
			"type": "Id",
			"message0": "%1",
			"args0": [{
					"name": "Id",
					"type": "field_input",
					"text": "variable"
				},

			],
			"colour": 62,
			"output": "Id",


			"inputsInline": true,
			"tooltip": "",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/not'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/not",
			"message0": "! %1 %2 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 16,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "not",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/add'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/add",
			"message0": "%1 + %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 333,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "add",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/true'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/true",
			"message0": "true",

			"colour": 208,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "true",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Label/label'] = {
	init: function () {
		this.jsonInit({
			"type": "Label/label",
			"message0": "%1 ",
			"args0": [{
					"name": "lex",
					"type": "input_value",
					"check": ["StringValue"]
				},

			],
			"colour": 214,
			"output": "Label",


			"inputsInline": true,
			"tooltip": "",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Form'] = {
	init: function () {
		this.jsonInit({
			"type": "Form",
			"message0": "%1",
			"args0": [{
					"name": "start",
					"type": "input_value",
					"check": ["Form"]
				},

			],
			"colour": 90,



			"inputsInline": false,
			"tooltip": "",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/geq'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/geq",
			"message0": "%1 >= %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 233,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "geq",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/lt'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/lt",
			"message0": "%1 < %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 222,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "lt",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/false'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/false",
			"message0": "false",

			"colour": 254,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "false",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['QType/money'] = {
	init: function () {
		this.jsonInit({
			"type": "QType/money",
			"message0": "money",

			"colour": 348,
			"output": "QType",


			"inputsInline": true,
			"tooltip": "money",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/gt'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/gt",
			"message0": "%1 > %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 111,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "gt",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Form/form'] = {
	init: function () {
		this.jsonInit({
			"type": "Form/form",
			"message0": "form %1 %2 { %3 %4 } %5 ",
			"args0": [{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "name",
					"type": "input_value",
					"check": ["Id"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "questions",
					"type": "input_statement",
					"check": ["Question", "epsilon"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},

			],
			"colour": 275,
			"output": "Form",


			"inputsInline": true,
			"tooltip": "form",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/eq'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/eq",
			"message0": "%1 == %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 323,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "eq",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/neq'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/neq",
			"message0": "%1 != %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 333,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "neq",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['QType/string'] = {
	init: function () {
		this.jsonInit({
			"type": "QType/string",
			"message0": "string",

			"colour": 142,
			"output": "QType",


			"inputsInline": true,
			"tooltip": "string",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/or'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/or",
			"message0": "%1 || %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 287,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "or",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['Expr/and'] = {
	init: function () {
		this.jsonInit({
			"type": "Expr/and",
			"message0": "%1 && %2 %3 ",
			"args0": [{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},
				{
					"name": "",
					"type": "input_dummy"
				},
				{
					"name": "Expr",
					"type": "input_value",
					"check": ["Expr"]
				},

			],
			"colour": 116,
			"output": "Expr",


			"inputsInline": true,
			"tooltip": "and",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['QType/integer'] = {
	init: function () {
		this.jsonInit({
			"type": "QType/integer",
			"message0": "integer",

			"colour": 161,
			"output": "QType",


			"inputsInline": true,
			"tooltip": "integer",
			"helpUrl": ""
		});
	}
}
Blockly.Blocks['StringValue'] = {
	init: function () {
		this.jsonInit({
			"type": "StringValue",
			"message0": "%1 ",
			"args0": [{
					"name": "StringValueName",
					"type": "field_input",
					"text": "StringValue"
				},

			],
			"colour": 33,
			"output": "StringValue",


			"inputsInline": true,
			"tooltip": "",
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