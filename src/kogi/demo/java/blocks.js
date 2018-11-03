Blockly.Blocks['constantmod121'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstantMod",
			  "message0" : "final %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 101,
			  
			  "previousStatement" : "ConstantMod",
			  "nextStatement" : "ConstantMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacememberdec278'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceMemberDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ClassDec",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassDec"]
			  	},
			  	
			  ],
			  "colour" : 303,
			  
			  "previousStatement" : "InterfaceMemberDec",
			  "nextStatement" : "InterfaceMemberDec",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['doWhile'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "do %1 %2 while %3 ( %4 %5 ) %6 ; %7 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Stm",
			  	  "type" : "input_statement",
			  	  "check" : ["Stm"]
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
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
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
			  "colour" : 267,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "doWhile",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['remain'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 %% %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 46,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "remain",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['if'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
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
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Stm",
			  	  "type" : "input_statement",
			  	  "check" : ["Stm"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Stm",
			  	  "type" : "input_statement",
			  	  "check" : ["Stm"]
			  	},
			  	
			  ],
			  "colour" : 18,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "if",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['enumDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "EnumDec",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "EnumDecHead",
			  	  "type" : "input_statement",
			  	  "check" : ["EnumDecHead"]
			  	},
			  	  	{
			  	  "name" : "EnumBody",
			  	  "type" : "input_statement",
			  	  "check" : ["EnumBody"]
			  	},
			  	
			  ],
			  "colour" : 334,
			  
			  "previousStatement" : "EnumDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "enumDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['return'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "return %1 %2 ; %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 131,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "return",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['void'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ResultType",
			  "message0" : "void %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 116,
			  
			  "previousStatement" : "ResultType",
			  
			  "inputsInline" : true,
			  "tooltip" : "void",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['array'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ArrayAccess",
			  	  "type" : "input_statement",
			  	  "check" : ["ArrayAccess"]
			  	},
			  	
			  ],
			  "colour" : 337,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "array",
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
			  	  "type" : "field_input",
			  	  "text" : "DeciFloatNumeral"
			  	},
			  	  	{
			  	  "name" : "lex",
			  	  "type" : "input_value",
			  	  "check" : ["DeciFloatExponentPart"]
			  	},
			  	
			  ],
			  "colour" : 244,
			  "output" : "DeciFloatNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['while'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
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
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Stm",
			  	  "type" : "input_statement",
			  	  "check" : ["Stm"]
			  	},
			  	
			  ],
			  "colour" : 93,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "while",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['boolean'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "PrimType",
			  "message0" : "boolean %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 6,
			  
			  "previousStatement" : "PrimType",
			  
			  "inputsInline" : true,
			  "tooltip" : "boolean",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['true'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "BoolLiteral",
			  "message0" : "true %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 6,
			  
			  "previousStatement" : "BoolLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "true",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassDec",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "ClassDecHead",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassDecHead"]
			  	},
			  	  	{
			  	  "name" : "ClassBody",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassBody"]
			  	},
			  	
			  ],
			  "colour" : 92,
			  
			  "previousStatement" : "ClassDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "classDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['dim'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Dim",
			  "message0" : "[ %1 ] %2 ",
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
			  "colour" : 333,
			  
			  "previousStatement" : "Dim",
			  "nextStatement" : "Dim",
			  "inputsInline" : true,
			  "tooltip" : "dim",
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
			  "message0" : "%1 %2 ",
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
			  	
			  ],
			  "colour" : 244,
			  "output" : "DeciNumeral",
			  
			  
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
			  "message0" : "/**/ %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 260,
			  "output" : "Comment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacemod349'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceMod",
			  "message0" : "protected %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 351,
			  
			  "previousStatement" : "InterfaceMod",
			  "nextStatement" : "InterfaceMod",
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
			  "colour" : 175,
			  "output" : "LineTerminator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['methodName2'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodName",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 215,
			  
			  "previousStatement" : "MethodName",
			  
			  "inputsInline" : true,
			  "tooltip" : "methodName2",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['DeciFloatNumeral0'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "DeciFloatNumeral",
			  "message0" : "%1 . %2 %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "DeciFloatNumeralName",
			  	  "type" : "field_input",
			  	  "text" : "DeciFloatNumeral"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "DeciFloatNumeralName",
			  	  "type" : "field_input",
			  	  "text" : "DeciFloatNumeral"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["DeciFloatExponentPart"]
			  	},
			  	
			  ],
			  "colour" : 189,
			  "output" : "DeciFloatNumeral",
			  
			  
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
			  	  "check" : ["SingleChar"]
			  	},
			  	
			  ],
			  "colour" : 262,
			  "output" : "CharContent",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['methodDecHead'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodDecHead",
			  "message0" : "%1 %2 %3 %4 ( %5 %6 ) %7 %8 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Anno", "MethodMod"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeParams"]
			  	},
			  	  	{
			  	  "name" : "ResultType",
			  	  "type" : "input_statement",
			  	  "check" : ["ResultType"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["FormalParam"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Throws"]
			  	},
			  	
			  ],
			  "colour" : 28,
			  
			  "previousStatement" : "MethodDecHead",
			  
			  "inputsInline" : true,
			  "tooltip" : "methodDecHead",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['char'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "IntType",
			  "message0" : "char %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 326,
			  
			  "previousStatement" : "IntType",
			  
			  "inputsInline" : true,
			  "tooltip" : "char",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['try'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "try %1 %2 %3 finally %4 %5 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Block",
			  	  "type" : "input_statement",
			  	  "check" : ["Block"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["CatchClause"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Block",
			  	  "type" : "input_statement",
			  	  "check" : ["Block"]
			  	},
			  	
			  ],
			  "colour" : 225,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "try",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['minus'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 278,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "minus",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['priv'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodMod",
			  "message0" : "private %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 53,
			  
			  "previousStatement" : "MethodMod",
			  "nextStatement" : "MethodMod",
			  "inputsInline" : true,
			  "tooltip" : "priv",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classBody'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassBody",
			  "message0" : "{ %1 %2 } %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassBodyDec"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 350,
			  
			  "previousStatement" : "ClassBody",
			  
			  "inputsInline" : true,
			  "tooltip" : "classBody",
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
			  	  "check" : [""]
			  	},
			  	
			  ],
			  "colour" : 91,
			  "output" : "DeciFloatLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typeBound'] = {
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
			  "colour" : 158,
			  
			  "previousStatement" : "TypeBound",
			  "nextStatement" : "TypeBound",
			  "inputsInline" : true,
			  "tooltip" : "typeBound",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['float'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FloatType",
			  "message0" : "float %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 332,
			  
			  "previousStatement" : "FloatType",
			  
			  "inputsInline" : true,
			  "tooltip" : "float",
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
			  	  "check" : [""]
			  	},
			  	
			  ],
			  "colour" : 307,
			  "output" : "DeciLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacedec369'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceDec",
			  "message0" : "%1 { %2 %3 } %4 ",
			  "args0" : [
			  	{
			  	  "name" : "AnnoDecHead",
			  	  "type" : "input_statement",
			  	  "check" : ["AnnoDecHead"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "annoElemnDec",
			  	  "type" : "input_statement",
			  	  "check" : ["AnnoElemDec"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 340,
			  
			  "previousStatement" : "InterfaceDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assignRightShift'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 >>= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 309,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assignRightShift",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['genericMethod'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodSpec",
			  "message0" : "%1 . %2 %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "AmbName",
			  	  "type" : "input_statement",
			  	  "check" : ["AmbName"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "TypeArgs",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 263,
			  
			  "previousStatement" : "MethodSpec",
			  
			  "inputsInline" : true,
			  "tooltip" : "genericMethod",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['qSuperMethod'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodSpec",
			  "message0" : "%1 . %2 super %3 . %4 %5 %6 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeName",
			  	  "type" : "input_statement",
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
			  	  "check" : ["TypeArgs"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 174,
			  
			  "previousStatement" : "MethodSpec",
			  
			  "inputsInline" : true,
			  "tooltip" : "qSuperMethod",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['preDecr'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "-- %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 348,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "preDecr",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['gt'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 > %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 287,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "gt",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typeParam'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeParam",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeVarId",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeVarId"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeBound"]
			  	},
			  	
			  ],
			  "colour" : 5,
			  
			  "previousStatement" : "TypeParam",
			  "nextStatement" : "TypeParam",
			  "inputsInline" : true,
			  "tooltip" : "typeParam",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['long'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "IntType",
			  "message0" : "long %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 31,
			  
			  "previousStatement" : "IntType",
			  
			  "inputsInline" : true,
			  "tooltip" : "long",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['blockstm76'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "BlockStm",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "LocalVarDecStm",
			  	  "type" : "input_statement",
			  	  "check" : ["LocalVarDecStm"]
			  	},
			  	
			  ],
			  "colour" : 190,
			  
			  "previousStatement" : "BlockStm",
			  "nextStatement" : "BlockStm",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['modifier167'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Modifier",
			  "message0" : "native %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 196,
			  
			  "previousStatement" : "Modifier",
			  "nextStatement" : "Modifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['fin'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodMod",
			  "message0" : "final %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 343,
			  
			  "previousStatement" : "MethodMod",
			  "nextStatement" : "MethodMod",
			  "inputsInline" : true,
			  "tooltip" : "fin",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assignOr'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 |= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 304,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assignOr",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classmod387'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMod",
			  "message0" : "protected %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 256,
			  
			  "previousStatement" : "ClassMod",
			  "nextStatement" : "ClassMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['dim6'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "DimExpr",
			  "message0" : "[ %1 %2 ] %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 289,
			  
			  "previousStatement" : "DimExpr",
			  "nextStatement" : "DimExpr",
			  "inputsInline" : true,
			  "tooltip" : "dim",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assertStm'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "assert %1 %2 ; %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 265,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "assertStm",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assignLeftShift'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 <<= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 68,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assignLeftShift",
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
			  "colour" : 175,
			  "output" : "CommentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['newArray'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ArrayCreationExpr",
			  "message0" : "new %1 %2 %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "ArrayBaseType",
			  	  "type" : "input_statement",
			  	  "check" : ["ArrayBaseType"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Dim"]
			  	},
			  	  	{
			  	  "name" : "ArrayInit",
			  	  "type" : "input_statement",
			  	  "check" : ["ArrayInit"]
			  	},
			  	
			  ],
			  "colour" : 25,
			  
			  "previousStatement" : "ArrayCreationExpr",
			  
			  "inputsInline" : true,
			  "tooltip" : "newArray",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['fin2'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "VarMod",
			  "message0" : "final %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 62,
			  
			  "previousStatement" : "VarMod",
			  "nextStatement" : "VarMod",
			  "inputsInline" : true,
			  "tooltip" : "fin",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['nat'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodMod",
			  "message0" : "native %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 229,
			  
			  "previousStatement" : "MethodMod",
			  "nextStatement" : "MethodMod",
			  "inputsInline" : true,
			  "tooltip" : "nat",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['leftShift'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 << %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 4,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "leftShift",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['modifier114'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Modifier",
			  "message0" : "abstract %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 259,
			  
			  "previousStatement" : "Modifier",
			  "nextStatement" : "Modifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['LineTerminator30'] = {
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
			  "colour" : 176,
			  "output" : "LineTerminator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['CharContent33'] = {
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
			  "colour" : 44,
			  "output" : "CharContent",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['lhs228'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "LHS",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ArrayAccess",
			  	  "type" : "input_statement",
			  	  "check" : ["ArrayAccess"]
			  	},
			  	
			  ],
			  "colour" : 265,
			  
			  "previousStatement" : "LHS",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['Comment31'] = {
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
			  "colour" : 301,
			  "output" : "Comment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['double'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FloatType",
			  "message0" : "double %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 90,
			  
			  "previousStatement" : "FloatType",
			  
			  "inputsInline" : true,
			  "tooltip" : "double",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['instanceOf'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 instanceof %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "RefType",
			  	  "type" : "input_statement",
			  	  "check" : ["RefType"]
			  	},
			  	
			  ],
			  "colour" : 169,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "instanceOf",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typeParams'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeParams",
			  "message0" : "< %1 %2 > %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "typeParams",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeParam"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 24,
			  
			  "previousStatement" : "TypeParams",
			  "nextStatement" : "TypeParams",
			  "inputsInline" : true,
			  "tooltip" : "typeParams",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['volat'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FieldMod",
			  "message0" : "volatile %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 302,
			  
			  "previousStatement" : "FieldMod",
			  "nextStatement" : "FieldMod",
			  "inputsInline" : true,
			  "tooltip" : "volat",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['or'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 | %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 272,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "or",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['CommentPart30'] = {
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
			  "colour" : 113,
			  "output" : "CommentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['superConstrInv'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstrInv",
			  "message0" : "%1 super %2 ( %3 %4 ) %5 ; %6 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
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
			  	  "check" : ["Expr"]
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
			  "colour" : 236,
			  
			  "previousStatement" : "ConstrInv",
			  "nextStatement" : "ConstrInv",
			  "inputsInline" : true,
			  "tooltip" : "superConstrInv",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classLiteral'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ClassLiteral",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassLiteral"]
			  	},
			  	
			  ],
			  "colour" : 239,
			  
			  "previousStatement" : "Literal",
			  
			  "inputsInline" : true,
			  "tooltip" : "classLiteral",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfaceDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AnnoElemDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "InterfaceDec",
			  	  "type" : "input_statement",
			  	  "check" : ["InterfaceDec"]
			  	},
			  	
			  ],
			  "colour" : 183,
			  
			  "previousStatement" : "AnnoElemDec",
			  "nextStatement" : "AnnoElemDec",
			  "inputsInline" : true,
			  "tooltip" : "interfaceDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['newArray31'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ArrayCreationExpr",
			  "message0" : "new %1 %2 %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "ArrayBaseType",
			  	  "type" : "input_statement",
			  	  "check" : ["ArrayBaseType"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["DimExpr"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Dim"]
			  	},
			  	
			  ],
			  "colour" : 22,
			  
			  "previousStatement" : "ArrayCreationExpr",
			  
			  "inputsInline" : true,
			  "tooltip" : "newArray",
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
			  "colour" : 143,
			  "output" : "StringPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['semicolon'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMemberDec",
			  "message0" : "; %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 123,
			  
			  "previousStatement" : "ClassMemberDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "semicolon",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classDec32'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMemberDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ClassDec",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassDec"]
			  	},
			  	
			  ],
			  "colour" : 211,
			  
			  "previousStatement" : "ClassMemberDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "classDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['postIncr'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ++ %2 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 228,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "postIncr",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['boolLiteral'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "BoolLiteral",
			  	  "type" : "input_statement",
			  	  "check" : ["BoolLiteral"]
			  	},
			  	
			  ],
			  "colour" : 315,
			  
			  "previousStatement" : "Literal",
			  
			  "inputsInline" : true,
			  "tooltip" : "boolLiteral",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['privv'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FieldMod",
			  "message0" : "private %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 321,
			  
			  "previousStatement" : "FieldMod",
			  "nextStatement" : "FieldMod",
			  "inputsInline" : true,
			  "tooltip" : "privv",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['newInstance'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "new %1 %2 %3 ( %4 %5 ) %6 %7 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
			  	},
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
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassBody"]
			  	},
			  	
			  ],
			  "colour" : 13,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "newInstance",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['ambName'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AmbName",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "AmbName",
			  	  "type" : "input_statement",
			  	  "check" : ["AmbName"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 32,
			  
			  "previousStatement" : "AmbName",
			  
			  "inputsInline" : true,
			  "tooltip" : "ambName",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['gtEq'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 >= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 346,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "gtEq",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['finn'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FieldMod",
			  "message0" : "final %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 341,
			  
			  "previousStatement" : "FieldMod",
			  "nextStatement" : "FieldMod",
			  "inputsInline" : true,
			  "tooltip" : "finn",
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
			  "colour" : 54,
			  "output" : "HexaSignificand",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['DeciFloatNumeral38'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "DeciFloatNumeral",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "DeciFloatNumeralName",
			  	  "type" : "field_input",
			  	  "text" : "DeciFloatNumeral"
			  	},
			  	
			  ],
			  "colour" : 113,
			  "output" : "DeciFloatNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['postDecr'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 -- %2 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 92,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "postDecr",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assignMul'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 *= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 187,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assignMul",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['synch'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodMod",
			  "message0" : "synchronized %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 301,
			  
			  "previousStatement" : "MethodMod",
			  "nextStatement" : "MethodMod",
			  "inputsInline" : true,
			  "tooltip" : "synch",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['lt'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 < %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 220,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "lt",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['publi'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FieldMod",
			  "message0" : "public %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 68,
			  
			  "previousStatement" : "FieldMod",
			  "nextStatement" : "FieldMod",
			  "inputsInline" : true,
			  "tooltip" : "publi",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['forEach'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "for %1 ( %2 %3 : %4 %5 ) %6 %7 ",
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
			  	  "name" : "FormalParam",
			  	  "type" : "input_statement",
			  	  "check" : ["FormalParam"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Stm",
			  	  "type" : "input_statement",
			  	  "check" : ["Stm"]
			  	},
			  	
			  ],
			  "colour" : 231,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "forEach",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assignDiv'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 /= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 230,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assignDiv",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['noMethodBody'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodBody",
			  "message0" : "; %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 33,
			  
			  "previousStatement" : "MethodBody",
			  
			  "inputsInline" : true,
			  "tooltip" : "noMethodBody",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['wildcard'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ActualTypeArg",
			  "message0" : "? %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["WildcardBound"]
			  	},
			  	
			  ],
			  "colour" : 272,
			  
			  "previousStatement" : "ActualTypeArg",
			  "nextStatement" : "ActualTypeArg",
			  "inputsInline" : true,
			  "tooltip" : "wildcard",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['actualtypearg272'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ActualTypeArg",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Type",
			  	  "type" : "input_statement",
			  	  "check" : ["Type"]
			  	},
			  	
			  ],
			  "colour" : 208,
			  
			  "previousStatement" : "ActualTypeArg",
			  "nextStatement" : "ActualTypeArg",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['constantDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstantDec",
			  "message0" : "%1 %2 %3 ; %4 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ConstantMod", "Anno"]
			  	},
			  	  	{
			  	  "name" : "Type",
			  	  "type" : "input_statement",
			  	  "check" : ["Type"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["VarDec"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 11,
			  
			  "previousStatement" : "ConstantDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "constantDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['false'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "BoolLiteral",
			  "message0" : "false %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 322,
			  
			  "previousStatement" : "BoolLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "false",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['HexaSignificand12'] = {
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
			  "colour" : 307,
			  "output" : "HexaSignificand",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['hexa'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "IntLiteral",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "lex",
			  	  "type" : "input_value",
			  	  "check" : ["HexaLiteral"]
			  	},
			  	
			  ],
			  "colour" : 336,
			  
			  "previousStatement" : "IntLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "hexa",
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
			  "colour" : 125,
			  "output" : "EscapeSeq",
			  
			  
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
			  "colour" : 232,
			  "output" : "HexaFloatNumeral",
			  
			  
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
			  "message0" : "* %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 59,
			  "output" : "Asterisk",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['qThis'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 . %2 this %3 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeName",
			  	  "type" : "input_statement",
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
			  "colour" : 223,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "qThis",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['modifier216'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Modifier",
			  "message0" : "strictfp %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 277,
			  
			  "previousStatement" : "Modifier",
			  "nextStatement" : "Modifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['stsr'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodMod",
			  "message0" : "strictfp %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 5,
			  
			  "previousStatement" : "MethodMod",
			  "nextStatement" : "MethodMod",
			  "inputsInline" : true,
			  "tooltip" : "stsr",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['mul'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 * %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 45,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "mul",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['constrBody'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstrBody",
			  "message0" : "{ %1 %2 %3 } %4 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ConstrInv"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["BlockStm"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 1,
			  
			  "previousStatement" : "ConstrBody",
			  
			  "inputsInline" : true,
			  "tooltip" : "constrBody",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['charLiteral'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "CharLiteral",
			  	  "type" : "input_statement",
			  	  "check" : ["CharLiteral"]
			  	},
			  	
			  ],
			  "colour" : 65,
			  
			  "previousStatement" : "Literal",
			  
			  "inputsInline" : true,
			  "tooltip" : "charLiteral",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['modifier26'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Modifier",
			  "message0" : "final %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 352,
			  
			  "previousStatement" : "Modifier",
			  "nextStatement" : "Modifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['localVarDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "LocalVarDec",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Anno", "VarMod"]
			  	},
			  	  	{
			  	  "name" : "Type",
			  	  "type" : "input_statement",
			  	  "check" : ["Type"]
			  	},
			  	  	{
			  	  "name" : "varDecs",
			  	  "type" : "input_statement",
			  	  "check" : ["VarDec"]
			  	},
			  	
			  ],
			  "colour" : 295,
			  
			  "previousStatement" : "LocalVarDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "localVarDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['methodDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMemberDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "MethodDec",
			  	  "type" : "input_statement",
			  	  "check" : ["MethodDec"]
			  	},
			  	
			  ],
			  "colour" : 132,
			  
			  "previousStatement" : "ClassMemberDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "methodDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['modifier398'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Modifier",
			  "message0" : "synchronized %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 253,
			  
			  "previousStatement" : "Modifier",
			  "nextStatement" : "Modifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assertStm9'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "assert %1 %2 : %3 %4 ; %5 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 26,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "assertStm",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['constrmod258'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstrMod",
			  "message0" : "private %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 294,
			  
			  "previousStatement" : "ConstrMod",
			  "nextStatement" : "ConstrMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typeName'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeDecSpec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeName",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeName"]
			  	},
			  	
			  ],
			  "colour" : 290,
			  
			  "previousStatement" : "TypeDecSpec",
			  
			  "inputsInline" : true,
			  "tooltip" : "typeName",
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
			  	  "check" : [""]
			  	},
			  	
			  ],
			  "colour" : 111,
			  "output" : "HexaFloatLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['CommentPart30'] = {
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
			  "colour" : 116,
			  "output" : "CommentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['enumConst'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "EnumConst",
			  "message0" : "%1 %2 %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Anno"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["EnumConstArgs"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassBody"]
			  	},
			  	
			  ],
			  "colour" : 23,
			  
			  "previousStatement" : "EnumConst",
			  "nextStatement" : "EnumConst",
			  "inputsInline" : true,
			  "tooltip" : "enumConst",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['this'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "this %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 357,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "this",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assignAnd'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 &= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 208,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assignAnd",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typeArgs'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeArgs",
			  "message0" : "< %1 %2 > %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ActualTypeArg"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 267,
			  
			  "previousStatement" : "TypeArgs",
			  
			  "inputsInline" : true,
			  "tooltip" : "typeArgs",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['le'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "CharLiteral",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "lex",
			  	  "type" : "input_value",
			  	  "check" : ["LEX_CharLiteral"]
			  	},
			  	
			  ],
			  "colour" : 320,
			  
			  "previousStatement" : "CharLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "le",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['LEX_CharLiteral'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "LEX_CharLiteral",
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
			  "colour" : 149,
			  "output" : "LEX_CharLiteral",
			  
			  
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
			  "colour" : 136,
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
			  "colour" : 233,
			  "output" : "FooStringChars",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['abstractmethodmod41'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AbstractMethodMod",
			  "message0" : "abstract %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 19,
			  
			  "previousStatement" : "AbstractMethodMod",
			  "nextStatement" : "AbstractMethodMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['labeled'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "%1 : %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Stm",
			  	  "type" : "input_statement",
			  	  "check" : ["Stm"]
			  	},
			  	
			  ],
			  "colour" : 332,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "labeled",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['default'] = {
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
			  "colour" : 222,
			  
			  "previousStatement" : "SwitchLabel",
			  "nextStatement" : "SwitchLabel",
			  "inputsInline" : true,
			  "tooltip" : "default",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['DeciFloatNumeral36'] = {
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
			  	  "type" : "field_input",
			  	  "text" : "DeciFloatNumeral"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["DeciFloatExponentPart"]
			  	},
			  	
			  ],
			  "colour" : 261,
			  "output" : "DeciFloatNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['DeciNumeral5'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "DeciNumeral",
			  "message0" : "0 %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 268,
			  "output" : "DeciNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['instanceInit'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InstanceInit",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Block",
			  	  "type" : "input_statement",
			  	  "check" : ["Block"]
			  	},
			  	
			  ],
			  "colour" : 37,
			  
			  "previousStatement" : "InstanceInit",
			  
			  "inputsInline" : true,
			  "tooltip" : "instanceInit",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typeVar'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeVar",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeVarId",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeVarId"]
			  	},
			  	
			  ],
			  "colour" : 100,
			  
			  "previousStatement" : "TypeVar",
			  "nextStatement" : "TypeVar",
			  "inputsInline" : true,
			  "tooltip" : "typeVar",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['Comment27'] = {
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
			  "colour" : 35,
			  "output" : "Comment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['minus37'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 334,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "minus",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['float34'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FloatLiteral",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "lex",
			  	  "type" : "input_value",
			  	  "check" : ["HexaFloatLiteral"]
			  	},
			  	
			  ],
			  "colour" : 235,
			  
			  "previousStatement" : "FloatLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "float",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['vardecid287'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "VarDecId",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 99,
			  
			  "previousStatement" : "VarDecId",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classmod36'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMod",
			  "message0" : "public %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 211,
			  
			  "previousStatement" : "ClassMod",
			  "nextStatement" : "ClassMod",
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
			  	  "check" : [""]
			  	},
			  	
			  ],
			  "colour" : 68,
			  "output" : "OctaLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['method'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodSpec",
			  "message0" : "%1 . %2 %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 147,
			  
			  "previousStatement" : "MethodSpec",
			  
			  "inputsInline" : true,
			  "tooltip" : "method",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['pub'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodMod",
			  "message0" : "public %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 208,
			  
			  "previousStatement" : "MethodMod",
			  "nextStatement" : "MethodMod",
			  "inputsInline" : true,
			  "tooltip" : "pub",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['complement'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "~ %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 56,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "complement",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['empty'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "; %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 181,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "empty",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classmod113'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMod",
			  "message0" : "static %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 276,
			  
			  "previousStatement" : "ClassMod",
			  "nextStatement" : "ClassMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['staticImportDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ImportDec",
			  "message0" : "import %1 static %2 %3 . %4 %5 ; %6 ",
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
			  	  "type" : "input_statement",
			  	  "check" : ["TypeName"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 232,
			  
			  "previousStatement" : "ImportDec",
			  "nextStatement" : "ImportDec",
			  "inputsInline" : true,
			  "tooltip" : "staticImportDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['ltEq'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 <= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 175,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "ltEq",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['constrDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstrDec",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "ConstrHead",
			  	  "type" : "input_statement",
			  	  "check" : ["ConstrHead"]
			  	},
			  	  	{
			  	  "name" : "ConstrBody",
			  	  "type" : "input_statement",
			  	  "check" : ["ConstrBody"]
			  	},
			  	
			  ],
			  "colour" : 235,
			  
			  "previousStatement" : "ConstrDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "constrDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['reftype293'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "RefType",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ClassOrInterfaceType",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassOrInterfaceType"]
			  	},
			  	
			  ],
			  "colour" : 173,
			  
			  "previousStatement" : "RefType",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['byte'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "IntType",
			  "message0" : "byte %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 224,
			  
			  "previousStatement" : "IntType",
			  
			  "inputsInline" : true,
			  "tooltip" : "byte",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['enumBody'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "EnumBody",
			  "message0" : "{ %1 %2 %3 } %4 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["EnumConst"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["EnumBodyDecs"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 2,
			  
			  "previousStatement" : "EnumBody",
			  
			  "inputsInline" : true,
			  "tooltip" : "enumBody",
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
			  "colour" : 125,
			  "output" : "BlockCommentChars",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classType'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassType",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeDecSpec",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeDecSpec"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
			  	},
			  	
			  ],
			  "colour" : 20,
			  
			  "previousStatement" : "ClassType",
			  
			  "inputsInline" : true,
			  "tooltip" : "classType",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['exprName'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ExprName",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 240,
			  
			  "previousStatement" : "ExprName",
			  
			  "inputsInline" : true,
			  "tooltip" : "exprName",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['annoDecHead'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AnnoDecHead",
			  "message0" : "%1 @ %2 interface %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "anno",
			  	  "type" : "input_statement",
			  	  "check" : ["InterfaceMod", "Anno"]
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
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 141,
			  
			  "previousStatement" : "AnnoDecHead",
			  
			  "inputsInline" : true,
			  "tooltip" : "annoDecHead",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['singleElemAnno'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Anno",
			  "message0" : "@ %1 %2 ( %3 %4 ) %5 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "TypeName",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeName"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "ElemVal",
			  	  "type" : "input_statement",
			  	  "check" : ["ElemVal"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 180,
			  
			  "previousStatement" : "Anno",
			  "nextStatement" : "Anno",
			  "inputsInline" : true,
			  "tooltip" : "singleElemAnno",
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
			  "colour" : 114,
			  "output" : "HexaNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['break'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "break %1 %2 ; %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 107,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "break",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['superDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Super",
			  "message0" : "extends %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "ClassType",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassType"]
			  	},
			  	
			  ],
			  "colour" : 258,
			  
			  "previousStatement" : "Super",
			  "nextStatement" : "Super",
			  "inputsInline" : true,
			  "tooltip" : "superDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['modifier65'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Modifier",
			  "message0" : "private %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 314,
			  
			  "previousStatement" : "Modifier",
			  "nextStatement" : "Modifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['arraybasetype335'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ArrayBaseType",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "PrimType",
			  	  "type" : "input_statement",
			  	  "check" : ["PrimType"]
			  	},
			  	
			  ],
			  "colour" : 287,
			  
			  "previousStatement" : "ArrayBaseType",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['deprAbstractMethodDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AbstractMethodDec",
			  "message0" : "%1 %2 %3 %4 ( %5 %6 ) %7 %8 %9 ; %10 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["AbstractMethodMod", "Anno"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeParams"]
			  	},
			  	  	{
			  	  "name" : "ResultType",
			  	  "type" : "input_statement",
			  	  "check" : ["ResultType"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["FormalParam"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Dim"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Throws"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 18,
			  
			  "previousStatement" : "AbstractMethodDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "deprAbstractMethodDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['numtype220'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "NumType",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "IntType",
			  	  "type" : "input_statement",
			  	  "check" : ["IntType"]
			  	},
			  	
			  ],
			  "colour" : 1,
			  
			  "previousStatement" : "NumType",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['methodDec30'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodDec",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "MethodDecHead",
			  	  "type" : "input_statement",
			  	  "check" : ["MethodDecHead"]
			  	},
			  	  	{
			  	  "name" : "MethodBody",
			  	  "type" : "input_statement",
			  	  "check" : ["MethodBody"]
			  	},
			  	
			  ],
			  "colour" : 343,
			  
			  "previousStatement" : "MethodDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "methodDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['deprMethodDecHead'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodDecHead",
			  "message0" : "%1 %2 %3 %4 ( %5 %6 ) %7 %8 %9 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Anno", "MethodMod"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeParams"]
			  	},
			  	  	{
			  	  "name" : "ResultType",
			  	  "type" : "input_statement",
			  	  "check" : ["ResultType"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["FormalParam"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Dim"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Throws"]
			  	},
			  	
			  ],
			  "colour" : 110,
			  
			  "previousStatement" : "MethodDecHead",
			  
			  "inputsInline" : true,
			  "tooltip" : "deprMethodDecHead",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['modifier104'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Modifier",
			  "message0" : "volatile %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 311,
			  
			  "previousStatement" : "Modifier",
			  "nextStatement" : "Modifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['constrDec29'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassBodyDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ConstrDec",
			  	  "type" : "input_statement",
			  	  "check" : ["ConstrDec"]
			  	},
			  	
			  ],
			  "colour" : 152,
			  
			  "previousStatement" : "ClassBodyDec",
			  "nextStatement" : "ClassBodyDec",
			  "inputsInline" : true,
			  "tooltip" : "constrDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typedec315'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ClassDec",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassDec"]
			  	},
			  	
			  ],
			  "colour" : 359,
			  
			  "previousStatement" : "TypeDec",
			  "nextStatement" : "TypeDec",
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
			  "colour" : 129,
			  "output" : "StringChars",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['abstractMethodDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AbstractMethodDec",
			  "message0" : "%1 %2 %3 %4 ( %5 %6 ) %7 %8 ; %9 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["AbstractMethodMod", "Anno"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeParams"]
			  	},
			  	  	{
			  	  "name" : "ResultType",
			  	  "type" : "input_statement",
			  	  "check" : ["ResultType"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["FormalParam"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Throws"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 216,
			  
			  "previousStatement" : "AbstractMethodDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "abstractMethodDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assignExcOr'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ^= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 218,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assignExcOr",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['qSuperField'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FieldAccess",
			  "message0" : "%1 . %2 super %3 . %4 %5 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeName",
			  	  "type" : "input_statement",
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
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 122,
			  
			  "previousStatement" : "FieldAccess",
			  "nextStatement" : "FieldAccess",
			  "inputsInline" : true,
			  "tooltip" : "qSuperField",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['semicolon19'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceMemberDec",
			  "message0" : "; %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 24,
			  
			  "previousStatement" : "InterfaceMemberDec",
			  "nextStatement" : "InterfaceMemberDec",
			  "inputsInline" : true,
			  "tooltip" : "semicolon",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['lazyOr'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 || %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 56,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "lazyOr",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['voidClass'] = {
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
			  "colour" : 331,
			  
			  "previousStatement" : "ClassLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "voidClass",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['deci'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "IntLiteral",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "lex",
			  	  "type" : "input_value",
			  	  "check" : ["DeciLiteral"]
			  	},
			  	
			  ],
			  "colour" : 220,
			  
			  "previousStatement" : "IntLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "deci",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['numtype267'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "NumType",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "FloatType",
			  	  "type" : "input_statement",
			  	  "check" : ["FloatType"]
			  	},
			  	
			  ],
			  "colour" : 209,
			  
			  "previousStatement" : "NumType",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['staticImportOnDemandDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ImportDec",
			  "message0" : "import %1 static %2 %3 . %4 * %5 ; %6 ",
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
			  	  "type" : "input_statement",
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
			  	
			  ],
			  "colour" : 37,
			  
			  "previousStatement" : "ImportDec",
			  "nextStatement" : "ImportDec",
			  "inputsInline" : true,
			  "tooltip" : "staticImportOnDemandDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['wildcardUpperBound'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "WildcardBound",
			  "message0" : "extends %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "RefType",
			  	  "type" : "input_statement",
			  	  "check" : ["RefType"]
			  	},
			  	
			  ],
			  "colour" : 162,
			  
			  "previousStatement" : "WildcardBound",
			  "nextStatement" : "WildcardBound",
			  "inputsInline" : true,
			  "tooltip" : "wildcardUpperBound",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacemod291'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceMod",
			  "message0" : "public %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 251,
			  
			  "previousStatement" : "InterfaceMod",
			  "nextStatement" : "InterfaceMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assignMinus'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 -= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 358,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assignMinus",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacemod395'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceMod",
			  "message0" : "static %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 74,
			  
			  "previousStatement" : "InterfaceMod",
			  "nextStatement" : "InterfaceMod",
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
			  "colour" : 101,
			  "output" : "CarriageReturn",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assign'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 = %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 340,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assign",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['notEq'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 != %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 235,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "notEq",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['transient'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FieldMod",
			  "message0" : "transient %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 84,
			  
			  "previousStatement" : "FieldMod",
			  "nextStatement" : "FieldMod",
			  "inputsInline" : true,
			  "tooltip" : "transient",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typeImportDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ImportDec",
			  "message0" : "import %1 %2 ; %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "TypeName",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeName"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 198,
			  
			  "previousStatement" : "ImportDec",
			  "nextStatement" : "ImportDec",
			  "inputsInline" : true,
			  "tooltip" : "typeImportDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacememberdec110'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceMemberDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ConstantDec",
			  	  "type" : "input_statement",
			  	  "check" : ["ConstantDec"]
			  	},
			  	
			  ],
			  "colour" : 321,
			  
			  "previousStatement" : "InterfaceMemberDec",
			  "nextStatement" : "InterfaceMemberDec",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['eq'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 == %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 265,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "eq",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['excOr'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ^ %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 114,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "excOr",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['superField'] = {
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
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 146,
			  
			  "previousStatement" : "FieldAccess",
			  "nextStatement" : "FieldAccess",
			  "inputsInline" : true,
			  "tooltip" : "superField",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['LEX_StringLiteral'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "LEX_StringLiteral",
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
			  "colour" : 312,
			  "output" : "LEX_StringLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['CharContent31'] = {
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
			  "colour" : 295,
			  "output" : "CharContent",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['staticInit'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "StaticInit",
			  "message0" : "static %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Block",
			  	  "type" : "input_statement",
			  	  "check" : ["Block"]
			  	},
			  	
			  ],
			  "colour" : 216,
			  
			  "previousStatement" : "StaticInit",
			  
			  "inputsInline" : true,
			  "tooltip" : "staticInit",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacemod235'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceMod",
			  "message0" : "private %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 59,
			  
			  "previousStatement" : "InterfaceMod",
			  "nextStatement" : "InterfaceMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['localVarDecStm'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "LocalVarDecStm",
			  "message0" : "%1 ; %2 ",
			  "args0" : [
			  	{
			  	  "name" : "LocalVarDec",
			  	  "type" : "input_statement",
			  	  "check" : ["LocalVarDec"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 144,
			  
			  "previousStatement" : "LocalVarDecStm",
			  
			  "inputsInline" : true,
			  "tooltip" : "localVarDecStm",
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
			  "colour" : 80,
			  "output" : "EOLCommentChars",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['switch'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
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
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "SwitchBlock",
			  	  "type" : "input_statement",
			  	  "check" : ["SwitchBlock"]
			  	},
			  	
			  ],
			  "colour" : 14,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "switch",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['sta'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodMod",
			  "message0" : "static %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 210,
			  
			  "previousStatement" : "MethodMod",
			  "nextStatement" : "MethodMod",
			  "inputsInline" : true,
			  "tooltip" : "sta",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['modifier357'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Modifier",
			  "message0" : "static %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 178,
			  
			  "previousStatement" : "Modifier",
			  "nextStatement" : "Modifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['invoke'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ( %2 %3 ) %4 ",
			  "args0" : [
			  	{
			  	  "name" : "MethodSpec",
			  	  "type" : "input_statement",
			  	  "check" : ["MethodSpec"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 193,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "invoke",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['abs'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodMod",
			  "message0" : "abstract %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 25,
			  
			  "previousStatement" : "MethodMod",
			  "nextStatement" : "MethodMod",
			  "inputsInline" : true,
			  "tooltip" : "abs",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['castRef'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "( %1 %2 ) %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "RefType",
			  	  "type" : "input_statement",
			  	  "check" : ["RefType"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 279,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "castRef",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['enumBodyDecs'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "EnumBodyDecs",
			  "message0" : "; %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassBodyDec"]
			  	},
			  	
			  ],
			  "colour" : 90,
			  
			  "previousStatement" : "EnumBodyDecs",
			  "nextStatement" : "EnumBodyDecs",
			  "inputsInline" : true,
			  "tooltip" : "enumBodyDecs",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classOrInterfaceType'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassOrInterfaceType",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeDecSpec",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeDecSpec"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
			  	},
			  	
			  ],
			  "colour" : 337,
			  
			  "previousStatement" : "ClassOrInterfaceType",
			  
			  "inputsInline" : true,
			  "tooltip" : "classOrInterfaceType",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['numType'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "PrimType",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "NumType",
			  	  "type" : "input_statement",
			  	  "check" : ["NumType"]
			  	},
			  	
			  ],
			  "colour" : 287,
			  
			  "previousStatement" : "PrimType",
			  
			  "inputsInline" : true,
			  "tooltip" : "numType",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['modifier133'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Modifier",
			  "message0" : "public %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 311,
			  
			  "previousStatement" : "Modifier",
			  "nextStatement" : "Modifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['LAYOUT'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "LAYOUT",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "LAYOUTName",
			  	  "type" : "field_input",
			  	  "text" : "LAYOUT"
			  	},
			  	
			  ],
			  "colour" : 183,
			  "output" : "LAYOUT",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['packageOrTypeName'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "PackageOrTypeName",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "PackageOrTypeName",
			  	  "type" : "input_statement",
			  	  "check" : ["PackageOrTypeName"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 324,
			  
			  "previousStatement" : "PackageOrTypeName",
			  
			  "inputsInline" : true,
			  "tooltip" : "packageOrTypeName",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['pro'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodMod",
			  "message0" : "protected %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 255,
			  
			  "previousStatement" : "MethodMod",
			  "nextStatement" : "MethodMod",
			  "inputsInline" : true,
			  "tooltip" : "pro",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['plus'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 330,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "plus",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['wildcardLowerBound'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "WildcardBound",
			  "message0" : "super %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "RefType",
			  	  "type" : "input_statement",
			  	  "check" : ["RefType"]
			  	},
			  	
			  ],
			  "colour" : 231,
			  
			  "previousStatement" : "WildcardBound",
			  "nextStatement" : "WildcardBound",
			  "inputsInline" : true,
			  "tooltip" : "wildcardLowerBound",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['unboundWld'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ArrayBaseType",
			  "message0" : "%1 < %2 ? %3 > %4 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeName",
			  	  "type" : "input_statement",
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
			  	
			  ],
			  "colour" : 315,
			  
			  "previousStatement" : "ArrayBaseType",
			  
			  "inputsInline" : true,
			  "tooltip" : "unboundWld",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['altConstrInv'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstrInv",
			  "message0" : "%1 this %2 ( %3 %4 ) %5 ; %6 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
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
			  	  "check" : ["Expr"]
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
			  "colour" : 30,
			  
			  "previousStatement" : "ConstrInv",
			  "nextStatement" : "ConstrInv",
			  "inputsInline" : true,
			  "tooltip" : "altConstrInv",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['CommentPart22'] = {
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
			  "colour" : 236,
			  "output" : "CommentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typevarid60'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeVarId",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 111,
			  
			  "previousStatement" : "TypeVarId",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['short'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "IntType",
			  "message0" : "short %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 318,
			  
			  "previousStatement" : "IntType",
			  
			  "inputsInline" : true,
			  "tooltip" : "short",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['not'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "! %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 128,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "not",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['enumDec32'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "EnumDec",
			  	  "type" : "input_statement",
			  	  "check" : ["EnumDec"]
			  	},
			  	
			  ],
			  "colour" : 235,
			  
			  "previousStatement" : "ClassDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "enumDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['nullLiteral'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "NullLiteral",
			  	  "type" : "input_statement",
			  	  "check" : ["NullLiteral"]
			  	},
			  	
			  ],
			  "colour" : 338,
			  
			  "previousStatement" : "Literal",
			  
			  "inputsInline" : true,
			  "tooltip" : "nullLiteral",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typeName37'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeName",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 97,
			  
			  "previousStatement" : "TypeName",
			  
			  "inputsInline" : true,
			  "tooltip" : "typeName",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['enumBody34'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "EnumBody",
			  "message0" : "{ %1 %2 , %3 %4 } %5 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["EnumConst"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["EnumBodyDecs"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 120,
			  
			  "previousStatement" : "EnumBody",
			  
			  "inputsInline" : true,
			  "tooltip" : "enumBody",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['semicolon16'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeDec",
			  "message0" : "; %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 10,
			  
			  "previousStatement" : "TypeDec",
			  "nextStatement" : "TypeDec",
			  "inputsInline" : true,
			  "tooltip" : "semicolon",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['throw'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "throw %1 %2 ; %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 80,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "throw",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['methodbody304'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodBody",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Block",
			  	  "type" : "input_statement",
			  	  "check" : ["Block"]
			  	},
			  	
			  ],
			  "colour" : 188,
			  
			  "previousStatement" : "MethodBody",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['varinit277'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "VarInit",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ArrayInit",
			  	  "type" : "input_statement",
			  	  "check" : ["ArrayInit"]
			  	},
			  	
			  ],
			  "colour" : 323,
			  
			  "previousStatement" : "VarInit",
			  "nextStatement" : "VarInit",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['lhs89'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "LHS",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "FieldAccess",
			  	  "type" : "input_statement",
			  	  "check" : ["FieldAccess"]
			  	},
			  	
			  ],
			  "colour" : 101,
			  
			  "previousStatement" : "LHS",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['elemValArrayInit'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ElemVal",
			  "message0" : "{ %1 %2 , %3 } %4 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ElemVal"]
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
			  "colour" : 117,
			  
			  "previousStatement" : "ElemVal",
			  "nextStatement" : "ElemVal",
			  "inputsInline" : true,
			  "tooltip" : "elemValArrayInit",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classmod376'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMod",
			  "message0" : "private %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 248,
			  
			  "previousStatement" : "ClassMod",
			  "nextStatement" : "ClassMod",
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
			  	  "check" : [""]
			  	},
			  	
			  ],
			  "colour" : 151,
			  "output" : "HexaLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['StringPart35'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "StringPart",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "lex",
			  	  "type" : "input_value",
			  	  "check" : ["StringChars"]
			  	},
			  	
			  ],
			  "colour" : 301,
			  "output" : "StringPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['static'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FieldMod",
			  "message0" : "static %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 6,
			  
			  "previousStatement" : "FieldMod",
			  "nextStatement" : "FieldMod",
			  "inputsInline" : true,
			  "tooltip" : "static",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['UnicodeEscape'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "UnicodeEscape",
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
			  "colour" : 171,
			  "output" : "UnicodeEscape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['block'] = {
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
			  	  "check" : ["BlockStm"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 317,
			  
			  "previousStatement" : "Block",
			  
			  "inputsInline" : true,
			  "tooltip" : "block",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['lazyAnd'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 && %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 282,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "lazyAnd",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacedec207'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceDec",
			  "message0" : "%1 { %2 %3 } %4 ",
			  "args0" : [
			  	{
			  	  "name" : "InterfaceDecHead",
			  	  "type" : "input_statement",
			  	  "check" : ["InterfaceDecHead"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "interfaceMemberDec",
			  	  "type" : "input_statement",
			  	  "check" : ["InterfaceMemberDec"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 239,
			  
			  "previousStatement" : "InterfaceDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['param'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FormalParam",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["VarMod", "Anno"]
			  	},
			  	  	{
			  	  "name" : "Type",
			  	  "type" : "input_statement",
			  	  "check" : ["Type"]
			  	},
			  	  	{
			  	  "name" : "VarDecId",
			  	  "type" : "input_statement",
			  	  "check" : ["VarDecId"]
			  	},
			  	
			  ],
			  "colour" : 182,
			  
			  "previousStatement" : "FormalParam",
			  "nextStatement" : "FormalParam",
			  "inputsInline" : true,
			  "tooltip" : "param",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['catch'] = {
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
			  	  "name" : "FormalParam",
			  	  "type" : "input_statement",
			  	  "check" : ["FormalParam"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Block",
			  	  "type" : "input_statement",
			  	  "check" : ["Block"]
			  	},
			  	
			  ],
			  "colour" : 6,
			  
			  "previousStatement" : "CatchClause",
			  "nextStatement" : "CatchClause",
			  "inputsInline" : true,
			  "tooltip" : "catch",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['reftype'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Type",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "RefType",
			  	  "type" : "input_statement",
			  	  "check" : ["RefType"]
			  	},
			  	
			  ],
			  "colour" : 206,
			  
			  "previousStatement" : "Type",
			  
			  "inputsInline" : true,
			  "tooltip" : "reftype",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['null'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "NullLiteral",
			  "message0" : "null %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 136,
			  
			  "previousStatement" : "NullLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "null",
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
			  "colour" : 285,
			  "output" : "ID",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['expr322'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ArrayCreationExpr",
			  	  "type" : "input_statement",
			  	  "check" : ["ArrayCreationExpr"]
			  	},
			  	
			  ],
			  "colour" : 240,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['LineTerminator15'] = {
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
			  "colour" : 209,
			  "output" : "LineTerminator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['Comment20'] = {
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
			  "colour" : 86,
			  "output" : "Comment",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assignRemain'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 %= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 38,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assignRemain",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['methodNamee'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodSpec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "MethodName",
			  	  "type" : "input_statement",
			  	  "check" : ["MethodName"]
			  	},
			  	
			  ],
			  "colour" : 344,
			  
			  "previousStatement" : "MethodSpec",
			  
			  "inputsInline" : true,
			  "tooltip" : "methodNamee",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classmod0'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMod",
			  "message0" : "final %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 52,
			  
			  "previousStatement" : "ClassMod",
			  "nextStatement" : "ClassMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['EscChar'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "EscChar",
			  "message0" : "\ %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 350,
			  "output" : "EscChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typeName3'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeName",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "PackageOrTypeName",
			  	  "type" : "input_statement",
			  	  "check" : ["PackageOrTypeName"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 331,
			  
			  "previousStatement" : "TypeName",
			  
			  "inputsInline" : true,
			  "tooltip" : "typeName",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['packageOrTypeName27'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "PackageOrTypeName",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 269,
			  
			  "previousStatement" : "PackageOrTypeName",
			  
			  "inputsInline" : true,
			  "tooltip" : "packageOrTypeName",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['qNewInstance'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 . %2 new %3 %4 %5 %6 ( %7 %8 ) %9 %10 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
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
			  	  "check" : ["TypeArgs"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassBody"]
			  	},
			  	
			  ],
			  "colour" : 136,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "qNewInstance",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['exprName9'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ExprName",
			  	  "type" : "input_statement",
			  	  "check" : ["ExprName"]
			  	},
			  	
			  ],
			  "colour" : 82,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "exprName",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['ambName8'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AmbName",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 194,
			  
			  "previousStatement" : "AmbName",
			  
			  "inputsInline" : true,
			  "tooltip" : "ambName",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['field'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FieldAccess",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 127,
			  
			  "previousStatement" : "FieldAccess",
			  "nextStatement" : "FieldAccess",
			  "inputsInline" : true,
			  "tooltip" : "field",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['member'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeDecSpec",
			  "message0" : "%1 %2 . %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeDecSpec",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeDecSpec"]
			  	},
			  	  	{
			  	  "name" : "TypeArgs",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 228,
			  
			  "previousStatement" : "TypeDecSpec",
			  
			  "inputsInline" : true,
			  "tooltip" : "member",
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
			  	  "type" : "field_input",
			  	  "text" : "DeciFloatDigits"
			  	},
			  	
			  ],
			  "colour" : 314,
			  "output" : "DeciFloatDigits",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['id'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Id",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "lex",
			  	  "type" : "input_value",
			  	  "check" : ["ID"]
			  	},
			  	
			  ],
			  "colour" : 165,
			  
			  "previousStatement" : "Id",
			  
			  "inputsInline" : true,
			  "tooltip" : "id",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['primtype'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Type",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "PrimType",
			  	  "type" : "input_statement",
			  	  "check" : ["PrimType"]
			  	},
			  	
			  ],
			  "colour" : 331,
			  
			  "previousStatement" : "Type",
			  
			  "inputsInline" : true,
			  "tooltip" : "primtype",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['superMethod'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodSpec",
			  "message0" : "%1 %2 %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "super",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "dot",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 262,
			  
			  "previousStatement" : "MethodSpec",
			  
			  "inputsInline" : true,
			  "tooltip" : "superMethod",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['stringLiteral'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "StringLiteral",
			  	  "type" : "input_statement",
			  	  "check" : ["StringLiteral"]
			  	},
			  	
			  ],
			  "colour" : 244,
			  
			  "previousStatement" : "Literal",
			  
			  "inputsInline" : true,
			  "tooltip" : "stringLiteral",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['lit'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Literal",
			  	  "type" : "input_statement",
			  	  "check" : ["Literal"]
			  	},
			  	
			  ],
			  "colour" : 340,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "lit",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['start'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "CompilationUnit",
			  "message0" : "%1",
			  "args0" : [
			  	{
			  	  "name" : "start",
			  	  "type" : "input_statement",
			  	  "check" : ["CompilationUnit"]
			  	},
			  	
			  ],
			  "colour" : 90,
			  
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['constrDecHead'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstrHead",
			  "message0" : "%1 %2 %3 ( %4 %5 ) %6 %7 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ConstrMod", "Anno"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeParams"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["FormalParam"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Throws"]
			  	},
			  	
			  ],
			  "colour" : 266,
			  
			  "previousStatement" : "ConstrHead",
			  
			  "inputsInline" : true,
			  "tooltip" : "constrDecHead",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['try39'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "try %1 %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Block",
			  	  "type" : "input_statement",
			  	  "check" : ["Block"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["CatchClause"]
			  	},
			  	
			  ],
			  "colour" : 176,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "try",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['EscapeSeq13'] = {
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
			  "colour" : 212,
			  "output" : "EscapeSeq",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['constrmod249'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstrMod",
			  "message0" : "public %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 37,
			  
			  "previousStatement" : "ConstrMod",
			  "nextStatement" : "ConstrMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['extendsInterfaces'] = {
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
			  "colour" : 60,
			  
			  "previousStatement" : "ExtendsInterfaces",
			  "nextStatement" : "ExtendsInterfaces",
			  "inputsInline" : true,
			  "tooltip" : "extendsInterfaces",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classmod174'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMod",
			  "message0" : "strictfp %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 153,
			  
			  "previousStatement" : "ClassMod",
			  "nextStatement" : "ClassMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacememberdec240'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceMemberDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "AbstractMethodDec",
			  	  "type" : "input_statement",
			  	  "check" : ["AbstractMethodDec"]
			  	},
			  	
			  ],
			  "colour" : 92,
			  
			  "previousStatement" : "InterfaceMemberDec",
			  "nextStatement" : "InterfaceMemberDec",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['cond'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "CondMid",
			  	  "type" : "input_statement",
			  	  "check" : ["CondMid"]
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 83,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "cond",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['reftype386'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "RefType",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ArrayType",
			  	  "type" : "input_statement",
			  	  "check" : ["ArrayType"]
			  	},
			  	
			  ],
			  "colour" : 32,
			  
			  "previousStatement" : "RefType",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['rightShift'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 >> %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 47,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "rightShift",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['modifier254'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Modifier",
			  "message0" : "transient %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 159,
			  
			  "previousStatement" : "Modifier",
			  "nextStatement" : "Modifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['annoMethodDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AnnoElemDec",
			  "message0" : "%1 %2 %3 ( %4 ) %5 %6 ; %7 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["AbstractMethodMod", "Anno"]
			  	},
			  	  	{
			  	  "name" : "Type",
			  	  "type" : "input_statement",
			  	  "check" : ["Type"]
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
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
			  	  "name" : "defaultVal",
			  	  "type" : "input_statement",
			  	  "check" : ["DefaultVal"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 18,
			  
			  "previousStatement" : "AnnoElemDec",
			  "nextStatement" : "AnnoElemDec",
			  "inputsInline" : true,
			  "tooltip" : "annoMethodDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classMemberDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassBodyDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ClassMemberDec",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassMemberDec"]
			  	},
			  	
			  ],
			  "colour" : 216,
			  
			  "previousStatement" : "ClassBodyDec",
			  "nextStatement" : "ClassBodyDec",
			  "inputsInline" : true,
			  "tooltip" : "classMemberDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['lhs90'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "LHS",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ExprName",
			  	  "type" : "input_statement",
			  	  "check" : ["ExprName"]
			  	},
			  	
			  ],
			  "colour" : 254,
			  
			  "previousStatement" : "LHS",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['methodName'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "MethodName",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "AmbName",
			  	  "type" : "input_statement",
			  	  "check" : ["AmbName"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 154,
			  
			  "previousStatement" : "MethodName",
			  
			  "inputsInline" : true,
			  "tooltip" : "methodName",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['protec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FieldMod",
			  "message0" : "protected %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 73,
			  
			  "previousStatement" : "FieldMod",
			  "nextStatement" : "FieldMod",
			  "inputsInline" : true,
			  "tooltip" : "protec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['castPrim'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "( %1 %2 ) %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "PrimType",
			  	  "type" : "input_statement",
			  	  "check" : ["PrimType"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 114,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "castPrim",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typedec10'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "TypeDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "InterfaceDec",
			  	  "type" : "input_statement",
			  	  "check" : ["InterfaceDec"]
			  	},
			  	
			  ],
			  "colour" : 45,
			  
			  "previousStatement" : "TypeDec",
			  "nextStatement" : "TypeDec",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfaceType'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceType",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeDecSpec",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeDecSpec"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
			  	},
			  	
			  ],
			  "colour" : 357,
			  
			  "previousStatement" : "InterfaceType",
			  "nextStatement" : "InterfaceType",
			  "inputsInline" : true,
			  "tooltip" : "interfaceType",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacemod300'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceMod",
			  "message0" : "strictfp %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 340,
			  
			  "previousStatement" : "InterfaceMod",
			  "nextStatement" : "InterfaceMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['octa'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "IntLiteral",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "lex",
			  	  "type" : "input_value",
			  	  "check" : ["OctaLiteral"]
			  	},
			  	
			  ],
			  "colour" : 27,
			  
			  "previousStatement" : "IntLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "octa",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['switchBlock'] = {
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
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["SwitchGroup"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["SwitchLabel"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 50,
			  
			  "previousStatement" : "SwitchBlock",
			  
			  "inputsInline" : true,
			  "tooltip" : "switchBlock",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['varArityParam'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FormalParam",
			  "message0" : "%1 %2 ... %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["VarMod", "Anno"]
			  	},
			  	  	{
			  	  "name" : "Type",
			  	  "type" : "input_statement",
			  	  "check" : ["Type"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "VarDecId",
			  	  "type" : "input_statement",
			  	  "check" : ["VarDecId"]
			  	},
			  	
			  ],
			  "colour" : 171,
			  
			  "previousStatement" : "FormalParam",
			  "nextStatement" : "FormalParam",
			  "inputsInline" : true,
			  "tooltip" : "varArityParam",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['elemval196'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ElemVal",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Anno",
			  	  "type" : "input_statement",
			  	  "check" : ["Anno"]
			  	},
			  	
			  ],
			  "colour" : 260,
			  
			  "previousStatement" : "ElemVal",
			  "nextStatement" : "ElemVal",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['floatLiteral'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "FloatLiteral",
			  	  "type" : "input_statement",
			  	  "check" : ["FloatLiteral"]
			  	},
			  	
			  ],
			  "colour" : 269,
			  
			  "previousStatement" : "Literal",
			  
			  "inputsInline" : true,
			  "tooltip" : "floatLiteral",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['LineTerminator38'] = {
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
			  "colour" : 79,
			  "output" : "LineTerminator",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['switchGroup'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "SwitchGroup",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["SwitchLabel"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["BlockStm"]
			  	},
			  	
			  ],
			  "colour" : 262,
			  
			  "previousStatement" : "SwitchGroup",
			  "nextStatement" : "SwitchGroup",
			  "inputsInline" : true,
			  "tooltip" : "switchGroup",
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
			  "message0" : "\\ %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 190,
			  "output" : "EscEscChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['StringPart18'] = {
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
			  "colour" : 24,
			  "output" : "StringPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['LAYOUT27'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "LAYOUT",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "lex",
			  	  "type" : "input_value",
			  	  "check" : ["Comment"]
			  	},
			  	
			  ],
			  "colour" : 299,
			  "output" : "LAYOUT",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['constantmod240'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstantMod",
			  "message0" : "static %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 192,
			  
			  "previousStatement" : "ConstantMod",
			  "nextStatement" : "ConstantMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['compilationUnit'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "CompilationUnit",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "pack",
			  	  "type" : "input_statement",
			  	  "check" : ["PackageDec"]
			  	},
			  	  	{
			  	  "name" : "import",
			  	  "type" : "input_statement",
			  	  "check" : ["ImportDec"]
			  	},
			  	  	{
			  	  "name" : "typeDec",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeDec"]
			  	},
			  	
			  ],
			  "colour" : 110,
			  
			  "previousStatement" : "CompilationUnit",
			  
			  "inputsInline" : true,
			  "tooltip" : "compilationUnit",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['throwsDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Throws",
			  "message0" : "throws %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ExceptionType"]
			  	},
			  	
			  ],
			  "colour" : 139,
			  
			  "previousStatement" : "Throws",
			  "nextStatement" : "Throws",
			  "inputsInline" : true,
			  "tooltip" : "throwsDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['fieldDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FieldDec",
			  "message0" : "%1 %2 %3 ; %4 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["FieldMod", "Anno"]
			  	},
			  	  	{
			  	  "name" : "Type",
			  	  "type" : "input_statement",
			  	  "check" : ["Type"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["VarDec"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 232,
			  
			  "previousStatement" : "FieldDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "fieldDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['div'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 14,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "div",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['constantmod72'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstantMod",
			  "message0" : "public %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 120,
			  
			  "previousStatement" : "ConstantMod",
			  "nextStatement" : "ConstantMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['arrayVarDecId'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "VarDecId",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Dim"]
			  	},
			  	
			  ],
			  "colour" : 178,
			  
			  "previousStatement" : "VarDecId",
			  
			  "inputsInline" : true,
			  "tooltip" : "arrayVarDecId",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['staticInit35'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassBodyDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "StaticInit",
			  	  "type" : "input_statement",
			  	  "check" : ["StaticInit"]
			  	},
			  	
			  ],
			  "colour" : 218,
			  
			  "previousStatement" : "ClassBodyDec",
			  "nextStatement" : "ClassBodyDec",
			  "inputsInline" : true,
			  "tooltip" : "staticInit",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['field30'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "FieldAccess",
			  	  "type" : "input_statement",
			  	  "check" : ["FieldAccess"]
			  	},
			  	
			  ],
			  "colour" : 304,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "field",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['defaultVal'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "DefaultVal",
			  "message0" : "default %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "ElemVal",
			  	  "type" : "input_statement",
			  	  "check" : ["ElemVal"]
			  	},
			  	
			  ],
			  "colour" : 314,
			  
			  "previousStatement" : "DefaultVal",
			  "nextStatement" : "DefaultVal",
			  "inputsInline" : true,
			  "tooltip" : "defaultVal",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['varDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "VarDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "VarDecId",
			  	  "type" : "input_statement",
			  	  "check" : ["VarDecId"]
			  	},
			  	
			  ],
			  "colour" : 238,
			  
			  "previousStatement" : "VarDec",
			  "nextStatement" : "VarDec",
			  "inputsInline" : true,
			  "tooltip" : "varDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['continue'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "continue %1 %2 ; %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 267,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "continue",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['abstractmethodmod186'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AbstractMethodMod",
			  "message0" : "public %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 289,
			  
			  "previousStatement" : "AbstractMethodMod",
			  "nextStatement" : "AbstractMethodMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['elemval224'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ElemVal",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 221,
			  
			  "previousStatement" : "ElemVal",
			  "nextStatement" : "ElemVal",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['elemValArrayInit2'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ElemVal",
			  "message0" : "{ %1 %2 } %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ElemVal"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 202,
			  
			  "previousStatement" : "ElemVal",
			  "nextStatement" : "ElemVal",
			  "inputsInline" : true,
			  "tooltip" : "elemValArrayInit",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfaceDec26'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMemberDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "InterfaceDec",
			  	  "type" : "input_statement",
			  	  "check" : ["InterfaceDec"]
			  	},
			  	
			  ],
			  "colour" : 135,
			  
			  "previousStatement" : "ClassMemberDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "interfaceDec",
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
			  	  "check" : [""]
			  	},
			  	  	{
			  	  "name" : "SignedIntegerName",
			  	  "type" : "field_input",
			  	  "text" : "SignedInteger"
			  	},
			  	
			  ],
			  "colour" : 257,
			  "output" : "SignedInteger",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['semicolon10'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AnnoElemDec",
			  "message0" : "; %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 141,
			  
			  "previousStatement" : "AnnoElemDec",
			  "nextStatement" : "AnnoElemDec",
			  "inputsInline" : true,
			  "tooltip" : "semicolon",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classDec19'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AnnoElemDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ClassDec",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassDec"]
			  	},
			  	
			  ],
			  "colour" : 288,
			  
			  "previousStatement" : "AnnoElemDec",
			  "nextStatement" : "AnnoElemDec",
			  "inputsInline" : true,
			  "tooltip" : "classDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classDecStm'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "BlockStm",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ClassDec",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassDec"]
			  	},
			  	
			  ],
			  "colour" : 229,
			  
			  "previousStatement" : "BlockStm",
			  "nextStatement" : "BlockStm",
			  "inputsInline" : true,
			  "tooltip" : "classDecStm",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['DeciFloatDigits20'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "DeciFloatDigits",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "DeciFloatDigitsName",
			  	  "type" : "field_input",
			  	  "text" : "DeciFloatDigits"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "DeciFloatDigitsName",
			  	  "type" : "field_input",
			  	  "text" : "DeciFloatDigits"
			  	},
			  	
			  ],
			  "colour" : 299,
			  "output" : "DeciFloatDigits",
			  
			  
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
			  "colour" : 38,
			  "output" : "BinaryExponent",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['qSuperConstrInv'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstrInv",
			  "message0" : "%1 . %2 %3 super %4 ( %5 %6 ) %7 ; %8 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeArgs"]
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
			  	  "check" : ["Expr"]
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
			  "colour" : 104,
			  
			  "previousStatement" : "ConstrInv",
			  "nextStatement" : "ConstrInv",
			  "inputsInline" : true,
			  "tooltip" : "qSuperConstrInv",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['markerAnno'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Anno",
			  "message0" : "@ %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "TypeName",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeName"]
			  	},
			  	
			  ],
			  "colour" : 265,
			  
			  "previousStatement" : "Anno",
			  "nextStatement" : "Anno",
			  "inputsInline" : true,
			  "tooltip" : "markerAnno",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['and'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 & %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 194,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "and",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['float3'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "FloatLiteral",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "lex",
			  	  "type" : "input_value",
			  	  "check" : ["DeciFloatLiteral"]
			  	},
			  	
			  ],
			  "colour" : 237,
			  
			  "previousStatement" : "FloatLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "float",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['varDec12'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "VarDec",
			  "message0" : "%1 = %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "VarDecId",
			  	  "type" : "input_statement",
			  	  "check" : ["VarDecId"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "VarInit",
			  	  "type" : "input_statement",
			  	  "check" : ["VarInit"]
			  	},
			  	
			  ],
			  "colour" : 350,
			  
			  "previousStatement" : "VarDec",
			  "nextStatement" : "VarDec",
			  "inputsInline" : true,
			  "tooltip" : "varDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['arrayType'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ArrayType",
			  "message0" : "%1 [ %2 ] %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Type",
			  	  "type" : "input_statement",
			  	  "check" : ["Type"]
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
			  
			  "previousStatement" : "ArrayType",
			  
			  "inputsInline" : true,
			  "tooltip" : "arrayType",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['constrmod230'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ConstrMod",
			  "message0" : "protected %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 197,
			  
			  "previousStatement" : "ConstrMod",
			  "nextStatement" : "ConstrMod",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assignURightShift'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 >>>= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 335,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assignURightShift",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['typeImportOnDemandDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ImportDec",
			  "message0" : "import %1 %2 . %3 * %4 ; %5 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "PackageName",
			  	  "type" : "input_statement",
			  	  "check" : ["PackageName"]
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
			  	
			  ],
			  "colour" : 47,
			  
			  "previousStatement" : "ImportDec",
			  "nextStatement" : "ImportDec",
			  "inputsInline" : true,
			  "tooltip" : "typeImportOnDemandDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['stm5'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Block",
			  	  "type" : "input_statement",
			  	  "check" : ["Block"]
			  	},
			  	
			  ],
			  "colour" : 80,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['for'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
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
			  	  "name" : "LocalVarDec",
			  	  "type" : "input_statement",
			  	  "check" : ["LocalVarDec"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Stm",
			  	  "type" : "input_statement",
			  	  "check" : ["Stm"]
			  	},
			  	
			  ],
			  "colour" : 139,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "for",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['fieldDec25'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMemberDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "FieldDec",
			  	  "type" : "input_statement",
			  	  "check" : ["FieldDec"]
			  	},
			  	
			  ],
			  "colour" : 16,
			  
			  "previousStatement" : "ClassMemberDec",
			  
			  "inputsInline" : true,
			  "tooltip" : "fieldDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['exprName5'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ExprName",
			  "message0" : "%1 . %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "AmbName",
			  	  "type" : "input_statement",
			  	  "check" : ["AmbName"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 141,
			  
			  "previousStatement" : "ExprName",
			  
			  "inputsInline" : true,
			  "tooltip" : "exprName",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['uRightShift'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 >>> %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 155,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "uRightShift",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['CommentPart7'] = {
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
			  "colour" : 151,
			  "output" : "CommentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['arrayInit'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ArrayInit",
			  "message0" : "{ %1 %2 } %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["VarInit"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 42,
			  
			  "previousStatement" : "ArrayInit",
			  
			  "inputsInline" : true,
			  "tooltip" : "arrayInit",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['anno'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Anno",
			  "message0" : "@ %1 %2 ( %3 %4 ) %5 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "TypeName",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeName"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ElemValPair"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 63,
			  
			  "previousStatement" : "Anno",
			  "nextStatement" : "Anno",
			  "inputsInline" : true,
			  "tooltip" : "anno",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['blockstm181'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "BlockStm",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Stm",
			  	  "type" : "input_statement",
			  	  "check" : ["Stm"]
			  	},
			  	
			  ],
			  "colour" : 231,
			  
			  "previousStatement" : "BlockStm",
			  "nextStatement" : "BlockStm",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['if38'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
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
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Stm",
			  	  "type" : "input_statement",
			  	  "check" : ["Stm"]
			  	},
			  	
			  ],
			  "colour" : 98,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "if",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['instanceInit31'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassBodyDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "InstanceInit",
			  	  "type" : "input_statement",
			  	  "check" : ["InstanceInit"]
			  	},
			  	
			  ],
			  "colour" : 271,
			  
			  "previousStatement" : "ClassBodyDec",
			  "nextStatement" : "ClassBodyDec",
			  "inputsInline" : true,
			  "tooltip" : "instanceInit",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['OctaEscape11'] = {
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
			  "colour" : 324,
			  "output" : "OctaEscape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['for30'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
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
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Stm",
			  	  "type" : "input_statement",
			  	  "check" : ["Stm"]
			  	},
			  	
			  ],
			  "colour" : 176,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "for",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['arrayAccess'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ArrayAccess",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "ArraySubscript",
			  	  "type" : "input_statement",
			  	  "check" : ["ArraySubscript"]
			  	},
			  	
			  ],
			  "colour" : 80,
			  
			  "previousStatement" : "ArrayAccess",
			  "nextStatement" : "ArrayAccess",
			  "inputsInline" : true,
			  "tooltip" : "arrayAccess",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['stringliteral248'] = {
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
			  "colour" : 356,
			  
			  "previousStatement" : "StringLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['elemValPair'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ElemValPair",
			  "message0" : "%1 = %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "ElemVal",
			  	  "type" : "input_statement",
			  	  "check" : ["ElemVal"]
			  	},
			  	
			  ],
			  "colour" : 170,
			  
			  "previousStatement" : "ElemValPair",
			  "nextStatement" : "ElemValPair",
			  "inputsInline" : true,
			  "tooltip" : "elemValPair",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacemod159'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceMod",
			  "message0" : "abstract %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 85,
			  
			  "previousStatement" : "InterfaceMod",
			  "nextStatement" : "InterfaceMod",
			  "inputsInline" : true,
			  "tooltip" : "",
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
			  "colour" : 108,
			  "output" : "OctaNumeral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfacememberdec61'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceMemberDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "InterfaceDec",
			  	  "type" : "input_statement",
			  	  "check" : ["InterfaceDec"]
			  	},
			  	
			  ],
			  "colour" : 157,
			  
			  "previousStatement" : "InterfaceMemberDec",
			  "nextStatement" : "InterfaceMemberDec",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['exprStm'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
			  "message0" : "%1 ; %2 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 241,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "exprStm",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['int'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "IntType",
			  "message0" : "int %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 214,
			  
			  "previousStatement" : "IntType",
			  
			  "inputsInline" : true,
			  "tooltip" : "int",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['intLiteral'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Literal",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "IntLiteral",
			  	  "type" : "input_statement",
			  	  "check" : ["IntLiteral"]
			  	},
			  	
			  ],
			  "colour" : 19,
			  
			  "previousStatement" : "Literal",
			  
			  "inputsInline" : true,
			  "tooltip" : "intLiteral",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['OctaEscape8'] = {
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
			  "colour" : 331,
			  "output" : "OctaEscape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['packageDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "PackageDec",
			  "message0" : "%1 package %2 %3 ; %4 ",
			  "args0" : [
			  	{
			  	  "name" : "anno",
			  	  "type" : "input_statement",
			  	  "check" : ["Anno"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "PackageName",
			  	  "type" : "input_statement",
			  	  "check" : ["PackageName"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 288,
			  
			  "previousStatement" : "PackageDec",
			  "nextStatement" : "PackageDec",
			  "inputsInline" : true,
			  "tooltip" : "packageDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['resulttype171'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ResultType",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Type",
			  	  "type" : "input_statement",
			  	  "check" : ["Type"]
			  	},
			  	
			  ],
			  "colour" : 283,
			  
			  "previousStatement" : "ResultType",
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['exp'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "VarInit",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 73,
			  
			  "previousStatement" : "VarInit",
			  "nextStatement" : "VarInit",
			  "inputsInline" : true,
			  "tooltip" : "exp",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['class'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassLiteral",
			  "message0" : "%1 . %2 class %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Type",
			  	  "type" : "input_statement",
			  	  "check" : ["Type"]
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
			  "colour" : 63,
			  
			  "previousStatement" : "ClassLiteral",
			  
			  "inputsInline" : true,
			  "tooltip" : "class",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['preIncr'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "++ %1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 25,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "preIncr",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['synchronized'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Stm",
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
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Block",
			  	  "type" : "input_statement",
			  	  "check" : ["Block"]
			  	},
			  	
			  ],
			  "colour" : 102,
			  
			  "previousStatement" : "Stm",
			  
			  "inputsInline" : true,
			  "tooltip" : "synchronized",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['constantDec26'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "AnnoElemDec",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ConstantDec",
			  	  "type" : "input_statement",
			  	  "check" : ["ConstantDec"]
			  	},
			  	
			  ],
			  "colour" : 194,
			  
			  "previousStatement" : "AnnoElemDec",
			  "nextStatement" : "AnnoElemDec",
			  "inputsInline" : true,
			  "tooltip" : "constantDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['packageName'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "PackageName",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ids",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	
			  ],
			  "colour" : 254,
			  
			  "previousStatement" : "PackageName",
			  
			  "inputsInline" : true,
			  "tooltip" : "packageName",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['NamedEscape'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "NamedEscape",
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
			  "colour" : 91,
			  "output" : "NamedEscape",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classmod274'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassMod",
			  "message0" : "abstract %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 223,
			  
			  "previousStatement" : "ClassMod",
			  "nextStatement" : "ClassMod",
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
			  "colour" : 38,
			  "output" : "SingleChar",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['plus25'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 %2 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 19,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "plus",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['exceptiontype148'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ExceptionType",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "ClassType",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassType"]
			  	},
			  	
			  ],
			  "colour" : 282,
			  
			  "previousStatement" : "ExceptionType",
			  "nextStatement" : "ExceptionType",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['assignPlus'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 += %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "LHS",
			  	  "type" : "input_statement",
			  	  "check" : ["LHS"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	
			  ],
			  "colour" : 172,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "assignPlus",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['implementsDec'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Interfaces",
			  "message0" : "implements %1 %2 ",
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
			  "colour" : 46,
			  
			  "previousStatement" : "Interfaces",
			  "nextStatement" : "Interfaces",
			  "inputsInline" : true,
			  "tooltip" : "implementsDec",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['case'] = {
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
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : ["Expr"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 290,
			  
			  "previousStatement" : "SwitchLabel",
			  "nextStatement" : "SwitchLabel",
			  "inputsInline" : true,
			  "tooltip" : "case",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['interfaceDecHead'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "InterfaceDecHead",
			  "message0" : "%1 interface %2 %3 %4 %5 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Anno", "InterfaceMod"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "typeParams",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeParams"]
			  	},
			  	  	{
			  	  "name" : "extendsInterfaces",
			  	  "type" : "input_statement",
			  	  "check" : ["ExtendsInterfaces"]
			  	},
			  	
			  ],
			  "colour" : 337,
			  
			  "previousStatement" : "InterfaceDecHead",
			  
			  "inputsInline" : true,
			  "tooltip" : "interfaceDecHead",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['arraybasetype317'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ArrayBaseType",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "TypeName",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeName"]
			  	},
			  	
			  ],
			  "colour" : 60,
			  
			  "previousStatement" : "ArrayBaseType",
			  
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
			  "colour" : 287,
			  "output" : "DeciFloatExponentPart",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['classDecHead'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ClassDecHead",
			  "message0" : "%1 class %2 %3 %4 %5 %6 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassMod", "Anno"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["TypeParams"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Super"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Interfaces"]
			  	},
			  	
			  ],
			  "colour" : 69,
			  
			  "previousStatement" : "ClassDecHead",
			  
			  "inputsInline" : true,
			  "tooltip" : "classDecHead",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['enumDecHead'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "EnumDecHead",
			  "message0" : "%1 enum %2 %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["ClassMod", "Anno"]
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : ["Id"]
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["Interfaces"]
			  	},
			  	
			  ],
			  "colour" : 125,
			  
			  "previousStatement" : "EnumDecHead",
			  
			  "inputsInline" : true,
			  "tooltip" : "enumDecHead",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['modifier18'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Modifier",
			  "message0" : "protected %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 247,
			  
			  "previousStatement" : "Modifier",
			  "nextStatement" : "Modifier",
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['arrayInit10'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "ArrayInit",
			  "message0" : "{ %1 %2 , %3 } %4 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "stmt",
			  	  "type" : "input_statement",
			  	  "check" : ["VarInit"]
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
			  "colour" : 231,
			  
			  "previousStatement" : "ArrayInit",
			  
			  "inputsInline" : true,
			  "tooltip" : "arrayInit",
			  "helpUrl" : ""
			}
 		);
	}
}
function loadBlockly(){
	 Blockly.BlockSvg.START_HAT = true;
    var workspace = Blockly.inject('blockDiv', {
            toolbox: document.getElementById('toolbox'),
            collapse: true,
            toolboxPosition: 'start', // end
            trashcan: true
    });
	 workspace.addChangeListener(Blockly.Events.disableOrphans);
}