Blockly.Blocks['Stmt/tmp'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Stmt/tmp",
			  "message0" : "example",
			  
			  "colour" : 77,
			  
			  "previousStatement" : "Stmt",
			  "nextStatement" : "Stmt",
			  "inputsInline" : true,
			  "tooltip" : "tmp",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Program/prog'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Program/prog",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "If",
				  "type" : "input_value",
				  "check" : ["If"]
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
Blockly.Blocks['Id/id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Id/id",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Id",
				  "type" : "field_input",
				  "text" : "variable"
				},
				
			],
			  "colour" : 154,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['If/state'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "If/state",
			  "message0" : "if %1 { %2 %3 } %4 ",
			  "args0" : [
				  	{
				  "name" : "id",
				  "type" : "input_value",
				  "check" : ["Id"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "transitions",
				  "type" : "input_statement",
				  "check" : ["Stmt", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 248,
			//   "output" : "If",
			  
			  "previousStatement" : "Stmt",
			  "nextStatement" : "Stmt",
			  "inputsInline" : true,
			  "tooltip" : "state",
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
// workspace.addChangeListener(Blockly.Events.disableOrphans);

 //Storage options
BlocklyStorage.backupOnUnload();	
window.setTimeout(BlocklyStorage.restoreBlocks, 0);
function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}
	