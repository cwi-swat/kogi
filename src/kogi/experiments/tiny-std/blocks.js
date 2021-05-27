Blockly.Blocks['A/p1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "A/p1",
			  "message0" : "a",
			  
			  "colour" : 90,
			  
			  
			  
			  "inputsInline" : false,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['B/b'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "B/b",
			  "message0" : "b",
			  
			  "colour" : 316,
			  "output" : "B",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['A/p2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "A/p2",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "B",
				  "type" : "input_value",
				  "check" : ["B"]
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
	