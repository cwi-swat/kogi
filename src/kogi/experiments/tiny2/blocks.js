Blockly.Blocks['B/b'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "B/b",
			  "message0" : "b %1 ",
			  "args0" : [
				{
				  "name" : "b",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 148,
			  "output" : "B",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['A/p1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "A/p1",
			  "message0" : "a %1 ",
			  "args0" : [
				{
				  "name" : "a",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 222,
			  "output" : "A",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "p1",
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
			  "colour" : 36,
			  "output" : "A",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "p2",
			  "helpUrl" : ""
			}
		);
	}
}

Blockly.Blocks['A'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "A",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "start",
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
	