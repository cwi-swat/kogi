module kogi::toJson::Parser

import IO;
import List;
import String;
import kogi::Block;

str toJson(list[Block] blocks) =
	"[\n<("" | it + toJson(block) + ",\n"| block <- blocks, Block::none() !:= block)[..-2]>]";
	
str toJson(Block block) =
"	{
'		<toJson("type", block.\type)>,
'		<toJson("message0", block.messages[0].format)>,
'		<toJson("args0", block.messages[0].args)>,
'		<if(Colour::none() !:= block.colour){><toJson("colour", block.colour) + ","><}>
'		<if(Ref::none() !:= block.output){><toJson("output", block.output) + ","><}>
'		<if(Ref::none() !:= block.previous){><toJson("previousStatement", block.previous) + ","><}>
'		<if(Ref::none() !:= block.next){><toJson("nextStatement", block.next) + ","><}>
'		<toJson("inputsInline", block.inputsInline)>,
'		<toJson("tooltip", block.tooltip)>,
'		<toJson("helpUrl", block.helpUrl)>
'	}";

str toJson(str key, value valo) =
	"\"<key>\" : <toJson(valo)>";

str toJson(str val) =
	"\"<val>\"";
	
str toJson(int val) =
	"<val>";
	
str toJson(bool val) =
	"<val>";
	
str toJson(kogi::Block::Message val) =
	"<val>";
	
str toJson(Ref val) =
	val.\type == "" ? "null" : val.\type;
	
str toJson(list[&T] val) =
	"[\n<("" | it + toJson(x)| x <- val, Arg::none() !:= x)[..-2]>\n]";
	
int toJson(Colour val) {
	if(rgb(rgb) := val){
		return -3;
	}
	else if(hsv(hsv):= val){
		return hsv;
	}
	else if(bky(category):= val){
		return -3;
	}
}
	
str toJson(Arg val) {
	result = "	{\n"; 
	if(arg(name, dummy()) := val){
		result +=
		"		<toJson("name", name)>,
		'		<toJson("type", "input_dummy")>";
	}
	else if(arg(name, statement()) := val){
		result +=
		"		<toJson("name", name)>,
		'		<toJson("type", "input_statement")>,
		'		<toJson("check", name)>";
	}
	else if(arg(name, \value()) := val){
		result +=
		"		<toJson("name", name)>,
		'		<toJson("type", "input_value")>";
	}
	else if(arg(name, \value(check=a)) := val){
		result +=
		"		<toJson("name", name)>,
		'		<toJson("type", "input_value")>
		'		<toJson("check", a)>";
	}
	// spellcheck is discarted
	else if(arg(name, input(text)) := val){
		result +=
		"	<toJson("name", name)>,
		'	<toJson("type", "field_input")>,
		'	<toJson("text", "<text>")>";
	}
	else{
		result +=
		"	<toJson("name", val.name)>,
		'	<toJson("type", val.\type)>,";
	}
	result += "\n	},\n";
	return result;
}