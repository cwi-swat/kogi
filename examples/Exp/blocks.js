Blockly.Blocks['Exp/numbers'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Exp/numbers",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "lex/YqzaZNVzwz",
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
			  "colour" : 28,
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
workspace.addChangeListener(Blockly.Events.disableOrphans);

 //Storage options
//BlocklyStorage.backupOnUnload();	
//window.setTimeout(BlocklyStorage.restoreBlocks, 0);

var blockId;
function categoryHighlighter(event) {
   categories = workspace.getToolbox().getToolboxItems();
   green = "#AFD98B";
   grey = "#DDDDDD";
   orange = "#EDC174";
   
   if (event.type == Blockly.Events.SELECTED) {
	    blockId = event.newElementId;
	    if (blockId != undefined) {
		    var fieldTypes = extractFieldTypes(blockId);
           var greenTypes = fieldTypes[0];
		    var orangeTypes = fieldTypes[1];
           resetCategories(categories, grey);
		    colourCategories(greenTypes, orangeTypes, categories, green, orange);
	    } else {
		    resetCategories(categories, grey);
	    }
   } else if (event.type == Blockly.Events.TOOLBOX_ITEM_SELECT) {
	    if (blockId != undefined) {
	        selectedCategory = workspace.getToolbox().getSelectedItem();
	        if (selectedCategory != null) {
			    var fieldTypes = extractFieldTypes(blockId);
			    var greenTypes = fieldTypes[0];
			    var orangeTypes = fieldTypes[1];
			    colourCategories(greenTypes, orangeTypes, categories, green, orange);
		    }
       }
   }
};

function colourCategories(greenTypes, orangeTypes, categories, green, orange) {

   //draw orange categories
   for (var i = 0; i < orangeTypes.length; i++) {
       for (var j = 0; j < categories.length; j++) {
           if (orangeTypes[i] == categories[j].name_) categories[j].rowDiv_.style.backgroundColor = orange;
      }
   }
    
   //then green
   for (var i = 0; i < greenTypes.length; i++) {
   for (var j = 0; j < categories.length; j++) {
           if (greenTypes[i] == categories[j].name_) categories[j].rowDiv_.style.backgroundColor = green;
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
   var greentypes = [];
   var orangetypes = [];

   for (var i = 0; i < args.length; i++) {
      var conn = args[i].connection;
         if (conn != null) {
            var check = conn.check_;
            if (conn.targetConnection != null) {
			    for (var j = 0; j < check.length; j++) {
				   if (!orangetypes.includes(check[j])) orangetypes.push(check[j]);
			    }
		    } 
           else {
              for (var j = 0; j < check.length; j++) {
                 if (!greentypes.includes(check[j])) greentypes.push(check[j]);
              }
           }
        }
    }
    types.push(greentypes);
    types.push(orangetypes);
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

	