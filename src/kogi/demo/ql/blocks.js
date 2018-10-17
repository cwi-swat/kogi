Blockly.Blocks['true'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "true %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 89,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "true",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['money'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Money",
			  	  "type" : "input_statement",
			  	  "check" : "Money"
			  	},
			  	
			  ],
			  "colour" : 187,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "money",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['ifThenElse'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Question",
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
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Question",
			  	  "type" : "input_statement",
			  	  "check" : "Question"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Question",
			  	  "type" : "input_statement",
			  	  "check" : "Question"
			  	},
			  	
			  ],
			  "colour" : 222,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "ifThenElse",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['ifThen'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Question",
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
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Question",
			  	  "type" : "input_statement",
			  	  "check" : "Question"
			  	},
			  	
			  ],
			  "colour" : 351,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "ifThen",
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
			  "message0" : "%1 / %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 108,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "div",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['computed'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Question",
			  "message0" : "%1 %2 : %3 %4 = %5 %6 ",
			  "args0" : [
			  	{
			  	  "name" : "Label",
			  	  "type" : "input_statement",
			  	  "check" : "Label"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : "Id"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "QType",
			  	  "type" : "input_statement",
			  	  "check" : "QType"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 199,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "computed",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['form'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Form",
			  "message0" : "form %1 %2 { %3 %4 } %5 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : "Id"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "questions",
			  	  "type" : "input_statement",
			  	  "check" : "Question"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 229,
			  
			  "previousStatement" : "Form",
			  
			  "inputsInline" : true,
			  "tooltip" : "form",
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
			  "message0" : "%1 || %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 67,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "or",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['integer'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Integer",
			  	  "type" : "input_statement",
			  	  "check" : "Integer"
			  	},
			  	
			  ],
			  "colour" : 342,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "integer",
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
			  "message0" : "%1 && %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 353,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "and",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['var'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : "Id"
			  	},
			  	
			  ],
			  "colour" : 78,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "var",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['add'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 + %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 291,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "add",
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
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 295,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "lt",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['false'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "false %1 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 140,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "false",
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
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 213,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "eq",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['question'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Question",
			  "message0" : "%1 %2 : %3 %4 ",
			  "args0" : [
			  	{
			  	  "name" : "Label",
			  	  "type" : "input_statement",
			  	  "check" : "Label"
			  	},
			  	  	{
			  	  "name" : "Id",
			  	  "type" : "input_statement",
			  	  "check" : "Id"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "QType",
			  	  "type" : "input_statement",
			  	  "check" : "QType"
			  	},
			  	
			  ],
			  "colour" : 104,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "question",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['neq'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 != %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 221,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "neq",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['geq'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 >= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 300,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "geq",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['string'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 ",
			  "args0" : [
			  	{
			  	  "name" : "String",
			  	  "type" : "input_statement",
			  	  "check" : "String"
			  	},
			  	
			  ],
			  "colour" : 213,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "string",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['start'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Form",
			  "message0" : "%1",
			  "args0" : [
			  	{
			  	  "name" : "start",
			  	  "type" : "input_statement",
			  	  "check" : "Form"
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
Blockly.Blocks['sub'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 - %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 266,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "sub",
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
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 197,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "gt",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['leq'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Expr",
			  "message0" : "%1 <= %2 %3 ",
			  "args0" : [
			  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 349,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "leq",
			  "helpUrl" : ""
			}
 		);
	}
}
Blockly.Blocks['group'] = {
    init: function() {
        this.jsonInit(
			{
			  "type" : "Question",
			  "message0" : "{ %1 %2 } %3 ",
			  "args0" : [
			  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "questions",
			  	  "type" : "input_statement",
			  	  "check" : "Question"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	
			  ],
			  "colour" : 249,
			  
			  "previousStatement" : "Question",
			  "nextStatement" : "Question",
			  "inputsInline" : true,
			  "tooltip" : "group",
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
			  	  "check" : "Expr"
			  	},
			  	  	{
			  	  "name" : "",
			  	  "type" : "input_dummy"
			  	},
			  	  	{
			  	  "name" : "Expr",
			  	  "type" : "input_statement",
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 234,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "mul",
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
			  	  "check" : "Expr"
			  	},
			  	
			  ],
			  "colour" : 140,
			  
			  "previousStatement" : "Expr",
			  
			  "inputsInline" : true,
			  "tooltip" : "not",
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