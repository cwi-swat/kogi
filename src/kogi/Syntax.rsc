module kogi::Syntax

//start syntax Kogi = Workspace workspace Toolbar toolbar;

syntax Workspace 
	= @Foldable "{" "name" ":" String language "," "dimensions" ":" DecimalIntegerLiteral height "X" DecimalIntegerLiteral width "}";
		
//syntax Toolbar 
//	= Category* categories
//	| Block* blocks
//	;
//	
//syntax Category
//	= Block+ blocks
//	;

start syntax Kogi
	= "{" "workspace" ":" Workspace langName ","  "blocks" ":" "[" {Block ","}+ blocks  "]" "}"
	;

//"output" ":" Type
syntax Block 
 = de: Id name ":" Block block
 | @Foldable def: "{" "name" ":" String name "," "inputBlocks" ":" "[" {Input ","}+ inputs "]" "," InputType inputType "," Connection connection "," "tooltip" ":" String tooltip "," "helpurl" ":" String helpURL "," Type output "," Color color "}" 
 ;


// Value and statement inputs have the same syntax but different semantic and GUI representation
// "type" ":" Type type
syntax Input
= @Foldable generic: "{" "type" ":" String inputType "," "name" ":" String name "," FieldAlignment fieldAlignment "," "fields" ":" "[" {Field ","}+ fields "]" "," Type type "}"
| @Foldable dummy: "{" FieldAlignment fieldAlignment "," "fields" ":" "[" {Field ","}+ fields "]" "}"
;


//syntax KogiValue
//	= Id name ":" KogiValue
//	| numeric: DecimalIntegerLiteral num 
//  | Color
//	;

syntax Field
	= template: "{" Field field "}"
	| text: "text" ":" String text
	| textInput: "value" ":" String value "," "name" ":" String name
	| numeric: "value" ":" DecimalIntegerLiteral value "," "name" ":" String name "," "min" ":" DecimalIntegerLiteral min "," "max" ":" DecimalIntegerLiteral max "," "precision" ":" DecimalIntegerLiteral precision
	| angle: "initValue" ":" DecimalIntegerLiteral initValue "," "name" ":" String name
	| dropDown: "options" ":" "[" {Option ","}+ options "]" "," "name" ":" String name
	| checkbox: "value" ":" Bool value "," "name" ":"  String name
	| color: Color color "," "name" ":"  String name
	| variable: "variable" ":" String variable "," "name" ":" String name
	| image: "url" ":" String url "," "width" ":"  DecimalIntegerLiteral width "," "height" ":" DecimalIntegerLiteral height "," "alt" ":" String alt
	;
	
syntax Option
	= template: "{" Option "}"
	| textOption: "value" ":" String value "," "optionName" ":"  String optionName
	| imageOption: "url" ":" String url "," "width" ":" DecimalIntegerLiteral width "," "height" ":" DecimalIntegerLiteral height "," "alt" ":" String alt "," "optionName" ":"  String optionName
	;

syntax Type
	= Id name ":" Type val
	| \any: "any"
	| \bool: "boolean"
	| \num: "numeric"
	| \str: "string"
	| arr: "array"
	| other: "other" String newType
	| anyOf: "anyOf" Type+ types
	;

syntax Connection
	= "connection" ":" Connection
	| noConn: "empty"
	| output: "output"
	| \top: "top"
	| \bottom: "bottom"
	| both: "both"
	; 

syntax FieldAlignment
	= def: "alignment" ":" FieldAlignment val
	| \left: "left"
	| \right: "right"
	| \center: "center" 
	;
	
syntax InputType 
	= "inputType" ":" InputType
	| external: "external"
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
syntax Color 
	= "color" ":" Color color
	| String rrggbb
	| DecimalIntegerLiteral hue
	;
	
lexical Whitespace
  = [\ \t-\n\r\ ]
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
//
//layout Layout = WhiteSpaceAndComment* !>> [\ \t\n\r#];
//
//lexical WhiteSpaceAndComment 
//	= [\ \t\n\r]


layout LAYOUTLIST
  = LAYOUT*
  !>> [\t\ \n\r]
  !>> "/*"
  !>> "//" ;
  
 keyword KW
 	= "new"
	| "kogi"
	| "Language"
 	;