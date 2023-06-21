Blockly.Blocks['Image/ubuntu'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Image/ubuntu",
			  "message0" : "Ubuntu Server",
			  
			  "colour" : 294,
			  "output" : "Image",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ubuntu",
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
			  "colour" : 350,
			  "output" : "IntegerValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IPV6/ipv6'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IPV6/ipv6",
			  "message0" : "IPV6: %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_checkbox",
				  "checked" : false
				},
				
			],
			  "colour" : 297,
			  "output" : "IPV6",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ipv6",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Image/awsLinux'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Image/awsLinux",
			  "message0" : "Amazon Linux",
			  
			  "colour" : 298,
			  "output" : "Image",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "awsLinux",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Instance/instance'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Instance/instance",
			  "message0" : "Instance  %1 %2 %3 %4 %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Image",
				  "type" : "input_value",
				  "check" : ["Image"]
				},
				  	{
				  "name" : "CPU",
				  "type" : "input_value",
				  "check" : ["CPU"]
				},
				  	{
				  "name" : "Memory",
				  "type" : "input_value",
				  "check" : ["Memory"]
				},
				  	{
				  "name" : "Storage",
				  "type" : "input_value",
				  "check" : ["Storage"]
				},
				  	{
				  "name" : "IPV6",
				  "type" : "input_value",
				  "check" : ["IPV6"]
				},
				
			],
			  "colour" : 32,
			  
			  "previousStatement" : "Instance",
			  "nextStatement" : "Instance",
			  "inputsInline" : true,
			  "tooltip" : "instance",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Memory/memory'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Memory/memory",
			  "message0" : "memory: %1 %2 GB %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 179,
			  "output" : "Memory",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "memory",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BooleanValue/true'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BooleanValue/true",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "StringValue",
				  "type" : "field_checkbox",
				  "checked" : false
				},
				
			],
			  "colour" : 325,
			  "output" : "BooleanValue",
			  
			  
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
			  "colour" : 237,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Resources/resources'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Resources/resources",
			  "message0" : "resources{{{ %1 { %2 %3 } %4 ",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Instance", "epsilon"]
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
Blockly.Blocks['Storage/storage'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Storage/storage",
			  "message0" : "Storage: %1 %2 size:  %3 %4 GB %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "StorageType",
				  "type" : "input_value",
				  "check" : ["StorageType"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 228,
			  "output" : "Storage",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "storage",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CPU/vcpus'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CPU/vcpus",
			  "message0" : "CPU: %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 158,
			  "output" : "CPU",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "vcpus",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StorageType/ssd'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StorageType/ssd",
			  "message0" : "SSD",
			  
			  "colour" : 343,
			  "output" : "StorageType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ssd",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StorageType/ebs'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StorageType/ebs",
			  "message0" : "EBS",
			  
			  "colour" : 86,
			  "output" : "StorageType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ebs",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Image/redHat'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Image/redHat",
			  "message0" : "Red Hat Enterprise",
			  
			  "colour" : 115,
			  "output" : "Image",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "redHat",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Image/windows'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Image/windows",
			  "message0" : "Windows Server2019",
			  
			  "colour" : 82,
			  "output" : "Image",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "windows",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BooleanValue/false'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BooleanValue/false",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "StringValue",
				  "type" : "field_checkbox",
				  "checked" : false
				},
				
			],
			  "colour" : 231,
			  "output" : "BooleanValue",
			  
			  
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
	

 //Storage options
BlocklyStorage.backupOnUnload();	
window.setTimeout(BlocklyStorage.restoreBlocks, 0);
function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}
	