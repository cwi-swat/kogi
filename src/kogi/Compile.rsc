module kogi::Compile

import IO;
import String;
import ParseTree;
import kogi::Block;
import kogi::xml::Parser;
import kogi::Grammar2Block;
import kogi::toJson::Parser;



void createBlocklyApp(str divName, type[&T<:Tree] g, str title = "Block Language"){
	blocks = grammar2blocks(g);
	Section sectionz = section("tmp", hsv(200), blocks);
	Toolbox toolbox = toolbox([sectionz]);
		
	// create JS
	// TODO: The toolbox name should be parametrized!
	createJS(blocks, divName, "toolbox");
	// create HTML
	createHTML(parseToolbox(toolbox), title, divName);
}

//str createBlocklyApp(str divName, Toolbox toolb, BlockLang blocks, str title="Block Language"){
//
//	// create JS
//	createJS(blocks, divName, toolb.id);
//	// create HTML
//	createHTML(parseToolbox(toolb), title, divName);
//}

void createJS(list[Block] blocks, str divId, str toolbarId, str folderName = ""){
	content = (""| it + createBlocklyBlock(block) | block <- blocks);
    content += blocklyApp(divId, toolbarId);
    writeFile(|project://kogi/src/kogi/tmp/blocs.js|, content);
}

private loc HTML_TEMPLATE = |project://kogi/resources/blocklyTemplate.html|;

void createHTML(str toolbox, str title, str div){
	writeFile(|project://kogi/src/kogi/tmp/index.html|, HTMLcontent(toolbox, title, div));
}

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
	'    var workspace = Blockly.inject(\'<divId>\', {
	'            toolbox: document.getElementById(\'<tbId>\'),
	'            collapse: true,
	'            toolboxPosition: \'<tbposition>\', // end
	'            trashcan: <trashCan>
	'    });
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