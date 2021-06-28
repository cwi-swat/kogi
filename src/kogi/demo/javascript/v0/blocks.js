Blockly.Blocks['Expression/geq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/geq",
			  "message0" : "%1 >= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 126,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "geq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionFlags'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionFlags",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "RegularExpressionFlagsName",
				  "type" : "field_input",
				  "text" : "RegularExpressionFlags"
				},
				
			],
			  "colour" : 216,
			  "output" : "RegularExpressionFlags",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableDeclaration/init'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableDeclaration/init",
			  "message0" : "%1 = %2 %3 ",
			  "args0" : [
				{
				  "name" : "id",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 333,
			  
			  "previousStatement" : "VariableDeclaration",
			  "nextStatement" : "VariableDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "init",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PropertyAssignment'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PropertyAssignment",
			  "message0" : "get %1 %2 ( %3 ) %4 { %5 %6 } %7 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "PropertyName",
				  "type" : "input_value",
				  "check" : ["PropertyName"]
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 112,
			  
			  "previousStatement" : "PropertyAssignment",
			  "nextStatement" : "PropertyAssignment",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SingleEscapeCharacter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SingleEscapeCharacter",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "SingleEscapeCharacterName",
				  "type" : "field_input",
				  "text" : "SingleEscapeCharacter"
				},
				
			],
			  "colour" : 193,
			  "output" : "SingleEscapeCharacter",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['HexInteger'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "HexInteger",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "HexIntegerName",
				  "type" : "field_input",
				  "text" : "HexInteger"
				},
				  	{
				  "name" : "HexIntegerName",
				  "type" : "field_input",
				  "text" : "HexInteger"
				},
				  	{
				  "name" : "HexIntegerName",
				  "type" : "field_input",
				  "text" : "HexInteger"
				},
				
			],
			  "colour" : 81,
			  "output" : "HexInteger",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EscapeSequence'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EscapeSequence",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "EscapeSequenceName",
				  "type" : "field_input",
				  "text" : "EscapeSequence"
				},
				
			],
			  "colour" : 283,
			  "output" : "EscapeSequence",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/forDoDeclarations'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/forDoDeclarations",
			  "message0" : "for %1 ( %2 var %3 %4 ; %5 %6 ; %7 %8 ) %9 %10 ",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["VariableDeclarationNoIn"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "conds",
				  "type" : "input_statement",
				  "check" : ["Expression", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ops",
				  "type" : "input_statement",
				  "check" : ["Expression", "epsilon"]
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
			  "colour" : 39,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "forDoDeclarations",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/ifThenElse'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/ifThenElse",
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
				  "type" : "input_statement",
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
			  "colour" : 346,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "ifThenElse",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/binOr'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/binOr",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 113,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "binOr",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/prefixPlus'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/prefixPlus",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 104,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "prefixPlus",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EscapeSequence'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EscapeSequence",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "UnicodeEscapeSequence",
				  "type" : "input_value",
				  "check" : ["UnicodeEscapeSequence"]
				},
				
			],
			  "colour" : 351,
			  "output" : "EscapeSequence",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/array'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/array",
			  "message0" : "[ %1 %2 %3 ] %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Expression", "epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 286,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "array",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DecimalInteger'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DecimalInteger",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "DecimalIntegerName",
				  "type" : "field_input",
				  "text" : "DecimalInteger"
				},
				
			],
			  "colour" : 115,
			  "output" : "DecimalInteger",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/debugger'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/debugger",
			  "message0" : "debugger %1 ; %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 104,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "debugger",
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
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 280,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "and",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/objectDefinition'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/objectDefinition",
			  "message0" : "{ %1 %2 %3 } %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["PropertyAssignment", "epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 264,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "objectDefinition",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/function'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/function",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Function",
				  "type" : "input_value",
				  "check" : ["Function"]
				},
				
			],
			  "colour" : 102,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "function",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PropertyName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PropertyName",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Numeric",
				  "type" : "input_value",
				  "check" : ["Numeric"]
				},
				
			],
			  "colour" : 9,
			  "output" : "PropertyName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assignDiv'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assignDiv",
			  "message0" : "%1 /= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 106,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assignDiv",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assignShl'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assignShl",
			  "message0" : "%1 <<= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 287,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assignShl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assignMul'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assignMul",
			  "message0" : "%1 *= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 26,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assignMul",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PropertyName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PropertyName",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 257,
			  "output" : "PropertyName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/mul'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/mul",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 48,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "mul",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/tryFinally'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/tryFinally",
			  "message0" : "try %1 %2 finally %3 %4 ",
			  "args0" : [
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
			  "colour" : 160,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "tryFinally",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assignRem'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assignRem",
			  "message0" : "%1 %= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 165,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assignRem",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionClassChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionClassChar",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["RegularExpressionBackslashSequence"]
				},
				
			],
			  "colour" : 24,
			  "output" : "RegularExpressionClassChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CaseClause/defaultCase'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CaseClause/defaultCase",
			  "message0" : "default %1 : %2 %3 ",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				
			],
			  "colour" : 130,
			  
			  "previousStatement" : "CaseClause",
			  "nextStatement" : "CaseClause",
			  "inputsInline" : true,
			  "tooltip" : "defaultCase",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assignAdd'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assignAdd",
			  "message0" : "%1 += %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 329,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assignAdd",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionBackslashSequence'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionBackslashSequence",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "RegularExpressionBackslashSequenceName",
				  "type" : "field_input",
				  "text" : "RegularExpressionBackslashSequence"
				},
				  	{
				  "name" : "RegularExpressionBackslashSequenceName",
				  "type" : "field_input",
				  "text" : "RegularExpressionBackslashSequence"
				},
				
			],
			  "colour" : 100,
			  "output" : "RegularExpressionBackslashSequence",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Numeric'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Numeric",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexInteger"]
				},
				
			],
			  "colour" : 308,
			  "output" : "Numeric",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Source/source'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Source/source",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
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
Blockly.Blocks['VarDecl/var1'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VarDecl/var1",
			  "message0" : "var %1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "declarations",
				  "type" : "input_statement",
				  "check" : ["VariableDeclaration"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 150,
			  "output" : "VarDecl",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "var1",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExponentPart'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExponentPart",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "ExponentPartName",
				  "type" : "field_input",
				  "text" : "ExponentPart"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["SignedInteger"]
				},
				
			],
			  "colour" : 322,
			  "output" : "ExponentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/typeof'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/typeof",
			  "message0" : "typeof %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 175,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "typeof",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/whileDo'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/whileDo",
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
				  "type" : "input_statement",
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
			  "colour" : 212,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "whileDo",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/literal'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/literal",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Literal",
				  "type" : "input_value",
				  "check" : ["Literal"]
				},
				
			],
			  "colour" : 74,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "literal",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Decimal'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Decimal",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["DecimalInteger"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["ExponentPart", "epsilon"]
				},
				
			],
			  "colour" : 0,
			  "output" : "Decimal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/forInDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/forInDeclaration",
			  "message0" : "for %1 ( %2 var %3 %4 in %5 %6 ) %7 %8 ",
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
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Statement"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
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
			  "colour" : 309,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "forInDeclaration",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assignBinOr'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assignBinOr",
			  "message0" : "%1 |= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 353,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assignBinOr",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionBody'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionBody",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["RegularExpressionFirstChar"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_value",
				  "check" : ["RegularExpressionChar"]
				},
				
			],
			  "colour" : 189,
			  "output" : "RegularExpressionBody",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/inn'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/inn",
			  "message0" : "%1 in %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 114,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "inn",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/labeled'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/labeled",
			  "message0" : "%1 : %2 %3 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Statement"
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
			  "colour" : 153,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "labeled",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Literal'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["String"]
				},
				
			],
			  "colour" : 162,
			  "output" : "Literal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/postIncr'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/postIncr",
			  "message0" : "%1 ++ %2 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 35,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "postIncr",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Function'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Function",
			  "message0" : "function %1 ( %2 %3 ) %4 { %5 %6 } %7 ",
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
				  "name" : "parameters",
				  "type" : "input_statement",
				  "check" : ["Id", "epsilon"]
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
				  "name" : "body",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 42,
			  "output" : "Function",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assign'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assign",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 278,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assign",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assignBinXor'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assignBinXor",
			  "message0" : "%1 ^= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 210,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assignBinXor",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Function'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Function",
			  "message0" : "function %1 %2 ( %3 %4 ) %5 { %6 %7 } %8 ",
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
				  "name" : "parameters",
				  "type" : "input_statement",
				  "check" : ["Id", "epsilon"]
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
				  "name" : "body",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 196,
			  "output" : "Function",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/forIn'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/forIn",
			  "message0" : "for %1 ( %2 %3 in %4 %5 ) %6 %7 ",
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
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
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
			  "colour" : 112,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "forIn",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableDeclarationNoIn/init'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableDeclarationNoIn/init",
			  "message0" : "%1 = %2 %3 ",
			  "args0" : [
				{
				  "name" : "id",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 282,
			  
			  "previousStatement" : "VariableDeclarationNoIn",
			  "nextStatement" : "VariableDeclarationNoIn",
			  "inputsInline" : true,
			  "tooltip" : "init",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionFirstChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionFirstChar",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["RegularExpressionClass"]
				},
				
			],
			  "colour" : 334,
			  "output" : "RegularExpressionFirstChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Literal'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Numeric",
				  "type" : "input_value",
				  "check" : ["Numeric"]
				},
				
			],
			  "colour" : 175,
			  "output" : "Literal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/lt'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/lt",
			  "message0" : "%1 < %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 96,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "lt",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EscapeCharacter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EscapeCharacter",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "EscapeCharacterName",
				  "type" : "field_input",
				  "text" : "EscapeCharacter"
				},
				
			],
			  "colour" : 162,
			  "output" : "EscapeCharacter",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DoubleStringChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DoubleStringChar",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "DoubleStringCharName",
				  "type" : "field_input",
				  "text" : "DoubleStringChar"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["EscapeSequence"]
				},
				
			],
			  "colour" : 34,
			  "output" : "DoubleStringChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionChar",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "RegularExpressionCharName",
				  "type" : "field_input",
				  "text" : "RegularExpressionChar"
				},
				
			],
			  "colour" : 13,
			  "output" : "RegularExpressionChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DoubleStringChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DoubleStringChar",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "DoubleStringCharName",
				  "type" : "field_input",
				  "text" : "DoubleStringChar"
				},
				
			],
			  "colour" : 301,
			  "output" : "DoubleStringChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/not'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/not",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 178,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "not",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/shl'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/shl",
			  "message0" : "%1 << %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 55,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "shl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/leq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/leq",
			  "message0" : "%1 <= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 110,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "leq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/preDecr'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/preDecr",
			  "message0" : "-- %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 139,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "preDecr",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/eqq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/eqq",
			  "message0" : "%1 === %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 332,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "eqq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/throwNoExp'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/throwNoExp",
			  "message0" : "throw %1 ; %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 20,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "throwNoExp",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/returnNoExp'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/returnNoExp",
			  "message0" : "return %1 ; %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 124,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "returnNoExp",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/switchCase'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/switchCase",
			  "message0" : "switch %1 ( %2 %3 ) %4 { %5 %6 } %7 ",
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
				  "type" : "input_statement",
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
				  "name" : "clauses",
				  "type" : "input_statement",
				  "check" : ["CaseClause", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 325,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "switchCase",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PropertyName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PropertyName",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "PropertyName"
				},
				
			],
			  "colour" : 8,
			  "output" : "PropertyName",
			  
			  
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
			  "colour" : 123,
			  
			  "previousStatement" : "Id",
			  "nextStatement" : "Id",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/binNeg'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/binNeg",
			  "message0" : "~ %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 230,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "binNeg",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/instanceof'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/instanceof",
			  "message0" : "%1 instanceof %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 336,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "instanceof",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/breakNoLabel'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/breakNoLabel",
			  "message0" : "break %1 ; %2 ",
			  "args0" : [
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
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "breakNoLabel",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/continueLabel'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/continueLabel",
			  "message0" : "continue %1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Statement"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 268,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "continueLabel",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/tryCatchFinally'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/tryCatchFinally",
			  "message0" : "try %1 %2 catch %3 ( %4 %5 ) %6 %7 finally %8 %9 ",
			  "args0" : [
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
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Statement"
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
			  "colour" : 284,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "tryCatchFinally",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpression",
			  "message0" : "%1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "RegularExpressionName",
				  "type" : "field_input",
				  "text" : "RegularExpression"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["RegularExpressionBody"]
				},
				  	{
				  "name" : "RegularExpressionName",
				  "type" : "field_input",
				  "text" : "RegularExpression"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["RegularExpressionFlags"]
				},
				
			],
			  "colour" : 195,
			  "output" : "RegularExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CharacterEscapeSequence'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CharacterEscapeSequence",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["NonEscapeCharacter"]
				},
				
			],
			  "colour" : 278,
			  "output" : "CharacterEscapeSequence",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionFirstChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionFirstChar",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["RegularExpressionBackslashSequence"]
				},
				
			],
			  "colour" : 136,
			  "output" : "RegularExpressionFirstChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/gt'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/gt",
			  "message0" : "%1 > %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 269,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "gt",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Decimal'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Decimal",
			  "message0" : "%1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["DecimalInteger"]
				},
				  	{
				  "name" : "DecimalName",
				  "type" : "field_input",
				  "text" : "Decimal"
				},
				  	{
				  "name" : "DecimalName",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["ExponentPart", "epsilon"]
				},
				
			],
			  "colour" : 232,
			  "output" : "Decimal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
			  
			  "colour" : 336,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "this",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/expression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/expression",
			  "message0" : "%1 ; %2 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 339,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "expression",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/varDecl'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/varDecl",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "VarDecl",
				  "type" : "input_value",
				  "check" : ["VarDecl"]
				},
				
			],
			  "colour" : 279,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "varDecl",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/doWhile'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/doWhile",
			  "message0" : "do %1 %2 while %3 ( %4 %5 ) %6 ; %7 ",
			  "args0" : [
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
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
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
			  "colour" : 103,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "doWhile",
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
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 286,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "add",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Numeric'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Numeric",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Decimal"]
				},
				
			],
			  "colour" : 262,
			  "output" : "Numeric",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/property'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/property",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Expression"
				},
				
			],
			  "colour" : 170,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "property",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/preIncr'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/preIncr",
			  "message0" : "++ %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 162,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "preIncr",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Boolean'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Boolean",
			  "message0" : "true",
			  
			  "colour" : 110,
			  "output" : "Boolean",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/with'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/with",
			  "message0" : "with %1 ( %2 %3 ) %4 %5 ",
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
				  "type" : "input_statement",
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
			  "colour" : 21,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "with",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/shrr'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/shrr",
			  "message0" : "%1 >>> %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 124,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "shrr",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assignShrr'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assignShrr",
			  "message0" : "%1 >>>= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 63,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assignShrr",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['String'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "String",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "StringName",
				  "type" : "field_input",
				  "text" : "String"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_value",
				  "check" : ["SingleStringChar"]
				},
				  	{
				  "name" : "StringName",
				  "type" : "field_input",
				  "text" : "String"
				},
				
			],
			  "colour" : 169,
			  "output" : "String",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Literal'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["RegularExpression"]
				},
				
			],
			  "colour" : 142,
			  "output" : "Literal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/eq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/eq",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 285,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "eq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionChar",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["RegularExpressionClass"]
				},
				
			],
			  "colour" : 314,
			  "output" : "RegularExpressionChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['String'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "String",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "StringName",
				  "type" : "field_input",
				  "text" : "String"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_value",
				  "check" : ["DoubleStringChar"]
				},
				  	{
				  "name" : "StringName",
				  "type" : "field_input",
				  "text" : "String"
				},
				
			],
			  "colour" : 51,
			  "output" : "String",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/tryCatch'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/tryCatch",
			  "message0" : "try %1 %2 catch %3 ( %4 %5 ) %6 %7 ",
			  "args0" : [
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
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Statement"
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
			  "colour" : 8,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "tryCatch",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Boolean'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Boolean",
			  "message0" : "false",
			  
			  "colour" : 64,
			  "output" : "Boolean",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['HexDigit'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "HexDigit",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "HexDigitName",
				  "type" : "field_input",
				  "text" : "HexDigit"
				},
				
			],
			  "colour" : 102,
			  "output" : "HexDigit",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/shr'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/shr",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 44,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "shr",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/binXor'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/binXor",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 282,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "binXor",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionFirstChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionFirstChar",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "RegularExpressionFirstCharName",
				  "type" : "field_input",
				  "text" : "RegularExpressionFirstChar"
				},
				
			],
			  "colour" : 6,
			  "output" : "RegularExpressionFirstChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/block'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/block",
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
			  "colour" : 62,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "block",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EscapeCharacter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EscapeCharacter",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["SingleEscapeCharacter"]
				},
				
			],
			  "colour" : 325,
			  "output" : "EscapeCharacter",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PropertyAssignment/property'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PropertyAssignment/property",
			  "message0" : "%1 : %2 %3 ",
			  "args0" : [
				{
				  "name" : "PropertyName",
				  "type" : "input_value",
				  "check" : ["PropertyName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 164,
			  
			  "previousStatement" : "PropertyAssignment",
			  "nextStatement" : "PropertyAssignment",
			  "inputsInline" : true,
			  "tooltip" : "property",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/delete'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/delete",
			  "message0" : "delete %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 279,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "delete",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/member'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/member",
			  "message0" : "%1 [ %2 %3 ] %4 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 109,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "member",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Literal'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "null",
			  
			  "colour" : 230,
			  "output" : "Literal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DecimalInteger'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DecimalInteger",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "DecimalIntegerName",
				  "type" : "field_input",
				  "text" : "DecimalInteger"
				},
				  	{
				  "name" : "DecimalIntegerName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 279,
			  "output" : "DecimalInteger",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionChar",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["RegularExpressionBackslashSequence"]
				},
				
			],
			  "colour" : 326,
			  "output" : "RegularExpressionChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/empty'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/empty",
			  "message0" : ";",
			  
			  "colour" : 141,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "empty",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/cond'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/cond",
			  "message0" : "%1 ? %2 %3 : %4 %5 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 76,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "cond",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CharacterEscapeSequence'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CharacterEscapeSequence",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["SingleEscapeCharacter"]
				},
				
			],
			  "colour" : 100,
			  "output" : "CharacterEscapeSequence",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/neq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/neq",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 4,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "neq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EscapeSequence'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EscapeSequence",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexEscapeSequence"]
				},
				
			],
			  "colour" : 183,
			  "output" : "EscapeSequence",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SignedInteger'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SignedInteger",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["", "epsilon"]
				},
				  	{
				  "name" : "SignedIntegerName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 309,
			  "output" : "SignedInteger",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/or'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/or",
			  "message0" : "%1 || %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 91,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "or",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VarDecl/var2'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VarDecl/var2",
			  "message0" : "let %1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "declarations",
				  "type" : "input_statement",
				  "check" : ["VariableDeclaration"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 229,
			  "output" : "VarDecl",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "var2",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EscapeSequence'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EscapeSequence",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["CharacterEscapeSequence"]
				},
				
			],
			  "colour" : 134,
			  "output" : "EscapeSequence",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/forDo'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/forDo",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Expression", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "conds",
				  "type" : "input_statement",
				  "check" : ["Expression", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ops",
				  "type" : "input_statement",
				  "check" : ["Expression", "epsilon"]
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
			  "colour" : 187,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "forDo",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PropertyAssignment'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PropertyAssignment",
			  "message0" : "set %1 %2 ( %3 %4 ) %5 { %6 %7 } %8 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "PropertyName",
				  "type" : "input_value",
				  "check" : ["PropertyName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "PropertyAssignment"
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
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 266,
			  
			  "previousStatement" : "PropertyAssignment",
			  "nextStatement" : "PropertyAssignment",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/binAnd'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/binAnd",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 133,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "binAnd",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/breakLabel'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/breakLabel",
			  "message0" : "break %1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Statement"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 321,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "breakLabel",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/call'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/call",
			  "message0" : "%1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Expression", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 77,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "call",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/postDec'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/postDec",
			  "message0" : "%1 -- %2 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 14,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "postDec",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnicodeEscapeSequence'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnicodeEscapeSequence",
			  "message0" : "u %1 %2 %3 %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexDigit"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexDigit"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexDigit"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexDigit"]
				},
				
			],
			  "colour" : 188,
			  "output" : "UnicodeEscapeSequence",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/var'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/var",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "field_input",
				  "text" : "Expression"
				},
				
			],
			  "colour" : 283,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "var",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/returnExp'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/returnExp",
			  "message0" : "return %1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 256,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "returnExp",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionClass'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionClass",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "RegularExpressionClassName",
				  "type" : "field_input",
				  "text" : "RegularExpressionClass"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_value",
				  "check" : ["RegularExpressionClassChar"]
				},
				  	{
				  "name" : "RegularExpressionClassName",
				  "type" : "field_input",
				  "text" : "RegularExpressionClass"
				},
				
			],
			  "colour" : 293,
			  "output" : "RegularExpressionClass",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RegularExpressionClassChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RegularExpressionClassChar",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "RegularExpressionClassCharName",
				  "type" : "field_input",
				  "text" : "RegularExpressionClassChar"
				},
				
			],
			  "colour" : 87,
			  "output" : "RegularExpressionClassChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assignShr'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assignShr",
			  "message0" : "%1 >>= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 231,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assignShr",
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
				  "name" : "Function",
				  "type" : "input_value",
				  "check" : ["Function"]
				},
				
			],
			  "colour" : 23,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "function",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['NonEscapeCharacter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "NonEscapeCharacter",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "NonEscapeCharacterName",
				  "type" : "field_input",
				  "text" : "NonEscapeCharacter"
				},
				
			],
			  "colour" : 195,
			  "output" : "NonEscapeCharacter",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/throwExp'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/throwExp",
			  "message0" : "throw %1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 215,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "throwExp",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Literal'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Boolean",
				  "type" : "input_value",
				  "check" : ["Boolean"]
				},
				
			],
			  "colour" : 98,
			  "output" : "Literal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableDeclaration/nonInit'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableDeclaration/nonInit",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "id",
				  "type" : "field_input",
				  "text" : ""
				},
				
			],
			  "colour" : 192,
			  
			  "previousStatement" : "VariableDeclaration",
			  "nextStatement" : "VariableDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "nonInit",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/prefixMin'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/prefixMin",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 359,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "prefixMin",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/rem'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/rem",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 61,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "rem",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SingleStringChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SingleStringChar",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "SingleStringCharName",
				  "type" : "field_input",
				  "text" : "SingleStringChar"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["EscapeSequence"]
				},
				
			],
			  "colour" : 177,
			  "output" : "SingleStringChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 244,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "sub",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableDeclarationNoIn/nonInit'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableDeclarationNoIn/nonInit",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "id",
				  "type" : "field_input",
				  "text" : ""
				},
				
			],
			  "colour" : 265,
			  
			  "previousStatement" : "VariableDeclarationNoIn",
			  "nextStatement" : "VariableDeclarationNoIn",
			  "inputsInline" : true,
			  "tooltip" : "nonInit",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/div'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/div",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 189,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "div",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/ifThen'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/ifThen",
			  "message0" : "if %1 ( %2 %3 ) %4 %5 %6 ",
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
				  "type" : "input_statement",
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
				
			],
			  "colour" : 147,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "ifThen",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CaseClause/caseOf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CaseClause/caseOf",
			  "message0" : "case %1 %2 : %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				
			],
			  "colour" : 4,
			  
			  "previousStatement" : "CaseClause",
			  "nextStatement" : "CaseClause",
			  "inputsInline" : true,
			  "tooltip" : "caseOf",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['HexEscapeSequence'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "HexEscapeSequence",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "HexEscapeSequenceName",
				  "type" : "field_input",
				  "text" : "HexEscapeSequence"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexDigit"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexDigit"]
				},
				
			],
			  "colour" : 50,
			  "output" : "HexEscapeSequence",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Decimal'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Decimal",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "DecimalName",
				  "type" : "field_input",
				  "text" : "Decimal"
				},
				  	{
				  "name" : "DecimalName",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["ExponentPart", "epsilon"]
				},
				
			],
			  "colour" : 88,
			  "output" : "Decimal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/neqq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/neqq",
			  "message0" : "%1 !== %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 253,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "neqq",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assignSub'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assignSub",
			  "message0" : "%1 -= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 72,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assignSub",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/continueNoLabel'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/continueNoLabel",
			  "message0" : "continue %1 ; %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 209,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "continueNoLabel",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/new'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/new",
			  "message0" : "new %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 10,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "new",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression/assignBinAnd'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression/assignBinAnd",
			  "message0" : "%1 &= %2 %3 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 123,
			  
			  "previousStatement" : "Expression",
			  "nextStatement" : "Expression",
			  "inputsInline" : true,
			  "tooltip" : "assignBinAnd",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EscapeCharacter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EscapeCharacter",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "EscapeCharacterName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 238,
			  "output" : "EscapeCharacter",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SingleStringChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SingleStringChar",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "SingleStringCharName",
				  "type" : "field_input",
				  "text" : "SingleStringChar"
				},
				
			],
			  "colour" : 348,
			  "output" : "SingleStringChar",
			  
			  
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
BlocklyStorage.backupOnUnload();	
window.setTimeout(BlocklyStorage.restoreBlocks, 0);
function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}
	