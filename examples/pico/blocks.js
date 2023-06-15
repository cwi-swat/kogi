Blockly.Blocks['Declarations/declarations'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Declarations/declarations",
			  "message0" : "declare %1 %2 ; %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "decls",
				  "type" : "input_statement",
				  "check" : ["Declaration", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 278,
			  "output" : "Declarations",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "declarations",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Ttype/string'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Ttype/string",
			  "message0" : "string",
			  
			  "colour" : 238,
			  "output" : "Ttype",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "string",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/whileStat'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/whileStat",
			  "message0" : "while %1 %2 do %3 %4 od %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression", "Id", "String", "Natural"]
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
			  "colour" : 345,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "whileStat",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Program/program'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Program/program",
			  "message0" : "begin %1 %2 %3 end %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Declarations",
				  "type" : "input_value",
				  "check" : ["Declarations"]
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
			  "colour" : 120,
			  
			  
			  
			  "inputsInline" : false,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Statement/ifElseStat'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Statement/ifElseStat",
			  "message0" : "if %1 %2 then %3 %4 else %5 %6 fi %7 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Expression",
				  "type" : "input_value",
				  "check" : ["Expression", "Id", "String", "Natural"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "thenPart",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "elsePart",
				  "type" : "input_statement",
				  "check" : ["Statement", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 257,
			  
			  "previousStatement" : "Statement",
			  "nextStatement" : "Statement",
			  "inputsInline" : true,
			  "tooltip" : "ifElseStat",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Ttype/natural'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Ttype/natural",
			  "message0" : "natural",
			  
			  "colour" : 2,
			  "output" : "Ttype",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "natural",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Id/id'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Id/id",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Id",
				  "type" : "field_input",
				  "text" : "variable"
				},
				
			],
			  "colour" : 226,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['String/string'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "String/string",
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
				},
				
			],
			  "colour" : 176,
			  "output" : "String",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Natural/natural'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Natural/natural",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "NaturalName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 140,
			  "output" : "Natural",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
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
				  "check" : ["Natural"]
				},
				  	{
				  "name" : "Operator",
				  "type" : "field_dropdown",
				  "options" : [[ "||", "conc" ],[ ":=", "asgStat" ],[ "+", "add" ],[ "-", "sub" ],[ ":", "decl" ],]
				},
				  	{
				  "name" : "OpRight",
				  "type" : "input_value",
				  "check" : ["Natural"]
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

	