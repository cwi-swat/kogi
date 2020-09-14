module kogi::Compile

import IO; 
import Set;


import ParseTree;
import kogi::Block;
import kogi::js::App;
import kogi::util::Util;
import kogi::json::Parser;
import kogi::html::WebPage;
import kogi::Grammar2Blockly;
import kogi::Block2Section;
import kogi::xml::Toolbox2XML;
import kogi::BlocksCustomization;

import kogi::simplification::Util;

void createBlocklyApp(set[Production] productions, str divName = "blockDiv", str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/demo/result|, str blockly = "../../../../resources/blockly") {
	blocks = renameDuplicatedBlocks(grammar2blocks(productions));
	Toolbox tb = toolbox(createSections(blocks));
	createJS(blocks, divName, toolboxName, targetPath);
	createHTML(parseToolbox(tb), title, divName, targetPath, blockly);
}

void createBlocklyApp(type[&T<:Tree] grammar, str divName = "blockDiv", str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/demo/result|, str blockly = "../../../../resources/blockly")
  = createBlocklyApp(getAllProductions(grammar), divName = divName, title = title, toolboxName = toolboxName, targetPath = targetPath, blockly = blockly);

void createBlocklyApp(list[Block] blocks, Toolbox toolbox, str divName = "blockDiv", str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/demo/result|, str blockly = "../../../../resources/blockly") {
	createJS(blocks, divName, toolboxName, targetPath);
	createHTML(parseToolbox(toolbox), title, divName, targetPath, blockly);
}

void createBlocklyApp(type[&T<:Tree] grammar, Toolbox tool, str divName = "kogiDiv", str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/demo/result|, str blockly = "../../../../resources/blockly") {
	initialBlocks = grammar2blocks(grammar);
	Toolbox toolbox = updateBlocksDefinition(tool, initialBlocks);
	createJS(getBlocks(toolbox), divName, toolboxName, targetPath);
	createHTML(parseToolbox(toolbox), title, divName, targetPat, blockly);
}

// Work in progress. To have a different mechanism for creating blocks. One relies on the assumption that each production rule produces a single block, yet this is limited. So we also want to be able to produce one block from a nonterminal
void createBlocklyApp(map[Symbol, Production] grammar, str divName = "blockDiv", str title = "Block Language", str toolboxName = "toolbox", loc targetPath = |project://kogi/src/kogi/demo/result|, str blockly = "../../../../resources/blockly") {
	
	//non-terminals -> to a single block
	// An example of this is when you have a non-terminal and all the productions are literals. Therefore, we produce a dropdown field
	
	set[Symbol] onlyNonterminals =  getLiteralOnlyProductions(grammar);
	// These are the productions of the nonterminals.
	set[Production] ntProductions = ( {} | it + grammar[s].alternatives | s <- onlyNonterminals );
	
	Production pp = grammar[getOneFrom(onlyNonterminals)];

	// Take the difference	
	set[Production] remainingProductions = ( {} | it + grammar[p].alternatives | p <- grammar ) - ntProductions;
	
	blocks = grammar2blocks(remainingProductions);
	blocks = renameDuplicatedBlocks(blocks);
	
	// Create the rest of the app
	Toolbox tb = toolbox(createSections(blocks));
	createJS(blocks, divName, toolboxName, targetPath);
	createHTML(parseToolbox(tb), title, divName, targetPath, blockly);
	// productions2 block
	//grammar2Blocks();
}

@doc{
This functions take a whole nonterminal and its production rules and produces a single 'alternative' block.
}
void literalBlock(Production p) {
	Symbol s = p.def;
	set[Production] alter = p.alternatives;
}


set[Symbol] getLiteralOnlyProductions(map[Symbol, Production] g) {
	return { nonTerminal | Symbol nonTerminal <- g, hasOnlyLiterals(g[nonTerminal]) };
}

bool hasOnlyLiterals(Production p) {
	for (alt <- p.alternatives) {
		if (!hasOnlyLiterals(alt.symbols)) {
			return false;
		}
	}
	return true;
}


bool hasOnlyLiterals(list[Symbol] symbols) {
	for (Symbol s <- symbols) {
		if (!isLiteral(s))
			return false;
	}
	return true;
}

set[Production] getAllProductions(type[&T <: Tree] grammar) {
     return { p | /p:prod(_,_,_) := 
     	( {} | it + grammar.definitions[s].alternatives | Symbol s <- grammar.definitions ), !isEmpty(p.symbols), \layouts(_) !:= p.def };
}