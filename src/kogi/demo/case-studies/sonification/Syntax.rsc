module kogi::demo::sonification::Syntax
//module kogi::demo::casestudies::sonification::Syntax

extend lang::std::Layout;
extend lang::std::Id;

import ParseTree;
import kogi::Compile;
import kogi::simplification::RemoveUnitProduction;


start syntax Program
  = a: "run program" Connection* connections
  ;
  
  
syntax Connection
  = sound: SoundConnection connections 
  | control: ControllingParameters params
  | passing: PassingTime time
  ;
  
syntax ControllingParameters
  = params: "set parameters" Id text "of sound" SoundSource source "to be" ToBe source
  ;
  
syntax ToBe
  = sound: SoundSource sound
  | dat: DataProcessing data
  | number: IntegerValue num
  ;    
  
syntax DataProcessing
  = dataSource: "data source" DataSource source "processed with" DataProcessing* processing "then scaled to" DataProcessing
  | processor: DataProcessor process "image"
  | range: "range" IntegerValue min "to" IntegerValue max 
  ;
  
syntax DataProcessor
  = reverse: "reverse"
  | nothing: "do_nothing"
  | slow: "slow_ramp"
  | medium: "medium_ramp"
  | fast: "fast_ramp"
  | hard: "hard_cutoff"
  | hump: "hump"
  | rotate: "rotate"
  ;    
  
syntax PassingTime
  = wait: "wait" IntegerValue num "seconds"
  ;  
  
syntax SoundConnection
  = sound: "connect" SoundSource soundsource "to" DataSource data
  ;
  
syntax SoundSource
  = wave: Wave wave "wave" ImageValue imgWave "(spectrum:" ImageValue imgSpect ")" "named" Id sound
  | filtr: Filter filter "filter" " (spectrum:" ImageValue imgSpect")" "named" Id sound
  ;
  
syntax Filter
  = low: "lowpass"
  | high: "highpass"
  | band: "bandpass"
  ;  

syntax Wave
  = sine: "sine"
  | triangle: "triangle"
  | square: "square"
  | sawtooth: "sawtooth"
  ;
  
syntax DataSource
  = speaker: "speaker"
  | slider: "slider_with_label" Id text
  | position: "device position along" Id text "axis"
  | movement: "device movement along" Id text "axis"
  | rotation: "device rotation along" Id text "axis"
  ;
  
//lexical Int
// = [0-9]+;
 
lexical IntegerValue
 = intf: [0-9]+; 
  
// TODO: add support to images. For now I will leave it as a string.
lexical ImageValue 
  = "\"" ![\"]*  "\"";
  
  
void createBlockGUI() {
  createBlocklyApp(simplifyGrammar(#Program), targetPath = |project://kogi/src/kogi/demo/sonification/|);
}