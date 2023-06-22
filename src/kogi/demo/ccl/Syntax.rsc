//module Syntax
module kogi::demo::ccl::Syntax

//import Lexicals;

extend lang::std::Id;
extend lang::std::Layout;

start syntax Resources
  = resources: "resources" a "{" Instance* resource "}"
  ;

syntax Instance
  = instance: "Instance " Image ami CPU vcpu Memory memory Storage storage IPV6 ipv
  ;
  
syntax Storage
  = storage: "Storage:" StorageType storage "size: " IntegerValue size "GB"
  ;
  
syntax CPU
  = vcpus: "CPU:" IntegerValue cpu
  ;
  
syntax IPV6
  = ipv6: "IPV6:" BooleanValue ipv6
  ; 

syntax Memory
  = memory: "memory:" IntegerValue mem "GB"
  ;

syntax StorageType
  = ebs: "EBS"
  | ssd: "SSD"
  ;
  
syntax Image
  = awsLinux: "Amazon Linux"
  | redHat: "Red Hat Enterprise"
  | ubuntu: "Ubuntu Server"
  | windows: "Windows Server2019"
  ;
  
lexical IntegerValue
  = number: [0-9]+ dfg
  ;
  
lexical BooleanValue
  = \true: "true" sdsd
  | \false: "false" sd
  ;