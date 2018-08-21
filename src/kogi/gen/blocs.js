Blockly.Blocks['Exp8'] = {
    init: function() {
        this.jsonInit(
		{"output":null,"tooltip":"","message0":"%1 * %2 %3 ","colour":120,"helpurl":"","args0":[{"name":"Exp","type":"input_value"},{"type":"input_dummy"},{"name":"Exp","type":"input_value"}],"type":"Exp8"}
 		);
	}
}
	Blockly.Blocks['Exp9'] = {
    init: function() {
        this.jsonInit(
		{"output":null,"tooltip":"","message0":"%1 + %2 %3 ","colour":120,"helpurl":"","args0":[{"name":"Exp","type":"input_value"},{"type":"input_dummy"},{"name":"Exp","type":"input_value"}],"type":"Exp9"}
 		);
	}
}
	Blockly.Blocks['Exp5'] = {
    init: function() {
        this.jsonInit(
		{"output":null,"tooltip":"","message0":"( %1 %2 ) %3 ","colour":120,"helpurl":"","args0":[{"type":"input_dummy"},{"name":"Exp","type":"input_value"},{"type":"input_dummy"}],"type":"Exp5"}
 		);
	}
}
	Blockly.Blocks['IntegerLiteral7'] = {
    init: function() {
        this.jsonInit(
		{"output":null,"tooltip":"","message0":"","colour":120,"helpurl":"","args0":[],"type":"IntegerLiteral7"}
 		);
	}
}
	Blockly.Blocks['Exp6'] = {
    init: function() {
        this.jsonInit(
		{"output":null,"tooltip":"","message0":"","colour":120,"helpurl":"","args0":[],"type":"Exp6"}
 		);
	}
}
	Blockly.Blocks['Exp'] = {
    init: function() {
        this.jsonInit(
		{"tooltip":"","message0":"Exp %1","colour":10,"helpurl":"","args0":[{"name":"NAME","type":"input_value"}],"type":"Exp"}
 		);
	}
}
	
function loadBlockly(){
    var workspace = Blockly.inject('example', {
            toolbox: document.getElementById('toolbox'),
            collapse: true,
            toolboxPosition: 'start', // end
            trashcan: true
    });
}
