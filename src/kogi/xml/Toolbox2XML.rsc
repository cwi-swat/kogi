module kogi::xml::Toolbox2XML

import IO;
import kogi::Block;
import lang::xml::DOM;
import kogi::util::Util;
import kogi::json::Parser;

str parseToolbox(Toolbox toolbox, str toolboxId = "toolbox", str display = "none") {
	root  = document(element(none(), "xml", [ 
												attribute(none(), "id", toolboxId),
												attribute(none(), "style", "display: <display>")
											  ] + section2Element(toolbox.sections) 
							  ));
	return xmlPretty(root);
}

list[Node] section2Element(list[Section] sections)
	= [ element( none(), "category", [ attribute(none(), "name", section.category), attribute(none(), "colour", getColour(section.colour))] + 
									 [ block2Element(block) | block <- section.blocks ]) | section <- sections ];

Node block2Element(Block block) 
	= element(none(), "block", [attribute(none(), "type", block.name == "start" ? block.name : block.\type)]);