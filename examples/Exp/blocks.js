Blockly.Blocks['Exp/numbers'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Exp/numbers",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex/NayuftJopg",
				  "type" : "input_value",
				  "check" : ["IntegerLiteral"]
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
Blockly.Blocks['IntegerLiteral'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegerLiteral",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "IntegerLiteralName",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 278,
			  "output" : "IntegerLiteral",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Exp/binaryOperation'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Exp/binaryOperation",
			  "message0" : "%1 %2 %3",
			  "args0" : [
				{
				  "name" : "OpLeft",
				  "type" : "input_value",
				  "check" : ["IntegerLiteral"]
				},
				  	{
				  "name" : "Operator",
				  "type" : "field_dropdown",
				  "options" : [[ "/", "division" ],[ "+", "addition" ],[ "*", "tempName" ],[ "-", "subtraction" ],]
				},
				  	{
				  "name" : "OpRight",
				  "type" : "input_value",
				  "check" : ["IntegerLiteral"]
				},
				
			],
			  "colour" : 120,
			  "output" : "Exp",
			  
			  
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

	