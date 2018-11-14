module kogi::demo::syntaxDef::Syntax

start syntax SyntaxDefinition
	//=  @Foldable \layout  : Visibility vis "layout"  Sym defined "=" Prod production ";" 
	=  @Foldable \lexical : "lexical" Sym defined "=" Prod production ";" 
	|  @Foldable \keyword : "keyword" Sym defined "=" Prod production ";"
	|  @Foldable language: Start start "syntax" Sym defined "=" Prod production ";" ;
	
syntax Sym
// named non-terminals
	= nonterminal: Nonterminal nonterminal !>> "["
	| parameter: "&" Nonterminal nonterminal 
	| parametrized: Nonterminal nonterminal >> "[" "[" {Sym ","}+ parameters "]"
	| \start: "start" "[" Nonterminal nonterminal "]"
	| labeled: Sym symbol Nonterminal label
	//| labeled: Sym symbol NonterminalLabel label
// literals 
	| characterClass: Class charClass 
	| literal: StringConstant string 
	//| caseInsensitiveLiteral: CaseInsensitiveStringConstant cistring
// regular expressions
	| iter: Sym symbol "+" 
	| iterStar: Sym symbol "*" 
	| iterSep: "{" Sym symbol Sym sep "}" "+" 
	| iterStarSep: "{" Sym symbol Sym sep "}" "*" 
	| optional: Sym symbol "?" 
	| alternative: "(" Sym first "|" {Sym "|"}+ alternatives ")"
	| sequence: "(" Sym first Sym+ sequence ")"
	| empty: "(" ")"
// conditionals
	| column: Sym symbol "@" IntegerLiteral column 
	| endOfLine: Sym symbol "$" 
	| startOfLine: "^" Sym symbol
	| except:   Sym symbol "!" Nonterminal label
	//| except:   Sym symbol "!" NonterminalLabel label
	>  
	assoc ( 
	  left  ( follow:     Sym symbol  "\>\>" Sym match
	        | notFollow:  Sym symbol "!\>\>" Sym match
	        )
	  | 
	  right ( precede:    Sym match "\<\<" Sym symbol 
	        | notPrecede: Sym match "!\<\<" Sym symbol
	        )
	)
	> 
	left unequal:  Sym symbol "\\" Sym match
	;

lexical Nonterminal
	= ([A-Z] !<< [A-Z] [0-9 A-Z _ a-z]* !>> [0-9 A-Z _ a-z]);
	
syntax Prod
	= reference: ":" Nonterminal referenced
	//= reference: ":" Name referenced
	| labeled: ProdModifier* modifiers Nonterminal name ":" Sym* syms
	//| labeled: ProdModifier* modifiers Name name ":" Sym* syms 
	| unlabeled: ProdModifier* modifiers Sym* syms
	| @Foldable associativityGroup: Assoc associativity "(" Prod group ")" 
	// | TODO add bracket rule for easy readability
	> left \all   : Prod lhs "|" Prod rhs 
	> left first : Prod lhs "\>" !>> "\>" Prod rhs
	;	
	
syntax Start
	= absent: 
	| present: "start" ;	
	
//lexical NonterminalLabel
//	= [a-z] [0-9 A-Z _ a-z]* !>> [0-9 A-Z _ a-z] ;	
	
syntax Class
	= simpleCharclass: "[" Range* ranges "]" 
	| complement: "!" Class charClass 
	> left difference: Class lhs "-" Class rhs 
	> left intersection: Class lhs "&&" Class rhs 
	> left union: Class lhs "||" Class rhs 
	| bracket \bracket: "(" Class charclass ")" ;	
	
lexical StringConstant
	= @category="Constant" "\"" StringCharacter* chars "\"" ;	
	
//lexical CaseInsensitiveStringConstant
//	= @category="Constant" "\'" StringCharacter* chars "\'" ;	
	
syntax IntegerLiteral
	= /*prefer()*/ decimalIntegerLiteral: DecimalIntegerLiteral decimal 
	//| /*prefer()*/ hexIntegerLiteral: HexIntegerLiteral hex 
	//| /*prefer()*/ octalIntegerLiteral: OctalIntegerLiteral octal 
	;
	
//lexical Name
//    // Names are surrounded by non-alphabetical characters, i.e. we want longest match.
//	=  ([A-Z a-z _] !<< [A-Z _ a-z] [0-9 A-Z _ a-z]* !>> [0-9 A-Z _ a-z]) 
//	| [\\] [A-Z _ a-z] [\- 0-9 A-Z _ a-z]* !>> [\- 0-9 A-Z _ a-z] 
//	;

syntax ProdModifier
	= associativity: Assoc associativity 
	| \bracket: "bracket" 
	| \tag: Tag tag;	
	
syntax Range
	//= fromTo: Char start "-" Char end 
	= character: Char character ;
	
lexical StringCharacter
	= "\\" [\" \' \< \> \\ b f n r t] 
	//| UnicodeEscape 
	//| ![\" \' \< \> \\]
	//| [\n][\ \t \u00A0 \u1680 \u2000-\u200A \u202F \u205F \u3000]* [\'] // margin 
	;

lexical DecimalIntegerLiteral
	//= "0" !>> [0-9 A-Z _ a-z] 
	//| [1-9] [0-9]* !>> [0-9 A-Z _ a-z] ;
	= [0-9]*;

//lexical HexIntegerLiteral
//	= [0] [X x] [0-9 A-F a-f]+ !>> [0-9 A-Z _ a-z] ;
//	
//lexical OctalIntegerLiteral
//	= [0] [0-7]+ !>> [0-9 A-Z _ a-z] ;		
	
syntax Assoc
	= associative: "assoc" 
	| left: "left" 
	| nonAssociative: "non-assoc" 
	| right: "right" ;	
	
syntax Tag
	//= @Folded @category="Comment" \default   : "@" Nonterminal name TagString contents 
	= @Folded @category="Comment" empty     : "@" Nonterminal name 
	| @Folded @category="Comment" expression: "@" Nonterminal name "=" Expression expression !>> "@";
	//= @Folded @category="Comment" \default   : "@" Name name TagString contents 
	//| @Folded @category="Comment" empty     : "@" Name name 
	//| @Folded @category="Comment" expression: "@" Name name "=" Expression expression !>> "@";

lexical Char
	= @category="Constant" "\\" [\  \" \' \- \< \> \[ \\ \] b f n r t] 
	//| @category="Constant" ![\  \" \' \- \< \> \[ \\ \]] 
	//| @category="Constant" UnicodeEscape 
	;	
	
//lexical UnicodeEscape
//	  = utf16: "\\" [u] [0-9 A-F a-f] [0-9 A-F a-f] [0-9 A-F a-f] [0-9 A-F a-f] 
//    | utf32: "\\" [U] (("0" [0-9 A-F a-f]) | "10") [0-9 A-F a-f] [0-9 A-F a-f] [0-9 A-F a-f] [0-9 A-F a-f] // 24 bits 
//    | ascii: "\\" [a] [0-7] [0-9A-Fa-f]
//    ;	
   
//lexical TagString
//	= "\\" !<< "{" ( ![{}] | ("\\" [{}]) | TagString)* contents "\\" !<< "}";
    