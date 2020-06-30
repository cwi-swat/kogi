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
			  
			  "colour" : 297,
			  "output" : "Y",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b",
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
			  
			  "colour" : 167,
			  "output" : "X",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "a",
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
			  
			  "colour" : 274,
			  
			  "previousStatement" : "N",
			  "nextStatement" : "N",
			  "inputsInline" : true,
			  "tooltip" : "a",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Z/a'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Z/a",
			  "message0" : "a",
			  
			  "colour" : 351,
			  
			  "previousStatement" : "Z",
			  "nextStatement" : "Z",
			  "inputsInline" : true,
			  "tooltip" : "a",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['M/a'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "M/a",
			  "message0" : "a",
			  
			  "colour" : 107,
			  
			  "previousStatement" : "M",
			  "nextStatement" : "M",
			  "inputsInline" : true,
			  "tooltip" : "a",
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
			  
			  "colour" : 308,
			  "output" : "Y",
			  
			  
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
	