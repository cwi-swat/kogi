Blockly.Blocks['Declarations/declarations'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declarations/declarations",
			  "message0" : "declare %1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "decls",
				  "type" : "input_statement",
				  "check" : ["Declaration", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 333,
			  "output" : "Declarations",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "declarations",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/conc'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/conc",
			  "message0" : "%1 || %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 329,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "conc",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Ttype/string'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Ttype/string",
			  "message0" : "string",
			  
			  "colour" : 231,
			  "output" : "Ttype",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "string",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/asgStat'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/asgStat",
			  "message0" : "%1 := %2 %3 ",
			  "args0" : [
				{
				  "name" : "var",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 335,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "asgStat",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/whileStat'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/whileStat",
			  "message0" : "while %1 %2 do %3 %4 od %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "body",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 267,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "whileStat",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/add'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/add",
			  "message0" : "%1 + %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 158,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "add",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/sub'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/sub",
			  "message0" : "%1 - %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 108,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "sub",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Declaration/decl'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declaration/decl",
			  "message0" : "%1 : %2 %3 ",
			  "args0" : [
				{
				  "name" : "id",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Ttype",
				  "type" : "input_value",
				  "check" : ["Ttype"]
				},
				
			],
			  "colour" : 130,
			  
			  "previousStatement" : "Declaration",
			  "nextStatement" : "Declaration",
			  "inputsInline" : true,
			  "tooltip" : "decl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Program/program'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Program/program",
			  "message0" : "begin %1 %2 %3 end %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Declarations",
				  "type" : "input_value",
				  "check" : ["Declarations"]
				},
				  	{
				  "name" : "body",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
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
Blockly.Blocks['Statement/ifElseStat'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/ifElseStat",
			  "message0" : "if %1 %2 then %3 %4 else %5 %6 fi %7 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "thenPart",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "elsePart",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 235,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "ifElseStat",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Ttype/natural'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Ttype/natural",
			  "message0" : "natural",
			  
			  "colour" : 217,
			  "output" : "Ttype",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "natural",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/idP'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/idP",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "name",
				  "type" : "field_input",
				  "text" : ""
				},
				
			],
			  "colour" : 145,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "idP",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Id/id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Id/id",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Id",
				  "type" : "field_input",
				  "text" : "variable"
				},
				
			],
			  "colour" : 126,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['String/string'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "String/string",
			  "message0" : "\" %1 %2 \" %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "StringName",
				  "type" : "field_input",
				  "text" : "String"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 148,
			  "output" : "String",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/strCon'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/strCon",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "string",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 165,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "strCon",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/natCon'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/natCon",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "natcon",
				  "type" : "input_value",
				  "check" : ["Natural"]
				},
				
			],
			  "colour" : 119,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "natCon",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Natural/natural'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Natural/natural",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "NaturalName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 221,
			  "output" : "Natural",
			  
			  
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
	