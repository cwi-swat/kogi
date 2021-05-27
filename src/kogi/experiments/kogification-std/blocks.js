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
			  "colour" : 345,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "leq",
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
			  "colour" : 176,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : false,
			  "tooltip" : "ifThenElse",
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
			  "colour" : 91,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : false,
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
			  "colour" : 121,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "mul",
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
			  "colour" : 293,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "question",
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
			  "colour" : 311,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : false,
			  "tooltip" : "computed",
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
			  "colour" : 61,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "eq",
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
			  "colour" : 152,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "div",
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
			  "colour" : 90,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
			  
			  "colour" : 276,
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
			  "colour" : 205,
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
			  "colour" : 110,
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
			  "colour" : 102,
			  
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
			  "colour" : 59,
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
			  "colour" : 221,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "gt",
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
			  "colour" : 19,
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
			  "colour" : 78,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "add",
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
			  "colour" : 194,
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
Blockly.Blocks['Expr/false'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/false",
			  "message0" : "false",
			  
			  "colour" : 101,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "false",
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
				  "name" : "IntegerValue",
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				
			],
			  "colour" : 245,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "integer",
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
				  "name" : "FloatValue",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				
			],
			  "colour" : 268,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "money",
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
			  "colour" : 156,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "neq",
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
			  "colour" : 114,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "not",
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
				  "name" : "StringValue",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				
			],
			  "colour" : 351,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "string",
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
			  "colour" : 181,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "or",
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
	