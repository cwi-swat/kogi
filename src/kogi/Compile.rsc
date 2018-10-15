module kogi::Compile

import IO;
import String;
import ParseTree;
import kogi::Util;
import kogi::Block;
import kogi::js::App;
import kogi::xml::Parser;
import kogi::json::Parser;
import kogi::html::WebPage;
import kogi::Grammar2Block;
import kogi::Block2Section;

void createBlocklyApp(type[&T<:Tree] grammar, str divName = "blockDiv", str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/result|){
	blocks = grammar2blocks(grammar);
	Toolbox toolbox = toolbox(createSections(blocks));
	// create JS
	createJS(blocks, divName, toolboxName, targetPath);
	// create HTML
	createHTML(parseToolbox(toolbox), title, divName, targetPath);
}

void createBlocklyApp(list[Block] blocks, Toolbox toolbox, str divName = "blockDiv", str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/result|){
	// create JS
	createJS(blocks, divName, toolboxName);
	// create HTML
	createHTML(parseToolbox(toolbox), title, divName);
}