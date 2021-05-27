Blockly.Blocks['AngleValue/angle'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AngleValue/angle",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "AngleValue",
				  "type" : "field_angle",
				  "angle" : 90
				},
				
			],
			  "colour" : 307,
			  "output" : "AngleValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Field/boolz'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Field/boolz",
			  "message0" : "bool: %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "val",
				  "type" : "input_value",
				  "check" : ["BooleanValue"]
				},
				
			],
			  "colour" : 83,
			  "output" : "Field",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "boolz",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FloatValue/float'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FloatValue/float",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "FloatValue",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				
			],
			  "colour" : 210,
			  "output" : "FloatValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegerValue/number'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegerValue/number",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "IntegerValue",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 142,
			  "output" : "IntegerValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Field/angle'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Field/angle",
			  "message0" : "angle: %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "val",
				  "type" : "input_value",
				  "check" : ["AngleValue"]
				},
				
			],
			  "colour" : 17,
			  "output" : "Field",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "angle",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Field/number'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Field/number",
			  "message0" : "int: %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "val",
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				
			],
			  "colour" : 350,
			  "output" : "Field",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "number",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BooleanValue/boolean'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BooleanValue/boolean",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "StringValue",
				  "type" : "field_checkbox",
				  "checked" : false
				},
				
			],
			  "colour" : 29,
			  "output" : "BooleanValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Field/float'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Field/float",
			  "message0" : "float: %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "val",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				
			],
			  "colour" : 271,
			  "output" : "Field",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "float",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Field/id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Field/id",
			  "message0" : "id: %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "val",
				  "type" : "input_value",
				  "check" : ["Id"]
				},
				
			],
			  "colour" : 23,
			  "output" : "Field",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "id",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Field'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Field",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "start",
				  "type" : "input_value",
				  "check" : ["Field"]
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
			  "colour" : 6,
			  "output" : "Id",
			  
			  
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
// workspace.addChangeListener(Blockly.Events.disableOrphans);

 //Storage options
BlocklyStorage.backupOnUnload();	
window.setTimeout(BlocklyStorage.restoreBlocks, 0);
function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}
	