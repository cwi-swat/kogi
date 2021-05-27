Blockly.Blocks['Machine/machine'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Machine/machine",
				"message0": "machine %1 %2 %3 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "identificador",
						"type": "input_value",
						"check": "Id"
					},
					{
						"name": "states",
						"type": "input_statement",
						"check": "State"
					},

				],
				"colour": 246,
				"contruct": "machine",
				"previousStatement": "Machine",

				"inputsInline": true,
				"tooltip": "machine",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['Id'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Id",
				"message0": "%1 ",
				"args0": [
					{
						"name": "IdName",
						"type": "field_input",
						"text": "Id"
					},

				],
				"colour": 127,
				"output": "Id",


				"inputsInline": true,
				"tooltip": "",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['start'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Machine",
				"message0": "%1",
				"args0": [
					{
						"name": "start",
						"type": "input_statement",
						"check": "Machine"
					},

				],
				"colour": 90,



				"inputsInline": true,
				"tooltip": "",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['transitions'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "Trans",
				"message0": "on %1 %2 to %3 %4 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "on",
						"type": "input_value",
						"check": "Id"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "to",
						"type": "input_value",
						"check": "Id"
					},

				],
				"colour": 171,

				"previousStatement": "Trans",
				"nextStatement": "Trans",
				"inputsInline": true,
				"tooltip": "transitions",
				"helpUrl": ""
			}
		);
	}
}
Blockly.Blocks['state'] = {
	init: function () {
		this.jsonInit(
			{
				"type": "State",
				"message0": "state %1 %2 { %3 %4 } %5 ",
				"args0": [
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "ide",
						"type": "input_value",
						"check": "Id"
					},
					{
						"name": "",
						"type": "input_dummy"
					},
					{
						"name": "transitions",
						"type": "input_statement",
						"check": "Trans"
					},
					{
						"name": "",
						"type": "input_dummy"
					},

				],
				"colour": 5,

				"previousStatement": "State",
				"nextStatement": "State",
				"inputsInline": true,
				"tooltip": "state",
				"helpUrl": ""
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

// https://stackoverflow.com/questions/11616630/json-stringify-avoid-typeerror-converting-circular-structure-to-json/11616993
function myUpdateFunction(event) {
	// var code = Blockly.Rascal.workspaceToCode(workspace);
	// var code1 = stringify(workspace.getTopBlocks(), null, 2);
	// document.getElementById('textarea').value = code1;
}
workspace.addChangeListener(myUpdateFunction);

function xmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = Blockly.Xml.domToPrettyText(xml);
	document.getElementById('textarea').value = xml_text;
}

function plainXmlText() {
	var xml = Blockly.Xml.workspaceToDom(workspace);
	var xml_text = new XMLSerializer().serializeToString(xml);
	document.getElementById('textarea').value = xml_text;
}

function toJson() {
	var tmp = workspace.getTopBlocks();
	var code1 = stringify(tmp, null, 2);
	document.getElementById('textarea').value = code1;
}

function highlight() {
	var tmp = workspace.getTopBlocks();
	if(tmp.length > 0) {
		var i = tmp[0].id
		highlightBlock(i);
	}
}

function highlightBlock(id) {
	workspace.highlightBlock(id);
}

function toJs() {
	Blockly.JavaScript.addReservedWords('code');
	var code = Blockly.JavaScript.workspaceToCode(workspace);
	document.getElementById('textarea').value = code;
}

function showCode() {
	// Generate JavaScript code and display it.
	// Blockly.Rascal.INFINITE_LOOP_TRAP = null;
	var code = Blockly.Rascal.workspaceToCode(workspace);
	// alert(code);
	document.getElementById('textarea').value = code;

	// var tm = workspace.newBlock('start');
	// tm.initSvg();
	// tm.render();
}

// https://github.com/moll/json-stringify-safe
function stringify(obj, replacer, spaces, cycleReplacer) {
	return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)
}

function serializer(replacer, cycleReplacer) {
	var stack = [], keys = []

	if (cycleReplacer == null) cycleReplacer = function (key, value) {
		if (stack[0] === value) return "[Circular ~]"
		return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]"
	}

	return function (key, value) {
		if (stack.length > 0) {
			var thisPos = stack.indexOf(this)
			~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
			~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
			if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
		}
		else stack.push(value)

		return replacer == null ? value : replacer.call(this, key, value)
	}
}

const customStringify = function (v) {
	const cache = new Set();
	return JSON.stringify(v, function (key, value) {
	  if (typeof value === 'object' && value !== null) {
		if (cache.has(value)) {
		  // Circular reference found, discard key
		  return;
		}
		// Store value in our set
		cache.add(value);
	  }
	  return value;
	});
  };