module kogi::js::App

import IO;
import kogi::Block;
import kogi::json::Parser;

void createJS(list[Block] blocks, str divId, str toolbarId, loc dstPath){
	content = ( "" | it + createBlocklyBlock(block) | block <- blocks );
    content += blocklyApp(divId, toolbarId);
    writeFile(dstPath + "blocks.js", content);
}

str blocklyApp(str divId, str tbId, str tbposition = "start", bool trashCan = true) = 
	"function loadBlockly(){
	'	 Blockly.BlockSvg.START_HAT = true;
	'    var workspace = Blockly.inject(\'<divId>\', {
	'            toolbox: document.getElementById(\'<tbId>\'),
	'            collapse: true,
	'            toolboxPosition: \'<tbposition>\', // end
	'            trashcan: <trashCan>
	'    });
	'	 workspace.addChangeListener(Blockly.Events.disableOrphans);
	'}"
	;

str createBlocklyBlock(Block block) =
	"Blockly.Blocks[\'<block.name>\'] = {
	'    init: function() {
	'        this.jsonInit(
	'			<toJson(block)>
	' 		);
	'	}
	'}
	'";