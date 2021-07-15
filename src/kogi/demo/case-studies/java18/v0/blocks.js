Blockly.Blocks['StatementExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PostIncrementExpression",
				  "type" : "input_value",
				  "check" : ["PostIncrementExpression"]
				},
				
			],
			  "colour" : 191,
			  
			  "previousStatement" : "StatementExpression",
			  "nextStatement" : "StatementExpression",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "AssignmentExpression",
				  "type" : "input_value",
				  "check" : ["AssignmentExpression"]
				},
				
			],
			  "colour" : 156,
			  "output" : "Expression",
			  
			  
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
				  "name" : "BooleanLiteral",
				  "type" : "input_value",
				  "check" : ["BooleanLiteral"]
				},
				
			],
			  "colour" : 132,
			  "output" : "Literal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ElementValue'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ElementValue",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ElementValueArrayInitializer",
				  "type" : "input_value",
				  "check" : ["ElementValueArrayInitializer"]
				},
				
			],
			  "colour" : 242,
			  
			  "previousStatement" : "ElementValue",
			  "nextStatement" : "ElementValue",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "StatementWithoutTrailingSubstatement",
				  "type" : "input_value",
				  "check" : ["StatementWithoutTrailingSubstatement"]
				},
				
			],
			  "colour" : 309,
			  "output" : "Statement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Annotation'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Annotation",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "NormalAnnotation",
				  "type" : "input_value",
				  "check" : ["NormalAnnotation"]
				},
				
			],
			  "colour" : 150,
			  
			  "previousStatement" : "Annotation",
			  "nextStatement" : "Annotation",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExtendsInterfaces'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExtendsInterfaces",
			  "message0" : "extends %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["InterfaceType"]
				},
				
			],
			  "colour" : 328,
			  
			  "previousStatement" : "ExtendsInterfaces",
			  "nextStatement" : "ExtendsInterfaces",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableInitializer'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableInitializer",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 158,
			  
			  "previousStatement" : "VariableInitializer",
			  "nextStatement" : "VariableInitializer",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ArrayType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ArrayType",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "ClassOrInterfaceType",
				  "type" : "input_statement",
				  "check" : ["ClassOrInterfaceType"]
				},
				  	{
				  "name" : "Dims",
				  "type" : "input_value",
				  "check" : ["Dims"]
				},
				
			],
			  "colour" : 212,
			  "output" : "ArrayType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciFloatNumeral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciFloatNumeral",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "DeciFloatNumeralName",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["DeciFloatExponentPart"]
				},
				
			],
			  "colour" : 219,
			  "output" : "DeciFloatNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ShiftExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ShiftExpression",
			  "message0" : "%1 >> %2 %3 ",
			  "args0" : [
				{
				  "name" : "ShiftExpression",
				  "type" : "input_value",
				  "check" : ["ShiftExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "AdditiveExpression",
				  "type" : "input_value",
				  "check" : ["AdditiveExpression"]
				},
				
			],
			  "colour" : 44,
			  "output" : "ShiftExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegralType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegralType",
			  "message0" : "long",
			  
			  "colour" : 104,
			  "output" : "IntegralType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : "%=",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 299,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IfThenElseStatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IfThenElseStatementNoShortIf",
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
				  "name" : "StatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["StatementNoShortIf"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "StatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["StatementNoShortIf"]
				},
				
			],
			  "colour" : 45,
			  "output" : "IfThenElseStatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldDeclaration/fieldDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldDeclaration/fieldDeclaration",
			  "message0" : "%1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "s",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "UnannType",
				  "type" : "input_value",
				  "check" : ["UnannType"]
				},
				  	{
				  "name" : "VariableDeclaratorList",
				  "type" : "input_value",
				  "check" : ["VariableDeclaratorList"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : [""]
				},
				
			],
			  "colour" : 76,
			  "output" : "FieldDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fieldDeclaration",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ElementValuePair'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ElementValuePair",
			  "message0" : "%1 = %2 %3 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ElementValue",
				  "type" : "input_statement",
				  "check" : ["ElementValue"]
				},
				
			],
			  "colour" : 250,
			  
			  "previousStatement" : "ElementValuePair",
			  "nextStatement" : "ElementValuePair",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Comment'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Comment",
			  "message0" : "/**/",
			  
			  "colour" : 200,
			  "output" : "Comment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "InterfaceDeclaration",
				  "type" : "input_value",
				  "check" : ["InterfaceDeclaration"]
				},
				
			],
			  "colour" : 29,
			  
			  "previousStatement" : "InterfaceMemberDeclaration",
			  "nextStatement" : "InterfaceMemberDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "EmptyStatement",
				  "type" : "input_value",
				  "check" : ["EmptyStatement"]
				},
				
			],
			  "colour" : 293,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Assignment",
				  "type" : "input_value",
				  "check" : ["Assignment"]
				},
				
			],
			  "colour" : 124,
			  "output" : "AssignmentExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : "<<=",
			  
			  "colour" : 350,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConditionalAndExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConditionalAndExpression",
			  "message0" : "%1 && %2 %3 ",
			  "args0" : [
				{
				  "name" : "ConditionalAndExpression",
				  "type" : "input_value",
				  "check" : ["ConditionalAndExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "InclusiveOrExpression",
				  "type" : "input_value",
				  "check" : ["InclusiveOrExpression"]
				},
				
			],
			  "colour" : 296,
			  "output" : "ConditionalAndExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExclusiveOrExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExclusiveOrExpression",
			  "message0" : "%1 ^ %2 %3 ",
			  "args0" : [
				{
				  "name" : "ExclusiveOrExpression",
				  "type" : "input_value",
				  "check" : ["ExclusiveOrExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "AndExpression",
				  "type" : "input_value",
				  "check" : ["AndExpression"]
				},
				
			],
			  "colour" : 350,
			  "output" : "ExclusiveOrExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciFloatLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciFloatLiteral",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["DeciFloatNumeral"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 138,
			  "output" : "DeciFloatLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EnhancedForStatement/enhancedForStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EnhancedForStatement/enhancedForStatement",
			  "message0" : "for %1 ( %2 %3 %4 %5 : %6 %7 ) %8 %9 ",
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
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "UnannType",
				  "type" : "input_value",
				  "check" : ["UnannType"]
				},
				  	{
				  "name" : "VariableDeclaratorId",
				  "type" : "input_value",
				  "check" : ["VariableDeclaratorId"]
				},
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
				  "type" : "input_value",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 252,
			  "output" : "EnhancedForStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "enhancedForStatement",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciFloatNumeral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciFloatNumeral",
			  "message0" : "%1 . %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "DeciFloatNumeralName",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "DeciFloatNumeralName",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 116,
			  "output" : "DeciFloatNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CharContent/single'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CharContent/single",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["SingleChar"]
				},
				
			],
			  "colour" : 192,
			  "output" : "CharContent",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnqualifiedClassInstanceCreationExpression/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnqualifiedClassInstanceCreationExpression/m",
			  "message0" : "new %1 %2 %3 ( %4 %5 ) %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "ClassOrInterfaceTypeToInstantiate",
				  "type" : "input_value",
				  "check" : ["ClassOrInterfaceTypeToInstantiate"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "a",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 194,
			  "output" : "UnqualifiedClassInstanceCreationExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "EnumDeclaration",
				  "type" : "input_value",
				  "check" : ["EnumDeclaration"]
				},
				
			],
			  "colour" : 286,
			  "output" : "ClassDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SwitchLabel'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SwitchLabel",
			  "message0" : "default %1 : %2 ",
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
			  "colour" : 95,
			  
			  "previousStatement" : "SwitchLabel",
			  "nextStatement" : "SwitchLabel",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimitiveType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimitiveType",
			  "message0" : "%1 boolean %2 ",
			  "args0" : [
				{
				  "name" : "ans",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 112,
			  "output" : "PrimitiveType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodModifier",
			  "message0" : "private",
			  
			  "colour" : 180,
			  
			  "previousStatement" : "MethodModifier",
			  "nextStatement" : "MethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Resource'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Resource",
			  "message0" : "%1 %2 %3 = %4 %5 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "UnannType",
				  "type" : "input_value",
				  "check" : ["UnannType"]
				},
				  	{
				  "name" : "VariableDeclaratorId",
				  "type" : "input_value",
				  "check" : ["VariableDeclaratorId"]
				},
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
			  "colour" : 107,
			  
			  "previousStatement" : "Resource",
			  "nextStatement" : "Resource",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PostDecrementExpression",
				  "type" : "input_value",
				  "check" : ["PostDecrementExpression"]
				},
				
			],
			  "colour" : 27,
			  
			  "previousStatement" : "StatementExpression",
			  "nextStatement" : "StatementExpression",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RelationalExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RelationalExpression",
			  "message0" : "%1 >= %2 %3 ",
			  "args0" : [
				{
				  "name" : "RelationalExpression",
				  "type" : "input_value",
				  "check" : ["RelationalExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ShiftExpression",
				  "type" : "input_value",
				  "check" : ["ShiftExpression"]
				},
				
			],
			  "colour" : 211,
			  "output" : "RelationalExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LineTerminator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LineTerminator",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["CarriageReturn"]
				},
				
			],
			  "colour" : 91,
			  "output" : "LineTerminator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnqualifiedClassInstanceCreationExpression/ma'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnqualifiedClassInstanceCreationExpression/ma",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "AIC",
				  "type" : "input_value",
				  "check" : ["AIC"]
				},
				
			],
			  "colour" : 332,
			  "output" : "UnqualifiedClassInstanceCreationExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ma",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SimpleTypeName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SimpleTypeName",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 193,
			  "output" : "SimpleTypeName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableInitializer'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableInitializer",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ArrayInitializer",
				  "type" : "input_value",
				  "check" : ["ArrayInitializer"]
				},
				
			],
			  "colour" : 108,
			  
			  "previousStatement" : "VariableInitializer",
			  "nextStatement" : "VariableInitializer",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciLiteral",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["DeciNumeral"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 164,
			  "output" : "DeciLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannReferenceType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannReferenceType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "UnannArrayType",
				  "type" : "input_value",
				  "check" : ["UnannArrayType"]
				},
				
			],
			  "colour" : 310,
			  "output" : "UnannReferenceType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IfThenElseStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IfThenElseStatement",
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
				  "name" : "StatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["StatementNoShortIf"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_value",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 18,
			  "output" : "IfThenElseStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AmbiguousName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AmbiguousName",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 330,
			  "output" : "AmbiguousName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : "&=",
			  
			  "colour" : 111,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TryStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TryStatement",
			  "message0" : "try %1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Block",
				  "type" : "input_value",
				  "check" : ["Block"]
				},
				  	{
				  "name" : "Catches",
				  "type" : "input_value",
				  "check" : ["Catches"]
				},
				
			],
			  "colour" : 46,
			  "output" : "TryStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableDeclaratorList/variableDeclaratorList'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableDeclaratorList/variableDeclaratorList",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["VariableDeclarator"]
				},
				
			],
			  "colour" : 29,
			  "output" : "VariableDeclaratorList",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "variableDeclaratorList",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Annotation'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Annotation",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "SingleElementAnnotation",
				  "type" : "input_value",
				  "check" : ["SingleElementAnnotation"]
				},
				
			],
			  "colour" : 130,
			  
			  "previousStatement" : "Annotation",
			  "nextStatement" : "Annotation",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AdditionalBound'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AdditionalBound",
			  "message0" : "& %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "InterfaceType",
				  "type" : "input_statement",
				  "check" : ["InterfaceType"]
				},
				
			],
			  "colour" : 10,
			  
			  "previousStatement" : "AdditionalBound",
			  "nextStatement" : "AdditionalBound",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StaticInitializer'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StaticInitializer",
			  "message0" : "static %1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Block",
				  "type" : "input_value",
				  "check" : ["Block"]
				},
				  	{
				  "name" : "bla",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 337,
			  "output" : "StaticInitializer",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CommentPart'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CommentPart",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["Asterisk"]
				},
				
			],
			  "colour" : 184,
			  "output" : "CommentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotationTypeElementModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotationTypeElementModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 280,
			  
			  "previousStatement" : "AnnotationTypeElementModifier",
			  "nextStatement" : "AnnotationTypeElementModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "NormalInterfaceDeclaration",
				  "type" : "input_value",
				  "check" : ["NormalInterfaceDeclaration"]
				},
				
			],
			  "colour" : 246,
			  "output" : "InterfaceDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeName",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
				{
				  "name" : "PackageOrTypeName",
				  "type" : "input_value",
				  "check" : ["PackageOrTypeName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 340,
			  "output" : "TypeName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Assignment",
				  "type" : "input_value",
				  "check" : ["Assignment"]
				},
				
			],
			  "colour" : 348,
			  
			  "previousStatement" : "StatementExpression",
			  "nextStatement" : "StatementExpression",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnaryExpressionNotPlusMinus'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnaryExpressionNotPlusMinus",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "CastExpression",
				  "type" : "input_value",
				  "check" : ["CastExpression"]
				},
				
			],
			  "colour" : 310,
			  "output" : "UnaryExpressionNotPlusMinus",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnaryExpressionNotPlusMinus'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnaryExpressionNotPlusMinus",
			  "message0" : "~ %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnaryExpression",
				  "type" : "input_value",
				  "check" : ["UnaryExpression"]
				},
				
			],
			  "colour" : 195,
			  "output" : "UnaryExpressionNotPlusMinus",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodReference'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodReference",
			  "message0" : "%1 . %2 super %3 :: %4 %5 %6 ",
			  "args0" : [
				{
				  "name" : "TypeName",
				  "type" : "input_value",
				  "check" : ["TypeName"]
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
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 249,
			  "output" : "MethodReference",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FloatingPointType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FloatingPointType",
			  "message0" : "float",
			  
			  "colour" : 316,
			  "output" : "FloatingPointType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LineTerminator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LineTerminator",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "LineTerminatorName",
				  "type" : "field_input",
				  "text" : "LineTerminator"
				},
				
			],
			  "colour" : 163,
			  "output" : "LineTerminator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CharContent'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CharContent",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["UnicodeEscape"]
				},
				
			],
			  "colour" : 302,
			  "output" : "CharContent",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Comment'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Comment",
			  "message0" : "// %1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["EOLCommentChars"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["LineTerminator"]
				},
				
			],
			  "colour" : 115,
			  "output" : "Comment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "SynchronizedStatement",
				  "type" : "input_value",
				  "check" : ["SynchronizedStatement"]
				},
				
			],
			  "colour" : 307,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LabeledStatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LabeledStatementNoShortIf",
			  "message0" : "%1 : %2 %3 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "StatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["StatementNoShortIf"]
				},
				
			],
			  "colour" : 245,
			  "output" : "LabeledStatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Result'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Result",
			  "message0" : "void",
			  
			  "colour" : 187,
			  "output" : "Result",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassBodyDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassBodyDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "InstanceInitializer",
				  "type" : "input_value",
				  "check" : ["InstanceInitializer"]
				},
				
			],
			  "colour" : 212,
			  
			  "previousStatement" : "ClassBodyDeclaration",
			  "nextStatement" : "ClassBodyDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EnumBodyDeclarations'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EnumBodyDeclarations",
			  "message0" : "; %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 23,
			  
			  "previousStatement" : "EnumBodyDeclarations",
			  "nextStatement" : "EnumBodyDeclarations",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannClassType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannClassType",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 26,
			  "output" : "UnannClassType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LambdaParameters'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LambdaParameters",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 236,
			  "output" : "LambdaParameters",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceModifier",
			  "message0" : "abstract",
			  
			  "colour" : 235,
			  
			  "previousStatement" : "InterfaceModifier",
			  "nextStatement" : "InterfaceModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StringPart'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StringPart",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["UnicodeEscape"]
				},
				
			],
			  "colour" : 94,
			  "output" : "StringPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CommentPart'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CommentPart",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["EscEscChar"]
				},
				
			],
			  "colour" : 181,
			  "output" : "CommentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PackageName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PackageName",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 149,
			  "output" : "PackageName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : "=",
			  
			  "colour" : 349,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EnumConstantName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EnumConstantName",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 25,
			  
			  "previousStatement" : "EnumConstantName",
			  "nextStatement" : "EnumConstantName",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ReferenceType/arrayType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ReferenceType/arrayType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ArrayType",
				  "type" : "input_value",
				  "check" : ["ArrayType"]
				},
				
			],
			  "colour" : 220,
			  "output" : "ReferenceType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "arrayType",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassType",
				  "type" : "input_value",
				  "check" : ["ClassType"]
				},
				
			],
			  "colour" : 144,
			  
			  "previousStatement" : "InterfaceType",
			  "nextStatement" : "InterfaceType",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Annotation'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Annotation",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "MarkerAnnotation",
				  "type" : "input_value",
				  "check" : ["MarkerAnnotation"]
				},
				
			],
			  "colour" : 166,
			  
			  "previousStatement" : "Annotation",
			  "nextStatement" : "Annotation",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ReferenceType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ReferenceType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassOrInterfaceType",
				  "type" : "input_statement",
				  "check" : ["ClassOrInterfaceType"]
				},
				
			],
			  "colour" : 233,
			  "output" : "ReferenceType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Expression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Expression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "LambdaExpression",
				  "type" : "input_value",
				  "check" : ["LambdaExpression"]
				},
				
			],
			  "colour" : 212,
			  "output" : "Expression",
			  
			  
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
				  "name" : "StringLiteral",
				  "type" : "input_value",
				  "check" : ["StringLiteral"]
				},
				
			],
			  "colour" : 173,
			  "output" : "Literal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodModifier",
			  "message0" : "synchronized",
			  
			  "colour" : 117,
			  
			  "previousStatement" : "MethodModifier",
			  "nextStatement" : "MethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ArrayCreationExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ArrayCreationExpression",
			  "message0" : "new %1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "PrimitiveType",
				  "type" : "input_value",
				  "check" : ["PrimitiveType"]
				},
				  	{
				  "name" : "Dims",
				  "type" : "input_value",
				  "check" : ["Dims"]
				},
				  	{
				  "name" : "ArrayInitializer",
				  "type" : "input_value",
				  "check" : ["ArrayInitializer"]
				},
				
			],
			  "colour" : 341,
			  "output" : "ArrayCreationExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Superclass'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Superclass",
			  "message0" : "extends %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ClassType",
				  "type" : "input_value",
				  "check" : ["ClassType"]
				},
				
			],
			  "colour" : 13,
			  
			  "previousStatement" : "Superclass",
			  "nextStatement" : "Superclass",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotationTypeElementDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotationTypeElementDeclaration",
			  "message0" : "%1 %2 %3 ( %4 ) %5 %6 %7 ",
			  "args0" : [
				{
				  "name" : "amd",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "UnannType",
				  "type" : "input_value",
				  "check" : ["UnannType"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
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
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 84,
			  "output" : "AnnotationTypeElementDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceMethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceMethodModifier",
			  "message0" : "abstract",
			  
			  "colour" : 116,
			  
			  "previousStatement" : "InterfaceMethodModifier",
			  "nextStatement" : "InterfaceMethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BlockStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BlockStatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "LocalVariableDeclarationStatement",
				  "type" : "input_value",
				  "check" : ["LocalVariableDeclarationStatement"]
				},
				
			],
			  "colour" : 38,
			  
			  "previousStatement" : "BlockStatement",
			  "nextStatement" : "BlockStatement",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BasicForStatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BasicForStatementNoShortIf",
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
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "StatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["StatementNoShortIf"]
				},
				
			],
			  "colour" : 172,
			  "output" : "BasicForStatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstantModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstantModifier",
			  "message0" : "final",
			  
			  "colour" : 62,
			  
			  "previousStatement" : "ConstantModifier",
			  "nextStatement" : "ConstantModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExplicitConstructorInvocation/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExplicitConstructorInvocation/m",
			  "message0" : "%1 this %2 ( %3 %4 ) %5 ; %6 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
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
				  "check" : ["epsilon"]
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
			  "colour" : 301,
			  
			  "previousStatement" : "ExplicitConstructorInvocation",
			  "nextStatement" : "ExplicitConstructorInvocation",
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EscChar/b'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EscChar/b",
			  "message0" : "\ %1 ",
			  "args0" : [
				{
				  "name" : "dv",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 353,
			  "output" : "EscChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ArgumentList/al'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ArgumentList/al",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "exps",
				  "type" : "input_statement",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 118,
			  
			  "previousStatement" : "ArgumentList",
			  "nextStatement" : "ArgumentList",
			  "inputsInline" : true,
			  "tooltip" : "al",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannClassType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannClassType",
			  "message0" : "%1 . %2 %3 %4 %5 ",
			  "args0" : [
				{
				  "name" : "UnannClassOrInterfaceType",
				  "type" : "input_value",
				  "check" : ["UnannClassOrInterfaceType"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "an",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "args",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 85,
			  "output" : "UnannClassType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PrimitiveType",
				  "type" : "input_value",
				  "check" : ["PrimitiveType"]
				},
				
			],
			  "colour" : 144,
			  
			  "previousStatement" : "Type",
			  "nextStatement" : "Type",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['HexaSignificand'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "HexaSignificand",
			  "message0" : "%1 %2 %3 . %4 %5 ",
			  "args0" : [
				{
				  "name" : "HexaSignificandName",
				  "type" : "field_input",
				  "text" : "HexaSignificand"
				},
				  	{
				  "name" : "HexaSignificandName",
				  "type" : "field_input",
				  "text" : "HexaSignificand"
				},
				  	{
				  "name" : "HexaSignificandName",
				  "type" : "field_input",
				  "text" : "HexaSignificand"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "HexaSignificandName",
				  "type" : "field_input",
				  "text" : "HexaSignificand"
				},
				
			],
			  "colour" : 310,
			  "output" : "HexaSignificand",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodModifier",
			  "message0" : "final",
			  
			  "colour" : 126,
			  
			  "previousStatement" : "MethodModifier",
			  "nextStatement" : "MethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementNoShortIf",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "StatementWithoutTrailingSubstatement",
				  "type" : "input_value",
				  "check" : ["StatementWithoutTrailingSubstatement"]
				},
				
			],
			  "colour" : 325,
			  "output" : "StatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RelationalExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RelationalExpression",
			  "message0" : "%1 <= %2 %3 ",
			  "args0" : [
				{
				  "name" : "RelationalExpression",
				  "type" : "input_value",
				  "check" : ["RelationalExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ShiftExpression",
				  "type" : "input_value",
				  "check" : ["ShiftExpression"]
				},
				
			],
			  "colour" : 299,
			  "output" : "RelationalExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 313,
			  
			  "previousStatement" : "ClassModifier",
			  "nextStatement" : "ClassModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "AnnotationTypeDeclaration",
				  "type" : "input_value",
				  "check" : ["AnnotationTypeDeclaration"]
				},
				
			],
			  "colour" : 47,
			  "output" : "InterfaceDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciFloatNumeral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciFloatNumeral",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "DeciFloatNumeralName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 313,
			  "output" : "DeciFloatNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MultiplicativeExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MultiplicativeExpression",
			  "message0" : "%1 / %2 %3 ",
			  "args0" : [
				{
				  "name" : "MultiplicativeExpression",
				  "type" : "input_value",
				  "check" : ["MultiplicativeExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnaryExpression",
				  "type" : "input_value",
				  "check" : ["UnaryExpression"]
				},
				
			],
			  "colour" : 281,
			  "output" : "MultiplicativeExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MultiplicativeExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MultiplicativeExpression",
			  "message0" : "%1 * %2 %3 ",
			  "args0" : [
				{
				  "name" : "MultiplicativeExpression",
				  "type" : "input_value",
				  "check" : ["MultiplicativeExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnaryExpression",
				  "type" : "input_value",
				  "check" : ["UnaryExpression"]
				},
				
			],
			  "colour" : 167,
			  "output" : "MultiplicativeExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "NormalClassDeclaration",
				  "type" : "input_value",
				  "check" : ["NormalClassDeclaration"]
				},
				
			],
			  "colour" : 125,
			  "output" : "ClassDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotationTypeBody'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotationTypeBody",
			  "message0" : "{ %1 %2 } %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "an",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 213,
			  "output" : "AnnotationTypeBody",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstantDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstantDeclaration",
			  "message0" : "%1 %2 %3 ; %4 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "UnannType",
				  "type" : "input_value",
				  "check" : ["UnannType"]
				},
				  	{
				  "name" : "VariableDeclaratorList",
				  "type" : "input_value",
				  "check" : ["VariableDeclaratorList"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 350,
			  "output" : "ConstantDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ArrayAccess/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ArrayAccess/m",
			  "message0" : "%1 [ %2 %3 ] %4 ",
			  "args0" : [
				{
				  "name" : "ExpressionName",
				  "type" : "input_value",
				  "check" : ["ExpressionName"]
				},
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
			  "output" : "ArrayAccess",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['WildcardBounds'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "WildcardBounds",
			  "message0" : "super %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ReferenceType",
				  "type" : "input_value",
				  "check" : ["ReferenceType"]
				},
				
			],
			  "colour" : 134,
			  
			  "previousStatement" : "WildcardBounds",
			  "nextStatement" : "WildcardBounds",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AndExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AndExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "EqualityExpression",
				  "type" : "input_value",
				  "check" : ["EqualityExpression"]
				},
				
			],
			  "colour" : 36,
			  "output" : "AndExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PackageDeclaration/pd'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PackageDeclaration/pd",
			  "message0" : "%1 package %2 %3 ; %4 ",
			  "args0" : [
				{
				  "name" : "pkgs",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 132,
			  
			  "previousStatement" : "PackageDeclaration",
			  "nextStatement" : "PackageDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "pd",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BooleanLiteral/false'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BooleanLiteral/false",
			  "message0" : "false",
			  
			  "colour" : 181,
			  "output" : "BooleanLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "false",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PostIncrementExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PostIncrementExpression",
			  "message0" : "%1 ++ %2 ",
			  "args0" : [
				{
				  "name" : "PostfixExpression",
				  "type" : "input_value",
				  "check" : ["PostfixExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 308,
			  "output" : "PostIncrementExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MultiplicativeExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MultiplicativeExpression",
			  "message0" : "%1 %% %2 %3 ",
			  "args0" : [
				{
				  "name" : "MultiplicativeExpression",
				  "type" : "input_value",
				  "check" : ["MultiplicativeExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnaryExpression",
				  "type" : "input_value",
				  "check" : ["UnaryExpression"]
				},
				
			],
			  "colour" : 165,
			  "output" : "MultiplicativeExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['NormalInterfaceDeclaration/normalInterfaceDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "NormalInterfaceDeclaration/normalInterfaceDeclaration",
			  "message0" : "%1 interface %2 %3 %4 %5 %6 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "InterfaceBody",
				  "type" : "input_value",
				  "check" : ["InterfaceBody"]
				},
				
			],
			  "colour" : 82,
			  "output" : "NormalInterfaceDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "normalInterfaceDeclaration",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassModifier",
			  "message0" : "protected",
			  
			  "colour" : 50,
			  
			  "previousStatement" : "ClassModifier",
			  "nextStatement" : "ClassModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnaryExpressionNotPlusMinus'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnaryExpressionNotPlusMinus",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PostfixExpression",
				  "type" : "input_value",
				  "check" : ["PostfixExpression"]
				},
				
			],
			  "colour" : 123,
			  "output" : "UnaryExpressionNotPlusMinus",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ImportDeclaration/importDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ImportDeclaration/importDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "SingleTypeImportDeclaration",
				  "type" : "input_value",
				  "check" : ["SingleTypeImportDeclaration"]
				},
				
			],
			  "colour" : 357,
			  
			  "previousStatement" : "ImportDeclaration",
			  "nextStatement" : "ImportDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "importDeclaration",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LabeledStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LabeledStatement",
			  "message0" : "%1 : %2 %3 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_value",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 15,
			  "output" : "LabeledStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InclusiveOrExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InclusiveOrExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ExclusiveOrExpression",
				  "type" : "input_value",
				  "check" : ["ExclusiveOrExpression"]
				},
				
			],
			  "colour" : 149,
			  "output" : "InclusiveOrExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MarkerAnnotation'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MarkerAnnotation",
			  "message0" : "@ %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "TypeName",
				  "type" : "input_value",
				  "check" : ["TypeName"]
				},
				
			],
			  "colour" : 0,
			  "output" : "MarkerAnnotation",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodModifier",
			  "message0" : "strictfp",
			  
			  "colour" : 345,
			  
			  "previousStatement" : "MethodModifier",
			  "nextStatement" : "MethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementNoShortIf",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "IfThenElseStatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["IfThenElseStatementNoShortIf"]
				},
				
			],
			  "colour" : 299,
			  "output" : "StatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EqualityExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EqualityExpression",
			  "message0" : "%1 != %2 %3 ",
			  "args0" : [
				{
				  "name" : "EqualityExpression",
				  "type" : "input_value",
				  "check" : ["EqualityExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "RelationalExpression",
				  "type" : "input_value",
				  "check" : ["RelationalExpression"]
				},
				
			],
			  "colour" : 60,
			  "output" : "EqualityExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "TryStatement",
				  "type" : "input_value",
				  "check" : ["TryStatement"]
				},
				
			],
			  "colour" : 228,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : ">>=",
			  
			  "colour" : 169,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldModifier",
			  "message0" : "volatile",
			  
			  "colour" : 251,
			  
			  "previousStatement" : "FieldModifier",
			  "nextStatement" : "FieldModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LeftHandSide'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LeftHandSide",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "FieldAccess",
				  "type" : "input_value",
				  "check" : ["FieldAccess"]
				},
				
			],
			  "colour" : 350,
			  "output" : "LeftHandSide",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldModifier",
			  "message0" : "private",
			  
			  "colour" : 304,
			  
			  "previousStatement" : "FieldModifier",
			  "nextStatement" : "FieldModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BlockStatements'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BlockStatements",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "BlockStatement",
				  "type" : "input_statement",
				  "check" : ["BlockStatement"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 269,
			  "output" : "BlockStatements",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimaryNoNewArray'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimaryNoNewArray",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ArrayAccess",
				  "type" : "input_value",
				  "check" : ["ArrayAccess"]
				},
				
			],
			  "colour" : 49,
			  "output" : "PrimaryNoNewArray",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassBodyDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassBodyDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "StaticInitializer",
				  "type" : "input_value",
				  "check" : ["StaticInitializer"]
				},
				
			],
			  "colour" : 4,
			  
			  "previousStatement" : "ClassBodyDeclaration",
			  "nextStatement" : "ClassBodyDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EscapeSeq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EscapeSeq",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["OctaEscape"]
				},
				
			],
			  "colour" : 265,
			  "output" : "EscapeSeq",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ThrowStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ThrowStatement",
			  "message0" : "throw %1 %2 ; %3 ",
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
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 136,
			  "output" : "ThrowStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PackageOrTypeName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PackageOrTypeName",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
				{
				  "name" : "PackageOrTypeName",
				  "type" : "input_value",
				  "check" : ["PackageOrTypeName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 191,
			  "output" : "PackageOrTypeName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ContinueStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ContinueStatement",
			  "message0" : "continue %1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 302,
			  "output" : "ContinueStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['NormalAnnotation'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "NormalAnnotation",
			  "message0" : "@ %1 %2 ( %3 %4 ) %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "TypeName",
				  "type" : "input_value",
				  "check" : ["TypeName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 78,
			  "output" : "NormalAnnotation",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['HexaSignificand'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "HexaSignificand",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "HexaSignificandName",
				  "type" : "field_input",
				  "text" : "HexaSignificand"
				},
				  	{
				  "name" : "HexaSignificandName",
				  "type" : "field_input",
				  "text" : "HexaSignificand"
				},
				  	{
				  "name" : "HexaSignificandName",
				  "type" : "field_input",
				  "text" : "HexaSignificand"
				},
				
			],
			  "colour" : 316,
			  "output" : "HexaSignificand",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstructorModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstructorModifier",
			  "message0" : "private",
			  
			  "colour" : 106,
			  
			  "previousStatement" : "ConstructorModifier",
			  "nextStatement" : "ConstructorModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PackageName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PackageName",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
				{
				  "name" : "PackageName",
				  "type" : "input_value",
				  "check" : ["PackageName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 320,
			  "output" : "PackageName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EqualityExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EqualityExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "RelationalExpression",
				  "type" : "input_value",
				  "check" : ["RelationalExpression"]
				},
				
			],
			  "colour" : 159,
			  "output" : "EqualityExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RelationalExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RelationalExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ShiftExpression",
				  "type" : "input_value",
				  "check" : ["ShiftExpression"]
				},
				
			],
			  "colour" : 100,
			  "output" : "RelationalExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['HexaFloatNumeral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "HexaFloatNumeral",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexaSignificand"]
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["BinaryExponent"]
				},
				
			],
			  "colour" : 163,
			  "output" : "HexaFloatNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ElementValueArrayInitializer'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ElementValueArrayInitializer",
			  "message0" : "{ %1 %2 %3 } %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 285,
			  "output" : "ElementValueArrayInitializer",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ShiftExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ShiftExpression",
			  "message0" : "%1 << %2 %3 ",
			  "args0" : [
				{
				  "name" : "ShiftExpression",
				  "type" : "input_value",
				  "check" : ["ShiftExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "AdditiveExpression",
				  "type" : "input_value",
				  "check" : ["AdditiveExpression"]
				},
				
			],
			  "colour" : 134,
			  "output" : "ShiftExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnaryExpressionNotPlusMinus'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnaryExpressionNotPlusMinus",
			  "message0" : "! %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnaryExpression",
				  "type" : "input_value",
				  "check" : ["UnaryExpression"]
				},
				
			],
			  "colour" : 313,
			  "output" : "UnaryExpressionNotPlusMinus",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : "-=",
			  
			  "colour" : 126,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegralType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegralType",
			  "message0" : "char",
			  
			  "colour" : 352,
			  "output" : "IntegralType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassInstanceCreationExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassInstanceCreationExpression",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
				{
				  "name" : "ExpressionName",
				  "type" : "input_value",
				  "check" : ["ExpressionName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnqualifiedClassInstanceCreationExpression",
				  "type" : "input_value",
				  "check" : ["UnqualifiedClassInstanceCreationExpression"]
				},
				
			],
			  "colour" : 99,
			  "output" : "ClassInstanceCreationExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Dims/bla'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Dims/bla",
			  "message0" : "%1 [ %2 ] %3 %4 ",
			  "args0" : [
				{
				  "name" : "an",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "a",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "s",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "d",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 290,
			  "output" : "Dims",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "bla",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassModifier",
			  "message0" : "public",
			  
			  "colour" : 297,
			  
			  "previousStatement" : "ClassModifier",
			  "nextStatement" : "ClassModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassInstanceCreationExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassInstanceCreationExpression",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
				{
				  "name" : "Primary",
				  "type" : "input_value",
				  "check" : ["Primary"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnqualifiedClassInstanceCreationExpression",
				  "type" : "input_value",
				  "check" : ["UnqualifiedClassInstanceCreationExpression"]
				},
				
			],
			  "colour" : 43,
			  "output" : "ClassInstanceCreationExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ArrayCreationExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ArrayCreationExpression",
			  "message0" : "new %1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ClassOrInterfaceType",
				  "type" : "input_statement",
				  "check" : ["ClassOrInterfaceType"]
				},
				  	{
				  "name" : "Dims",
				  "type" : "input_value",
				  "check" : ["Dims"]
				},
				  	{
				  "name" : "ArrayInitializer",
				  "type" : "input_value",
				  "check" : ["ArrayInitializer"]
				},
				
			],
			  "colour" : 347,
			  "output" : "ArrayCreationExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassModifier",
			  "message0" : "static",
			  
			  "colour" : 349,
			  
			  "previousStatement" : "ClassModifier",
			  "nextStatement" : "ClassModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceModifier",
			  "message0" : "private",
			  
			  "colour" : 240,
			  
			  "previousStatement" : "InterfaceModifier",
			  "nextStatement" : "InterfaceModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegerLiteral/hexa'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegerLiteral/hexa",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexaLiteral"]
				},
				
			],
			  "colour" : 342,
			  "output" : "IntegerLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "hexa",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LEX_CharLiteral/char'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LEX_CharLiteral/char",
			  "message0" : "' %1 %2 ' %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["CharContent"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 216,
			  "output" : "LEX_CharLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassInstanceCreationExpression",
				  "type" : "input_value",
				  "check" : ["ClassInstanceCreationExpression"]
				},
				
			],
			  "colour" : 145,
			  
			  "previousStatement" : "StatementExpression",
			  "nextStatement" : "StatementExpression",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['HexaFloatLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "HexaFloatLiteral",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexaFloatNumeral"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 70,
			  "output" : "HexaFloatLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotatedType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotatedType",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "an",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 338,
			  
			  "previousStatement" : "AnnotatedType",
			  "nextStatement" : "AnnotatedType",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CommentPart'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CommentPart",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["EscChar"]
				},
				
			],
			  "colour" : 164,
			  "output" : "CommentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ForStatement",
				  "type" : "input_value",
				  "check" : ["ForStatement"]
				},
				
			],
			  "colour" : 148,
			  "output" : "Statement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InclusiveOrExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InclusiveOrExpression",
			  "message0" : "%1 | %2 %3 ",
			  "args0" : [
				{
				  "name" : "InclusiveOrExpression",
				  "type" : "input_value",
				  "check" : ["InclusiveOrExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ExclusiveOrExpression",
				  "type" : "input_value",
				  "check" : ["ExclusiveOrExpression"]
				},
				
			],
			  "colour" : 179,
			  "output" : "InclusiveOrExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InstanceInitializer'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InstanceInitializer",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Block",
				  "type" : "input_value",
				  "check" : ["Block"]
				},
				
			],
			  "colour" : 26,
			  "output" : "InstanceInitializer",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DefaultValue'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DefaultValue",
			  "message0" : "default %1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ElementValue",
				  "type" : "input_statement",
				  "check" : ["ElementValue"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 208,
			  
			  "previousStatement" : "DefaultValue",
			  "nextStatement" : "DefaultValue",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AdditiveExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AdditiveExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "MultiplicativeExpression",
				  "type" : "input_value",
				  "check" : ["MultiplicativeExpression"]
				},
				
			],
			  "colour" : 33,
			  "output" : "AdditiveExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ElementValue'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ElementValue",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ConditionalExpression",
				  "type" : "input_value",
				  "check" : ["ConditionalExpression"]
				},
				
			],
			  "colour" : 108,
			  
			  "previousStatement" : "ElementValue",
			  "nextStatement" : "ElementValue",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConditionalOrExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConditionalOrExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ConditionalAndExpression",
				  "type" : "input_value",
				  "check" : ["ConditionalAndExpression"]
				},
				
			],
			  "colour" : 334,
			  "output" : "ConditionalOrExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DimExprs'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DimExprs",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["DimExpr"]
				},
				
			],
			  "colour" : 31,
			  "output" : "DimExprs",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['OctaEscape'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "OctaEscape",
			  "message0" : "\ %1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "OctaEscapeName",
				  "type" : "field_input",
				  "text" : "OctaEscape"
				},
				  	{
				  "name" : "OctaEscapeName",
				  "type" : "field_input",
				  "text" : "OctaEscape"
				},
				
			],
			  "colour" : 26,
			  "output" : "OctaEscape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FooStringChars'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FooStringChars",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 0,
			  "output" : "FooStringChars",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PostfixExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PostfixExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PostIncrementExpression",
				  "type" : "input_value",
				  "check" : ["PostIncrementExpression"]
				},
				
			],
			  "colour" : 273,
			  "output" : "PostfixExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ForInit'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ForInit",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "LocalVariableDeclaration",
				  "type" : "input_value",
				  "check" : ["LocalVariableDeclaration"]
				},
				
			],
			  "colour" : 327,
			  
			  "previousStatement" : "ForInit",
			  "nextStatement" : "ForInit",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotationTypeMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotationTypeMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "InterfaceMethodDeclaration",
				  "type" : "input_value",
				  "check" : ["InterfaceMethodDeclaration"]
				},
				
			],
			  "colour" : 87,
			  
			  "previousStatement" : "AnnotationTypeMemberDeclaration",
			  "nextStatement" : "AnnotationTypeMemberDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PreIncrementExpression",
				  "type" : "input_value",
				  "check" : ["PreIncrementExpression"]
				},
				
			],
			  "colour" : 110,
			  
			  "previousStatement" : "StatementExpression",
			  "nextStatement" : "StatementExpression",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeArgument'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeArgument",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Wildcard",
				  "type" : "input_value",
				  "check" : ["Wildcard"]
				},
				
			],
			  "colour" : 170,
			  
			  "previousStatement" : "TypeArgument",
			  "nextStatement" : "TypeArgument",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannTypeVariable'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannTypeVariable",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 9,
			  
			  "previousStatement" : "UnannTypeVariable",
			  "nextStatement" : "UnannTypeVariable",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimaryNoNewArray'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimaryNoNewArray",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Literal",
				  "type" : "input_value",
				  "check" : ["Literal"]
				},
				
			],
			  "colour" : 185,
			  "output" : "PrimaryNoNewArray",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConditionalOrExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConditionalOrExpression",
			  "message0" : "%1 || %2 %3 ",
			  "args0" : [
				{
				  "name" : "ConditionalOrExpression",
				  "type" : "input_value",
				  "check" : ["ConditionalOrExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ConditionalAndExpression",
				  "type" : "input_value",
				  "check" : ["ConditionalAndExpression"]
				},
				
			],
			  "colour" : 274,
			  "output" : "ConditionalOrExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeImportOnDemandDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeImportOnDemandDeclaration",
			  "message0" : "import %1 %2 . %3 * %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "PackageOrTypeName",
				  "type" : "input_value",
				  "check" : ["PackageOrTypeName"]
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
				  "check" : [""]
				},
				
			],
			  "colour" : 134,
			  "output" : "TypeImportOnDemandDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EnumDeclaration/enumDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EnumDeclaration/enumDeclaration",
			  "message0" : "%1 enum %2 %3 %4 %5 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "EnumBody",
				  "type" : "input_value",
				  "check" : ["EnumBody"]
				},
				
			],
			  "colour" : 181,
			  "output" : "EnumDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "enumDeclaration",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciNumeral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciNumeral",
			  "message0" : "0",
			  
			  "colour" : 30,
			  "output" : "DeciNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : "/=",
			  
			  "colour" : 94,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnaryExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnaryExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PreIncrementExpression",
				  "type" : "input_value",
				  "check" : ["PreIncrementExpression"]
				},
				
			],
			  "colour" : 92,
			  "output" : "UnaryExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PostfixExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PostfixExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PostDecrementExpression",
				  "type" : "input_value",
				  "check" : ["PostDecrementExpression"]
				},
				
			],
			  "colour" : 314,
			  "output" : "PostfixExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodDeclarator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodDeclarator",
			  "message0" : "%1 ( %2 %3 ) %4 %5 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "LastFormalParameter",
				  "type" : "input_value",
				  "check" : ["LastFormalParameter"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "d",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 318,
			  "output" : "MethodDeclarator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciFloatNumeral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciFloatNumeral",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "DeciFloatNumeralName",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 77,
			  "output" : "DeciFloatNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Comment'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Comment",
			  "message0" : "%1 %2 */ %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_value",
				  "check" : ["CommentPart"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 163,
			  "output" : "Comment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimaryNoNewArray'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimaryNoNewArray",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "MethodInvocation",
				  "type" : "input_value",
				  "check" : ["MethodInvocation"]
				},
				
			],
			  "colour" : 104,
			  "output" : "PrimaryNoNewArray",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ElementValuePairList'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ElementValuePairList",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["ElementValuePair"]
				},
				
			],
			  "colour" : 330,
			  
			  "previousStatement" : "ElementValuePairList",
			  "nextStatement" : "ElementValuePairList",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodHeader/methodHeader'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodHeader/methodHeader",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "Result",
				  "type" : "input_value",
				  "check" : ["Result"]
				},
				  	{
				  "name" : "MethodDeclarator",
				  "type" : "input_value",
				  "check" : ["MethodDeclarator"]
				},
				  	{
				  "name" : "bla",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 289,
			  "output" : "MethodHeader",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "methodHeader",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotationTypeElementModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotationTypeElementModifier",
			  "message0" : "public",
			  
			  "colour" : 78,
			  
			  "previousStatement" : "AnnotationTypeElementModifier",
			  "nextStatement" : "AnnotationTypeElementModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LambdaParameters'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LambdaParameters",
			  "message0" : "( %1 %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 79,
			  "output" : "LambdaParameters",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeArgument'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeArgument",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ReferenceType",
				  "type" : "input_value",
				  "check" : ["ReferenceType"]
				},
				
			],
			  "colour" : 152,
			  
			  "previousStatement" : "TypeArgument",
			  "nextStatement" : "TypeArgument",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotationTypeMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotationTypeMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassDeclaration",
				  "type" : "input_value",
				  "check" : ["ClassDeclaration"]
				},
				
			],
			  "colour" : 231,
			  
			  "previousStatement" : "AnnotationTypeMemberDeclaration",
			  "nextStatement" : "AnnotationTypeMemberDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['OctaLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "OctaLiteral",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["OctaNumeral"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 344,
			  "output" : "OctaLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ConstantDeclaration",
				  "type" : "input_value",
				  "check" : ["ConstantDeclaration"]
				},
				
			],
			  "colour" : 206,
			  
			  "previousStatement" : "InterfaceMemberDeclaration",
			  "nextStatement" : "InterfaceMemberDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodInvocation/ma'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodInvocation/ma",
			  "message0" : "%1 . %2 %3 %4 ( %5 %6 ) %7 ",
			  "args0" : [
				{
				  "name" : "ExpressionName",
				  "type" : "input_value",
				  "check" : ["ExpressionName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "a",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 303,
			  "output" : "MethodInvocation",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ma",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExpressionStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExpressionStatement",
			  "message0" : "%1 ; %2 ",
			  "args0" : [
				{
				  "name" : "StatementExpression",
				  "type" : "input_statement",
				  "check" : ["StatementExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 147,
			  "output" : "ExpressionStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodModifier",
			  "message0" : "abstract",
			  
			  "colour" : 8,
			  
			  "previousStatement" : "MethodModifier",
			  "nextStatement" : "MethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Type'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Type",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ReferenceType",
				  "type" : "input_value",
				  "check" : ["ReferenceType"]
				},
				
			],
			  "colour" : 289,
			  
			  "previousStatement" : "Type",
			  "nextStatement" : "Type",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegralType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegralType",
			  "message0" : "int",
			  
			  "colour" : 8,
			  "output" : "IntegralType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PostDecrementExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PostDecrementExpression",
			  "message0" : "%1 -- %2 ",
			  "args0" : [
				{
				  "name" : "PostfixExpression",
				  "type" : "input_value",
				  "check" : ["PostfixExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 262,
			  "output" : "PostDecrementExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExplicitConstructorInvocation/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExplicitConstructorInvocation/m",
			  "message0" : "%1 super %2 ( %3 %4 ) %5 ; %6 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
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
				  "check" : ["epsilon"]
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
			  "colour" : 246,
			  
			  "previousStatement" : "ExplicitConstructorInvocation",
			  "nextStatement" : "ExplicitConstructorInvocation",
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['NumericType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "NumericType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "IntegralType",
				  "type" : "input_value",
				  "check" : ["IntegralType"]
				},
				
			],
			  "colour" : 173,
			  "output" : "NumericType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableModifier",
			  "message0" : "final",
			  
			  "colour" : 305,
			  
			  "previousStatement" : "VariableModifier",
			  "nextStatement" : "VariableModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EnhancedForStatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EnhancedForStatementNoShortIf",
			  "message0" : "for %1 ( %2 %3 %4 %5 : %6 %7 ) %8 %9 ",
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
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "UnannType",
				  "type" : "input_value",
				  "check" : ["UnannType"]
				},
				  	{
				  "name" : "VariableDeclaratorId",
				  "type" : "input_value",
				  "check" : ["VariableDeclaratorId"]
				},
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
				  "name" : "StatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["StatementNoShortIf"]
				},
				
			],
			  "colour" : 103,
			  "output" : "EnhancedForStatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BlockCommentChars'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BlockCommentChars",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "BlockCommentCharsName",
				  "type" : "field_input",
				  "text" : "BlockCommentChars"
				},
				
			],
			  "colour" : 201,
			  "output" : "BlockCommentChars",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExplicitConstructorInvocation/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExplicitConstructorInvocation/m",
			  "message0" : "%1 . %2 %3 super %4 ( %5 %6 ) %7 ; %8 ",
			  "args0" : [
				{
				  "name" : "Primary",
				  "type" : "input_value",
				  "check" : ["Primary"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
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
				  "check" : ["epsilon"]
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
			  
			  "previousStatement" : "ExplicitConstructorInvocation",
			  "nextStatement" : "ExplicitConstructorInvocation",
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodModifier",
			  "message0" : "native",
			  
			  "colour" : 331,
			  
			  "previousStatement" : "MethodModifier",
			  "nextStatement" : "MethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassLiteral",
			  "message0" : "%1 %2 . %3 class %4 ",
			  "args0" : [
				{
				  "name" : "TypeName",
				  "type" : "input_value",
				  "check" : ["TypeName"]
				},
				  	{
				  "name" : "m",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
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
			  "colour" : 343,
			  "output" : "ClassLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodInvocation/mb'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodInvocation/mb",
			  "message0" : "%1 . %2 super %3 . %4 %5 %6 ( %7 %8 ) %9 ",
			  "args0" : [
				{
				  "name" : "TypeName",
				  "type" : "input_value",
				  "check" : ["TypeName"]
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
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "a",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 254,
			  "output" : "MethodInvocation",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "mb",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExplicitConstructorInvocation/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExplicitConstructorInvocation/m",
			  "message0" : "%1 . %2 %3 super %4 ( %5 %6 ) %7 ; %8 ",
			  "args0" : [
				{
				  "name" : "ExpressionName",
				  "type" : "input_value",
				  "check" : ["ExpressionName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "TypeArguments",
				  "type" : "input_value",
				  "check" : ["TypeArguments"]
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
				  "check" : ["epsilon"]
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
			  
			  "previousStatement" : "ExplicitConstructorInvocation",
			  "nextStatement" : "ExplicitConstructorInvocation",
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "BreakStatement",
				  "type" : "input_value",
				  "check" : ["BreakStatement"]
				},
				
			],
			  "colour" : 250,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceBody'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceBody",
			  "message0" : "{ %1 %2 } %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 312,
			  "output" : "InterfaceBody",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannPrimitiveType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannPrimitiveType",
			  "message0" : "boolean",
			  
			  "colour" : 15,
			  "output" : "UnannPrimitiveType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['HexaNumeral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "HexaNumeral",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "HexaNumeralName",
				  "type" : "field_input",
				  "text" : "HexaNumeral"
				},
				  	{
				  "name" : "HexaNumeralName",
				  "type" : "field_input",
				  "text" : "HexaNumeral"
				},
				  	{
				  "name" : "HexaNumeralName",
				  "type" : "field_input",
				  "text" : "HexaNumeral"
				},
				
			],
			  "colour" : 221,
			  "output" : "HexaNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassLiteral",
			  "message0" : "void %1 . %2 class %3 ",
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
			  "colour" : 291,
			  "output" : "ClassLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegerLiteral/deci'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegerLiteral/deci",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["DeciLiteral"]
				},
				
			],
			  "colour" : 63,
			  "output" : "IntegerLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "deci",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AIC/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AIC/m",
			  "message0" : "new %1 %2 %3 ( %4 %5 ) %6 %7 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "ClassOrInterfaceTypeToInstantiate",
				  "type" : "input_value",
				  "check" : ["ClassOrInterfaceTypeToInstantiate"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "a",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ClassBody",
				  "type" : "input_value",
				  "check" : ["ClassBody"]
				},
				
			],
			  "colour" : 177,
			  "output" : "AIC",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AmbiguousName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AmbiguousName",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
				{
				  "name" : "AmbiguousName",
				  "type" : "input_value",
				  "check" : ["AmbiguousName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 227,
			  "output" : "AmbiguousName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EnumConstantList/cons'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EnumConstantList/cons",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "cons",
				  "type" : "input_statement",
				  "check" : ["EnumConstant"]
				},
				
			],
			  "colour" : 194,
			  
			  "previousStatement" : "EnumConstantList",
			  "nextStatement" : "EnumConstantList",
			  "inputsInline" : true,
			  "tooltip" : "cons",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementExpressionList'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementExpressionList",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["StatementExpression"]
				},
				
			],
			  "colour" : 347,
			  "output" : "StatementExpressionList",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "InterfaceDeclaration",
				  "type" : "input_value",
				  "check" : ["InterfaceDeclaration"]
				},
				
			],
			  "colour" : 108,
			  "output" : "ClassMemberDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : "*=",
			  
			  "colour" : 38,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PreIncrementExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PreIncrementExpression",
			  "message0" : "++ %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnaryExpression",
				  "type" : "input_value",
				  "check" : ["UnaryExpression"]
				},
				
			],
			  "colour" : 46,
			  "output" : "PreIncrementExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CatchClause'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CatchClause",
			  "message0" : "catch %1 ( %2 %3 ) %4 %5 ",
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
				  "name" : "CatchFormalParameter",
				  "type" : "input_value",
				  "check" : ["CatchFormalParameter"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Block",
				  "type" : "input_value",
				  "check" : ["Block"]
				},
				
			],
			  "colour" : 298,
			  
			  "previousStatement" : "CatchClause",
			  "nextStatement" : "CatchClause",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StringChars'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StringChars",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["FooStringChars"]
				},
				
			],
			  "colour" : 76,
			  "output" : "StringChars",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Asterisk'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Asterisk",
			  "message0" : "*",
			  
			  "colour" : 69,
			  "output" : "Asterisk",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceMethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceMethodModifier",
			  "message0" : "strictfp",
			  
			  "colour" : 357,
			  
			  "previousStatement" : "InterfaceMethodModifier",
			  "nextStatement" : "InterfaceMethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassOrInterfaceType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassOrInterfaceType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassType",
				  "type" : "input_value",
				  "check" : ["ClassType"]
				},
				
			],
			  "colour" : 24,
			  
			  "previousStatement" : "ClassOrInterfaceType",
			  "nextStatement" : "ClassOrInterfaceType",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BooleanLiteral/true'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BooleanLiteral/true",
			  "message0" : "true",
			  
			  "colour" : 175,
			  "output" : "BooleanLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "true",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstructorModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstructorModifier",
			  "message0" : "strictfp",
			  
			  "colour" : 286,
			  
			  "previousStatement" : "ConstructorModifier",
			  "nextStatement" : "ConstructorModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Throws/th'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Throws/th",
			  "message0" : "throws %1 %2 ",
			  "args0" : [
				{
				  "name" : "bla",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "exc",
				  "type" : "input_statement",
				  "check" : ["ExceptionType"]
				},
				
			],
			  "colour" : 258,
			  
			  "previousStatement" : "Throws",
			  "nextStatement" : "Throws",
			  "inputsInline" : true,
			  "tooltip" : "th",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimaryNoNewArray'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimaryNoNewArray",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassLiteral",
				  "type" : "input_value",
				  "check" : ["ClassLiteral"]
				},
				
			],
			  "colour" : 324,
			  "output" : "PrimaryNoNewArray",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodInvocation/mc'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodInvocation/mc",
			  "message0" : "%1 . %2 %3 %4 ( %5 %6 ) %7 ",
			  "args0" : [
				{
				  "name" : "Primary",
				  "type" : "input_value",
				  "check" : ["Primary"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "a",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 287,
			  "output" : "MethodInvocation",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "mc",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : "+=",
			  
			  "colour" : 171,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassType",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "ann",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 126,
			  "output" : "ClassType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldModifier",
			  "message0" : "final",
			  
			  "colour" : 2,
			  
			  "previousStatement" : "FieldModifier",
			  "nextStatement" : "FieldModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodReference'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodReference",
			  "message0" : "super %1 :: %2 %3 %4 ",
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
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 247,
			  "output" : "MethodReference",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodDeclarator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodDeclarator",
			  "message0" : "%1 ( %2 %3 %4 ) %5 %6 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "fp",
				  "type" : "input_statement",
				  "check" : ["FormalParameter"]
				},
				  	{
				  "name" : "lfp",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "d",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 215,
			  "output" : "MethodDeclarator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodReference/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodReference/m",
			  "message0" : "%1 :: %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "ExpressionName",
				  "type" : "input_value",
				  "check" : ["ExpressionName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 111,
			  "output" : "MethodReference",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FloatingPointType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FloatingPointType",
			  "message0" : "double",
			  
			  "colour" : 199,
			  "output" : "FloatingPointType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CarriageReturn'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CarriageReturn",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "CarriageReturnName",
				  "type" : "field_input",
				  "text" : "CarriageReturn"
				},
				
			],
			  "colour" : 78,
			  "output" : "CarriageReturn",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeParameterModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeParameterModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 74,
			  
			  "previousStatement" : "TypeParameterModifier",
			  "nextStatement" : "TypeParameterModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AdditiveExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AdditiveExpression",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "AdditiveExpression",
				  "type" : "input_value",
				  "check" : ["AdditiveExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "MultiplicativeExpression",
				  "type" : "input_value",
				  "check" : ["MultiplicativeExpression"]
				},
				
			],
			  "colour" : 14,
			  "output" : "AdditiveExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AdditiveExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AdditiveExpression",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "AdditiveExpression",
				  "type" : "input_value",
				  "check" : ["AdditiveExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "MultiplicativeExpression",
				  "type" : "input_value",
				  "check" : ["MultiplicativeExpression"]
				},
				
			],
			  "colour" : 11,
			  "output" : "AdditiveExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LambdaBody'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LambdaBody",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 249,
			  "output" : "LambdaBody",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FloatingPointLiteral/float'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FloatingPointLiteral/float",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["DeciFloatLiteral"]
				},
				
			],
			  "colour" : 7,
			  "output" : "FloatingPointLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "float",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeDeclaration",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "ClassDeclaration",
				  "type" : "input_value",
				  "check" : ["ClassDeclaration"]
				},
				  	{
				  "name" : "cl",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 172,
			  
			  "previousStatement" : "TypeDeclaration",
			  "nextStatement" : "TypeDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceModifier",
			  "message0" : "strictfp",
			  
			  "colour" : 347,
			  
			  "previousStatement" : "InterfaceModifier",
			  "nextStatement" : "InterfaceModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['NumericType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "NumericType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "FloatingPointType",
				  "type" : "input_value",
				  "check" : ["FloatingPointType"]
				},
				
			],
			  "colour" : 306,
			  "output" : "NumericType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Assignment'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Assignment",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "LeftHandSide",
				  "type" : "input_value",
				  "check" : ["LeftHandSide"]
				},
				  	{
				  "name" : "AssignmentOperator",
				  "type" : "input_value",
				  "check" : ["AssignmentOperator"]
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 170,
			  "output" : "Assignment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldModifier",
			  "message0" : "transient",
			  
			  "colour" : 229,
			  
			  "previousStatement" : "FieldModifier",
			  "nextStatement" : "FieldModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EnumConstant/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EnumConstant/m",
			  "message0" : "%1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 122,
			  
			  "previousStatement" : "EnumConstant",
			  "nextStatement" : "EnumConstant",
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "IfThenStatement",
				  "type" : "input_value",
				  "check" : ["IfThenStatement"]
				},
				
			],
			  "colour" : 263,
			  "output" : "Statement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodModifier",
			  "message0" : "protected",
			  
			  "colour" : 25,
			  
			  "previousStatement" : "MethodModifier",
			  "nextStatement" : "MethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassModifier",
			  "message0" : "strictfp",
			  
			  "colour" : 329,
			  
			  "previousStatement" : "ClassModifier",
			  "nextStatement" : "ClassModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LEX_StringLiteral/string'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LEX_StringLiteral/string",
			  "message0" : "\" %1 %2 \" %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_value",
				  "check" : ["StringPart"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 291,
			  "output" : "LEX_StringLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CharContent'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CharContent",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["EscapeSeq"]
				},
				
			],
			  "colour" : 95,
			  "output" : "CharContent",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LastFormalParameter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LastFormalParameter",
			  "message0" : "%1 %2 %3 ... %4 %5 ",
			  "args0" : [
				{
				  "name" : "vm",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "UnannType",
				  "type" : "input_value",
				  "check" : ["UnannType"]
				},
				  	{
				  "name" : "a",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "VariableDeclaratorId",
				  "type" : "input_value",
				  "check" : ["VariableDeclaratorId"]
				},
				
			],
			  "colour" : 32,
			  "output" : "LastFormalParameter",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EOLCommentChars'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EOLCommentChars",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "EOLCommentCharsName",
				  "type" : "field_input",
				  "text" : "EOLCommentChars"
				},
				
			],
			  "colour" : 308,
			  "output" : "EOLCommentChars",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeName",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 91,
			  "output" : "TypeName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegralType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegralType",
			  "message0" : "short",
			  
			  "colour" : 58,
			  "output" : "IntegralType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 91,
			  
			  "previousStatement" : "MethodModifier",
			  "nextStatement" : "MethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodInvocation/mv'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodInvocation/mv",
			  "message0" : "super %1 . %2 %3 %4 ( %5 %6 ) %7 ",
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
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "a",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 292,
			  "output" : "MethodInvocation",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "mv",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannInterfaceType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannInterfaceType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "UnannClassType",
				  "type" : "input_value",
				  "check" : ["UnannClassType"]
				},
				
			],
			  "colour" : 322,
			  
			  "previousStatement" : "UnannInterfaceType",
			  "nextStatement" : "UnannInterfaceType",
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
				  "name" : "IntegerLiteral",
				  "type" : "input_value",
				  "check" : ["IntegerLiteral"]
				},
				
			],
			  "colour" : 256,
			  "output" : "Literal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Result'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Result",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "UnannType",
				  "type" : "input_value",
				  "check" : ["UnannType"]
				},
				
			],
			  "colour" : 349,
			  "output" : "Result",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FormalParameters/formalParameter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FormalParameters/formalParameter",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "FormalParameter",
				  "type" : "input_statement",
				  "check" : ["FormalParameter"]
				},
				  	{
				  "name" : "fp",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 16,
			  "output" : "FormalParameters",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "formalParameter",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FormalParameterList'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FormalParameterList",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "FormalParameters",
				  "type" : "input_value",
				  "check" : ["FormalParameters"]
				},
				
			],
			  "colour" : 46,
			  
			  "previousStatement" : "FormalParameterList",
			  "nextStatement" : "FormalParameterList",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeDeclaration",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "InterfaceDeclaration",
				  "type" : "input_value",
				  "check" : ["InterfaceDeclaration"]
				},
				  	{
				  "name" : "in",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 197,
			  
			  "previousStatement" : "TypeDeclaration",
			  "nextStatement" : "TypeDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LocalVariableDeclarationStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LocalVariableDeclarationStatement",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "LocalVariableDeclaration",
				  "type" : "input_value",
				  "check" : ["LocalVariableDeclaration"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : [""]
				},
				
			],
			  "colour" : 107,
			  "output" : "LocalVariableDeclarationStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassModifier",
			  "message0" : "final",
			  
			  "colour" : 226,
			  
			  "previousStatement" : "ClassModifier",
			  "nextStatement" : "ClassModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimaryNoNewArray'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimaryNoNewArray",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassInstanceCreationExpression",
				  "type" : "input_value",
				  "check" : ["ClassInstanceCreationExpression"]
				},
				
			],
			  "colour" : 302,
			  "output" : "PrimaryNoNewArray",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InferredFormalParameterList'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InferredFormalParameterList",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 106,
			  "output" : "InferredFormalParameterList",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RelationalExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RelationalExpression",
			  "message0" : "%1 < %2 %3 ",
			  "args0" : [
				{
				  "name" : "RelationalExpression",
				  "type" : "input_value",
				  "check" : ["RelationalExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ShiftExpression",
				  "type" : "input_value",
				  "check" : ["ShiftExpression"]
				},
				
			],
			  "colour" : 16,
			  "output" : "RelationalExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RelationalExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RelationalExpression",
			  "message0" : "%1 > %2 %3 ",
			  "args0" : [
				{
				  "name" : "RelationalExpression",
				  "type" : "input_value",
				  "check" : ["RelationalExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ShiftExpression",
				  "type" : "input_value",
				  "check" : ["ShiftExpression"]
				},
				
			],
			  "colour" : 289,
			  "output" : "RelationalExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PostfixExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PostfixExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Primary",
				  "type" : "input_value",
				  "check" : ["Primary"]
				},
				
			],
			  "colour" : 127,
			  "output" : "PostfixExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotationTypeMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotationTypeMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "InterfaceDeclaration",
				  "type" : "input_value",
				  "check" : ["InterfaceDeclaration"]
				},
				
			],
			  "colour" : 53,
			  
			  "previousStatement" : "AnnotationTypeMemberDeclaration",
			  "nextStatement" : "AnnotationTypeMemberDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstantModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstantModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 154,
			  
			  "previousStatement" : "ConstantModifier",
			  "nextStatement" : "ConstantModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CatchType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CatchType",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "UnannClassType",
				  "type" : "input_value",
				  "check" : ["UnannClassType"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 289,
			  "output" : "CatchType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "AssertStatement",
				  "type" : "input_value",
				  "check" : ["AssertStatement"]
				},
				
			],
			  "colour" : 158,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ArrayCreationExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ArrayCreationExpression",
			  "message0" : "new %1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "PrimitiveType",
				  "type" : "input_value",
				  "check" : ["PrimitiveType"]
				},
				  	{
				  "name" : "DimExprs",
				  "type" : "input_value",
				  "check" : ["DimExprs"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 51,
			  "output" : "ArrayCreationExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodReference'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodReference",
			  "message0" : "%1 :: %2 new %3 ",
			  "args0" : [
				{
				  "name" : "ArrayType",
				  "type" : "input_value",
				  "check" : ["ArrayType"]
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
			  "colour" : 286,
			  "output" : "MethodReference",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CommentPart'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CommentPart",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["UnicodeEscape"]
				},
				
			],
			  "colour" : 314,
			  "output" : "CommentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LambdaExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LambdaExpression",
			  "message0" : "%1 -> %2 %3 ",
			  "args0" : [
				{
				  "name" : "LambdaParameters",
				  "type" : "input_value",
				  "check" : ["LambdaParameters"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "LambdaBody",
				  "type" : "input_value",
				  "check" : ["LambdaBody"]
				},
				
			],
			  "colour" : 32,
			  "output" : "LambdaExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SwitchLabel'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SwitchLabel",
			  "message0" : "case %1 %2 : %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ConstantExpression",
				  "type" : "input_value",
				  "check" : ["ConstantExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 220,
			  
			  "previousStatement" : "SwitchLabel",
			  "nextStatement" : "SwitchLabel",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LambdaParameters'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LambdaParameters",
			  "message0" : "( %1 %2 ) %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "InferredFormalParameterList",
				  "type" : "input_value",
				  "check" : ["InferredFormalParameterList"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 173,
			  "output" : "LambdaParameters",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CharacterLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CharacterLiteral",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["LEX_CharLiteral"]
				},
				
			],
			  "colour" : 314,
			  "output" : "CharacterLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeParameters/typeParameters'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeParameters/typeParameters",
			  "message0" : "< %1 %2 > %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "b",
				  "type" : "input_statement",
				  "check" : ["TypeParameter"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 13,
			  "output" : "TypeParameters",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "typeParameters",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ResourceList'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ResourceList",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 234,
			  "output" : "ResourceList",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TryStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TryStatement",
			  "message0" : "try %1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Block",
				  "type" : "input_value",
				  "check" : ["Block"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Finally",
				  "type" : "input_value",
				  "check" : ["Finally"]
				},
				
			],
			  "colour" : 38,
			  "output" : "TryStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ID'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ID",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "IDName",
				  "type" : "field_input",
				  "text" : "ID"
				},
				  	{
				  "name" : "IDName",
				  "type" : "field_input",
				  "text" : "ID"
				},
				
			],
			  "colour" : 348,
			  "output" : "ID",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CastExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CastExpression",
			  "message0" : "( %1 %2 ) %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "PrimitiveType",
				  "type" : "input_value",
				  "check" : ["PrimitiveType"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnaryExpression",
				  "type" : "input_value",
				  "check" : ["UnaryExpression"]
				},
				
			],
			  "colour" : 336,
			  "output" : "CastExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassDeclaration",
				  "type" : "input_value",
				  "check" : ["ClassDeclaration"]
				},
				
			],
			  "colour" : 109,
			  "output" : "ClassMemberDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableInitializerList'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableInitializerList",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["VariableInitializer"]
				},
				
			],
			  "colour" : 11,
			  
			  "previousStatement" : "VariableInitializerList",
			  "nextStatement" : "VariableInitializerList",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CastExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CastExpression",
			  "message0" : "( %1 %2 %3 ) %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ReferenceType",
				  "type" : "input_value",
				  "check" : ["ReferenceType"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "LambdaExpression",
				  "type" : "input_value",
				  "check" : ["LambdaExpression"]
				},
				
			],
			  "colour" : 53,
			  "output" : "CastExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['HexaLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "HexaLiteral",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexaNumeral"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 351,
			  "output" : "HexaLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StringPart/chars'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StringPart/chars",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["StringChars"]
				},
				
			],
			  "colour" : 78,
			  "output" : "StringPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ElementValueList'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ElementValueList",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 208,
			  
			  "previousStatement" : "ElementValueList",
			  "nextStatement" : "ElementValueList",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassBodyDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassBodyDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassMemberDeclaration",
				  "type" : "input_value",
				  "check" : ["ClassMemberDeclaration"]
				},
				
			],
			  "colour" : 297,
			  
			  "previousStatement" : "ClassBodyDeclaration",
			  "nextStatement" : "ClassBodyDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodHeader/c'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodHeader/c",
			  "message0" : "%1 %2 %3 %4 %5 ",
			  "args0" : [
				{
				  "name" : "TypeParameters",
				  "type" : "input_value",
				  "check" : ["TypeParameters"]
				},
				  	{
				  "name" : "an",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Result",
				  "type" : "input_value",
				  "check" : ["Result"]
				},
				  	{
				  "name" : "MethodDeclarator",
				  "type" : "input_value",
				  "check" : ["MethodDeclarator"]
				},
				  	{
				  "name" : "thr",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 165,
			  "output" : "MethodHeader",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "c",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnicodeEscape/unicodeEscape'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnicodeEscape/unicodeEscape",
			  "message0" : "\ %1 %2 %3 %4 %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnicodeEscapeName",
				  "type" : "field_input",
				  "text" : "UnicodeEscape"
				},
				  	{
				  "name" : "UnicodeEscapeName",
				  "type" : "field_input",
				  "text" : "UnicodeEscape"
				},
				  	{
				  "name" : "UnicodeEscapeName",
				  "type" : "field_input",
				  "text" : "UnicodeEscape"
				},
				  	{
				  "name" : "UnicodeEscapeName",
				  "type" : "field_input",
				  "text" : "UnicodeEscape"
				},
				  	{
				  "name" : "UnicodeEscapeName",
				  "type" : "field_input",
				  "text" : "UnicodeEscape"
				},
				
			],
			  "colour" : 261,
			  "output" : "UnicodeEscape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ForStatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ForStatementNoShortIf",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "BasicForStatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["BasicForStatementNoShortIf"]
				},
				
			],
			  "colour" : 122,
			  "output" : "ForStatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ShiftExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ShiftExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "AdditiveExpression",
				  "type" : "input_value",
				  "check" : ["AdditiveExpression"]
				},
				
			],
			  "colour" : 250,
			  "output" : "ShiftExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciFloatDigits'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciFloatDigits",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "DeciFloatDigitsName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 216,
			  "output" : "DeciFloatDigits",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LineTerminator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LineTerminator",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "LineTerminatorName",
				  "type" : "field_input",
				  "text" : "LineTerminator"
				},
				  	{
				  "name" : "LineTerminatorName",
				  "type" : "field_input",
				  "text" : "LineTerminator"
				},
				
			],
			  "colour" : 267,
			  "output" : "LineTerminator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodDeclarator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodDeclarator",
			  "message0" : "%1 ( %2 ) %3 %4 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
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
				  "name" : "d",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 67,
			  "output" : "MethodDeclarator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Block",
				  "type" : "input_value",
				  "check" : ["Block"]
				},
				
			],
			  "colour" : 242,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannArrayType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannArrayType",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "UnannPrimitiveType",
				  "type" : "input_value",
				  "check" : ["UnannPrimitiveType"]
				},
				  	{
				  "name" : "Dims",
				  "type" : "input_value",
				  "check" : ["Dims"]
				},
				
			],
			  "colour" : 294,
			  "output" : "UnannArrayType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SynchronizedStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SynchronizedStatement",
			  "message0" : "synchronized %1 ( %2 %3 ) %4 %5 ",
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
				  "name" : "Block",
				  "type" : "input_value",
				  "check" : ["Block"]
				},
				
			],
			  "colour" : 253,
			  "output" : "SynchronizedStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnaryExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnaryExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PreDecrementExpression",
				  "type" : "input_value",
				  "check" : ["PreDecrementExpression"]
				},
				
			],
			  "colour" : 142,
			  "output" : "UnaryExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ArrayInitializer'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ArrayInitializer",
			  "message0" : "{ %1 %2 %3 } %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 47,
			  "output" : "ArrayInitializer",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PreDecrementExpression",
				  "type" : "input_value",
				  "check" : ["PreDecrementExpression"]
				},
				
			],
			  "colour" : 81,
			  
			  "previousStatement" : "StatementExpression",
			  "nextStatement" : "StatementExpression",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegerLiteral/octa'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegerLiteral/octa",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["OctaLiteral"]
				},
				
			],
			  "colour" : 271,
			  "output" : "IntegerLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "octa",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Comment'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Comment",
			  "message0" : "%1 %2 */ %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_value",
				  "check" : ["CommentPart"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 268,
			  "output" : "Comment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DimExpr'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DimExpr",
			  "message0" : "%1 [ %2 %3 ] %4 ",
			  "args0" : [
				{
				  "name" : "an",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
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
			  "colour" : 0,
			  
			  "previousStatement" : "DimExpr",
			  "nextStatement" : "DimExpr",
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
				  "name" : "NullLiteral",
				  "type" : "input_value",
				  "check" : ["NullLiteral"]
				},
				
			],
			  "colour" : 77,
			  "output" : "Literal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannPrimitiveType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannPrimitiveType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "NumericType",
				  "type" : "input_value",
				  "check" : ["NumericType"]
				},
				
			],
			  "colour" : 164,
			  "output" : "UnannPrimitiveType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "SwitchStatement",
				  "type" : "input_value",
				  "check" : ["SwitchStatement"]
				},
				
			],
			  "colour" : 296,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ContinueStatement",
				  "type" : "input_value",
				  "check" : ["ContinueStatement"]
				},
				
			],
			  "colour" : 359,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AndExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AndExpression",
			  "message0" : "%1 & %2 %3 ",
			  "args0" : [
				{
				  "name" : "AndExpression",
				  "type" : "input_value",
				  "check" : ["AndExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "EqualityExpression",
				  "type" : "input_value",
				  "check" : ["EqualityExpression"]
				},
				
			],
			  "colour" : 31,
			  "output" : "AndExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceMethodDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceMethodDeclaration",
			  "message0" : "%1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "MethodHeader",
				  "type" : "input_value",
				  "check" : ["MethodHeader"]
				},
				  	{
				  "name" : "MethodBody",
				  "type" : "input_value",
				  "check" : ["MethodBody"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 142,
			  "output" : "InterfaceMethodDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnaryExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnaryExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "UnaryExpressionNotPlusMinus",
				  "type" : "input_value",
				  "check" : ["UnaryExpressionNotPlusMinus"]
				},
				
			],
			  "colour" : 83,
			  "output" : "UnaryExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PackageModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PackageModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 57,
			  
			  "previousStatement" : "PackageModifier",
			  "nextStatement" : "PackageModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EqualityExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EqualityExpression",
			  "message0" : "%1 == %2 %3 ",
			  "args0" : [
				{
				  "name" : "EqualityExpression",
				  "type" : "input_value",
				  "check" : ["EqualityExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "RelationalExpression",
				  "type" : "input_value",
				  "check" : ["RelationalExpression"]
				},
				
			],
			  "colour" : 52,
			  "output" : "EqualityExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ForUpdate'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ForUpdate",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "StatementExpressionList",
				  "type" : "input_value",
				  "check" : ["StatementExpressionList"]
				},
				
			],
			  "colour" : 11,
			  
			  "previousStatement" : "ForUpdate",
			  "nextStatement" : "ForUpdate",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MultiplicativeExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MultiplicativeExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "UnaryExpression",
				  "type" : "input_value",
				  "check" : ["UnaryExpression"]
				},
				
			],
			  "colour" : 312,
			  "output" : "MultiplicativeExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PostfixExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PostfixExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ExpressionName",
				  "type" : "input_value",
				  "check" : ["ExpressionName"]
				},
				
			],
			  "colour" : 77,
			  "output" : "PostfixExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassBody/classBody'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassBody/classBody",
			  "message0" : "{ %1 %2 } %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "decls",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 173,
			  "output" : "ClassBody",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "classBody",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ResourceSpecification'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ResourceSpecification",
			  "message0" : "( %1 %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ResourceList",
				  "type" : "input_value",
				  "check" : ["ResourceList"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 150,
			  "output" : "ResourceSpecification",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EnumConstantModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EnumConstantModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 243,
			  
			  "previousStatement" : "EnumConstantModifier",
			  "nextStatement" : "EnumConstantModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementNoShortIf",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "WhileStatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["WhileStatementNoShortIf"]
				},
				
			],
			  "colour" : 48,
			  "output" : "StatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LeftHandSide'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LeftHandSide",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ExpressionName",
				  "type" : "input_value",
				  "check" : ["ExpressionName"]
				},
				
			],
			  "colour" : 174,
			  "output" : "LeftHandSide",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodBody'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodBody",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "Block",
				  "type" : "input_value",
				  "check" : ["Block"]
				},
				  	{
				  "name" : "blocks",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 31,
			  "output" : "MethodBody",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EscapeSeq'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EscapeSeq",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["NamedEscape"]
				},
				
			],
			  "colour" : 88,
			  "output" : "EscapeSeq",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodReference'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodReference",
			  "message0" : "%1 :: %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "Primary",
				  "type" : "input_value",
				  "check" : ["Primary"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 77,
			  "output" : "MethodReference",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstructorBody'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstructorBody",
			  "message0" : "{ %1 %2 %3 } %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 233,
			  "output" : "ConstructorBody",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimaryNoNewArray'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimaryNoNewArray",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "MethodReference",
				  "type" : "input_value",
				  "check" : ["MethodReference"]
				},
				
			],
			  "colour" : 333,
			  "output" : "PrimaryNoNewArray",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EmptyStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EmptyStatement",
			  "message0" : ";",
			  
			  "colour" : 199,
			  "output" : "EmptyStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TryWithResourcesStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TryWithResourcesStatement",
			  "message0" : "try %1 %2 %3 %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ResourceSpecification",
				  "type" : "input_value",
				  "check" : ["ResourceSpecification"]
				},
				  	{
				  "name" : "Block",
				  "type" : "input_value",
				  "check" : ["Block"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 318,
			  "output" : "TryWithResourcesStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Primary'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Primary",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PrimaryNoNewArray",
				  "type" : "input_value",
				  "check" : ["PrimaryNoNewArray"]
				},
				
			],
			  "colour" : 283,
			  "output" : "Primary",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannReferenceType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannReferenceType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "UnannClassOrInterfaceType",
				  "type" : "input_value",
				  "check" : ["UnannClassOrInterfaceType"]
				},
				
			],
			  "colour" : 102,
			  "output" : "UnannReferenceType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExpressionName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExpressionName",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 267,
			  "output" : "ExpressionName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Primary'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Primary",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ArrayCreationExpression",
				  "type" : "input_value",
				  "check" : ["ArrayCreationExpression"]
				},
				
			],
			  "colour" : 53,
			  "output" : "Primary",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableDeclaratorId'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableDeclaratorId",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 357,
			  "output" : "VariableDeclaratorId",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "WhileStatement",
				  "type" : "input_value",
				  "check" : ["WhileStatement"]
				},
				
			],
			  "colour" : 210,
			  "output" : "Statement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "IfThenElseStatement",
				  "type" : "input_value",
				  "check" : ["IfThenElseStatement"]
				},
				
			],
			  "colour" : 74,
			  "output" : "Statement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceMethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceMethodModifier",
			  "message0" : "default",
			  
			  "colour" : 248,
			  
			  "previousStatement" : "InterfaceMethodModifier",
			  "nextStatement" : "InterfaceMethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceModifier",
			  "message0" : "public",
			  
			  "colour" : 170,
			  
			  "previousStatement" : "InterfaceModifier",
			  "nextStatement" : "InterfaceModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BasicForStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BasicForStatement",
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
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_value",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 140,
			  "output" : "BasicForStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['NullLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "NullLiteral",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Null",
				  "type" : "input_value",
				  "check" : ["Null"]
				},
				
			],
			  "colour" : 337,
			  "output" : "NullLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementNoShortIf",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ForStatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["ForStatementNoShortIf"]
				},
				
			],
			  "colour" : 326,
			  "output" : "StatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceModifier",
			  "message0" : "static",
			  
			  "colour" : 125,
			  
			  "previousStatement" : "InterfaceModifier",
			  "nextStatement" : "InterfaceModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "MethodDeclaration",
				  "type" : "input_value",
				  "check" : ["MethodDeclaration"]
				},
				
			],
			  "colour" : 146,
			  "output" : "ClassMemberDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassModifier",
			  "message0" : "private",
			  
			  "colour" : 243,
			  
			  "previousStatement" : "ClassModifier",
			  "nextStatement" : "ClassModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceMethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceMethodModifier",
			  "message0" : "static",
			  
			  "colour" : 250,
			  
			  "previousStatement" : "InterfaceMethodModifier",
			  "nextStatement" : "InterfaceMethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExclusiveOrExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExclusiveOrExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "AndExpression",
				  "type" : "input_value",
				  "check" : ["AndExpression"]
				},
				
			],
			  "colour" : 94,
			  "output" : "ExclusiveOrExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Imports'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Imports",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "decls",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 137,
			  "output" : "Imports",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "MethodInvocation",
				  "type" : "input_value",
				  "check" : ["MethodInvocation"]
				},
				
			],
			  "colour" : 35,
			  
			  "previousStatement" : "StatementExpression",
			  "nextStatement" : "StatementExpression",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LineTerminator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LineTerminator",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["EndOfFile"]
				},
				
			],
			  "colour" : 274,
			  "output" : "LineTerminator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldModifier",
			  "message0" : "public",
			  
			  "colour" : 81,
			  
			  "previousStatement" : "FieldModifier",
			  "nextStatement" : "FieldModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceMethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceMethodModifier",
			  "message0" : "public",
			  
			  "colour" : 70,
			  
			  "previousStatement" : "InterfaceMethodModifier",
			  "nextStatement" : "InterfaceMethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EscEscChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EscEscChar",
			  "message0" : "\\",
			  
			  "colour" : 292,
			  "output" : "EscEscChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StringPart'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StringPart",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["EscapeSeq"]
				},
				
			],
			  "colour" : 245,
			  "output" : "StringPart",
			  
			  
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
				  "name" : "CharacterLiteral",
				  "type" : "input_value",
				  "check" : ["CharacterLiteral"]
				},
				
			],
			  "colour" : 25,
			  "output" : "Literal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodBody'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodBody",
			  "message0" : ";",
			  
			  "colour" : 121,
			  "output" : "MethodBody",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannArrayType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannArrayType",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "UnannClassOrInterfaceType",
				  "type" : "input_value",
				  "check" : ["UnannClassOrInterfaceType"]
				},
				  	{
				  "name" : "Dims",
				  "type" : "input_value",
				  "check" : ["Dims"]
				},
				
			],
			  "colour" : 21,
			  "output" : "UnannArrayType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ShiftExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ShiftExpression",
			  "message0" : "%1 >>> %2 %3 ",
			  "args0" : [
				{
				  "name" : "ShiftExpression",
				  "type" : "input_value",
				  "check" : ["ShiftExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "AdditiveExpression",
				  "type" : "input_value",
				  "check" : ["AdditiveExpression"]
				},
				
			],
			  "colour" : 66,
			  "output" : "ShiftExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['WhileStatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "WhileStatementNoShortIf",
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
				  "name" : "StatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["StatementNoShortIf"]
				},
				
			],
			  "colour" : 247,
			  "output" : "WhileStatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldModifier",
			  "message0" : "static",
			  
			  "colour" : 71,
			  
			  "previousStatement" : "FieldModifier",
			  "nextStatement" : "FieldModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ImportDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ImportDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "SingleStaticImportDeclaration",
				  "type" : "input_value",
				  "check" : ["SingleStaticImportDeclaration"]
				},
				
			],
			  "colour" : 101,
			  
			  "previousStatement" : "ImportDeclaration",
			  "nextStatement" : "ImportDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnaryExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnaryExpression",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnaryExpression",
				  "type" : "input_value",
				  "check" : ["UnaryExpression"]
				},
				
			],
			  "colour" : 171,
			  "output" : "UnaryExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnaryExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnaryExpression",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnaryExpression",
				  "type" : "input_value",
				  "check" : ["UnaryExpression"]
				},
				
			],
			  "colour" : 51,
			  "output" : "UnaryExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstructorDeclaration/cd'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstructorDeclaration/cd",
			  "message0" : "%1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "ConstructorDeclarator",
				  "type" : "input_value",
				  "check" : ["ConstructorDeclarator"]
				},
				  	{
				  "name" : "bla",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "ConstructorBody",
				  "type" : "input_value",
				  "check" : ["ConstructorBody"]
				},
				
			],
			  "colour" : 73,
			  "output" : "ConstructorDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "cd",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstructorModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstructorModifier",
			  "message0" : "public",
			  
			  "colour" : 45,
			  
			  "previousStatement" : "ConstructorModifier",
			  "nextStatement" : "ConstructorModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SingleTypeImportDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SingleTypeImportDeclaration",
			  "message0" : "import %1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "TypeName",
				  "type" : "input_value",
				  "check" : ["TypeName"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : [""]
				},
				
			],
			  "colour" : 4,
			  "output" : "SingleTypeImportDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : "^=",
			  
			  "colour" : 245,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodReference'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodReference",
			  "message0" : "%1 :: %2 %3 new %4 ",
			  "args0" : [
				{
				  "name" : "ClassType",
				  "type" : "input_value",
				  "check" : ["ClassType"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 322,
			  "output" : "MethodReference",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssertStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssertStatement",
			  "message0" : "assert %1 %2 ; %3 ",
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
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 66,
			  "output" : "AssertStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ReceiverParameter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ReceiverParameter",
			  "message0" : "%1 %2 %3 this %4 ",
			  "args0" : [
				{
				  "name" : "an",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "UnannType",
				  "type" : "input_value",
				  "check" : ["UnannType"]
				},
				  	{
				  "name" : "id",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 298,
			  
			  "previousStatement" : "ReceiverParameter",
			  "nextStatement" : "ReceiverParameter",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstructorModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstructorModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 97,
			  
			  "previousStatement" : "ConstructorModifier",
			  "nextStatement" : "ConstructorModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceMethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceMethodModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 356,
			  
			  "previousStatement" : "InterfaceMethodModifier",
			  "nextStatement" : "InterfaceMethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConditionalExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConditionalExpression",
			  "message0" : "%1 ? %2 %3 : %4 %5 ",
			  "args0" : [
				{
				  "name" : "ConditionalOrExpression",
				  "type" : "input_value",
				  "check" : ["ConditionalOrExpression"]
				},
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
				  "name" : "LambdaExpression",
				  "type" : "input_value",
				  "check" : ["LambdaExpression"]
				},
				
			],
			  "colour" : 109,
			  "output" : "ConditionalExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 278,
			  
			  "previousStatement" : "FieldModifier",
			  "nextStatement" : "FieldModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldAccess'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldAccess",
			  "message0" : "super %1 . %2 %3 ",
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
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 42,
			  "output" : "FieldAccess",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SwitchBlock'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SwitchBlock",
			  "message0" : "{ %1 %2 %3 } %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "SwitchBlockStatementGroups",
				  "type" : "input_value",
				  "check" : ["SwitchBlockStatementGroups"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 313,
			  "output" : "SwitchBlock",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FloatingPointLiteral/float'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FloatingPointLiteral/float",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["HexaFloatLiteral"]
				},
				
			],
			  "colour" : 33,
			  "output" : "FloatingPointLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "float",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceModifier",
			  "message0" : "protected",
			  
			  "colour" : 99,
			  
			  "previousStatement" : "InterfaceModifier",
			  "nextStatement" : "InterfaceModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ArrayAccess/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ArrayAccess/m",
			  "message0" : "%1 [ %2 %3 ] %4 ",
			  "args0" : [
				{
				  "name" : "PrimaryNoNewArray",
				  "type" : "input_value",
				  "check" : ["PrimaryNoNewArray"]
				},
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
			  "colour" : 219,
			  "output" : "ArrayAccess",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ReturnStatement",
				  "type" : "input_value",
				  "check" : ["ReturnStatement"]
				},
				
			],
			  "colour" : 256,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassOrInterfaceTypeToInstantiate/ci'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassOrInterfaceTypeToInstantiate/ci",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 257,
			  "output" : "ClassOrInterfaceTypeToInstantiate",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ci",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassLiteral",
			  "message0" : "%1 %2 . %3 class %4 ",
			  "args0" : [
				{
				  "name" : "NumericType",
				  "type" : "input_value",
				  "check" : ["NumericType"]
				},
				  	{
				  "name" : "m",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
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
			  "colour" : 69,
			  "output" : "ClassLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldModifier",
			  "message0" : "protected",
			  
			  "colour" : 332,
			  
			  "previousStatement" : "FieldModifier",
			  "nextStatement" : "FieldModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeArguments'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeArguments",
			  "message0" : "< %1 %2 > %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "args",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 335,
			  "output" : "TypeArguments",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LeftHandSide'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LeftHandSide",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ArrayAccess",
				  "type" : "input_value",
				  "check" : ["ArrayAccess"]
				},
				
			],
			  "colour" : 42,
			  "output" : "LeftHandSide",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 150,
			  
			  "previousStatement" : "InterfaceModifier",
			  "nextStatement" : "InterfaceModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassBodyDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassBodyDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ConstructorDeclaration",
				  "type" : "input_value",
				  "check" : ["ConstructorDeclaration"]
				},
				
			],
			  "colour" : 132,
			  
			  "previousStatement" : "ClassBodyDeclaration",
			  "nextStatement" : "ClassBodyDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimaryNoNewArray'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimaryNoNewArray",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "FieldAccess",
				  "type" : "input_value",
				  "check" : ["FieldAccess"]
				},
				
			],
			  "colour" : 119,
			  "output" : "PrimaryNoNewArray",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "FieldDeclaration",
				  "type" : "input_value",
				  "check" : ["FieldDeclaration"]
				},
				
			],
			  "colour" : 38,
			  "output" : "ClassMemberDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeParameter/typeParameter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeParameter/typeParameter",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 96,
			  
			  "previousStatement" : "TypeParameter",
			  "nextStatement" : "TypeParameter",
			  "inputsInline" : true,
			  "tooltip" : "typeParameter",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LambdaBody'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LambdaBody",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Block",
				  "type" : "input_value",
				  "check" : ["Block"]
				},
				
			],
			  "colour" : 236,
			  "output" : "LambdaBody",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExpressionName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExpressionName",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
				{
				  "name" : "AmbiguousName",
				  "type" : "input_value",
				  "check" : ["AmbiguousName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 84,
			  "output" : "ExpressionName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "UnannPrimitiveType",
				  "type" : "input_value",
				  "check" : ["UnannPrimitiveType"]
				},
				
			],
			  "colour" : 234,
			  "output" : "UnannType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Catches'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Catches",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["CatchClause"]
				},
				
			],
			  "colour" : 59,
			  "output" : "Catches",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstructorModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstructorModifier",
			  "message0" : "protected",
			  
			  "colour" : 208,
			  
			  "previousStatement" : "ConstructorModifier",
			  "nextStatement" : "ConstructorModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssertStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssertStatement",
			  "message0" : "assert %1 %2 : %3 %4 ; %5 ",
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
			  "colour" : 48,
			  "output" : "AssertStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodDeclaration/methodDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodDeclaration/methodDeclaration",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "MethodHeader",
				  "type" : "input_value",
				  "check" : ["MethodHeader"]
				},
				  	{
				  "name" : "MethodBody",
				  "type" : "input_value",
				  "check" : ["MethodBody"]
				},
				
			],
			  "colour" : 56,
			  "output" : "MethodDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "methodDeclaration",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StaticImportOnDemandDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StaticImportOnDemandDeclaration",
			  "message0" : "import %1 static %2 %3 . %4 * %5 %6 ",
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
				  "name" : "TypeName",
				  "type" : "input_value",
				  "check" : ["TypeName"]
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
				  "check" : [""]
				},
				
			],
			  "colour" : 195,
			  "output" : "StaticImportOnDemandDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ImportDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ImportDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "TypeImportOnDemandDeclaration",
				  "type" : "input_value",
				  "check" : ["TypeImportOnDemandDeclaration"]
				},
				
			],
			  "colour" : 112,
			  
			  "previousStatement" : "ImportDeclaration",
			  "nextStatement" : "ImportDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SingleElementAnnotation'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SingleElementAnnotation",
			  "message0" : "@ %1 %2 ( %3 %4 ) %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "TypeName",
				  "type" : "input_value",
				  "check" : ["TypeName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ElementValue",
				  "type" : "input_statement",
				  "check" : ["ElementValue"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 20,
			  "output" : "SingleElementAnnotation",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BlockStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BlockStatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassDeclaration",
				  "type" : "input_value",
				  "check" : ["ClassDeclaration"]
				},
				
			],
			  "colour" : 276,
			  
			  "previousStatement" : "BlockStatement",
			  "nextStatement" : "BlockStatement",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodName",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 220,
			  "output" : "MethodName",
			  
			  
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
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "SignedIntegerName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 299,
			  "output" : "SignedInteger",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableDeclarator/variableDeclarator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableDeclarator/variableDeclarator",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "VariableDeclaratorId",
				  "type" : "input_value",
				  "check" : ["VariableDeclaratorId"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 320,
			  
			  "previousStatement" : "VariableDeclarator",
			  "nextStatement" : "VariableDeclarator",
			  "inputsInline" : true,
			  "tooltip" : "variableDeclarator",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ReturnStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ReturnStatement",
			  "message0" : "return %1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 130,
			  "output" : "ReturnStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimaryNoNewArray'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimaryNoNewArray",
			  "message0" : "( %1 %2 ) %3 ",
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
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 256,
			  "output" : "PrimaryNoNewArray",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConditionalExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConditionalExpression",
			  "message0" : "%1 ? %2 %3 : %4 %5 ",
			  "args0" : [
				{
				  "name" : "ConditionalOrExpression",
				  "type" : "input_value",
				  "check" : ["ConditionalOrExpression"]
				},
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
				  "name" : "ConditionalExpression",
				  "type" : "input_value",
				  "check" : ["ConditionalExpression"]
				},
				
			],
			  "colour" : 135,
			  "output" : "ConditionalExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FormalParameter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FormalParameter",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "mds",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "UnannType",
				  "type" : "input_value",
				  "check" : ["UnannType"]
				},
				  	{
				  "name" : "VariableDeclaratorId",
				  "type" : "input_value",
				  "check" : ["VariableDeclaratorId"]
				},
				
			],
			  "colour" : 305,
			  
			  "previousStatement" : "FormalParameter",
			  "nextStatement" : "FormalParameter",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotationTypeDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotationTypeDeclaration",
			  "message0" : "%1 @ %2 interface %3 %4 %5 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
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
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "AnnotationTypeBody",
				  "type" : "input_value",
				  "check" : ["AnnotationTypeBody"]
				},
				
			],
			  "colour" : 271,
			  "output" : "AnnotationTypeDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "UnannReferenceType",
				  "type" : "input_value",
				  "check" : ["UnannReferenceType"]
				},
				
			],
			  "colour" : 5,
			  "output" : "UnannType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FormalParameters/lastFormalParameter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FormalParameters/lastFormalParameter",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "LastFormalParameter",
				  "type" : "input_value",
				  "check" : ["LastFormalParameter"]
				},
				
			],
			  "colour" : 15,
			  "output" : "FormalParameters",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "lastFormalParameter",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PreDecrementExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PreDecrementExpression",
			  "message0" : "-- %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnaryExpression",
				  "type" : "input_value",
				  "check" : ["UnaryExpression"]
				},
				
			],
			  "colour" : 248,
			  "output" : "PreDecrementExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SwitchBlockStatementGroup'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SwitchBlockStatementGroup",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "SwitchLabels",
				  "type" : "input_value",
				  "check" : ["SwitchLabels"]
				},
				  	{
				  "name" : "BlockStatements",
				  "type" : "input_value",
				  "check" : ["BlockStatements"]
				},
				
			],
			  "colour" : 266,
			  
			  "previousStatement" : "SwitchBlockStatementGroup",
			  "nextStatement" : "SwitchBlockStatementGroup",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TryStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TryStatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "TryWithResourcesStatement",
				  "type" : "input_value",
				  "check" : ["TryWithResourcesStatement"]
				},
				
			],
			  "colour" : 131,
			  "output" : "TryStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciNumeral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciNumeral",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "DeciNumeralName",
				  "type" : "field_input",
				  "text" : "DeciNumeral"
				},
				  	{
				  "name" : "DeciNumeralName",
				  "type" : "field_input",
				  "text" : "DeciNumeral"
				},
				  	{
				  "name" : "DeciNumeralName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 242,
			  "output" : "DeciNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SwitchBlockStatementGroups'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SwitchBlockStatementGroups",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 132,
			  "output" : "SwitchBlockStatementGroups",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "InterfaceMethodDeclaration",
				  "type" : "input_value",
				  "check" : ["InterfaceMethodDeclaration"]
				},
				
			],
			  "colour" : 140,
			  
			  "previousStatement" : "InterfaceMemberDeclaration",
			  "nextStatement" : "InterfaceMemberDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstantExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstantExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				
			],
			  "colour" : 64,
			  "output" : "ConstantExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ConditionalExpression",
				  "type" : "input_value",
				  "check" : ["ConditionalExpression"]
				},
				
			],
			  "colour" : 75,
			  "output" : "AssignmentExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['UnannClassOrInterfaceType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "UnannClassOrInterfaceType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "UnannClassType",
				  "type" : "input_value",
				  "check" : ["UnannClassType"]
				},
				
			],
			  "colour" : 54,
			  "output" : "UnannClassOrInterfaceType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['WildcardBounds'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "WildcardBounds",
			  "message0" : "extends %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ReferenceType",
				  "type" : "input_value",
				  "check" : ["ReferenceType"]
				},
				
			],
			  "colour" : 76,
			  
			  "previousStatement" : "WildcardBounds",
			  "nextStatement" : "WildcardBounds",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['VariableModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "VariableModifier",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 86,
			  
			  "previousStatement" : "VariableModifier",
			  "nextStatement" : "VariableModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciNumeral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciNumeral",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "DeciNumeralName",
				  "type" : "field_input",
				  "text" : "DeciNumeral"
				},
				
			],
			  "colour" : 187,
			  "output" : "DeciNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ExpressionStatement",
				  "type" : "input_value",
				  "check" : ["ExpressionStatement"]
				},
				
			],
			  "colour" : 261,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PackageOrTypeName'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PackageOrTypeName",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 45,
			  "output" : "PackageOrTypeName",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeBound'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeBound",
			  "message0" : "extends %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["ClassOrInterfaceType"]
				},
				
			],
			  "colour" : 282,
			  
			  "previousStatement" : "TypeBound",
			  "nextStatement" : "TypeBound",
			  "inputsInline" : true,
			  "tooltip" : "",
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
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["ID"]
				},
				
			],
			  "colour" : 224,
			  
			  "previousStatement" : "Identifier",
			  "nextStatement" : "Identifier",
			  "inputsInline" : true,
			  "tooltip" : "id",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciFloatDigits'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciFloatDigits",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
				{
				  "name" : "DeciFloatDigitsName",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "DeciFloatDigitsName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 326,
			  "output" : "DeciFloatDigits",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassLiteral",
			  "message0" : "boolean %1 %2 . %3 class %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "m",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
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
			  "colour" : 212,
			  "output" : "ClassLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IfThenStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IfThenStatement",
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
				  "type" : "input_value",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 109,
			  "output" : "IfThenStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SwitchStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SwitchStatement",
			  "message0" : "switch %1 ( %2 %3 ) %4 %5 ",
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
				  "name" : "SwitchBlock",
				  "type" : "input_value",
				  "check" : ["SwitchBlock"]
				},
				
			],
			  "colour" : 316,
			  "output" : "SwitchStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldAccess'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldAccess",
			  "message0" : "%1 . %2 super %3 . %4 %5 ",
			  "args0" : [
				{
				  "name" : "TypeName",
				  "type" : "input_value",
				  "check" : ["TypeName"]
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
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 16,
			  "output" : "FieldAccess",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Wildcard'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Wildcard",
			  "message0" : "%1 ? %2 %3 ",
			  "args0" : [
				{
				  "name" : "an",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "wc",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 261,
			  "output" : "Wildcard",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ArrayType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ArrayType",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "PrimitiveType",
				  "type" : "input_value",
				  "check" : ["PrimitiveType"]
				},
				  	{
				  "name" : "Dims",
				  "type" : "input_value",
				  "check" : ["Dims"]
				},
				
			],
			  "colour" : 146,
			  "output" : "ArrayType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegralType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegralType",
			  "message0" : "byte",
			  
			  "colour" : 205,
			  "output" : "IntegralType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ForStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ForStatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "BasicForStatement",
				  "type" : "input_value",
				  "check" : ["BasicForStatement"]
				},
				
			],
			  "colour" : 24,
			  "output" : "ForStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotationTypeMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotationTypeMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "AnnotationTypeElementDeclaration",
				  "type" : "input_value",
				  "check" : ["AnnotationTypeElementDeclaration"]
				},
				
			],
			  "colour" : 298,
			  
			  "previousStatement" : "AnnotationTypeMemberDeclaration",
			  "nextStatement" : "AnnotationTypeMemberDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimaryNoNewArray'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimaryNoNewArray",
			  "message0" : "%1 . %2 this %3 ",
			  "args0" : [
				{
				  "name" : "TypeName",
				  "type" : "input_value",
				  "check" : ["TypeName"]
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
			  "colour" : 185,
			  "output" : "PrimaryNoNewArray",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassModifier",
			  "message0" : "abstract",
			  
			  "colour" : 254,
			  
			  "previousStatement" : "ClassModifier",
			  "nextStatement" : "ClassModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BinaryExponent'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BinaryExponent",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "BinaryExponentName",
				  "type" : "field_input",
				  "text" : "BinaryExponent"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["SignedInteger"]
				},
				
			],
			  "colour" : 92,
			  "output" : "BinaryExponent",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BlockStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BlockStatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Statement",
				  "type" : "input_value",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 5,
			  
			  "previousStatement" : "BlockStatement",
			  "nextStatement" : "BlockStatement",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimitiveType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimitiveType",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "ans",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "NumericType",
				  "type" : "input_value",
				  "check" : ["NumericType"]
				},
				
			],
			  "colour" : 331,
			  "output" : "PrimitiveType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['OctaEscape'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "OctaEscape",
			  "message0" : "\ %1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "OctaEscapeName",
				  "type" : "field_input",
				  "text" : "OctaEscape"
				},
				  	{
				  "name" : "OctaEscapeName",
				  "type" : "field_input",
				  "text" : "OctaEscape"
				},
				
			],
			  "colour" : 247,
			  "output" : "OctaEscape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['InterfaceMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "InterfaceMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassDeclaration",
				  "type" : "input_value",
				  "check" : ["ClassDeclaration"]
				},
				
			],
			  "colour" : 48,
			  
			  "previousStatement" : "InterfaceMemberDeclaration",
			  "nextStatement" : "InterfaceMemberDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ExceptionType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ExceptionType",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ClassType",
				  "type" : "input_value",
				  "check" : ["ClassType"]
				},
				
			],
			  "colour" : 130,
			  
			  "previousStatement" : "ExceptionType",
			  "nextStatement" : "ExceptionType",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotationTypeMemberDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotationTypeMemberDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ConstantDeclaration",
				  "type" : "input_value",
				  "check" : ["ConstantDeclaration"]
				},
				
			],
			  "colour" : 199,
			  
			  "previousStatement" : "AnnotationTypeMemberDeclaration",
			  "nextStatement" : "AnnotationTypeMemberDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConditionalAndExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConditionalAndExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "InclusiveOrExpression",
				  "type" : "input_value",
				  "check" : ["InclusiveOrExpression"]
				},
				
			],
			  "colour" : 276,
			  "output" : "ConditionalAndExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['LocalVariableDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "LocalVariableDeclaration",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "UnannType",
				  "type" : "input_value",
				  "check" : ["UnannType"]
				},
				  	{
				  "name" : "VariableDeclaratorList",
				  "type" : "input_value",
				  "check" : ["VariableDeclaratorList"]
				},
				
			],
			  "colour" : 33,
			  "output" : "LocalVariableDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ForStatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ForStatementNoShortIf",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "EnhancedForStatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["EnhancedForStatementNoShortIf"]
				},
				
			],
			  "colour" : 26,
			  "output" : "ForStatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CommentPart'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CommentPart",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["BlockCommentChars"]
				},
				
			],
			  "colour" : 358,
			  "output" : "CommentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SwitchLabels'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SwitchLabels",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["SwitchLabel"]
				},
				
			],
			  "colour" : 255,
			  "output" : "SwitchLabels",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ElementValue'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ElementValue",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "Annotation",
				  "type" : "input_statement",
				  "check" : ["Annotation"]
				},
				
			],
			  "colour" : 335,
			  
			  "previousStatement" : "ElementValue",
			  "nextStatement" : "ElementValue",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementNoShortIf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementNoShortIf",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "LabeledStatementNoShortIf",
				  "type" : "input_value",
				  "check" : ["LabeledStatementNoShortIf"]
				},
				
			],
			  "colour" : 238,
			  "output" : "StatementNoShortIf",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BreakStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BreakStatement",
			  "message0" : "break %1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 230,
			  "output" : "BreakStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassInstanceCreationExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassInstanceCreationExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "UnqualifiedClassInstanceCreationExpression",
				  "type" : "input_value",
				  "check" : ["UnqualifiedClassInstanceCreationExpression"]
				},
				
			],
			  "colour" : 340,
			  "output" : "ClassInstanceCreationExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CatchFormalParameter'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CatchFormalParameter",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "CatchType",
				  "type" : "input_value",
				  "check" : ["CatchType"]
				},
				  	{
				  "name" : "VariableDeclaratorId",
				  "type" : "input_value",
				  "check" : ["VariableDeclaratorId"]
				},
				
			],
			  "colour" : 130,
			  "output" : "CatchFormalParameter",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Superinterfaces'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Superinterfaces",
			  "message0" : "implements %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "b",
				  "type" : "input_statement",
				  "check" : ["InterfaceType"]
				},
				
			],
			  "colour" : 62,
			  
			  "previousStatement" : "Superinterfaces",
			  "nextStatement" : "Superinterfaces",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ThrowStatement",
				  "type" : "input_value",
				  "check" : ["ThrowStatement"]
				},
				
			],
			  "colour" : 105,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstantModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstantModifier",
			  "message0" : "static",
			  
			  "colour" : 277,
			  
			  "previousStatement" : "ConstantModifier",
			  "nextStatement" : "ConstantModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['CompilationUnit/cu'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CompilationUnit/cu",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
				{
				  "name" : "decls",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Imports",
				  "type" : "input_value",
				  "check" : ["Imports"]
				},
				  	{
				  "name" : "bla",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
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
Blockly.Blocks['CastExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CastExpression",
			  "message0" : "( %1 %2 %3 ) %4 %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ReferenceType",
				  "type" : "input_value",
				  "check" : ["ReferenceType"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "UnaryExpressionNotPlusMinus",
				  "type" : "input_value",
				  "check" : ["UnaryExpressionNotPlusMinus"]
				},
				
			],
			  "colour" : 12,
			  "output" : "CastExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['NormalClassDeclaration/normalClassDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "NormalClassDeclaration/normalClassDeclaration",
			  "message0" : "%1 class %2 %3 %4 %5 %6 %7 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "ClassBody",
				  "type" : "input_value",
				  "check" : ["ClassBody"]
				},
				
			],
			  "colour" : 313,
			  "output" : "NormalClassDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "normalClassDeclaration",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['OctaNumeral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "OctaNumeral",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "OctaNumeralName",
				  "type" : "field_input",
				  "text" : "OctaNumeral"
				},
				  	{
				  "name" : "OctaNumeralName",
				  "type" : "field_input",
				  "text" : "OctaNumeral"
				},
				
			],
			  "colour" : 290,
			  "output" : "OctaNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SingleStaticImportDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SingleStaticImportDeclaration",
			  "message0" : "import %1 static %2 %3 . %4 %5 %6 ",
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
				  "name" : "TypeName",
				  "type" : "input_value",
				  "check" : ["TypeName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : [""]
				},
				
			],
			  "colour" : 256,
			  "output" : "SingleStaticImportDeclaration",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PrimaryNoNewArray'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PrimaryNoNewArray",
			  "message0" : "this",
			  
			  "colour" : 119,
			  "output" : "PrimaryNoNewArray",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeVariable'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeVariable",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "anns",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 145,
			  
			  "previousStatement" : "TypeVariable",
			  "nextStatement" : "TypeVariable",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "LabeledStatement",
				  "type" : "input_value",
				  "check" : ["LabeledStatement"]
				},
				
			],
			  "colour" : 272,
			  "output" : "Statement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StringLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StringLiteral",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["LEX_StringLiteral"]
				},
				
			],
			  "colour" : 353,
			  "output" : "StringLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstantModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstantModifier",
			  "message0" : "public",
			  
			  "colour" : 232,
			  
			  "previousStatement" : "ConstantModifier",
			  "nextStatement" : "ConstantModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Null'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Null",
			  "message0" : "null",
			  
			  "colour" : 87,
			  "output" : "Null",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodModifier",
			  "message0" : "public",
			  
			  "colour" : 127,
			  
			  "previousStatement" : "MethodModifier",
			  "nextStatement" : "MethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Block'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Block",
			  "message0" : "{ %1 %2 } %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 146,
			  "output" : "Block",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodModifier",
			  "message0" : "static",
			  
			  "colour" : 41,
			  
			  "previousStatement" : "MethodModifier",
			  "nextStatement" : "MethodModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConditionalExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConditionalExpression",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ConditionalOrExpression",
				  "type" : "input_value",
				  "check" : ["ConditionalOrExpression"]
				},
				
			],
			  "colour" : 268,
			  "output" : "ConditionalExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Finally'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Finally",
			  "message0" : "finally %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Block",
				  "type" : "input_value",
				  "check" : ["Block"]
				},
				
			],
			  "colour" : 186,
			  "output" : "Finally",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AnnotationTypeElementModifier'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AnnotationTypeElementModifier",
			  "message0" : "abstract",
			  
			  "colour" : 100,
			  
			  "previousStatement" : "AnnotationTypeElementModifier",
			  "nextStatement" : "AnnotationTypeElementModifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['FieldAccess'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "FieldAccess",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
				{
				  "name" : "Primary",
				  "type" : "input_value",
				  "check" : ["Primary"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				
			],
			  "colour" : 126,
			  "output" : "FieldAccess",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['TypeArgumentsOrDiamond'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "TypeArgumentsOrDiamond",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "TypeArguments",
				  "type" : "input_value",
				  "check" : ["TypeArguments"]
				},
				
			],
			  "colour" : 347,
			  
			  "previousStatement" : "TypeArgumentsOrDiamond",
			  "nextStatement" : "TypeArgumentsOrDiamond",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ForInit'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ForInit",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "StatementExpressionList",
				  "type" : "input_value",
				  "check" : ["StatementExpressionList"]
				},
				
			],
			  "colour" : 301,
			  
			  "previousStatement" : "ForInit",
			  "nextStatement" : "ForInit",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : "|=",
			  
			  "colour" : 312,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['OctaEscape'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "OctaEscape",
			  "message0" : "\ %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "OctaEscapeName",
				  "type" : "field_input",
				  "text" : "OctaEscape"
				},
				
			],
			  "colour" : 19,
			  "output" : "OctaEscape",
			  
			  
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
				  "name" : "FloatingPointLiteral",
				  "type" : "input_value",
				  "check" : ["FloatingPointLiteral"]
				},
				
			],
			  "colour" : 109,
			  "output" : "Literal",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ArrayCreationExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ArrayCreationExpression",
			  "message0" : "new %1 %2 %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ClassOrInterfaceType",
				  "type" : "input_statement",
				  "check" : ["ClassOrInterfaceType"]
				},
				  	{
				  "name" : "DimExprs",
				  "type" : "input_value",
				  "check" : ["DimExprs"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 341,
			  "output" : "ArrayCreationExpression",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['NamedEscape/namedEscape'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "NamedEscape/namedEscape",
			  "message0" : "\ %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "NamedEscapeName",
				  "type" : "field_input",
				  "text" : "NamedEscape"
				},
				
			],
			  "colour" : 70,
			  "output" : "NamedEscape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SingleChar'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SingleChar",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "SingleCharName",
				  "type" : "field_input",
				  "text" : "SingleChar"
				},
				
			],
			  "colour" : 295,
			  "output" : "SingleChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['AssignmentOperator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "AssignmentOperator",
			  "message0" : ">>>=",
			  
			  "colour" : 252,
			  "output" : "AssignmentOperator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['MethodInvocation/m'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "MethodInvocation/m",
			  "message0" : "%1 ( %2 %3 ) %4 ",
			  "args0" : [
				{
				  "name" : "MethodName",
				  "type" : "input_value",
				  "check" : ["MethodName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "a",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 328,
			  "output" : "MethodInvocation",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "m",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StatementWithoutTrailingSubstatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StatementWithoutTrailingSubstatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "DoStatement",
				  "type" : "input_value",
				  "check" : ["DoStatement"]
				},
				
			],
			  "colour" : 23,
			  "output" : "StatementWithoutTrailingSubstatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ConstructorDeclarator'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ConstructorDeclarator",
			  "message0" : "%1 %2 ( %3 %4 ) %5 ",
			  "args0" : [
				{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "SimpleTypeName",
				  "type" : "input_value",
				  "check" : ["SimpleTypeName"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 149,
			  "output" : "ConstructorDeclarator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DeciFloatExponentPart'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DeciFloatExponentPart",
			  "message0" : "%1 %2 ",
			  "args0" : [
				{
				  "name" : "DeciFloatExponentPartName",
				  "type" : "field_input",
				  "text" : "DeciFloatExponentPart"
				},
				  	{
				  "name" : "lex",
				  "type" : "input_value",
				  "check" : ["SignedInteger"]
				},
				
			],
			  "colour" : 239,
			  "output" : "DeciFloatExponentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ImportDeclaration'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ImportDeclaration",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "StaticImportOnDemandDeclaration",
				  "type" : "input_value",
				  "check" : ["StaticImportOnDemandDeclaration"]
				},
				
			],
			  "colour" : 140,
			  
			  "previousStatement" : "ImportDeclaration",
			  "nextStatement" : "ImportDeclaration",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['WhileStatement/whileStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "WhileStatement/whileStatement",
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
				  "type" : "input_value",
				  "check" : ["Statement"]
				},
				
			],
			  "colour" : 310,
			  "output" : "WhileStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "whileStatement",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ForStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ForStatement",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "EnhancedForStatement",
				  "type" : "input_value",
				  "check" : ["EnhancedForStatement"]
				},
				
			],
			  "colour" : 304,
			  "output" : "ForStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['EnumBody/eb'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "EnumBody/eb",
			  "message0" : "{ %1 %2 %3 %4 } %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "bla",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "bla",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 69,
			  "output" : "EnumBody",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "eb",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ClassType'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ClassType",
			  "message0" : "%1 . %2 %3 %4 %5 ",
			  "args0" : [
				{
				  "name" : "ClassOrInterfaceType",
				  "type" : "input_statement",
				  "check" : ["ClassOrInterfaceType"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				  	{
				  "name" : "Identifier",
				  "type" : "input_statement",
				  "check" : ["Identifier"]
				},
				  	{
				  "name" : "stmt",
				  "type" : "input_statement",
				  "check" : ["epsilon"]
				},
				
			],
			  "colour" : 244,
			  "output" : "ClassType",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DoStatement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DoStatement",
			  "message0" : "do %1 %2 while %3 ( %4 %5 ) %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Statement",
				  "type" : "input_value",
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
				  "type" : "input_value",
				  "check" : ["Expression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 282,
			  "output" : "DoStatement",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['RelationalExpression'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "RelationalExpression",
			  "message0" : "%1 instanceof %2 %3 ",
			  "args0" : [
				{
				  "name" : "RelationalExpression",
				  "type" : "input_value",
				  "check" : ["RelationalExpression"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ReferenceType",
				  "type" : "input_value",
				  "check" : ["ReferenceType"]
				},
				
			],
			  "colour" : 26,
			  "output" : "RelationalExpression",
			  
			  
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
	