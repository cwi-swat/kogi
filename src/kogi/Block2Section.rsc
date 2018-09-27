module kogi::Block2Section

import IO;
import kogi::Util;
import kogi::Block;

list[Section] createSections(list[Block] blocks){
	categories = {block.\type | block <- blocks };	
	return getStartCategory(blocks) + [ blocksByCategory(category, blocks) | category <- categories];
}

Section blocksByCategory(str category, list[Block] blocks){
	filteredBlocks = [ block | block <- blocks, block.\type == category && block.name != "start"];
	return section( category, hsv(getAverageColor(filteredBlocks)), filteredBlocks);
}

Section getStartCategory(list[Block] blocks)
	=  section( "Start" , hsv(90) , [ block | block <- blocks, block.name == "start" ] );