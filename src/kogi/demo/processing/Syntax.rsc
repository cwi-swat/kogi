module kogi::demo::processing::Syntax

extend lang::std::Id;
extend lang::std::Layout;

//start syntax Script
//  = {Statement  ";"}* body
//  ;
//  

//start syntax Program
//  = Phrase;

keyword Keywords
  = "void" | "setup" | "draw" | "int" | "background" | "boolean" | "char" | "byte" | "color"
  | "double" | "float" | "long" | "clear" | "PGraphics" | "hint" | "clip" | "blendMode" | "beginDraw"
  | "endDraw" | "noClip" | "String" |"ARROW" | "CROSS" | "HAND" | "MOVE" | "TEXT" | "WAIT" | "delay"
  | "cursor" | "fullScreen" | "frameRate" | "size" | "noCursor" | "smooth" | "noSmooth" | "pixelDensity"
  | "height" | "width" | "mouseX" | "mouseY" | "fill" | "noFill" | "colorMode" | "noStroke" | "PImage"
  ;
  
start syntax Phrase
  = stmt: Statement stm
  |  operator: Phrase l Phrase r
  ;

syntax SetupFunction
  = setup: "void" "setup" "(" ")" Statement body
  ;
  
syntax DrawFunction
  = draw: "void" "draw" "(" ")" Statement body
  ;
  
syntax FunctionDecl
  = funcDecl: "void" Id name \Keywords "(" {Parameter ","}* params ")" Statement body
  ;
  
syntax Parameter
  = param: Type tipo Id id
  ;

syntax Value
  = integer: IntegerValue fsd
  | float: FloatValue sdf
  | string: StringValue sfd
  | id: Id ds \ Keywords sdfs
  ;
  
syntax Expression
  = builtFuncs: BuiltInFunction builtinFunctions
  | bracket parenthesis: "(" Expression exp ")"
  |  times: Expression lhs "*" Expression rhs
  |  division: Expression lhs "/" Expression rhs
  |    add: Expression lhs "+" Expression rhs
    | sub: Expression lhs "-" Expression rhs
  |  less: Expression lhs "\<" Expression rhs
  |  higher: Expression lhs "\>" Expression rhs
  |  and: Expression lhs "&&" Expression rhs
  |  notEqual: Expression lhs "!=" Expression rhs
  | vals: Value vals
  ;

syntax Statement
  = stmts: "{" Statement* stmts "}"
  //| func: Statement l Statement r
  | draw: DrawFunction draw
  | setup: SetupFunction setup
  | function: FunctionDecl function
  | exp: Expression expr ";"
  | \while: "while" "(" Expression cond ")" Statement body
  | \for: "for" "(" Expression init ";" Expression test ";" Expression update ")" Statement body
  | \if: "if" "(" Expression test ")" Statement ifBody 
  | ifElse: "if" "(" Expression test ")" Statement ifBody "else" Statement elseBody
  | assign: Id name "=" Expression val ";"
  //| vars: VarDecl ";"
  | decl: Type tipo Id name ";"
  | decl2: Type tipo Id name "=" Expression val ";"
  ;

syntax BuiltInFunction
  = setting: ColorSetting colorSetting
  | creating: ColorCreating colorCreating
  | render: Rendering rendering
  | shape: Shape shape
  | env: Environment environment
  | input: Input input
  | trans: Transform transform
  ;
  
syntax Transform
  = pushMatrix: "pushMatrix" "(" ")"
  | popMatrix: "popMatrix" "(" ")"
  | translate2d: "translate" "(" Expression x "," Expression y ")"
  | translate3d: "translate" "(" Expression x "," Expression y "," Expression z ")"
  ;  
  
syntax Input
  = mouseX: "mouseX"
  | mouseY: "mouseY"
  ;
  
syntax ColorCreating
  = color: "color" "(" Expression gray ")"
  | color2: "color" "(" Expression gray "," Expression alpha ")"
  | color3: "color" "(" Expression v1 "," Expression v2 "," Expression v3 ")"
  | color4: "color" "(" Expression v1 "," Expression v2 "," Expression v3 "," Expression alpha ")"
  ;  
  
syntax Environment
  = size: "size" "(" Expression width "," Expression height ")" 
  | frameRate: "frameRate" "(" Expression fps")"
  | fullScreen: "fullscreen" "(" ")"
  | cursor: "cursor" "(" CursorType typ "," Expression x "," Expression y ")"
  | delay: "delay" "(" Expression napTime ")"
  | noCursor: "noCursor" "(" ")"
  | smooth: "smooth" "(" Expression level")"
  | noSmooth: "noSmooth" "(" ")"
  | pixelDensity: "pixelDensity" "(" Expression density ")"
  | width: "width"
  | height: "height"
  | focused: "focused"
  ;
  
syntax CursorType
  = arrow: "ARROW"
  | cross: "CROSS"
  | hand: "HAND"
  | move: "MOVE"
  | text: "TEXT"
  | wait: "WAIT" 
  ;
  
syntax Shape
  = arc: "arc" "(" FloatValue x "," FloatValue y "," FloatValue width "," FloatValue height "," FloatValue start  "," FloatValue stop ")" 
  | circle: "circle" "(" FloatValue x "," FloatValue y "," FloatValue extent ")"
  | ellipse: "ellipse" "(" FloatValue x "," FloatValue y "," FloatValue width "," FloatValue height ")"
  | line: "line" "(" FloatValue x1 "," FloatValue y1 "," FloatValue x2 "," FloatValue y2 ")"
  | line2: "line" "(" FloatValue x1 "," FloatValue y1 "," FloatValue z1 "," FloatValue x2 "," FloatValue y2 "," FloatValue z2 ")"
  | point: "point" "(" FloatValue x "," FloatValue y ")"
  | point2: "point" "(" FloatValue x "," FloatValue y "," FloatValue z ")"
  | quad: "quad" "(" FloatValue x1 "," FloatValue y1 "," FloatValue x2 "," FloatValue y2 "," FloatValue x3 "," FloatValue y3 "," FloatValue x4 "," FloatValue y4 ")"
  | rect: "rect" "(" Expression x "," Expression y "," Expression width "," Expression height ")"
  | rect2:"rect" "(" Expression x "," Expression y "," Expression width "," Expression height "," Expression radius ")"
  | rect3: "rect" "(" Expression x "," Expression y "," Expression width "," Expression height "," Expression tlradius "," Expression trradius "," Expression brradius "," Expression blradius ")"
  | square: "square" "(" FloatValue x "," FloatValue y "," FloatValue extent ")"
  | triangle: "triangle" "(" FloatValue x1 "," FloatValue y1 "," FloatValue x2 "," FloatValue y2 "," FloatValue x3 "," FloatValue y3 ")"
  ;
  
syntax Rendering
  = createGraphics: "createGraphics" "(" IntegerValue w "," IntegerValue h ")"
  | createGraphics2: "createGraphics" "(" IntegerValue w "," IntegerValue h "," StringValue renderer ")"
  | createGraphics3: "createGraphics" "(" IntegerValue w "," IntegerValue h "," StringValue renderer "," StringValue path ")"
  | beginDraw: "beginDraw" "(" ")"
  | endDraw:"endDraw" "(" ")" 
  | blendMode: "blendMode" "(" IntegerValue mode ")"
  | clip: "clip" "(" FloatValue x"," FloatValue y "," FloatValue width "," FloatValue height")"
  | hint: "hint" "(" IntegerValue hint_mode ")"
  | noClip: "noClip""("")"
  ;  
  
syntax ColorSetting
  = background: Background bac
  | clear: "clear" "("")"
  | fill: "fill" "(" Expression rgb ")"
  | fill2: "fill" "(" Expression rgb"," Expression alpha")"
  | fill3: "fill" "(" Expression v1 "," Expression v2  "," Expression v3")"
  | fill4: "fill" "(" Expression v1 "," Expression v2  "," Expression v3  "," Expression alpha")"
  | noFill: "noFill" "(" ")"
  | colorMode: "colorMode" "(" ColorMode mode")"
  | colorMode2: "colorMode" "(" ColorMode mode "," Expression max ")"
  | colorMode3: "colorMode" "(" ColorMode d "," Expression max "," Expression max2 "," Expression max3 ")"
  | colorMode3: "colorMode" "(" ColorMode  g"," Expression max "," Expression max2 "," Expression max3 "," Expression alpha")"
  | noStroke: "noStroke" "(" ")"
  ;
  
syntax ColorMode
  = rgb: "RGB"
  | hsb: "HSB" 
  ;
  
syntax Background
  = background: "background" "(" Expression rgb ")"
  | background2:"background" "(" Expression rgb "," Expression alpha")"
  | background3: "background" "(" Expression v1 "," Expression v2 "," Expression v3 ")"
  | background4: "background" "(" Expression v1 "," Expression v2 "," Expression v3 "," Expression alpha ")"
  ;
  
syntax Type
  = \int: "int"
  | \bool: "boolean"
  | byte: "byte"
  | char: "char"
  | color: "color"
  | double: "double"
  | float: "float"
  | long: "long"
  | pgGraphics: "PGraphics"
  | pImage: "PImage"
  | string: "String"
  | id: Id \Keywords
  ;  
  
lexical IntegerValue
 = [0-9]+;
  //=[+\-]? [0-9]+ !>> [0-9]
  
  
lexical FloatValue
  = [0-9]+ "." [0-9]+;
  
lexical StringValue 
  = "\"" ![\"]*  "\"";
  