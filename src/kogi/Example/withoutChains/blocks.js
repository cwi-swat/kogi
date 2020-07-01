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
			  
			  "colour" : 337,
			  "output" : "Y",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Y/a'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Y/a",
			  "message0" : "a",
			  
			  "colour" : 146,
			  "output" : "Y",
			  
			  
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
			  
			  "colour" : 171,
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
	