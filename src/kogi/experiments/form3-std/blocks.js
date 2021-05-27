Blockly.Blocks['QType/boolean'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "QType/boolean",
			  "message0" : "boolean",
			  
			  "colour" : 187,
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
			  "colour" : 111,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "leq",
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
			  "colour" : 327,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "gt",
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
			  
			  "colour" : 73,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "false",
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
			  "colour" : 286,
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
				  "type" : "input_value",
				  "check" : ["Id"]
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
			  "colour" : 342,
			  
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
			  "colour" : 90,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "neq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/hol'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/hol",
			  "message0" : "( %1 %2 ) %3 ",
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
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 337,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "hol",
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
			  "colour" : 145,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "eq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FloatValue'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FloatValue",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "FloatValue",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				
			],
			  "colour" : 225,
			  "output" : "FloatValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
			  "colour" : 76,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "or",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/stringasd'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/stringasd",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "g",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				
			],
			  "colour" : 316,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "stringasd",
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
			  
			  "colour" : 220,
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
			  "colour" : 323,
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
			  "colour" : 87,
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
			  "colour" : 150,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "group",
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
			  "colour" : 96,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "ifThenElse",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/moneysa'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/moneysa",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "gf",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				
			],
			  "colour" : 40,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "moneysa",
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
			  "colour" : 154,
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
			  "colour" : 250,
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
			  "colour" : 66,
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
				  "type" : "input_value",
				  "check" : ["Id"]
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
			  "colour" : 90,
			  
			  
			  
			  "inputsInline" : false,
			  "tooltip" : "",
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
			  "colour" : 85,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "not",
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
			  "colour" : 226,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "ifThen",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/varsad'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/varsad",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "name",
				  "type" : "input_value",
				  "check" : ["Id"]
				},
				
			],
			  "colour" : 329,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "varsad",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expr/integersad'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expr/integersad",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "f",
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				
			],
			  "colour" : 97,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "integersad",
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
			  
			  "colour" : 243,
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
				  "type" : "input_value",
				  "check" : ["Id"]
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
			  "colour" : 322,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "question",
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
			  "colour" : 316,
			  "output" : "Label",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "label",
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
			  
			  "colour" : 44,
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
			  "colour" : 107,
			  "output" : "Expr",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "div",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegerValue'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegerValue",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "IntegerValue",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 83,
			  "output" : "IntegerValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
			  "colour" : 235,
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
			  
			  "colour" : 171,
			  "output" : "QType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "integer",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StringValue'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StringValue",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "StringValueName",
				  "type" : "field_input",
				  "text" : "StringValue"
				},
				
			],
			  "colour" : 107,
			  "output" : "StringValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
	