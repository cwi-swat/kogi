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
			  "colour" : 186,
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
			  "colour" : 101,
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
			  
			  "colour" : 249,
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
				  "type" : "input_value",
				  "check" : ["Id"]
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
			  "colour" : 159,
			  
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
			  "colour" : 156,
			  
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
			  "colour" : 181,
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
			  "colour" : 68,
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
				  "type" : "input_value",
				  "check" : ["Id"]
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
			  "colour" : 198,
			  
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
			  "colour" : 129,
			  
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
			  
			  "colour" : 195,
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
				  "type" : "input_value",
				  "check" : ["Id"]
				},
				
			],
			  "colour" : 51,
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
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "IdName",
				  "type" : "field_input",
				  "text" : "Id"
				},
				
			],
			  "colour" : 202,
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
			  "colour" : 311,
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
			  "colour" : 85,
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
			  "colour" : 232,
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
				  "type" : "field_input",
				  "text" : "Natural"
				},
				
			],
			  "colour" : 251,
			  "output" : "Natural",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['epsilon'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "epsilon",
			  "message0" : "epsilon",
			  "args0" : [
			
			],
			  "colour" : 90,
			  
			  "previousStatement" : null,
			  
			  "inputsInline" : false,
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
function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}
BlocklyStorage.backupOnUnload();	
window.setTimeout(BlocklyStorage.restoreBlocks, 0);