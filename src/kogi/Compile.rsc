module kogi::Compile

import IO;
import String;
import ParseTree;
import lang::json::IO;
import kogi::Grammar2Block;


void createBlocklyApp(str divName, type[&T<:Tree] g, str title = "Block Language"){
	blocks = grammar2blocks(g);
	toolb = createToolbox(blocks);
	// create JS
	createJS(blocks, divName, toolb.id);
	// create HTML
	createHTML(parseToolbox(toolb), title, divName);
}

str createBlocklyApp(str divName, Toolbox toolb, BlockLang blocks, str title="Block Language"){

	// create JS
	createJS(blocks, divName, toolb.id);
	// create HTML
	createHTML(parseToolbox(toolb), title, divName);
}

void createJS(BlockLang blocks, str divId,str toolbarId, str folderName = ""){
	content = (""| it + toBlocklyLang(blo) | blo<- blocks);
    content = replaceAll(content, "\"null\"", "null");
    
    //toolbar
    content += blocklyApp(divId, toolbarId);
    
    writeFile(|project://kogi/src/kogi/gen/blocs.js|, content);
}

private loc HTML_TEMPLATE = |project://kogi/resources/blocklyTemplate.html|;

void createHTML(str tb, str title, str div){
	writeFile(|project://kogi/src/kogi/gen/index.html|, HTMLcontent(tb, title, div));
}

str HTMLcontent(str tb, str title, str div) 
  = replaceAll(
       replaceAll(
         replaceAll(tmpl, 
           "{__TOOLBOX__}", tb),
           "{__TITLE__}", title),
           "{__DIV__}", div)
  when tmpl := readFile(HTML_TEMPLATE);


str blocklyApp(str divId, str tbId, str tbposition="start", bool trashCan=true) = 
"
'function loadBlockly(){
'    var workspace = Blockly.inject(\'<divId>\', {
'            toolbox: document.getElementById(\'<tbId>\'),
'            collapse: true,
'            toolboxPosition: \'<tbposition>\', // end
'            trashcan: <trashCan>
'    });
'}
";

str toBlocklyLang(Block b) =
	"Blockly.Blocks[\'<b["type"]>\'] = {
	'    init: function() {
	'        this.jsonInit(
	'		< toJSON(b, true)>
	' 		);
	'	}
	'}
	";
	
str parseToolbox(Toolbox tb) =
"
'\<xml id=\"<tb.id>\" style=\"display: none\"\>
'    \<category name=\"<tb.category>\" colour=\"20\"\>
'        <("" | it+ "\<block type=\"<bl>\"\>\</block\>\n" | bl <- tb.bls)>
'    \</category\>
'\</xml\>
";