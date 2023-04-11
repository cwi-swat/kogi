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
			  "colour" : 339,
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
			  "colour" : 304,
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
			  "colour" : 281,
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
			  
			  "colour" : 75,
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
			  
			  "colour" : 261,
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
			  
			  "colour" : 132,
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
			  "colour" : 308,
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
			  "colour" : 234,
			  
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
			  
			  "colour" : 342,
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
			  "colour" : 60,
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
			  
			  "colour" : 282,
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
			  "colour" : 177,
			  
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
				  "check" : ["ToBe"]
				},
				
			],
			  "colour" : 209,
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
			  
			  "colour" : 76,
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
			  "colour" : 248,
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
			  
			  "colour" : 237,
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
			  "colour" : 213,
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
			  
			  "colour" : 302,
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
			  "colour" : 332,
			  
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
			  "colour" : 342,
			  
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
			  "colour" : 14,
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
			  "colour" : 105,
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
			  
			  "colour" : 308,
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
			  "colour" : 126,
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
			  
			  "colour" : 272,
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
			  
			  "colour" : 270,
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
			  "colour" : 212,
			  
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
			  
			  "colour" : 63,
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
			  
			  "colour" : 343,
			  "output" : "DataSource",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "speaker",
			  "helpUrl" : ""
			}
		);
	}
}
Blockly.Blocks['ToBe/number'] = {
	init: function() {
		this.jsonInit(
			{
			  "type" : "ToBe/number",
			  "message0" : "%1 ",
			  "args0" : [
				{
				  "name" : "num",
				  "type" : "field_number",
				  "value" : 0
				},
				
			],
			  "colour" : 350,
			  "output" : "ToBe",
			  
			  
			  "inputsInline" : true,
			  "tooltip" : "number",
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
			  "colour" : 277,
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
			  "colour" : 102,
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
			  "colour" : 274,
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
			  
			  "colour" : 307,
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
			  
			  "colour" : 299,
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
			  "colour" : 144,
			  
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
			  
			  "colour" : 318,
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
	

 //Storage options
BlocklyStorage.backupOnUnload();	
window.setTimeout(BlocklyStorage.restoreBlocks, 0);
function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}
	