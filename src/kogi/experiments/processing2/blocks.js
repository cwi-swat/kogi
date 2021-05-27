Blockly.Blocks['Phrase/decl2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/decl2",
			  "message0" : "%1 %2 = %3 %4 ; %5 ",
			  "args0" : [
				{
				  "name" : "Type",
				  "type" : "input_value",
				  "check" : ["Type"]
				},
				  	{
				  "name" : "name",
				  "type" : "input_value",
				  "check" : ["Id"]
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
			  "colour" : 124,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "decl2",
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
			  "colour" : 295,
			  "output" : "FloatValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/colorMode3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/colorMode3",
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
			  "colour" : 181,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "colorMode3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/setup'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/setup",
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
			  "colour" : 121,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "setup",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/clip'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/clip",
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
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "width",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "height",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 17,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "clip",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/delay'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/delay",
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
			  "colour" : 324,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "delay",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/line'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/line",
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
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y1",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x2",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y2",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 136,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "line",
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
				  "type" : "input_value",
				  "check" : ["Id"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 300,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "decl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/background2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/background2",
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
			  "colour" : 151,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "background2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/endDraw'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/endDraw",
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
			  "colour" : 56,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "endDraw",
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
			  
			  "colour" : 284,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "move",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/exp'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/exp",
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
			  "colour" : 218,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "exp",
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
			  
			  "colour" : 220,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "bool",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/notEqual'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/notEqual",
			  "message0" : "%1 != %2 %3 ",
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
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 187,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "notEqual",
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
			  
			  "colour" : 21,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "hand",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/sub'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/sub",
			  "message0" : "%1 - %2 %3 ",
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
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 236,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "sub",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/cursor'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/cursor",
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
			  "colour" : 163,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "cursor",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/add'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/add",
			  "message0" : "%1 + %2 %3 ",
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
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 97,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "add",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/frameRate'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/frameRate",
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
			  "colour" : 40,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "frameRate",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/funcDecl'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/funcDecl",
			  "message0" : "void %1 %2 ( %3 %4 ) %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "name",
				  "type" : "input_value",
				  "check" : ["Id"]
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
			  "colour" : 277,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "funcDecl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/colorMode2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/colorMode2",
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
			  "colour" : 198,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "colorMode2",
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
			  
			  "colour" : 281,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "float",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/times'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/times",
			  "message0" : "%1 * %2 %3 ",
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
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 223,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "times",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/for'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/for",
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
			  "colour" : 196,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "for",
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
			  
			  "colour" : 131,
			  "output" : "ColorMode",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "rgb",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/fullScreen'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/fullScreen",
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
			  "colour" : 71,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fullScreen",
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
			  
			  "colour" : 36,
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
			  
			  "colour" : 268,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "long",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/color'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/color",
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
			  "colour" : 90,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/assign'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/assign",
			  "message0" : "%1 = %2 %3 ; %4 ",
			  "args0" : [
				{
				  "name" : "name",
				  "type" : "input_value",
				  "check" : ["Id"]
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
			  "colour" : 300,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "assign",
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
			  
			  "colour" : 88,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "char",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/smooth'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/smooth",
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
			  "colour" : 340,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "smooth",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/hint'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/hint",
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
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 264,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "hint",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/fill2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/fill2",
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
			  "colour" : 221,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fill2",
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
			  "colour" : 57,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "if",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/focused'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/focused",
			  "message0" : "focused",
			  
			  "colour" : 338,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "focused",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/background4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/background4",
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
			  "colour" : 187,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "background4",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/quad'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/quad",
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
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y1",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x2",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y2",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x3",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y3",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x4",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y4",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 185,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "quad",
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
			  
			  "colour" : 310,
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
			  
			  "colour" : 51,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "text",
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
			  "colour" : 83,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "while",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/fill3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/fill3",
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
			  "colour" : 275,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fill3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/color3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/color3",
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
			  "colour" : 33,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/height'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/height",
			  "message0" : "height",
			  
			  "colour" : 350,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "height",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/background3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/background3",
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
			  "colour" : 33,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "background3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/rect'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/rect",
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
			  "colour" : 256,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "rect",
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
			  "colour" : 232,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "draw",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/line2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/line2",
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
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y1",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "z1",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x2",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y2",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "z2",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 102,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "line2",
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
				  "type" : "input_value",
				  "check" : ["Id"]
				},
				
			],
			  "colour" : 287,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "id",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/higher'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/higher",
			  "message0" : "%1 > %2 %3 ",
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
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 322,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "higher",
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
			  "colour" : 303,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "ifElse",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/color2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/color2",
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
			  "colour" : 254,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/width'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/width",
			  "message0" : "width",
			  
			  "colour" : 75,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "width",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/clear'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/clear",
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
			  "colour" : 299,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "clear",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/stmts'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/stmts",
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
			  "colour" : 85,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "stmts",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/ellipse'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/ellipse",
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
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "width",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "height",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 343,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ellipse",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/createGraphics3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/createGraphics3",
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
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "h",
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "renderer",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "path",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 209,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "createGraphics3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/color4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/color4",
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
			  "colour" : 30,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color4",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/fill4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/fill4",
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
			  "colour" : 105,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fill4",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/size'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/size",
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
			  "colour" : 12,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "size",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/noClip'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/noClip",
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
			  "colour" : 101,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "noClip",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/square'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/square",
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
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "extent",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 126,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "square",
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
			  
			  "colour" : 354,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "cross",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/division'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/division",
			  "message0" : "%1 / %2 %3 ",
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
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 287,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "division",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/blendMode'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/blendMode",
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
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 122,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "blendMode",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/colorMode3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/colorMode3",
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
			  "colour" : 282,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "colorMode3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/arc'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/arc",
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
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "width",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "height",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "start",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stop",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 184,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "arc",
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
			  
			  "colour" : 324,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "wait",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/triangle'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/triangle",
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
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y1",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x2",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y2",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "x3",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y3",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 209,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "triangle",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/ifElse'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/ifElse",
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
			  "colour" : 320,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ifElse",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/noCursor'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/noCursor",
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
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "noCursor",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/colorMode'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/colorMode",
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
			  "colour" : 139,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "colorMode",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/point2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/point2",
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
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "z",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 169,
			  "output" : "Expression",
			  
			  
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
			  "colour" : 119,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "stmts",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/noFill'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/noFill",
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
			  "colour" : 357,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "noFill",
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
			  
			  "colour" : 59,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "color",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/background'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/background",
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
			  "colour" : 351,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "background",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/mouseY'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/mouseY",
			  "message0" : "mouseY",
			  
			  "colour" : 65,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "mouseY",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/translate3d'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/translate3d",
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
			  "colour" : 149,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "translate3d",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/createGraphics2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/createGraphics2",
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
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "h",
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "renderer",
				  "type" : "input_value",
				  "check" : ["StringValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 162,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "createGraphics2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/createGraphics'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/createGraphics",
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
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "h",
				  "type" : "input_value",
				  "check" : ["IntegerValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 250,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "createGraphics",
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
				  "type" : "input_value",
				  "check" : ["Id"]
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
			  "colour" : 116,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "decl2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/fill'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/fill",
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
			  "colour" : 147,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fill",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/mouseX'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/mouseX",
			  "message0" : "mouseX",
			  
			  "colour" : 129,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "mouseX",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/popMatrix'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/popMatrix",
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
			  "colour" : 334,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "popMatrix",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/if'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/if",
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
			  "colour" : 282,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "if",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/point'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/point",
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
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 235,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "point",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/beginDraw'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/beginDraw",
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
			  "colour" : 92,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "beginDraw",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/while'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/while",
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
			  "colour" : 252,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "while",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "start",
				  "type" : "input_value",
				  "check" : ["Phrase"]
				},
				
			],
			  "colour" : 90,
			  
			  
			  
			  "inputsInline" : false,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/circle'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/circle",
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
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "y",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "extent",
				  "type" : "input_value",
				  "check" : ["FloatValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 326,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "circle",
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
			  
			  "colour" : 81,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "pImage",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/draw'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/draw",
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
			  "colour" : 135,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "draw",
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
			  "colour" : 98,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "operator",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/pixelDensity'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/pixelDensity",
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
			  "colour" : 127,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "pixelDensity",
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
			  "colour" : 328,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "for",
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
				  "type" : "input_value",
				  "check" : ["Id"]
				},
				
			],
			  "colour" : 308,
			  
			  "previousStatement" : "Parameter",
			  "nextStatement" : "Parameter",
			  "inputsInline" : true,
			  "tooltip" : "param",
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
			  
			  "colour" : 140,
			  "output" : "CursorType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "arrow",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/rect2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/rect2",
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
			  "colour" : 186,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "rect2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/id",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ds",
				  "type" : "input_value",
				  "check" : ["Id"]
				},
				
			],
			  "colour" : 294,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "id",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/less'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/less",
			  "message0" : "%1 < %2 %3 ",
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
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 290,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "less",
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
				  "type" : "input_value",
				  "check" : ["Id"]
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
			  "colour" : 262,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "assign",
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
			  
			  "colour" : 47,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "string",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/translate2d'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/translate2d",
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
			  "colour" : 216,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "translate2d",
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
			  
			  "colour" : 191,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "int",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/and'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/and",
			  "message0" : "%1 && %2 %3 ",
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
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 332,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "and",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/noStroke'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/noStroke",
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
			  "colour" : 22,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "noStroke",
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
			  "colour" : 221,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "setup",
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
			  "colour" : 229,
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
			  "colour" : 265,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/pushMatrix'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/pushMatrix",
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
			  "colour" : 250,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "pushMatrix",
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
			  "colour" : 185,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "exp",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Phrase/decl'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Phrase/decl",
			  "message0" : "%1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "Type",
				  "type" : "input_value",
				  "check" : ["Type"]
				},
				  	{
				  "name" : "name",
				  "type" : "input_value",
				  "check" : ["Id"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 283,
			  "output" : "Phrase",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "decl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/noSmooth'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/noSmooth",
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
			  "colour" : 168,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "noSmooth",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/rect3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/rect3",
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
			  "colour" : 115,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "rect3",
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
			  
			  "colour" : 233,
			  "output" : "ColorMode",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "hsb",
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
			  
			  "colour" : 2,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "pgGraphics",
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
			  "colour" : 195,
			  "output" : "StringValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/funcDecl'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/funcDecl",
			  "message0" : "void %1 %2 ( %3 %4 ) %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "name",
				  "type" : "input_value",
				  "check" : ["Id"]
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
			  "colour" : 34,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "funcDecl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['epsilon'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "epsilon",
			  "message0" : "epsilon",
			  "args0" : [
			
			],
			  "colour" : 90,
			  
			  "previousStatement" : null,
			  
			  "inputsInline" : false,
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
BlocklyStorage.backupOnUnload();	
window.setTimeout(BlocklyStorage.restoreBlocks, 0);
function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}
	