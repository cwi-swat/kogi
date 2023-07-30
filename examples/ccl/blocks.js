Blockly.Blocks['CPU/vcpus'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "CPU/vcpus",
			  "message0" : "CPU: %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "cpu",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 276,
			  "output" : "CPU",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "vcpus",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Resources/resources'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Resources/resources",
			  "message0" : "resources %1 { %2 %3 } %4 ",
			  "args0" : [
				{
				  "name" : "a",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "resource",
				  "type" : "input_statement",
				  "check" : ["Instance", "epsilon"]
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
Blockly.Blocks['Instance/instance'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Instance/instance",
			  "message0" : "Instance  %1 %2 %3 %4 %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "Image",
				  "type" : "input_value",
				  "check" : ["Image"]
				},
				  	{
				  "name" : "CPU",
				  "type" : "input_value",
				  "check" : ["CPU"]
				},
				  	{
				  "name" : "Memory",
				  "type" : "input_value",
				  "check" : ["Memory"]
				},
				  	{
				  "name" : "Storage",
				  "type" : "input_value",
				  "check" : ["Storage"]
				},
				  	{
				  "name" : "IPV6",
				  "type" : "input_value",
				  "check" : ["IPV6"]
				},
				
			],
			  "colour" : 102,
			  
			  "previousStatement" : "Instance",
			  "nextStatement" : "Instance",
			  "inputsInline" : true,
			  "tooltip" : "instance",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Memory/memory'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Memory/memory",
			  "message0" : "memory: %1 %2 GB %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "mem",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 338,
			  "output" : "Memory",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "memory",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IPV6/ipv6'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IPV6/ipv6",
			  "message0" : "IPV6: %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ipv6",
				  "type" : "field_checkbox",
				  "checked" : false
				},
				
			],
			  "colour" : 50,
			  "output" : "IPV6",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "ipv6",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['BooleanValue/true'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "BooleanValue/true",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "StringValue",
				  "type" : "field_checkbox",
				  "checked" : false
				},
				
			],
			  "colour" : 68,
			  "output" : "BooleanValue",
			  
			  
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
			  "colour" : 118,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Storage/storage'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Storage/storage",
			  "message0" : "Storage: %1 %2 size:  %3 %4 GB %5 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "StorageType",
				  "type" : "input_value",
				  "check" : ["StorageType"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "size",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 256,
			  "output" : "Storage",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "storage",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegerValue/number'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegerValue/number",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "IntegerValue",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 249,
			  "output" : "IntegerValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Image/simpleDropdown'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Image/simpleDropdown",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Item",
				  "type" : "field_dropdown",
				  "options" : [[ "Ubuntu Server", "ZWDGAsegWO" ],[ "Amazon Linux", "eDcBekyntj" ],[ "Red Hat Enterprise", "xGApSTmpGU" ],[ "Windows Server2019", "HjhvWLHbox" ],]
				},
				
			],
			  "colour" : 120,
			  "output" : "Image",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['StorageType/simpleDropdown'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "StorageType/simpleDropdown",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "Item",
				  "type" : "field_dropdown",
				  "options" : [[ "SSD", "lIFarHafWY" ],[ "EBS", "ypxVLVlYkY" ],]
				},
				
			],
			  "colour" : 120,
			  "output" : "StorageType",
			  
			  
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
            var check_ = conn.check;
            if (conn.targetConnection != null) {
			    for (var j = 0; j < check_.length; j++) {
				   if (!orangetypes.includes(check_[j])) orangetypes.push(check_[j]);
			    }
		    } 
           else {
              for (var j = 0; j < check_.length; j++) {
                 if (!greentypes.includes(check_[j])) greentypes.push(check_[j]);
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

	