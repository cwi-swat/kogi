module kogi::Compile

import IO;
import String;
import ParseTree;
import kogi::Util;
import kogi::Block;
import kogi::xml::Parser;
import kogi::json::Parser;
import kogi::Grammar2Block;

void createBlocklyApp(str divName, type[&T<:Tree] grammar, str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/result|){
	blocks = grammar2blocks(grammar);
	Section sections = section("Grammar", hsv(getAverageColor(blocks)), blocks);
	Toolbox toolbox = toolbox([sections]);
	// create JS
	createJS(blocks, divName, toolboxName, targetPath);
	// create HTML
	createHTML(parseToolbox(toolbox), title, divName, targetPath);
}

void createBlocklyApp(str divName, list[Block] blocks, Toolbox toolbox, str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/result|){
	// create JS
	createJS(blocks, divName, toolboxName);
	// create HTML
	createHTML(parseToolbox(toolbox), title, divName);
}

void createJS(list[Block] blocks, str divId, str toolbarId, loc dstPath){
	content = ( "" | it + createBlocklyBlock(block) | block <- blocks );
    content += blocklyApp(divId, toolbarId);
    writeFile(dstPath + "blocks.js", content);
}

private loc HTML_TEMPLATE = |project://kogi/resources/blocklyTemplate.html|;

void createHTML(str toolbox, str title, str div, loc dstPath)
	= writeFile(dstPath + "index.html", HTMLcontent(toolbox, title, div));


str HTMLcontent(str toolbox, str title, str div) 
  = replaceAll(
       replaceAll(
         replaceAll(tmpl, 
           "{__TOOLBOX__}", toolbox),
           "{__TITLE__}", title),
           "{__DIV__}", div)
  when tmpl := readFile(HTML_TEMPLATE);


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
	"Blockly.Blocks[\'<block.\type>\'] = {
	'    init: function() {
	'        this.jsonInit(
	'			<toJson(block)>
	' 		);
	'	}
	'}
	'";