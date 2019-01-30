module kogi::Compile

import IO;
import List;
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
import kogi::BlocksCustomization;

void createBlocklyApp(type[&T<:Tree] grammar, str divName = "blockDiv", str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/demo/result|){
	blocks = renameDuplicatedBlocks(grammar2blocks(grammar));
	sections = createSections(blocks);
	Toolbox toolbox = toolbox(sections);
	createJS(blocks, divName, toolboxName, targetPath);
	createHTML(parseToolbox(toolbox), title, divName, targetPath);
}

void createBlocklyApp(list[Block] blocks, Toolbox toolbox, str divName = "blockDiv", str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/demo/result|){
	createJS(blocks, divName, toolboxName);
	createHTML(parseToolbox(toolbox), title, divName);
}

void createBlocklyApp(type[&T<:Tree] grammar, Toolbox tool, str divName = "kogiDiv", str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/demo/result|){
	initialBlocks = grammar2blocks(grammar);
	Toolbox toolbox = updateBlocksDefinition(tool, initialBlocks);
	createJS(getBlocks(toolbox), divName, toolboxName, targetPath);
	createHTML(parseToolbox(toolbox), title, divName, targetPath);
}