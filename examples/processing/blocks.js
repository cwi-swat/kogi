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
			  "colour" : 284,
			  "output" : "ColorSetting",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fill2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CursorType/arrow'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CursorType/arrow",
			  "message0" : "ARROW",
			  
			  "colour" : 20,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "arrow",
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
			  "colour" : 254,
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
			  "colour" : 334,
			  
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
			  "colour" : 148,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "ifElse",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/bool'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/bool",
			  "message0" : "boolean",
			  
			  "colour" : 346,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "bool",
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
			  "colour" : 132,
			  "output" : "Background",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "background4",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CursorType/move'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CursorType/move",
			  "message0" : "MOVE",
			  
			  "colour" : 197,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "move",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CursorType/hand'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CursorType/hand",
			  "message0" : "HAND",
			  
			  "colour" : 295,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "hand",
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
			  "colour" : 145,
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
			  "colour" : 137,
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
			  "colour" : 191,
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
			  "colour" : 161,
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
			  "colour" : 245,
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
			  "colour" : 59,
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
			  "colour" : 66,
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
			  "colour" : 49,
			  "output" : "Transform",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "translate3d",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/float'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/float",
			  "message0" : "float",
			  
			  "colour" : 340,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "float",
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
			  "colour" : 232,
			  "output" : "ColorCreating",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color4",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorMode/rgb'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorMode/rgb",
			  "message0" : "RGB",
			  
			  "colour" : 145,
			  "output" : "ColorMode",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "rgb",
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
			  "colour" : 255,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "decl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/double'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/double",
			  "message0" : "double",
			  
			  "colour" : 148,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "double",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/long'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/long",
			  "message0" : "long",
			  
			  "colour" : 104,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "long",
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
			  "colour" : 102,
			  
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
			  "colour" : 12,
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
			  "colour" : 168,
			  "output" : "ColorCreating",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/char'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/char",
			  "message0" : "char",
			  
			  "colour" : 67,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "char",
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
				  "name" : "renderer/fHXXwurqZB",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "path/cyodntRyci",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 13,
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
			  "colour" : 22,
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
			  "colour" : 273,
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
			  "colour" : 142,
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
			  "colour" : 263,
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
			  "colour" : 176,
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
			  "colour" : 315,
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
			  "colour" : 101,
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
			  "colour" : 265,
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
			  "colour" : 55,
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
			  "colour" : 239,
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
			  "colour" : 49,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "noSmooth",
			  "helpUrl" : ""
			}
		);
	}
}
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
			  "colour" : 137,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "if",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/byte'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/byte",
			  "message0" : "byte",
			  
			  "colour" : 67,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "byte",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CursorType/text'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CursorType/text",
			  "message0" : "TEXT",
			  
			  "colour" : 154,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "text",
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
			  "colour" : 344,
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
			  "colour" : 129,
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
			  "colour" : 201,
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
			  "colour" : 186,
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
			  "colour" : 250,
			  
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
			  "colour" : 191,
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
			  "colour" : 351,
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
			  "colour" : 156,
			  "output" : "BuiltInFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "trans",
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
			  "colour" : 233,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "smooth",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CursorType/cross'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CursorType/cross",
			  "message0" : "CROSS",
			  
			  "colour" : 233,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "cross",
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
			  "colour" : 284,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "vals",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CursorType/wait'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CursorType/wait",
			  "message0" : "WAIT",
			  
			  "colour" : 171,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "wait",
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
			  "colour" : 174,
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
			  "colour" : 218,
			  
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
			  "colour" : 94,
			  "output" : "BuiltInFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "input",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/height'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/height",
			  "message0" : "height",
			  
			  "colour" : 174,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "height",
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
			  "colour" : 58,
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
			  "colour" : 22,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "for",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/color'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/color",
			  "message0" : "color",
			  
			  "colour" : 195,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color",
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
			  "colour" : 60,
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
			  "colour" : 358,
			  "output" : "Transform",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "pushMatrix",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/focused'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/focused",
			  "message0" : "focused",
			  
			  "colour" : 294,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "focused",
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
			  "colour" : 345,
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
			  "colour" : 102,
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
			  "colour" : 250,
			  
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
			  "colour" : 64,
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
			  "colour" : 337,
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
			  "colour" : 233,
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
			  "colour" : 162,
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
			  "colour" : 158,
			  
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
			  "colour" : 213,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "beginDraw",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/pImage'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/pImage",
			  "message0" : "PImage",
			  
			  "colour" : 302,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "pImage",
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
			  "colour" : 167,
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
			  "colour" : 313,
			  "output" : "BuiltInFunction",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "setting",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Environment/width'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Environment/width",
			  "message0" : "width",
			  
			  "colour" : 123,
			  "output" : "Environment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "width",
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
			  "colour" : 88,
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
			  "colour" : 281,
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
			  "colour" : 41,
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
			  "colour" : 129,
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
			  "colour" : 202,
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
			  "colour" : 274,
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
				  "name" : "renderer/WmgAwoUZKt",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 273,
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
			  "colour" : 156,
			  "output" : "Transform",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "translate2d",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/string'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/string",
			  "message0" : "String",
			  
			  "colour" : 81,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "string",
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
			  "colour" : 77,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "decl2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/int'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/int",
			  "message0" : "int",
			  
			  "colour" : 354,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "int",
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
			  "colour" : 185,
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
			  "colour" : 101,
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
			  "colour" : 135,
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
			  "colour" : 106,
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
			  "colour" : 130,
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
			  "colour" : 116,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "clip",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Input/mouseY'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Input/mouseY",
			  "message0" : "mouseY",
			  
			  "colour" : 52,
			  "output" : "Input",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "mouseY",
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
			  "colour" : 320,
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
			  "colour" : 90,
			  
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
			  "colour" : 12,
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
			  "colour" : 233,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Input/mouseX'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Input/mouseX",
			  "message0" : "mouseX",
			  
			  "colour" : 26,
			  "output" : "Input",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "mouseX",
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
			  "colour" : 144,
			  
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
			  "colour" : 251,
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
			  "colour" : 209,
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
			  "colour" : 178,
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
			  "colour" : 352,
			  "output" : "StringValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ColorMode/hsb'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ColorMode/hsb",
			  "message0" : "HSB",
			  
			  "colour" : 337,
			  "output" : "ColorMode",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "hsb",
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
			  "colour" : 354,
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
			  "colour" : 203,
			  "output" : "Shape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "line2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/pgGraphics'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/pgGraphics",
			  "message0" : "PGraphics",
			  
			  "colour" : 200,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "pgGraphics",
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
			  "colour" : 308,
			  "output" : "Rendering",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "createGraphics",
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
Blockly.BlockSvg.START_HAT = true;
var workspace = Blockly.inject('blockDiv', {
	toolbox: document.getElementById('toolbox'),
	collapse: true,
   toolboxPosition: 'start', // end
   trashcan: true
});
	

 //Storage options
//BlocklyStorage.backupOnUnload();	
//window.setTimeout(BlocklyStorage.restoreBlocks, 0);

var blockId;
function categoryHighlighter(event) {
   categories = workspace.getToolbox().getToolboxItems();
   lightgreen = "#AFD98B";
   lightgrey = "#DDDDDD";
	
   if (event.type == Blockly.Events.SELECTED) {
	    blockId = event.newElementId;
	    if (blockId != undefined) {
		    var fieldTypes = extractFieldTypes(blockId);
           resetCategories(categories, lightgrey);
		    colourCategories(blockId, fieldTypes, categories, lightgreen);
	    } else {
		    resetCategories(categories, lightgrey);
	    }
   } else if (event.type == Blockly.Events.TOOLBOX_ITEM_SELECT) {
	    if (blockId != undefined) {
		    var fieldTypes = extractFieldTypes(blockId);
		    selectedCategory = workspace.getToolbox().getSelectedItem();
		    if (selectedCategory != null) colourCategories(blockId, fieldTypes, categories, lightgreen);
	    }
   }
};

function colourCategories(blockid, fieldTypes, categories, colour) {
   for (var i = 0; i < fieldTypes.length; i++) {
       for (var j = 0; j < categories.length; j++) {
            if (fieldTypes[i] == categories[j].name_) categories[j].rowDiv_.style.backgroundColor = colour;
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
    for (var i = 0; i < args.length; i++) {
        var conn = args[i].connection;
        if (conn != null) {
            var check = conn.check_;
            for (var j = 0; j < check.length; j++) {
               if (!types.includes(check[j])) types.push(check[j]);
            }
        }
    }
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

	