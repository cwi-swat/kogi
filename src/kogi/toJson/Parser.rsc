module kogi::toJson::Parser

import IO;
import List;
import String;
import kogi::Block;

str toJson(list[Block] blocks) =
	("" | it + toJson(block) + "\n"| block <- blocks, Block::none() !:= block);
	
str toJson(Block block) {
return "{
'	<toJson("type", block.\type)>,
'	<toJson("message0", block.messages[0].format)>,
'	<toJson("args0", block.messages[0].args)>
'	<if(Ref::none() !:= block.output){><toJson("output", block.output)><}>
'	<if(Colour::none() !:= block.colour){><toJson("colour", block.colour)><}>
},";
//if(block.output) toJson("output","chao");

}
  //"inputsInline": true,
  //"previousStatement": null,
  //"nextStatement": null,
  //"colour": 120,
  //"tooltip": "",
  //"helpUrl": ""

str toJson(str key, value valo) =
	"\"<key>\" : <toJson(valo)>";

str toJson(str val) =
	"\"<val>\"";
	
str toJson(int val) =
	"<val>";
	
str toJson(kogi::Block::Message val) =
	"<val>";
	
str toJson(Ref val) =
	val.\type == "" ? "null" : val.\type;
	
str toJson(list[&T] val) =
	"["+("" | it + toJson(x)| x <- val, Arg::none() !:= x)[..-1] + "]";
	
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
	if(arg(name, dummy()) := val){
		return "{
		'	<toJson("name", name)>,
		'	<toJson("type", "input_dummy")>
		},";
	}
	else if(arg(name, statement()) := val){
		return "{
		'	<toJson("name", name)>,
		'	<toJson("type", "input_statement")>,
		'	<toJson("check", name)>
		},";
	}
	else if(arg(name, \value()) := val){
		return "{
		'	<toJson("name", name)>,
		'	<toJson("type", "input_value")>
		},";
	}
	else if(arg(name, \value(check=a)) := val){
		return "{
		'	<toJson("name", name)>,
		'	<toJson("type", "input_value")>
		'	<toJson("check", a)>
		},";
	}
	// spellcheck is discarted
	else if(arg(name, input(text)) := val){
		return "{
		'	<toJson("name", name)>,
		'	<toJson("type", "field_input")>,
		'	<toJson("text", "<text>")>
		},";
	}
	else{
		return "{
		'	<toJson("name", val.name)>,
		'	<toJson("type", val.\type)>,
		},";
	}
}