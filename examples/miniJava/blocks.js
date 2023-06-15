Blockly.Blocks['Statement/s3'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/s3",
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
				  "check" : ["Expression", "Identifier", "Integer"]
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
			  "colour" : 61,
			  
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
			  "message0" : "%1 . %2 length %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression", "Identifier", "Integer"]
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
			  "colour" : 114,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "len",
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
			  "colour" : 1,
			  "output" : "Integer",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
				  "check" : ["Expression", "Identifier", "Integer"]
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
			  "colour" : 104,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s2",
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
				  "check" : ["Type", "Identifier"]
				},
				  	{
				  "name" : "lex/EQTQkbPgGv",
				  "type" : "input_value",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 304,
			  
			  "previousStatement" : "VarDecl",
			  "nextStatement" : "VarDecl",
			  "inputsInline" : true,
			  "tooltip" : "var",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/s4'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/s4",
			  "message0" : "System %1 . %2 out %3 . %4 println %5 ( %6 %7 ) %8 ; %9 ",
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
				  "check" : ["Expression", "Identifier", "Integer"]
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
			  "colour" : 314,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s4",
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
			  "colour" : 130,
			  "output" : "Identifier",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
			  
			  "colour" : 350,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "i2",
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
			  "message0" : "class %1 %2 { %3 public %4 static %5 void %6 main %7 ( %8 String %9 [ %10 ] %11 %12 ) %13 { %14 %15 } %16 } %17 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex/SUlbVNrtlM",
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
				  "name" : "lex/zJNoKHaKYV",
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
			  "colour" : 262,
			  "output" : "MainClass",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "main",
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
			  "message0" : "int %1 [ %2 ] %3 ",
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
			  "colour" : 273,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "i",
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
				  "name" : "body",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 218,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s1",
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
			  
			  "colour" : 189,
			  "output" : "Type",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "b",
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
				  "check" : ["Type", "Identifier"]
				},
				  	{
				  "name" : "i/FoYYUlRLQu",
				  "type" : "input_value",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 85,
			  "output" : "FormalList",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "lst",
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
			  "message0" : "this %1 ",
			  "args0" : [
				{
				  "name" : "this",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 50,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "this",
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
			  "message0" : "public %1 %2 %3 ( %4 %5 ) %6 { %7 %8 %9 return %10 %11 ; %12 } %13 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Type",
				  "type" : "input_value",
				  "check" : ["Type", "Identifier"]
				},
				  	{
				  "name" : "lex/solJTNzRIQ",
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
				  "name" : "a",
				  "type" : "input_statement",
				  "check" : ["VarDecl", "epsilon"]
				},
				  	{
				  "name" : "s",
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
				  "check" : ["Expression", "Identifier", "Integer"]
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
			  "colour" : 47,
			  
			  "previousStatement" : "MethodDecl",
			  "nextStatement" : "MethodDecl",
			  "inputsInline" : true,
			  "tooltip" : "mtd",
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
				  "check" : ["Expression", "Identifier", "Integer"]
				},
				
			],
			  "colour" : 247,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "d",
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
			  "message0" : "%1 [ %2 %3 ] %4 = %5 %6 ; %7 ",
			  "args0" : [
				{
				  "name" : "i/MsdQtneQLi",
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
				  "check" : ["Expression", "Identifier", "Integer"]
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
				  "check" : ["Expression", "Identifier", "Integer"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 26,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s6",
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
			  "message0" : "new %1 int %2 [ %3 %4 ] %5 ",
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
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression", "Identifier", "Integer"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 310,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ne",
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
				  "check" : ["Expression", "Identifier", "Integer"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 304,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s67",
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
			  "message0" : "false %1 ",
			  "args0" : [
				{
				  "name" : "f",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 326,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "f",
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
			  "message0" : "new %1 %2 ( %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "b/flDcXycxTM",
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
			  "colour" : 136,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ne2",
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
				  "check" : ["Expression", "Identifier", "Integer"]
				},
				  	{
				  "name" : "bla",
				  "type" : "input_statement",
				  "check" : ["ExpressionList", "epsilon"]
				},
				
			],
			  "colour" : 148,
			  
			  "previousStatement" : "ExpressionList",
			  "nextStatement" : "ExpressionList",
			  "inputsInline" : true,
			  "tooltip" : "e",
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
				  "name" : "cls",
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
Blockly.Blocks['Expression/t'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/t",
			  "message0" : "true %1 ",
			  "args0" : [
				{
				  "name" : "t",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 341,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "t",
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
				  "check" : ["Expression", "Identifier", "Integer"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "v/SrDMaRbKFK",
				  "type" : "input_value",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "opt",
				  "type" : "input_statement",
				  "check" : ["ExpressionList", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 192,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "v",
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
				  "check" : ["Expression", "Identifier", "Integer"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression", "Identifier", "Integer"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 151,
			  "output" : "Expression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "a",
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
				  "name" : "lex/edXIzukwHv",
				  "type" : "input_value",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "dcls",
				  "type" : "input_statement",
				  "check" : ["VarDecl", "epsilon"]
				},
				  	{
				  "name" : "mtds",
				  "type" : "input_statement",
				  "check" : ["MethodDecl", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 200,
			  
			  "previousStatement" : "ClassDecl",
			  "nextStatement" : "ClassDecl",
			  "inputsInline" : true,
			  "tooltip" : "clsdcl",
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
				  "name" : "i/aECRkdlPeY",
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
				  "check" : ["Expression", "Identifier", "Integer"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 18,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "s5",
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
				  "check" : ["Integer"]
				},
				  	{
				  "name" : "Operator",
				  "type" : "field_dropdown",
				  "options" : [[ "+", "b" ],[ "-", "c" ],[ "<", "e" ],[ "*", "a" ],[ "&&", "and" ],]
				},
				  	{
				  "name" : "OpRight",
				  "type" : "input_value",
				  "check" : ["Integer"]
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

	