Blockly.Blocks['Statement/s4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/s4",
			  "message0" : "System.out.println( %1 ( %2 %3 ); %4 ; %5 ",
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
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 127,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s4",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/s5'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/s5",
			  "message0" : "%1 = %2 %3 ; %4 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Identifier"]
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
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s5",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/v'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/v",
			  "message0" : "%1 . %2 %3 ( %4 %5 ) %6 ",
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
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["ExpressionList", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 137,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "v",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VarDecl/var'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VarDecl/var",
			  "message0" : "%1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "Type",
				  "type" : "input_value",
				  "check" : ["Type"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 90,
			  
			  "previousStatement" : "VarDecl",
			  "nextStatement" : "VarDecl",
			  "inputsInline" : true,
			  "tooltip" : "var",
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
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 183,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "id",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassDecl/clsdcl'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassDecl/clsdcl",
			  "message0" : "class %1 %2 { %3 %4 %5 } %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["VarDecl", "epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["MethodDecl", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 132,
			  
			  "previousStatement" : "ClassDecl",
			  "nextStatement" : "ClassDecl",
			  "inputsInline" : true,
			  "tooltip" : "clsdcl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodDecl/mtd'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodDecl/mtd",
			  "message0" : "public %1 %2 %3 ( %4 %5 ){ %6 { %7 %8 %9 return %10 %11 ;} %12 } %13 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Type",
				  "type" : "input_value",
				  "check" : ["Type"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "FormalList",
				  "type" : "input_value",
				  "check" : ["FormalList"]
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["VarDecl", "epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
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
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 138,
			  
			  "previousStatement" : "MethodDecl",
			  "nextStatement" : "MethodDecl",
			  "inputsInline" : true,
			  "tooltip" : "mtd",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/b'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/b",
			  "message0" : "boolean",
			  
			  "colour" : 161,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExpressionList/e'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExpressionList/e",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["ExpressionList", "epsilon"]
				},
				
			],
			  "colour" : 110,
			  
			  "previousStatement" : "ExpressionList",
			  "nextStatement" : "ExpressionList",
			  "inputsInline" : true,
			  "tooltip" : "e",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/s2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/s2",
			  "message0" : "if( %1 ( %2 %3 ) %4 %5 else %6 %7 ",
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
			  "colour" : 33,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/e'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/e",
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
			  "colour" : 12,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "e",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/a'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/a",
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
			  "colour" : 18,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "a",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/s1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/s1",
			  "message0" : "{ %1 %2 } %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 153,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s1",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/i2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/i2",
			  "message0" : "int",
			  
			  "colour" : 21,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "i2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FormalList/lst'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FormalList/lst",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "Type",
				  "type" : "input_value",
				  "check" : ["Type"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 347,
			  "output" : "FormalList",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "lst",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/ne'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/ne",
			  "message0" : "newint[ %1 [ %2 %3 ] %4 ",
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
			  "colour" : 154,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ne",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MainClass/main'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MainClass/main",
			  "message0" : "class %1 %2 {publicstaticvoidmain(String[] %3 ] %4 %5 ){ %6 { %7 %8 }} %9 } %10 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Identifier"]
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
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Identifier"]
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
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 261,
			  "output" : "MainClass",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "main",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/f'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/f",
			  "message0" : "false",
			  
			  "colour" : 185,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "f",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type/i'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type/i",
			  "message0" : "int[] %1 [] %2 ] %3 ",
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
			  "colour" : 203,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "i",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/d'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/d",
			  "message0" : "! %1 %2 ",
			  "args0" : [
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
			  "colour" : 104,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "d",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/s3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/s3",
			  "message0" : "while( %1 ( %2 %3 ) %4 %5 ",
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
			  "colour" : 278,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s3",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/len'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/len",
			  "message0" : "%1 .length %2 length %3 ",
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
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 240,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "len",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/this'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/this",
			  "message0" : "this",
			  
			  "colour" : 141,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "this",
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
			  "colour" : 206,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "and",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/s67'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/s67",
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
			  "colour" : 80,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s67",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/b'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/b",
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
			  "colour" : 133,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/a'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/a",
			  "message0" : "%1 [ %2 %3 ] %4 ",
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
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 225,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "a",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Integer/natural'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Integer/natural",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "IntegerName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 229,
			  "output" : "Integer",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/c'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/c",
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
			  "colour" : 190,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "c",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/i'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/i",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Integer"]
				},
				
			],
			  "colour" : 134,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "i",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/s6'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/s6",
			  "message0" : "%1 [ %2 %3 ]= %4 = %5 %6 ; %7 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Identifier"]
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
			  "colour" : 152,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s6",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/i'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/i",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 349,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "i",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Identifier/id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Identifier/id",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "IdentifierName",
				  "type" : "field_input",
				  "text" : "Identifier"
				},
				
			],
			  "colour" : 101,
			  "output" : "Identifier",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Program/pro'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Program/pro",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "MainClass",
				  "type" : "input_value",
				  "check" : ["MainClass"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["ClassDecl", "epsilon"]
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
Blockly.Blocks['Expression/ne2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/ne2",
			  "message0" : "new %1 %2 () %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Identifier"]
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
			  "colour" : 224,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ne2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/t'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/t",
			  "message0" : "true",
			  
			  "colour" : 52,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "t",
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
BlocklyStorage.backupOnUnload();	
window.setTimeout(BlocklyStorage.restoreBlocks, 0);
function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}
	