Blockly.Blocks['DataSource/position'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataSource/position",
			  "message0" : "device position along %1 %2 axis %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "text",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 194,
			  "output" : "DataSource",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "position",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ImageValue'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ImageValue",
			  "message0" : "%1",
			  "args0" : [
				{
				  "type" : "field_image",
				  "src" : "https://maveme.s3.amazonaws.com/Kogi/static/sine.svg",
				  "width" : 50,
				  "height" : 30,
				  "alt" : "",
				  "flipRtl" : false
				},
				
			],
			  "colour" : 158,
			  "output" : "ImageValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ToBe/sound'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ToBe/sound",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "SoundSource",
				  "type" : "input_value",
				  "check" : ["SoundSource"]
				},
				
			],
			  "colour" : 242,
			  "output" : "ToBe",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "sound",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataProcessor/medium'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataProcessor/medium",
			  "message0" : "medium_ramp",
			  
			  "colour" : 283,
			  "output" : "DataProcessor",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "medium",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Wave/triangle'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Wave/triangle",
			  "message0" : "triangle",
			  
			  "colour" : 252,
			  "output" : "Wave",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "triangle",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataProcessor/slow'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataProcessor/slow",
			  "message0" : "slow_ramp",
			  
			  "colour" : 284,
			  "output" : "DataProcessor",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "slow",
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
			  "colour" : 285,
			  "output" : "Id",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Program/a'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Program/a",
			  "message0" : "run program %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "connections",
				  "type" : "input_statement",
				  "check" : ["Connection", "epsilon"]
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
Blockly.Blocks['DataProcessing/dataSource'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataProcessing/dataSource",
			  "message0" : "data source %1 %2 processed with %3 %4 then scaled to %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "DataSource",
				  "type" : "input_value",
				  "check" : ["DataSource"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "processing",
				  "type" : "input_statement",
				  "check" : ["DataProcessing", "epsilon"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "DataProcessing",
				  "type" : "input_statement",
				  "check" : ["DataProcessing"]
				},
				
			],
			  "colour" : 37,
			  
			  "previousStatement" : "DataProcessing",
			  "nextStatement" : "DataProcessing",
			  "inputsInline" : true,
			  "tooltip" : "dataSource",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataProcessor/nothing'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataProcessor/nothing",
			  "message0" : "do_nothing",
			  
			  "colour" : 205,
			  "output" : "DataProcessor",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "nothing",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataSource/movement'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataSource/movement",
			  "message0" : "device movement along %1 %2 axis %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "text",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 256,
			  "output" : "DataSource",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "movement",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataProcessor/fast'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataProcessor/fast",
			  "message0" : "fast_ramp",
			  
			  "colour" : 8,
			  "output" : "DataProcessor",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "fast",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Connection/sound'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Connection/sound",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "SoundConnection",
				  "type" : "input_value",
				  "check" : ["SoundConnection"]
				},
				
			],
			  "colour" : 137,
			  
			  "previousStatement" : "Connection",
			  "nextStatement" : "Connection",
			  "inputsInline" : true,
			  "tooltip" : "sound",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ControllingParameters/params'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ControllingParameters/params",
			  "message0" : "set parameters %1 %2 of sound %3 %4 to be %5 %6 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "text",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "SoundSource",
				  "type" : "input_value",
				  "check" : ["SoundSource"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "ToBe",
				  "type" : "input_value",
				  "check" : ["ToBe", "IntegerValue"]
				},
				
			],
			  "colour" : 146,
			  "output" : "ControllingParameters",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "params",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataProcessor/hump'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataProcessor/hump",
			  "message0" : "hump",
			  
			  "colour" : 206,
			  "output" : "DataProcessor",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "hump",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SoundSource/wave'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SoundSource/wave",
			  "message0" : "%1 wave %2 %3 (spectrum: %4 %5 ) %6 named %7 %8 ",
			  "args0" : [
				{
				  "name" : "Wave",
				  "type" : "input_value",
				  "check" : ["Wave"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "type" : "field_image",
				  "src" : "https://maveme.s3.amazonaws.com/Kogi/static/sine.svg",
				  "width" : 50,
				  "height" : 30,
				  "alt" : "",
				  "flipRtl" : false
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "type" : "field_image",
				  "src" : "https://maveme.s3.amazonaws.com/Kogi/static/sine.svg",
				  "width" : 50,
				  "height" : 30,
				  "alt" : "",
				  "flipRtl" : false
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
				  "name" : "sound",
				  "type" : "field_input",
				  "text" : ""
				},
				
			],
			  "colour" : 40,
			  "output" : "SoundSource",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "wave",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Filter/band'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Filter/band",
			  "message0" : "bandpass",
			  
			  "colour" : 276,
			  "output" : "Filter",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "band",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['PassingTime/wait'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "PassingTime/wait",
			  "message0" : "wait %1 %2 seconds %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "num",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 327,
			  "output" : "PassingTime",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "wait",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataProcessor/hard'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataProcessor/hard",
			  "message0" : "hard_cutoff",
			  
			  "colour" : 207,
			  "output" : "DataProcessor",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "hard",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Connection/control'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Connection/control",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "ControllingParameters",
				  "type" : "input_value",
				  "check" : ["ControllingParameters"]
				},
				
			],
			  "colour" : 264,
			  
			  "previousStatement" : "Connection",
			  "nextStatement" : "Connection",
			  "inputsInline" : true,
			  "tooltip" : "control",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataProcessing/range'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataProcessing/range",
			  "message0" : "range %1 %2 to %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "min",
				  "type" : "field_number",
				  "value" : 0
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "max",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 304,
			  
			  "previousStatement" : "DataProcessing",
			  "nextStatement" : "DataProcessing",
			  "inputsInline" : true,
			  "tooltip" : "range",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SoundConnection/sound'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SoundConnection/sound",
			  "message0" : "connect %1 %2 to %3 %4 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "SoundSource",
				  "type" : "input_value",
				  "check" : ["SoundSource"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "DataSource",
				  "type" : "input_value",
				  "check" : ["DataSource"]
				},
				
			],
			  "colour" : 208,
			  "output" : "SoundConnection",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "sound",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataSource/rotation'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataSource/rotation",
			  "message0" : "device rotation along %1 %2 axis %3 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "text",
				  "type" : "field_input",
				  "text" : ""
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 120,
			  "output" : "DataSource",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "rotation",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Filter/high'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Filter/high",
			  "message0" : "highpass",
			  
			  "colour" : 158,
			  "output" : "Filter",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "high",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ToBe/dat'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ToBe/dat",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "DataProcessing",
				  "type" : "input_statement",
				  "check" : ["DataProcessing"]
				},
				
			],
			  "colour" : 125,
			  "output" : "ToBe",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "dat",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Wave/sine'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Wave/sine",
			  "message0" : "sine",
			  
			  "colour" : 114,
			  "output" : "Wave",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "sine",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Filter/low'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Filter/low",
			  "message0" : "lowpass",
			  
			  "colour" : 318,
			  "output" : "Filter",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "low",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Connection/passing'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Connection/passing",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "PassingTime",
				  "type" : "input_value",
				  "check" : ["PassingTime"]
				},
				
			],
			  "colour" : 343,
			  
			  "previousStatement" : "Connection",
			  "nextStatement" : "Connection",
			  "inputsInline" : true,
			  "tooltip" : "passing",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Wave/sawtooth'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Wave/sawtooth",
			  "message0" : "sawtooth",
			  
			  "colour" : 83,
			  "output" : "Wave",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "sawtooth",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataSource/speaker'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataSource/speaker",
			  "message0" : "speaker",
			  
			  "colour" : 263,
			  "output" : "DataSource",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "speaker",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['IntegerValue/intf'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "IntegerValue/intf",
			  "message0" : "%1",
			  "args0" : [
				{
				  "name" : "IntegerValue",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 56,
			  "output" : "IntegerValue",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataSource/slider'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataSource/slider",
			  "message0" : "slider_with_label %1 %2 ",
			  "args0" : [
				{
				  "name" : "",
				  "type" : "input_dummy"
				},
				  	{
				  "name" : "text",
				  "type" : "field_input",
				  "text" : ""
				},
				
			],
			  "colour" : 275,
			  "output" : "DataSource",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "slider",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['SoundSource/filtr'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "SoundSource/filtr",
			  "message0" : "%1 filter %2  (spectrum: %3 %4 ) %5 named %6 %7 ",
			  "args0" : [
				{
				  "name" : "Filter",
				  "type" : "input_value",
				  "check" : ["Filter"]
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
				  "type" : "field_image",
				  "src" : "https://maveme.s3.amazonaws.com/Kogi/static/sine.svg",
				  "width" : 50,
				  "height" : 30,
				  "alt" : "",
				  "flipRtl" : false
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
				  "name" : "sound",
				  "type" : "field_input",
				  "text" : ""
				},
				
			],
			  "colour" : 102,
			  "output" : "SoundSource",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "filtr",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataProcessor/reverse'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataProcessor/reverse",
			  "message0" : "reverse",
			  
			  "colour" : 289,
			  "output" : "DataProcessor",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "reverse",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['Wave/square'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "Wave/square",
			  "message0" : "square",
			  
			  "colour" : 88,
			  "output" : "Wave",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "square",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataProcessing/processor'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataProcessing/processor",
			  "message0" : "%1 image %2 ",
			  "args0" : [
				{
				  "name" : "DataProcessor",
				  "type" : "input_value",
				  "check" : ["DataProcessor"]
				},
				  	{
				  "name" : "",
				  "type" : "input_dummy"
				},
				
			],
			  "colour" : 227,
			  
			  "previousStatement" : "DataProcessing",
			  "nextStatement" : "DataProcessing",
			  "inputsInline" : true,
			  "tooltip" : "processor",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['DataProcessor/rotate'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "DataProcessor/rotate",
			  "message0" : "rotate",
			  
			  "colour" : 190,
			  "output" : "DataProcessor",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "rotate",
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

	