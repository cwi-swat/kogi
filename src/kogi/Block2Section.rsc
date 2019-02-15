module kogi::Block2Section

import List;
import String;
import kogi::Block;
import kogi::util::Util;

list[Section] createSections(list[Block] blocks) {
	categories = getCategories(blocks);
	return createSortedSections(categories, blocks);
}

Section groupBlocksByCategory(str category, list[Block] blocks) {
	filteredBlocks = [ block | block <- blocks, matches(block.\type, category) ];
	return section(getCategory(category), hsv(getAverageColor(filteredBlocks)), filteredBlocks);
}

bool matches(str \type, str cat) 
	= getCategory(\type) == cat ? true : false;

list[Section] createSortedSections(set[str] categories, list[Block] blocks) {
	//first = section( "Start" , hsv(90) , startBlock);
	sections = [ groupBlocksByCategory(category, blocks) | category <- categories ];
	return sortSections(sections);
}
	
list[Block] getStartBlock(list[Block] blocks)
	= [ block | block <- blocks, block.name == "start" ];

set[str] getCategories(list[Block] blocks)
	= { getCategory(block.\type) | block <- blocks };
	
list[Section] sortSections(list[Section] sections)
	= sort(sections, bool(Section a, Section b) { 
					 	return toLowerCase(a.category[0]) < toLowerCase(b.category[0]); 
		  }); 

str getCategory(str \type)
	= size(split("/", \type)) > 1 ? split("/", \type)[0] : \type;
	