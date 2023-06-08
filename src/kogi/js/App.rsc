module kogi::js::App

import IO;
import String;
import List;
import kogi::Block;
import kogi::Block2Section;
import kogi::json::Parser;
import kogi::util::Util;

void createJS(list[Block] blocks, str divId, Toolbox toolbox, loc dstPath, list[str] startingBlocks, str tbposition = "start", bool trashCan = true, bool disableOrphans = true, bool isStartingBlock = false){
	content = ( "" | it + createBlocklyBlock(block) | block <- blocks );
	content += createToolbox(toolbox);
    content += blocklyApp(divId, tbposition, trashCan, disableOrphans);
    
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
    
	content += createDebounce();
    content += createBlockChangeListener();
	content += createTextChangeListener();
    
    writeFile(dstPath + "blocks.js", content);
}

str createBlocklyBlock(Block block) =
	"Blockly.Blocks[\'<trim(blockName(block))>\'] = {
	'	init: function() {
	'		this.jsonInit(
	'			<toJson(block)>
	'		);
	'	}
	'}
	'
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

str createToolbox(Toolbox toolbox) = 
	"var toolbox = {
	'	\'kind\': \'categoryToolbox\',
	'	\'contents\': [
	'		<tbSection2Elements(toolbox.sections)[..-2]>
	'	]
	'}
	'
	'";

str tbSection2Elements(list[Section] sections) = 
	"<for (section <- sections) {>{
	'	\'kind\': \'category\',
	'	\'name\': \'<section.category>\',
	'	\'colour\': \'<getColour(section.colour)>\',
	'	\'contents\': [
	'		<tbBlocks2Elements(section.blocks)[..-2]>
	'	]
	'}, <}>";

str tbBlocks2Elements(list[Block] blocks) = 
	"<for (block <- blocks) {>{
	'	\'kind\': \'block\',
	'	\'type\': \'<block.\type>\'
	'}, <}>";

str blocklyApp(str divId, str tbposition, bool trashCan, bool disableOrphans) = 
	"var workspace = Blockly.inject(\'<divId>\', {
	'	toolbox: toolbox,
	'	collapse: true,
	'	toolboxPosition: \'<tbposition>\',
	'	trashcan: <trashCan>,
	'	theme: {\'startHats\': true}
	'});
	'
	'const langGen = new Blockly.Generator(\'LangGen\');
	'< if (disableOrphans) { >
	'workspace.addChangeListener(Blockly.Events.disableOrphans);< } >
	'
	'";

str createDebounce() = 
	"function debounce(func, wait) {
    '	var timeout;
	'
    '	return function() {
    '	    clearTimeout(timeout);
	'
    '	    timeout = setTimeout(() =\> {
    '	        func.apply(this, arguments);
    '	    }, wait);
    '	}
	'}
	'
	'var isUpdating = false;
	'
	'";

str createBlockChangeListener() = 
	"function blockToTextUpdate() {
	'	if (isUpdating) {
	'		isUpdating = false;
	'	} else {
	'		isUpdating = true;
	'		var code = langGen.workspaceToCode(workspace);
	'		editor.setValue(code);
	'	}
	'}
	'
	'var debouncedB2TUpdate = debounce(blockToTextUpdate, 1000);
	'	
	'workspace.addChangeListener(debouncedB2TUpdate);
	'
	'";

str createTextChangeListener() = 
	"function textToBlockUpdate() {
	'	if (isUpdating) {
	'		isUpdating = false;
	'	} else {
	'		isUpdating = true;
	'		fetch(\'/parse?\' + new URLSearchParams({code: editor.getValue()})).then(
	'			x =\> x.text()
	'		).then( y =\> {
	'			if (y.charAt(0) === \"E\" ) {
	'				error_bar = document.getElementById(\'error_bar\');
	'				error_bar.innerHTML = y;
	'				error_bar.style.opacity = 1;
	'				isUpdating = false;
	'			} else {
	'				var response1 = JSON.parse(y);
	'				error_bar.style.opacity = 0;
	'				error_bar.value = \"\";
	'				
	'				Blockly.serialization.workspaces.load(response1, workspace);
	'			}
	'		});
	'	}
	'}
	'
	'var debouncedT2BUpdate = debounce(textToBlockUpdate, 1000);
	'
	'editor.getModel().onDidChangeContent(debouncedT2BUpdate);
	'";
	
str blockName(Block block) 
	= block.\type;
	
