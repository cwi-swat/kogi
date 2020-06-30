Blockly.Blocks['B/b2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "B/b2",
			  "message0" : "b",
			  
			  "colour" : 256,
			  "output" : "B",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['B/b1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "B/b1",
			  "message0" : "b %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "B",
				  "type" : "input_value",
				  "check" : ["B"]
				},
				
			],
			  "colour" : 50,
			  "output" : "B",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b1",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['C/c'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "C/c",
			  "message0" : "c %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "C",
				  "type" : "input_value",
				  "check" : ["C"]
				},
				
			],
			  "colour" : 199,
			  "output" : "C",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "c",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['A/b'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "A/b",
			  "message0" : "b %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "B",
				  "type" : "input_value",
				  "check" : ["B"]
				},
				
			],
			  "colour" : 123,
			  "output" : "A",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['A/a'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "A/a",
			  "message0" : "a %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "A",
				  "type" : "input_value",
				  "check" : ["A"]
				},
				
			],
			  "colour" : 296,
			  "output" : "A",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "a",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['S/as'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "S/as",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "A",
				  "type" : "input_value",
				  "check" : ["A"]
				},
				  	{
				  "name" : "S",
				  "type" : "input_value",
				  "check" : ["S"]
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
Blockly.Blocks['S/a'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "S/a",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "A",
				  "type" : "input_value",
				  "check" : ["A"]
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
Blockly.Blocks['A/c'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "A/c",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "C",
				  "type" : "input_value",
				  "check" : ["C"]
				},
				
			],
			  "colour" : 145,
			  "output" : "A",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "c",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['C/b'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "C/b",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "B",
				  "type" : "input_value",
				  "check" : ["B"]
				},
				
			],
			  "colour" : 63,
			  "output" : "C",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b",
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
	