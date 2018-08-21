module kogi::Block

data Toolbox
  = toolbox(list[Section] sections);
  
data Section
  = section(str category, Colour colour, list[Block] blocks);

data Block
  = block(str \type, // type is defined here, e.g. Exp_Add
       list[Message] messages, 
       Ref output = none(), 
       Ref previous = none(), 
       Ref next = none(),
       Colour colour = none(), 
       str tooltip = "",
       str helpUrl = "",
       list[str] extensions = [],
       str mutator = "",
       bool inputsInline = false);
       
data Colour
  = rgb(str rgb)
  | hsv(int hsv)
  | bky(str category) // https://developers.google.com/blockly/guides/create-custom-blocks/block-colour
  | none()
  ;
  
data Ref
  = block(str \type) // "" means null, so present, but untyped
  | none()
  ;  

data Message
  = message(str format, list[Arg] args);
  
data Arg
  = arg(str name, Type \type, Arg alt = none())
  | none()
  ;

data Type
  = \value(str check = "")  // input
  | statement() // input
  | dummy() // input (not needed?)
  | input(str text, bool spellcheck = true) // fields from here on down
  | dropdown(lrel[str, str] options)
  | checkbox(bool checked = false)
  | colour(str colour)
  | number(num \value, Range range = none())
  | angle(num angle)
  | variable(str variable, list[str] variableTypes = [])
  | date(datetime date)
  | label(str text, str class = "")
  | image(str src, int width, int height, str alt = "")
  ;
  
data Range
  = range(num min, num max, num precision)
  | none()
  ;