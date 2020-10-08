module kogi::BlocksCustomization

import List;
import kogi::Block;
import kogi::util::Util;


Toolbox updateBlocksDefinition(Toolbox toolbox, list[Block] blocks) {
	list[Section] sections = [];
	for (section <- toolbox.sections) {
		list[Block] updatedBlocks = [];
		for (block <- section.blocks) {
			Block tmp = getBlock(block.name, blocks);
			if (Block::none() !:= tmp) { 
				blocks = delete(blocks, indexOf(blocks, tmp));
				updatedBlocks += mergeBlocksInformation(tmp, block);
			}
			else
				updatedBlocks += block;
		}
		sections += Section::section(section.category, section.colour, updatedBlocks);
	}
	// Update sections of the toolbar
	toolbox.sections = completeSections(sections, blocks);
	return toolbox;
}

list[Section] completeSections(list[Section] sections, list[Block] blocks) {
	// Place non-assigned blocks into a separate category
	if (!isEmpty(blocks))
		return sections + section("Unassigned", hsv(0), blocks);
	return sections;	
}


Block mergeBlocksInformation(Block genBlock, Block userBlock) {
	mergedBlock = genBlock;
	if (userBlock.colour != Colour::none())
		mergedBlock.colour = userBlock.colour;
	if (userBlock.helpUrl != "")
		mergedBlock.helpUrl = userBlock.helpUrl;
	if (userBlock.tooltip != "")
		mergedBlock.tooltip = userBlock.tooltip;
	if (userBlock.messages != [])
		mergedBlock.messages = userBlock.messages;
	if (userBlock.inputsInline != false)
		mergedBlock.inputsInline = userBlock.inputsInline;
	return mergedBlock;
}