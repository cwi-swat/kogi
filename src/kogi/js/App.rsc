module kogi::js::App

import IO;
import String;
import kogi::Block;
import kogi::json::Parser;

void createJS(list[Block] blocks, str divId, str toolbarId, loc dstPath, str tbposition = "start", bool trashCan = true, bool disableOrphans = false){
	content = ( "" | it + createBlocklyBlock(block) | block <- blocks );
    content += blocklyApp(divId, toolbarId, tbposition, trashCan, disableOrphans);
    content += showXML();
    writeFile(dstPath + "blocks.js", content);
}

str blocklyApp(str divId, str tbId, str tbposition, bool trashCan, bool disableOrphans) = 
	"Blockly.BlockSvg.START_HAT = true;
	'var workspace = Blockly.inject(\'<divId>\', {
	'	toolbox: document.getElementById(\'<tbId>\'),
	'	collapse: true,
	'   toolboxPosition: \'<tbposition>\', // end
	'   trashcan: <trashCan>
	'});
	< if (disableOrphans) { >
	'workspace.addChangeListener(Blockly.Events.disableOrphans);
	< } >
	'
	' //Storage options
	'BlocklyStorage.backupOnUnload();	
	'window.setTimeout(BlocklyStorage.restoreBlocks, 0);
	'";

str createBlocklyBlock(Block block) =
	"Blockly.Blocks[\'<trim(blockName(block))>\'] = {
	'	init: function() {
	'		this.jsonInit(
	'			<toJson(block)>
	'		);
	'	}
	'}
	'";
	
str blockName(Block block) 
	= block.\type;
	
str showXML() =
	"function xmlText() {
	'	var xml = Blockly.Xml.workspaceToDom(workspace);
	'	var xml_text = Blockly.Xml.domToPrettyText(xml);
	'	document.getElementById(\'textarea\').value = xml_text;
	'}
	";
