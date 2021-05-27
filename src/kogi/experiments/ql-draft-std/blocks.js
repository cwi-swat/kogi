Blockly.Blocks['QType/boolean'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "QType/boolean",
			  "message0" : "boolean",
			  
			  "colour" : 122,
			  "output" : "QType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "boolean",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/leq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/leq",
			  "message0" : "%1 <= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 82,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "leq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/false'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/false",
			  "message0" : "false",
			  
			  "colour" : 197,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "false",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Question/ifThen'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Question/ifThen",
			  "message0" : "if %1 ( %2 %3 ) %4 %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Question",
				  "type" : "input_statement",
				  "check" : ["Question"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 306,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "ifThen",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/mul'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/mul",
			  "message0" : "%1 * %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 129,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "mul",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Question/computed'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Question/computed",
			  "message0" : "%1 %2 : %3 %4 = %5 %6 ",
			  "args0" : [
				{
				  "name" : "Label",
				  "type" : "input_value",
				  "check" : ["Label"]
				},
				  	{
				  "name" : "name",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "QType",
				  "type" : "input_value",
				  "check" : ["QType"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 135,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "computed",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/neq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/neq",
			  "message0" : "%1 != %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 160,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "neq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/or'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/or",
			  "message0" : "%1 || %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 305,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "or",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/true'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/true",
			  "message0" : "true",
			  
			  "colour" : 151,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "true",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/lt'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/lt",
			  "message0" : "%1 < %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 337,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "lt",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/and'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/and",
			  "message0" : "%1 && %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 313,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "and",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Question/group'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Question/group",
			  "message0" : "{ %1 %2 } %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "questions",
				  "type" : "input_statement",
				  "check" : ["Question", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 317,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "group",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/var'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/var",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "name",
				  "type" : "field_input",
				  "text" : ""
				},
				
			],
			  "colour" : 195,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "var",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/gt'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/gt",
			  "message0" : "%1 > %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 204,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "gt",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/money'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/money",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "floa",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				
			],
			  "colour" : 81,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "money",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Question/ifThenElse'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Question/ifThenElse",
			  "message0" : "if %1 ( %2 %3 ) %4 %5 else %6 %7 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Question",
				  "type" : "input_statement",
				  "check" : ["Question"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Question",
				  "type" : "input_statement",
				  "check" : ["Question"]
				},
				
			],
			  "colour" : 157,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "ifThenElse",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/geq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/geq",
			  "message0" : "%1 >= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 120,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "geq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/add'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/add",
			  "message0" : "%1 + %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 98,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "add",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/string'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/string",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "strin",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				
			],
			  "colour" : 303,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "string",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FloatValue/floa'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FloatValue/floa",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "FloatValue",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				
			],
			  "colour" : 77,
			  "output" : "FloatValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/sub'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/sub",
			  "message0" : "%1 - %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 334,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "sub",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Form/form'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Form/form",
			  "message0" : "form %1 %2 { %3 %4 } %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "name",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "questions",
				  "type" : "input_statement",
				  "check" : ["Question", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 120,
			  
			  
			  
			  "inputsInline" : false,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StringValue/s'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StringValue/s",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "StringValueName",
				  "type" : "field_input",
				  "text" : "StringValue"
				},
				
			],
			  "colour" : 249,
			  "output" : "StringValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['QType/money'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "QType/money",
			  "message0" : "money",
			  
			  "colour" : 88,
			  "output" : "QType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "money",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Question/question'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Question/question",
			  "message0" : "%1 %2 : %3 %4 ",
			  "args0" : [
				{
				  "name" : "Label",
				  "type" : "input_value",
				  "check" : ["Label"]
				},
				  	{
				  "name" : "name",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "QType",
				  "type" : "input_value",
				  "check" : ["QType"]
				},
				
			],
			  "colour" : 197,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "question",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/not'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/not",
			  "message0" : "! %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 53,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "not",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Label/label'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Label/label",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "as",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				
			],
			  "colour" : 120,
			  "output" : "Label",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "label",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegerValue/inte'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegerValue/inte",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "IntegerValue",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 202,
			  "output" : "IntegerValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/eq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/eq",
			  "message0" : "%1 == %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 233,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "eq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['QType/string'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "QType/string",
			  "message0" : "string",
			  
			  "colour" : 40,
			  "output" : "QType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "string",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/div'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/div",
			  "message0" : "%1 / %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expr",
				  "type" : "input_value",
				  "check" : ["Expr"]
				},
				
			],
			  "colour" : 194,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "div",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/integer'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/integer",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "inte",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 180,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "integer",
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
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Id",
				  "type" : "field_input",
				  "text" : "variable"
				},
				
			],
			  "colour" : 52,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['QType/integer'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "QType/integer",
			  "message0" : "integer",
			  
			  "colour" : 170,
			  "output" : "QType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "integer",
			  "helpUrl" : ""
			}
		);
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
	