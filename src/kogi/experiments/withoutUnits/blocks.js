Blockly.Blocks['P/i'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "P/i",
			  "message0" : "in",
			  
			  "colour" : 127,
			  "output" : "P",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "i",
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
			  "colour" : 314,
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
				  "name" : "d",
				  "type" : "input_value",
				  "check" : ["D"]
				},
				  	{
				  "name" : "n",
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
	