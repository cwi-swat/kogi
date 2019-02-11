module kogi::BlocksCustomization

import List;
import kogi::Block;
import kogi::util::Util;


Toolbox updateBlocksDefinition(Toolbox toolbox, list[Block] blocks) {
	list[Section] sections = [];
	for(section <- toolbox.sections) {
		list[Block] updatedBlocks = [];
		for(block <- section.blocks) {
			tmp = getBlock(block.name, blocks);
			if(tmp[0] != -1) { 
				blocks = delete(blocks, tmp[0]);
				updatedBlocks += mergeBlocksInformation(tmp[1], block);
			}
			else
				updatedBlocks += block;
		}
		sections += Section::section(section.category, section.colour, updatedBlocks);
	}
	toolbox.sections = completeSections(sections, blocks);
	return toolbox;
}

list[Section] completeSections(list[Section] sections, list[Block] blocks) {
	startBlock = getBlock("start", blocks);
	blocks = delete(blocks, startBlock[0]);
	sections += [section("Start", hsv(90), [startBlock[1]])];
	if(!isEmpty(blocks))
		sections += section("Unassigned", hsv(45), blocks);
	return sections;	
}


Block mergeBlocksInformation(Block genBlock, Block userBlock) {
	mergedBlock = genBlock;
	if(userBlock.colour != Colour::none())
		mergedBlock.colour = userBlock.colour;
	if(userBlock.helpUrl != "")
		mergedBlock.helpUrl = userBlock.helpUrl;
	if(userBlock.tooltip != "")
		mergedBlock.tooltip = userBlock.tooltip;
	if(userBlock.messages != [])
		mergedBlock.messages = userBlock.messages;
	if(userBlock.inputsInline != false)
		mergedBlock.inputsInline = userBlock.inputsInline;
	return mergedBlock;
}