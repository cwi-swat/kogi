Blockly.Blocks['declarations'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Declarations",
					"message0" : "declare %1 %2 ; %3 ",
					"args0" : [
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "decls",
							"type" : "input_statement",
							"check" : "Declaration"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						}
					],
					"colour" : 35,
					
					"previousStatement" : "Declarations",
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['natural'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Type",
					"message0" : "natural %1 ",
					"args0" : [
						{
							"name" : "",
							"type" : "input_dummy"
						}
					],
					"colour" : 352,
					
					"previousStatement" : "Type",
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['conc'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Expression",
					"message0" : "%1 || %2 %3 ",
					"args0" : [
						{
							"name" : "Expression",
							"type" : "input_statement",
							"check" : "Expression"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "Expression",
							"type" : "input_statement",
							"check" : "Expression"
						}
					],
					"colour" : 163,
					
					"previousStatement" : "Expression",
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['start'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Program",
					"message0" : "%1",
					"args0" : [
						{
							"name" : "start",
							"type" : "input_statement",
							"check" : "Program"
						}
					],
					"colour" : 90,
					
					
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['Natural'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Natural",
					"message0" : "%1 ",
					"args0" : [
						{
						"name" : "NaturalName",
						"type" : "field_input",
						"text" : "Natural"
						}
					],
					"colour" : 15,
					"output" : "Natural",
					
					
					"inputsInline" : false,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['decl'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Declaration",
					"message0" : "%1 : %2 %3 ",
					"args0" : [
						{
							"name" : "id",
							"type" : "input_value"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "Type",
							"type" : "input_statement",
							"check" : "Type"
						}
					],
					"colour" : 348,
					
					"previousStatement" : "Declaration",
					"nextStatement" : "Declaration",
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
					"message0" : "\" %1 %2 \" %3 ",
					"args0" : [
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
						"name" : "StringName",
						"type" : "field_input",
						"text" : "String"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						}
					],
					"colour" : 322,
					"output" : "String",
					
					
					"inputsInline" : false,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['asgStat'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Statement",
					"message0" : "%1 := %2 %3 ",
					"args0" : [
						{
							"name" : "var",
							"type" : "input_value"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "Expression",
							"type" : "input_statement",
							"check" : "Expression"
						}
					],
					"colour" : 320,
					
					"previousStatement" : "Statement",
					"nextStatement" : "Statement",
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['whileStat'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Statement",
					"message0" : "while %1 %2 do %3 %4 od %5 ",
					"args0" : [
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "Expression",
							"type" : "input_statement",
							"check" : "Expression"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "body",
							"type" : "input_statement",
							"check" : "Statement"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						}
					],
					"colour" : 229,
					
					"previousStatement" : "Statement",
					"nextStatement" : "Statement",
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['WhitespaceAndComment'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "WhitespaceAndComment",
					"message0" : "%1 ",
					"args0" : [
						{
						"name" : "WhitespaceAndCommentName",
						"type" : "field_input",
						"text" : "WhitespaceAndComment"
						}
					],
					"colour" : 61,
					"output" : "WhitespaceAndComment",
					
					
					"inputsInline" : false,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['strCon'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Expression",
					"message0" : "%1 ",
					"args0" : [
						{
							"name" : "string",
							"type" : "input_value"
						}
					],
					"colour" : 203,
					
					"previousStatement" : "Expression",
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['add'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Expression",
					"message0" : "%1 + %2 %3 ",
					"args0" : [
						{
							"name" : "Expression",
							"type" : "input_statement",
							"check" : "Expression"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "Expression",
							"type" : "input_statement",
							"check" : "Expression"
						}
					],
					"colour" : 271,
					
					"previousStatement" : "Expression",
					
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
					"type" : "Expression",
					"message0" : "%1 ",
					"args0" : [
						{
							"name" : "name",
							"type" : "input_value"
						}
					],
					"colour" : 171,
					
					"previousStatement" : "Expression",
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['string'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Type",
					"message0" : "string %1 ",
					"args0" : [
						{
							"name" : "",
							"type" : "input_dummy"
						}
					],
					"colour" : 203,
					
					"previousStatement" : "Type",
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['natCon'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Expression",
					"message0" : "%1 ",
					"args0" : [
						{
							"name" : "natcon",
							"type" : "input_value"
						}
					],
					"colour" : 283,
					
					"previousStatement" : "Expression",
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['program'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Program",
					"message0" : "begin %1 %2 %3 end %4 ",
					"args0" : [
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "Declarations",
							"type" : "input_statement",
							"check" : "Declarations"
						},
						{
							"name" : "body",
							"type" : "input_statement",
							"check" : "Statement"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						}
					],
					"colour" : 116,
					
					"previousStatement" : "Program",
					
					"inputsInline" : true,
					"tooltip" : "",
					"helpUrl" : ""
				}
 		);
	}
}
Blockly.Blocks['ifElseStat'] = {
    init: function() {
        this.jsonInit(
				{
					"type" : "Statement",
					"message0" : "if %1 %2 then %3 %4 else %5 %6 fi %7 ",
					"args0" : [
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "Expression",
							"type" : "input_statement",
							"check" : "Expression"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "thenPart",
							"type" : "input_statement",
							"check" : "Statement"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "elsePart",
							"type" : "input_statement",
							"check" : "Statement"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						}
					],
					"colour" : 26,
					
					"previousStatement" : "Statement",
					"nextStatement" : "Statement",
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
					"message0" : "%1 %2 ",
					"args0" : [
						{
						"name" : "IdName",
						"type" : "field_input",
						"text" : "Id"
						}
					],
					"colour" : 282,
					"output" : "Id",
					
					
					"inputsInline" : false,
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
					"type" : "Expression",
					"message0" : "%1 - %2 %3 ",
					"args0" : [
						{
							"name" : "Expression",
							"type" : "input_statement",
							"check" : "Expression"
						},
						{
							"name" : "",
							"type" : "input_dummy"
						},
						{
							"name" : "Expression",
							"type" : "input_statement",
							"check" : "Expression"
						}
					],
					"colour" : 312,
					
					"previousStatement" : "Expression",
					
					"inputsInline" : true,
					"tooltip" : "",
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