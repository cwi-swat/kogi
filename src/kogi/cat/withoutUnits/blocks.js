Blockly.Blocks['D/the'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "D/the",
			  "message0" : "the",
			  
			  "colour" : 70,
			  "output" : "D",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "the",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PP/p'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PP/p",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "P",
				  "type" : "input_value",
				  "check" : ["P"]
				},
				  	{
				  "name" : "NP",
				  "type" : "input_value",
				  "check" : ["NP"]
				},
				
			],
			  "colour" : 156,
			  "output" : "PP",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "p",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['NP/d'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "NP/d",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "D",
				  "type" : "input_value",
				  "check" : ["D"]
				},
				  	{
				  "name" : "N",
				  "type" : "input_value",
				  "check" : ["N"]
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
Blockly.Blocks['NP/n'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "NP/n",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "NP",
				  "type" : "input_value",
				  "check" : ["NP"]
				},
				  	{
				  "name" : "PP",
				  "type" : "input_value",
				  "check" : ["PP"]
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
Blockly.Blocks['P/i'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "P/i",
			  "message0" : "in",
			  
			  "colour" : 209,
			  "output" : "P",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "i",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['N/cat'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "N/cat",
			  "message0" : "cat",
			  
			  "colour" : 359,
			  "output" : "N",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "cat",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['N/hat'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "N/hat",
			  "message0" : "hat",
			  
			  "colour" : 223,
			  "output" : "N",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "hat",
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
	