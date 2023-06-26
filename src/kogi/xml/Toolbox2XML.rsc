module kogi::xml::Toolbox2XML

import kogi::Block;
import lang::xml::DOM;
import kogi::util::Util;
import String;
import util::Math;
import ParseTree;
import Type;
import IO;
import List;
import kogi::json::Parser;


str parseToolbox(Toolbox toolbox, set[Production] productions, str toolboxId = "toolbox", str display = "none") {
	//get a-zA-Z name/type of the language
	str_ = getStringType(productions);

	root  = document(element(none(), "xml", [ 
												attribute(none(), "id", toolboxId),
												attribute(none(), "style", "display: <display>")
											] + section2Element(toolbox.sections, str_) 
							  ));
	return xmlRaw(root);
}

list[Node] section2Element(list[Section] sections, tuple[str, str] str_)
	= [ element( none(), "category", [ attribute(none(), "name", section.category), attribute(none(), "colour", getColour(section.colour)), attribute(none(), "toolboxitemid", section.category + "Id")] + 
									 [ block2Element(block, sections, section, str_) | block <- section.blocks ]) | section <- sections ];

Node block2Element(Block block, list[Section] sections, Section S, tuple[str, str] str_) {
	blocktype = block.\type;

	//creation of shadow blocks for the binaryoperation block created in Production2BinaryBlock
	if (block.name == "binaryOperation") {
		
		int_ = getIntType(sections);
		intType = int_[0]; 
		intName = int_[1]; 

		return 	element(none(), "block", [attribute(none(), "type", blocktype), 
					
					//left shadow block
					element(none(),"value", [attribute(none(), "name", "OpLeft"),
						element(none(), "shadow", [attribute(none(), "type", intType), 
							element(none(), "field", [attribute(none(), "name", intName), 
							charData(" 0 ")]),
						charData("  ")]), 
					charData("  ")]),

					//right shadow block
					element(none(),"value", [attribute(none(), "name", "OpRight"),
						element(none(), "shadow", [attribute(none(), "type", intType), 
							element(none(), "field", [attribute(none(), "name", intName), 
							charData(" 0 ")]),
						charData("  ")]), 
					charData("  ")]),

				charData("	")]);
	}

	//here we go through the arguments of every block to see if they have an argument which only requires an identifier and then fill in an identifier shadow block
	strType = str_[0];
	strName = str_[1];
	
	list[Node] shadowBlockList = [];
	int nrOfargs = 0;
	for (A <- block.messages[0].args) {
		//println(A);
		if (A.\type is \value || A.\type is statement) {
			if (size(A.\type.check) == 1 && A.\type.check[0] == strType) {
				nrOfargs += 1;
				name_ = A.name;
				shadowBlock = 	element(none(),"value", [attribute(none(), "name", name_),
									element(none(), "shadow", [attribute(none(), "type", strType+"/"+strName),
										element(none(), "field", [attribute(none(), "name", strType+"Name"), 
										charData(" \"name\" ")]),
									charData("  ")]),
								charData("  ")]);
				shadowBlockList = shadowBlockList + shadowBlock;
			};
		};
	};
	//this is so ugly but I cant think of a way to dynamically add elements to an already existing element
	if (nrOfargs != 0) {
		 switch (nrOfargs) {
			case 1: return element(none(), "block", [attribute(none(), "type", block.\type), shadowBlockList[0], charData("   ")]); 
			case 2: return element(none(), "block", [attribute(none(), "type", block.\type), shadowBlockList[0], shadowBlockList[1], charData("   ")]); 
			case 3: return element(none(), "block", [attribute(none(), "type", block.\type), shadowBlockList[0], shadowBlockList[1], shadowBlockList[2], charData("   ")]); 
			case 4: return element(none(), "block", [attribute(none(), "type", block.\type), shadowBlockList[0], shadowBlockList[1], shadowBlockList[2], shadowBlockList[3], charData("   ")]); 
			case 5: return element(none(), "block", [attribute(none(), "type", block.\type), shadowBlockList[0], shadowBlockList[1], shadowBlockList[2], shadowBlockList[3], shadowBlockList[4], charData("   ")]); 
		};
		//return [ element( none(), "block", [ attribute(none(), "type", block.\type), shadowBlock | shadowBlock <- shadowBlockList, charData("   ")]) ]; I TRIED HERE
	}

	//inserting shadow blocks from other categories
	for (arg_ <- block.messages[0].args) {
		
		if (arg_.\type is \value || arg_.\type is statement) {
			
			list[str] check = [];
			for (V <- arg_.\type.check) {
				if (V != "epsilon") check = check + V;
			};
			
			if (size(check) == 1) {
				catName = arg_.\type.check[0];
				for (section <- sections) {
					if (section[0] == catName && size(section.blocks) == 1) {
						println("inserting");

						Node shadowblock = 	element(none(),"value", [attribute(none(), "name", arg_.name), 
												element(none(), "shadow", [attribute(none(), "type", section.blocks[0].\type),
												charData("	")]),
											charData("	")]);

						return 	element(none(), "block", [attribute(none(), "type", blocktype), shadowblock, charData("	")]);
					};
				};
			};
		};
	};

	//println(size(S.blocks));
	

	//under normal circumstances where we dont want shadow blocks or prefilled fields we return the line below
	return element(none(), "block", [attribute(none(), "type", block.\type), charData("	")]); 
}


//find the typename and integer name for the shadowblocks: the grammar syntax might define the name of an integer as 'IntegerLiteral'
// or 'numbers', we need to find this name and inject it into the shadowblocks
tuple[str, str] getIntType(list[Section] sections) {
	intType = "";
	intName = "";

	for (section <- sections) {
		for (B <- section.blocks) {
			contents = B.messages[0].format;
			args = B.messages[0].args;
			length = size(args);
			if (contents == "%1 " && length != 0) {
				if (args[0].\type == number(0)) {
					intType = B.\type;
					intName = args[0].name;
				}; 	
			};
		};
	};

	return <intType, intName>;
}

tuple[str, str] getStringType(set[Production] productions) {
	str strType = "";
	str strName = "";
	for (P <- productions) {
		if (P.symbols[0] == iter(\char-class([range(65,90),range(97,122)]))) { //corresponds to a-z, A-Z
			println("Found string a-zA-Z");
			strName = P.def.name;
			strType = P.def.symbol[0];
		};
	};
	return <strType, strName>;
}