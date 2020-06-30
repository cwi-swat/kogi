Blockly.Blocks['S/s'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "S/s",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "X",
				  "type" : "input_value",
				  "check" : ["X"]
				},
				  	{
				  "name" : "Y",
				  "type" : "input_value",
				  "check" : ["Y"]
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
Blockly.Blocks['Y/b'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Y/b",
			  "message0" : "b",
			  
			  "colour" : 220,
			  "output" : "Y",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['M/n'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "M/n",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "N",
				  "type" : "input_value",
				  "check" : ["N"]
				},
				
			],
			  "colour" : 349,
			  "output" : "M",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "n",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Z/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Z/m",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "M",
				  "type" : "input_value",
				  "check" : ["M"]
				},
				
			],
			  "colour" : 338,
			  "output" : "Z",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Y/z'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Y/z",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Z",
				  "type" : "input_value",
				  "check" : ["Z"]
				},
				
			],
			  "colour" : 35,
			  "output" : "Y",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "z",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['N/a'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "N/a",
			  "message0" : "a",
			  
			  "colour" : 179,
			  "output" : "N",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "a",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['X/a'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "X/a",
			  "message0" : "a",
			  
			  "colour" : 89,
			  "output" : "X",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "a",
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
	