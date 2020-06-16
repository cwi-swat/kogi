module kogi::json::Parser

import List;
import String;
import kogi::Block;

str toJson(list[Block] blocks) 
	= "[\n<( "" | it + toJson(block) + ",\n" | block <- blocks, Block::none() !:= block )[..-2]>]";
	
str toJson(Block block) 
	{
	return "{
	'  <toJson("type", block.\type)>,
	'  <toJson("message0", block.messages[0].format)>,
	'  <if (!isEmpty(block.messages[0].args)){><toJson("args0", block.messages[0].args)>,<}>
	'  <if(Colour::none() !:= block.colour){><toJson("colour", block.colour) + ","><}>
	'  <if(Ref::none() !:= block.output){><toJson("output", block.output) + ","><}>
	'  <if(Ref::none() !:= block.previous){><toJson("previousStatement", block.previous) + ","><}>
	'  <if(Ref::none() !:= block.next){><toJson("nextStatement", block.next) + ","><}>
	'  <toJson("inputsInline", block.inputsInline)>,
	'  <toJson("tooltip", block.tooltip)>,
	'  <toJson("helpUrl", block.helpUrl)>
	'}";
	}

str toJson(str key, value valo) { return "\"<key>\" : <toJson(valo)>";}

str toJson(str val) = "\"<val>\"";
	
str toJson(int val) = "<val>";

str toJson(num val) = "<val>";
	
str toJson(bool val) = "<val>";
	
str toJson(kogi::Block::Message val) = "<val>";
	
str toJson(Ref val) = val.\type == "" ? "null" : "\"<val.\type>\"";
	
str toJson(list[str] val)
	= "[<("" | it + toJson(x) + ", "| x <- val)[..-2]>]";

str toJson(list[&T] val) 
	= "[\n<("" | it + toJson(x)| x <- val, Arg::none() !:= x)[..-2]>\n]";

int toJson(rgb(str rgb)) = -3;

int toJson(hsv(int hsv)) = hsv;
	
int toJson(bky(str category)) = -3;

int toJson(Colour col) = toJson(col);

str toJson(Arg arg)
	= "	{
	  '	  <toJsonArg(arg)>
	  '	},
	  ";

str toJsonArg(arg(str name, dummy()))
	=	"<toJson("name", name)>,
		'<toJson("type", "input_dummy")>";
		
str toJsonArg(arg(name, statement(check = c)))
	=	"<toJson("name", name)>,
		'<toJson("type", "input_statement")>,
		'<if( c != [""]){><toJson("check", c)><}else{><toJson("check", c)><}>";
		
str checks(list[str] t)
	= "";		
		
str toJsonArg(arg(name, \value(check=tipo)))
	=	"<toJson("name", name)>,
		'<toJson("type", "input_value")>,
		'<toJson("check", tipo)>";
	
str toJsonArg(arg(name, \value()))
	=	"<toJson("name", name)>,
		'<toJson("type", "input_value")>";

str toJsonArg(arg(name, input(text)))
	=	"<toJson("name", name)>,
		'<toJson("type", "field_input")>,
		'<toJson("text", "<text>")>";

str toJsonArg(arg(name, number(number, range=Range::range(_,_, precision))))
	=	"<toJson("name", name)>,
		'<toJson("type", "field_number")>,
		'<toJson("value", number)>,
		'<toJson("precision", precision)>";		

str toJsonArg(arg(name, number(number)))
	=	"<toJson("name", name)>,
		'<toJson("type", "field_number")>,
		'<toJson("value", number)>";

str toJsonArg(arg(name, checkbox(checked=val)))
	=	"<toJson("name", name)>,
		'<toJson("type", "field_checkbox")>,
		'<toJson("checked", val)>";		

str toJsonArg(arg(name, checkbox()))
	=	"<toJson("name", name)>,
		'<toJson("type", "field_checkbox")>";
		
str toJsonArg(arg(name, angle(num angle)))
	=	"<toJson("name", name)>,
		'<toJson("type", "field_angle")>,
		'<toJson("angle", angle)>";
