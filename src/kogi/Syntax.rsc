module kogi::Syntax

start syntax Kogi = Workspace workspace Toolbar toolbar;

syntax Workspace 
	= String language DecimalIntegerLiteral height DecimalIntegerLiteral width;
	
	
//syntax Toolbar 
//	= Category* categories
//	| Block* blocks
//	;
//	
//syntax Category
//	= Block+ blocks
//	;
	
start syntax Block 
 = String name Input+ inputs InputType inputsType Connection connection String tooltip String helpURL Type output Color color;


// Value and statement inputs have the same syntax but different semantic and GUI representation
syntax Input
= generic: String inputType String name FieldAlignment fieldAlignment Field+ fields Type type
| dummy: FieldAlignment fieldAlignment Field+ fields
;

syntax Field
	= text: String text
	| textInput: String value String name
	| numeric: DecimalIntegerLiteral value String name "min" DecimalIntegerLiteral min "max" DecimalIntegerLiteral max "precision" DecimalIntegerLiteral precision
	| angle: DecimalIntegerLiteral initValue String name
	| dropDown: Option+ options String name
	| checkbox: Bool value String name
	| color: Color color String name
	| variable: String variable String name
	| image: String url DecimalIntegerLiteral width DecimalIntegerLiteral height String alt
	;
	
syntax Option
	= textOption: String value String optionName
	| imageOption: String url DecimalIntegerLiteral width DecimalIntegerLiteral height String alt String optionName
	;

syntax Types
	= \any: "any"
	| \bool: "boolean"
	| \num: "numeric"
	| \str: "string"
	| arr: "array"
	| other: "other" String newType
	| anyOf: "anyOf" Type+ types
	;

syntax Connection
	= noConn: "empty"
	| output: "output"
	| top: "top"
	| bottom: "bottom"
	| both: "both"
	; 

lexical FieldAlignment
	= left: "LEFT"
	| right: "RIGHT"
	| center :"CENTER" 
	;
	
lexical InputType 
	= external: "external"
	| inline: "inline"
	| auto: "auto" 
	;

lexical DecimalIntegerLiteral
	= "0" !>> [0-9 A-Z _ a-z] 
	| [1-9] [0-9]* !>> [0-9 A-Z _ a-z] 
	;
	
lexical Id  
	= [a-z][a-z0-9]* !>> [a-z0-9]
	;

lexical String = "\"" ![\"]*  "\"";

lexical Bool  
	= "false"
	| "true"
	;
	
// HSV hue value (0 to 360) or #RRGGBB string	
lexical Color 
	= String rrggbb
	| DecimalIntegerLiteral hue
	;
	
lexical Whitespace
  = [\t-\n\r\ ]
  ;
  
lexical CommentChar
  = ![*]
  | [*] !>> [/]
  ;

lexical Comment
  = @category="Comment" "/*" CommentChar* "*/"
  | @category="Comment" "//" ![\n]*  $
  ;

lexical LAYOUT
  = Whitespace
  | Comment
  ;

layout LAYOUTLIST
  = LAYOUT*
  !>> [\t\ \n]
  !>> "/*"
  !>> "//" ;