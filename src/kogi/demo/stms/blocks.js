Blockly.Blocks['Statement/tmp'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/tmp",
			  "message0" : "hola",
			  
			  "colour" : 114,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "tmp",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Stm/s1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Stm/s1",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Statement",
				  "type" : "input_statement",
				  "check" : ["Statement"]
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
Blockly.Blocks['Statement/dm'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/dm",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "body",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				
			],
			  "colour" : 331,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "dm",
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

 //Storage options
BlocklyStorage.backupOnUnload();	
window.setTimeout(BlocklyStorage.restoreBlocks, 0);
function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}
	