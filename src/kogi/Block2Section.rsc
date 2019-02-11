module kogi::Block2Section

import IO;
import List;
import String;
import kogi::Block;
import kogi::util::Util;

list[Section] createSections(list[Block] blocks) {
	startBlock = getStartBlock(blocks);
	blocks = removeFirstBlock(blocks);
	categories = getCategories(blocks);
	return createSortedSections(startBlock,categories, blocks);
}

Section groupBlocksByCategory(str category, list[Block] blocks) {
	filteredBlocks = [ block | block <- blocks, block.\type == category ];
	return section(getBasicType(category), hsv(getAverageColor(filteredBlocks)), filteredBlocks);
}

list[Section] createSortedSections(list[Block] startBlock, set[str] categories, list[Block] blocks) {
	first = createStartSection(startBlock);
	sections = [ groupBlocksByCategory(category, blocks) | category <- categories ];
	return first + sortSections(sections);
}

Section createStartSection(list[Block] block)
	= section( "Start" , hsv(90) , block);

@doc{ 
	This function removes the constructor from the block type.
}	
str getBasicType(str \type)
	= contains(\type, "/") ? split("/", \type)[0] : \type;
	
list[Block] removeFirstBlock(list[Block] blocks)
	= [ block | block <- blocks, block.name != "start" ];

list[Block] getStartBlock(list[Block] blocks)
	= [ block | block <- blocks, block.name == "start" ];

set[str] getCategories(list[Block] blocks)
	= { block.\type | block <- blocks };
	
list[Section] sortSections(list[Section] sections)
	= sort(sections, bool(Section a, Section b) { 
					 	return toLowerCase(a.category[0]) < toLowerCase(b.category[0]); 
					 }); 
