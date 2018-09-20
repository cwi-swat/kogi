module kogi::xml::Parser

import kogi::Block;
import kogi::json::Parser;

str parseToolbox(Toolbox toolbox, str toolboxId = "toolbox", str display = "none") =
	"\<xml id=\"<toolboxId>\" style=\"display: <display>\"\>
	'	<("" | it + parseSection(section) | section <- toolbox.sections)>
	'\</xml\>";
	
str parseSection(Section section) =
	"\<category name=\"<section.category>\" colour=\"<toJson(section.colour)>\" \>
	'	<("" | it + parseBlock(block) | block <- section.blocks)[..-1]> 
	' \</category\>";	
	
str parseBlock(Block block) =
	"\<block type=\"<block.\type>\"\>\</block\>\n";