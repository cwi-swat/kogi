module kogi::js::App

import IO;
import String;
import List;
import kogi::Block;
import kogi::json::Parser;
import kogi::Block2Section;

void createJS(list[Block] blocks, str divId, str toolbarId, loc dstPath, list[str] startingBlocks, str tbposition = "start", bool trashCan = true, bool disableOrphans = true, bool isStartingBlock = false){
	content = ( "" | it + createBlocklyBlock(block) | block <- blocks );
    content += blocklyApp(divId, toolbarId, tbposition, trashCan, disableOrphans);
    
    for (Block block <- blocks) {
    	for (str startingBlock <- startingBlocks) {
    		if (block.\type == startingBlock) {
    			content += createStartingBlockCode(startingBlock);
    			isStartingBlock = true;
    		} 
    	}
    	
    	if (!isStartingBlock) {
    		content += createDefaultBlockCode(block.\type);
    	}
    	
    	isStartingBlock = false;
    }
    
    content += createChangeListener();
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
	'
	'const langGen = new Blockly.Generator(\'LangGen\');
	'
	< if (disableOrphans) { >
	'workspace.addChangeListener(Blockly.Events.disableOrphans);
	< } >
	'
	' //Storage options
	'//BlocklyStorage.backupOnUnload();	
	'//window.setTimeout(BlocklyStorage.restoreBlocks, 0);
	'
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
	
str createDefaultBlockCode(str block) = 
	"langGen[\'<block>\'] = function (block) {
	'	return \'\';
	'}
	'
	'";

str createStartingBlockCode(str block) = 
	"langGen[\'<block>\'] = function(block) {
	'	function getBlockValues(a) {
	'			const returnBlock = a.getDescendants(true);
	'				if (returnBlock.length \> 0) {
	'					var counter = 0;
	'					var returnString = \'\';
	'					//while (typeof returnBlock[counter] !== \'undefined\') {
	'					//	returnString += returnBlock[counter] + \'\\n\';
	'					//	counter += 1;
	'					//}
	'					
	'					if (typeof returnBlock[counter] !== \'undefined\') {
	'						returnString += returnBlock[counter] + \'\\n\';
	'					}
	'					
	'					return returnString;
	'				} else {
	'					return \'\';
	'				}
	'		}
	'
	'		result = getBlockValues(block)
	'			
	'		return result;
	'}
	'
	'";

str createChangeListener() = 
	"function myUpdateFunction(event) {
	'	var code = langGen.workspaceToCode(workspace);
	'	editor.setValue(code);
	'}
	'	
	'workspace.addChangeListener(myUpdateFunction);
	'
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
