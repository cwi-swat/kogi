Blockly.Blocks['Statement/if'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/if",
			  "message0" : "if %1 ( %2 %3 ) %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_statement",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 11,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "if",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/fill2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/fill2",
			  "message0" : "fill %1 ( %2 %3 , %4 %5 ) %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 279,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fill2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/smooth'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/smooth",
			  "message0" : "smooth %1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 113,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "smooth",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/rect3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/rect3",
			  "message0" : "rect %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 , %10 %11 , %12 %13 , %14 %15 , %16 %17 ) %18 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 353,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "rect3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/operator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/operator",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "Phrase",
				  "type" : "input_value",
				  "check" : ["Phrase"]
				},
				  	{
				  "name" : "Phrase",
				  "type" : "input_value",
				  "check" : ["Phrase"]
				},
				
			],
			  "colour" : 120,
			  
			  
			  
			  "inputsInline" : false,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/assign'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/assign",
			  "message0" : "%1 = %2 %3 ; %4 ",
			  "args0" : [
				{
				  "name" : "name",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 2,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "assign",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/ifElse'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/ifElse",
			  "message0" : "if %1 ( %2 %3 ) %4 %5 else %6 %7 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_statement",
				  "check" : ["Statement"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_statement",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 316,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "ifElse",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Background/background4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Background/background4",
			  "message0" : "background %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 ) %10 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 52,
			  "output" : "Background",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "background4",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Background/background2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Background/background2",
			  "message0" : "background %1 ( %2 %3 , %4 %5 ) %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 265,
			  "output" : "Background",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "background2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/point'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/point",
			  "message0" : "point %1 ( %2 %3 , %4 %5 ) %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 175,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "point",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Background/background'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Background/background",
			  "message0" : "background %1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 243,
			  "output" : "Background",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "background",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DrawFunction/draw'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DrawFunction/draw",
			  "message0" : "void %1 draw %2 ( %3 ) %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_statement",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 224,
			  "output" : "DrawFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "draw",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorCreating/color3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorCreating/color3",
			  "message0" : "color %1 ( %2 %3 , %4 %5 , %6 %7 ) %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 94,
			  "output" : "ColorCreating",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/colorMode2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/colorMode2",
			  "message0" : "colorMode %1 ( %2 %3 , %4 %5 ) %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ColorMode",
				  "type" : "input_value",
				  "check" : ["ColorMode"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 149,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "colorMode2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Background/background3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Background/background3",
			  "message0" : "background %1 ( %2 %3 , %4 %5 , %6 %7 ) %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 353,
			  "output" : "Background",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "background3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Transform/translate3d'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Transform/translate3d",
			  "message0" : "translate %1 ( %2 %3 , %4 %5 , %6 %7 ) %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 109,
			  "output" : "Transform",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "translate3d",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorCreating/color4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorCreating/color4",
			  "message0" : "color %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 ) %10 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 6,
			  "output" : "ColorCreating",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color4",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/decl'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/decl",
			  "message0" : "%1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "Type",
				  "type" : "input_value",
				  "check" : ["Type"]
				},
				  	{
				  "name" : "name",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 288,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "decl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/draw'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/draw",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "DrawFunction",
				  "type" : "input_value",
				  "check" : ["DrawFunction"]
				},
				
			],
			  "colour" : 242,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "draw",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/square'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/square",
			  "message0" : "square %1 ( %2 %3 , %4 %5 , %6 %7 ) %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "extent",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 7,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "square",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorCreating/color2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorCreating/color2",
			  "message0" : "color %1 ( %2 %3 , %4 %5 ) %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 93,
			  "output" : "ColorCreating",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Rendering/createGraphics3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Rendering/createGraphics3",
			  "message0" : "createGraphics %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 ) %10 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "w",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "h",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "renderer/OXTbVanLlE",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "path/XPjyWmAkEB",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 96,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "createGraphics3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Value/id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Value/id",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ds",
				  "type" : "field_input",
				  "text" : ""
				},
				
			],
			  "colour" : 297,
			  "output" : "Value",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "id",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/frameRate'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/frameRate",
			  "message0" : "frameRate %1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 182,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "frameRate",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/fullScreen'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/fullScreen",
			  "message0" : "fullscreen %1 ( %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 198,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fullScreen",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Rendering/blendMode'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Rendering/blendMode",
			  "message0" : "blendMode %1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "mode",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 290,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "blendMode",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/quad'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/quad",
			  "message0" : "quad %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 , %10 %11 , %12 %13 , %14 %15 , %16 %17 ) %18 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x1",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y1",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x2",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y2",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x3",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y3",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x4",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y4",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 270,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "quad",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/colorMode3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/colorMode3",
			  "message0" : "colorMode %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 , %10 %11 ) %12 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ColorMode",
				  "type" : "input_value",
				  "check" : ["ColorMode"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 182,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "colorMode3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SetupFunction/setup'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SetupFunction/setup",
			  "message0" : "void %1 setup %2 ( %3 ) %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_statement",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 181,
			  "output" : "SetupFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "setup",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/colorMode3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/colorMode3",
			  "message0" : "colorMode %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 ) %10 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ColorMode",
				  "type" : "input_value",
				  "check" : ["ColorMode"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 358,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "colorMode3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/triangle'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/triangle",
			  "message0" : "triangle %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 , %10 %11 , %12 %13 ) %14 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x1",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y1",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x2",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y2",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x3",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y3",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 56,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "triangle",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/stmt'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/stmt",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Statement",
				  "type" : "input_statement",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 120,
			  
			  
			  
			  "inputsInline" : false,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/clear'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/clear",
			  "message0" : "clear %1 ( %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 249,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "clear",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/noSmooth'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/noSmooth",
			  "message0" : "noSmooth %1 ( %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 13,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "noSmooth",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/id",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Type"
				},
				
			],
			  "colour" : 16,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "id",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/circle'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/circle",
			  "message0" : "circle %1 ( %2 %3 , %4 %5 , %6 %7 ) %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "extent",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 71,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "circle",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/rect'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/rect",
			  "message0" : "rect %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 ) %10 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 213,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "rect",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/noCursor'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/noCursor",
			  "message0" : "noCursor %1 ( %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 201,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "noCursor",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/setup'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/setup",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "SetupFunction",
				  "type" : "input_value",
				  "check" : ["SetupFunction"]
				},
				
			],
			  "colour" : 260,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "setup",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/colorMode'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/colorMode",
			  "message0" : "colorMode %1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ColorMode",
				  "type" : "input_value",
				  "check" : ["ColorMode"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 21,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "colorMode",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Rendering/hint'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Rendering/hint",
			  "message0" : "hint %1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "hint_mode",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 148,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "hint",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BuiltInFunction/trans'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BuiltInFunction/trans",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Transform",
				  "type" : "input_value",
				  "check" : ["Transform"]
				},
				
			],
			  "colour" : 180,
			  "output" : "BuiltInFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "trans",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/vals'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/vals",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Value",
				  "type" : "input_value",
				  "check" : ["Value", "FloatValue", "StringValue", "IntegerValue"]
				},
				
			],
			  "colour" : 161,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "vals",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/fill4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/fill4",
			  "message0" : "fill %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 ) %10 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 14,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fill4",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/while'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/while",
			  "message0" : "while %1 ( %2 %3 ) %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_statement",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 121,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "while",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BuiltInFunction/input'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BuiltInFunction/input",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Input",
				  "type" : "input_value",
				  "check" : ["Input"]
				},
				
			],
			  "colour" : 265,
			  "output" : "BuiltInFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "input",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/fill'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/fill",
			  "message0" : "fill %1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 193,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fill",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/for'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/for",
			  "message0" : "for %1 ( %2 %3 ; %4 %5 ; %6 %7 ) %8 %9 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_statement",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 217,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "for",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/rect2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/rect2",
			  "message0" : "rect %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 , %10 %11 ) %12 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 335,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "rect2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Transform/pushMatrix'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Transform/pushMatrix",
			  "message0" : "pushMatrix %1 ( %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 149,
			  "output" : "Transform",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "pushMatrix",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorCreating/color'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorCreating/color",
			  "message0" : "color %1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 132,
			  "output" : "ColorCreating",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/point2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/point2",
			  "message0" : "point %1 ( %2 %3 , %4 %5 , %6 %7 ) %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "z",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 29,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "point2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/stmts'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/stmts",
			  "message0" : "{ %1 %2 } %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmts",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 189,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "stmts",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Rendering/noClip'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Rendering/noClip",
			  "message0" : "noClip %1 ( %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 149,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "noClip",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/noFill'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/noFill",
			  "message0" : "noFill %1 ( %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 28,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "noFill",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/builtFuncs'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/builtFuncs",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "BuiltInFunction",
				  "type" : "input_value",
				  "check" : ["BuiltInFunction"]
				},
				
			],
			  "colour" : 202,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "builtFuncs",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FunctionDecl/funcDecl'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FunctionDecl/funcDecl",
			  "message0" : "void %1 %2 ( %3 %4 ) %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "name",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "params",
				  "type" : "input_statement",
				  "check" : ["Parameter", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_statement",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 286,
			  "output" : "FunctionDecl",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "funcDecl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/exp'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/exp",
			  "message0" : "%1 ; %2 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 120,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "exp",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Rendering/beginDraw'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Rendering/beginDraw",
			  "message0" : "beginDraw %1 ( %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 163,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "beginDraw",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/pixelDensity'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/pixelDensity",
			  "message0" : "pixelDensity %1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 38,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "pixelDensity",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BuiltInFunction/setting'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BuiltInFunction/setting",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ColorSetting",
				  "type" : "input_value",
				  "check" : ["ColorSetting"]
				},
				
			],
			  "colour" : 181,
			  "output" : "BuiltInFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "setting",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BuiltInFunction/env'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BuiltInFunction/env",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Environment",
				  "type" : "input_value",
				  "check" : ["Environment"]
				},
				
			],
			  "colour" : 169,
			  "output" : "BuiltInFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "env",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/noStroke'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/noStroke",
			  "message0" : "noStroke %1 ( %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 256,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "noStroke",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/fill3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/fill3",
			  "message0" : "fill %1 ( %2 %3 , %4 %5 , %6 %7 ) %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 144,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fill3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BuiltInFunction/shape'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BuiltInFunction/shape",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Shape",
				  "type" : "input_value",
				  "check" : ["Shape"]
				},
				
			],
			  "colour" : 134,
			  "output" : "BuiltInFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "shape",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/line'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/line",
			  "message0" : "line %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 ) %10 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x1",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y1",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x2",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y2",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 124,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "line",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/delay'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/delay",
			  "message0" : "delay %1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 17,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "delay",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Rendering/createGraphics2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Rendering/createGraphics2",
			  "message0" : "createGraphics %1 ( %2 %3 , %4 %5 , %6 %7 ) %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "w",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "h",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "renderer/iuAgREFuFX",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 214,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "createGraphics2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Transform/translate2d'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Transform/translate2d",
			  "message0" : "translate %1 ( %2 %3 , %4 %5 ) %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 113,
			  "output" : "Transform",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "translate2d",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/decl2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/decl2",
			  "message0" : "%1 %2 = %3 %4 ; %5 ",
			  "args0" : [
				{
				  "name" : "Type",
				  "type" : "input_value",
				  "check" : ["Type"]
				},
				  	{
				  "name" : "name",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 136,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "decl2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorSetting/background'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorSetting/background",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Background",
				  "type" : "input_value",
				  "check" : ["Background"]
				},
				
			],
			  "colour" : 327,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "background",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/arc'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/arc",
			  "message0" : "arc %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 , %10 %11 , %12 %13 ) %14 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "width",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "height",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "start",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stop",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 120,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "arc",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/cursor'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/cursor",
			  "message0" : "cursor %1 ( %2 %3 , %4 %5 , %6 %7 ) %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "CursorType",
				  "type" : "input_value",
				  "check" : ["CursorType"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 268,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "cursor",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/ellipse'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/ellipse",
			  "message0" : "ellipse %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 ) %10 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "width",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "height",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 78,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ellipse",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/size'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/size",
			  "message0" : "size %1 ( %2 %3 , %4 %5 ) %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 350,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "size",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Rendering/clip'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Rendering/clip",
			  "message0" : "clip %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 ) %10 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "width",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "height",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 47,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "clip",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BuiltInFunction/creating'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BuiltInFunction/creating",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ColorCreating",
				  "type" : "input_value",
				  "check" : ["ColorCreating"]
				},
				
			],
			  "colour" : 237,
			  "output" : "BuiltInFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "creating",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/function'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/function",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "FunctionDecl",
				  "type" : "input_value",
				  "check" : ["FunctionDecl"]
				},
				
			],
			  "colour" : 59,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "function",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegerValue'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegerValue",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "IntegerValue",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 140,
			  "output" : "IntegerValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Id",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Id",
				  "type" : "field_input",
				  "text" : "variable"
				},
				
			],
			  "colour" : 97,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Parameter/param'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Parameter/param",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "Type",
				  "type" : "input_value",
				  "check" : ["Type"]
				},
				  	{
				  "name" : "id",
				  "type" : "field_input",
				  "text" : ""
				},
				
			],
			  "colour" : 298,
			  
			  "previousStatement" : "Parameter",
			  "nextStatement" : "Parameter",
			  "inputsInline" : true,
			  "tooltip" : "param",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Rendering/endDraw'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Rendering/endDraw",
			  "message0" : "endDraw %1 ( %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 244,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "endDraw",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FloatValue'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FloatValue",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "FloatValue",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				
			],
			  "colour" : 335,
			  "output" : "FloatValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Transform/popMatrix'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Transform/popMatrix",
			  "message0" : "popMatrix %1 ( %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 142,
			  "output" : "Transform",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "popMatrix",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StringValue'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StringValue",
			  "message0" : "\" %1 %2 \" %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "StringValueName",
				  "type" : "field_input",
				  "text" : "StringValue"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 249,
			  "output" : "StringValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Rendering/createGraphics'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Rendering/createGraphics",
			  "message0" : "createGraphics %1 ( %2 %3 , %4 %5 ) %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "w",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "h",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 220,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "createGraphics",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BuiltInFunction/render'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BuiltInFunction/render",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Rendering",
				  "type" : "input_value",
				  "check" : ["Rendering"]
				},
				
			],
			  "colour" : 74,
			  "output" : "BuiltInFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "render",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Shape/line2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Shape/line2",
			  "message0" : "line %1 ( %2 %3 , %4 %5 , %6 %7 , %8 %9 , %10 %11 , %12 %13 ) %14 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x1",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y1",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "z1",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x2",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y2",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "z2",
				  "type" : "field_number",
				  "value" : 0,
				  "precision" : 0.01
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 278,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "line2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/binaryOperation'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/binaryOperation",
			  "message0" : "%1 %2 %3",
			  "args0" : [
				{
				  "name" : "OpLeft",
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				  	{
				  "name" : "Operator",
				  "type" : "field_dropdown",
				  "options" : [[ "&&", "and" ],[ ">", "higher" ],[ "/", "division" ],[ "!=", "notEqual" ],[ "+", "add" ],[ "-", "sub" ],[ "*", "times" ],[ "<", "less" ],]
				},
				  	{
				  "name" : "OpRight",
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				
			],
			  "colour" : 120,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CursorType/simpleDropdown'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CursorType/simpleDropdown",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Item",
				  "type" : "field_dropdown",
				  "options" : [[ "ARROW", "ttZdDScvHw" ],[ "MOVE", "tlEsZbIoLU" ],[ "HAND", "ERkOzaLWsG" ],[ "TEXT", "xoLgigDEWB" ],[ "CROSS", "NumvuorgPd" ],[ "WAIT", "UcittvuAhz" ],]
				},
				
			],
			  "colour" : 120,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/simpleDropdown'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/simpleDropdown",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Item",
				  "type" : "field_dropdown",
				  "options" : [[ "boolean", "MaSzMJxmLP" ],[ "float", "XNqFiVNtIp" ],[ "double", "XNiwqXMbDF" ],[ "long", "prvVRKVGuf" ],[ "char", "gojLdrCTdX" ],[ "byte", "aYNIFvsdjj" ],[ "color", "rHKUFSLqBH" ],[ "PImage", "bjMdTqIOml" ],[ "String", "SlgqZGoaQp" ],[ "int", "AyytJcGKfy" ],[ "PGraphics", "leOKgNuTPX" ],]
				},
				
			],
			  "colour" : 120,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorMode/simpleDropdown'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorMode/simpleDropdown",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Item",
				  "type" : "field_dropdown",
				  "options" : [[ "RGB", "pngTPiGDdi" ],[ "HSB", "WjmKDreKeY" ],]
				},
				
			],
			  "colour" : 120,
			  "output" : "ColorMode",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/simpleDropdown'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/simpleDropdown",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Item",
				  "type" : "field_dropdown",
				  "options" : [[ "height", "VoBaMtxRAp" ],[ "focused", "LyBJnGlBdG" ],[ "width", "KoSqNcjURx" ],]
				},
				
			],
			  "colour" : 120,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Input/simpleDropdown'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Input/simpleDropdown",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Item",
				  "type" : "field_dropdown",
				  "options" : [[ "mouseY", "tUNWEXZGBA" ],[ "mouseX", "GuAnIsQxkv" ],]
				},
				
			],
			  "colour" : 120,
			  "output" : "Input",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.BlockSvg.START_HAT = true;
var workspace = Blockly.inject('blockDiv', {
	toolbox: document.getElementById('toolbox'),
	collapse: true,
   toolboxPosition: 'start', // end
   trashcan: true
});
workspace.addChangeListener(Blockly.Events.disableOrphans);

 //Storage options
//BlocklyStorage.backupOnUnload();	
//window.setTimeout(BlocklyStorage.restoreBlocks, 0);

var blockId;
function categoryHighlighter(event) {
   categories = workspace.getToolbox().getToolboxItems();
   green = "#AFD98B";
   grey = "#DDDDDD";
   orange = "#EDC174";
   
   if (event.type == Blockly.Events.SELECTED) {
	    blockId = event.newElementId;
	    if (blockId != undefined) {
		    var fieldTypes = extractFieldTypes(blockId);
           var greenTypes = fieldTypes[0];
		    var orangeTypes = fieldTypes[1];
           resetCategories(categories, grey);
		    colourCategories(greenTypes, orangeTypes, categories, green, orange);
	    } else {
		    resetCategories(categories, grey);
	    }
   } else if (event.type == Blockly.Events.TOOLBOX_ITEM_SELECT) {
	    if (blockId != undefined) {
	        selectedCategory = workspace.getToolbox().getSelectedItem();
	        if (selectedCategory != null) {
			    var fieldTypes = extractFieldTypes(blockId);
			    var greenTypes = fieldTypes[0];
			    var orangeTypes = fieldTypes[1];
			    colourCategories(greenTypes, orangeTypes, categories, green, orange);
		    }
       }
   }
};

function colourCategories(greenTypes, orangeTypes, categories, green, orange) {

   //draw orange categories
   for (var i = 0; i < orangeTypes.length; i++) {
       for (var j = 0; j < categories.length; j++) {
           if (orangeTypes[i] == categories[j].name_) categories[j].rowDiv_.style.backgroundColor = orange;
      }
   }
    
   //then green
   for (var i = 0; i < greenTypes.length; i++) {
   for (var j = 0; j < categories.length; j++) {
           if (greenTypes[i] == categories[j].name_) categories[j].rowDiv_.style.backgroundColor = green;
      }
   }
};
function resetCategories(categories, colour) {
   for (var i = 0; i < categories.length; i++) categories[i].rowDiv_.style.backgroundColor = colour;
};

    
function extractFieldTypes(blockid) {
   var block = workspace.getBlockById(blockid);
   var args = block.inputList;
   var types = [];
   var greentypes = [];
   var orangetypes = [];

   for (var i = 0; i < args.length; i++) {
      var conn = args[i].connection;
         if (conn != null) {
            var check = conn.check_;
            if (conn.targetConnection != null) {
			    for (var j = 0; j < check.length; j++) {
				   if (!orangetypes.includes(check[j])) orangetypes.push(check[j]);
			    }
		    } 
           else {
              for (var j = 0; j < check.length; j++) {
                 if (!greentypes.includes(check[j])) greentypes.push(check[j]);
              }
           }
        }
    }
    types.push(greentypes);
    types.push(orangetypes);
    return types;
};

    
workspace.addChangeListener(categoryHighlighter);

    
Blockly.Extenstions.registerMutator(
	'binaryops_mutator',
	{ /* mutator methods */ },
	undefined,
	[])
	
function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}

	