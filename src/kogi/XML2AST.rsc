module kogi::XML2AST

import IO;
import List;
import Type;
import String;
import Exception;
import lang::xml::IO;
import lang::xml::DOM;
import kogi::util::LookUp;
import kogi::demo::stateMachine::StateMachineAST;

void parseXML(){
	//x = readXML(|project://kogi/src/kogi/demo/blocklyXML/stateMachine.xml|);
	x = readXML(|project://kogi/src/kogi/demo/blocklyXML/smallStateMachine.xml|);
	//root = x[0];
	println(x.root);
	writeFile(|project://kogi/src/kogi/demo/blocklyXML/res.xml|,x);
}


&T parseXML2(){
	//file = readFile(|project://kogi/src/kogi/demo/blocklyXML/stateMachine2.xml|);
	file = readFile(|project://kogi/src/kogi/demo/blocklyXML/smallStateMachine.xml|);
	dom = parseXMLDOMTrim(file);
	return doc2(dom);
}

&T doc2(Node n) {
	switch (n) {
		case document(element(_, "xml", children)):
			// Assumed that the xml node only has one child
			return node2(children[0]);
		default:
      		throw "Unsupported: <n>";
	}	
}

&T node2(Node n) {
	switch (n) {
		case element(_, "block", children): {
			return block2ADT(children);
		}
		case element(_, "statement", children): {
			childre = getAttrsAndElems(children);
			return size(childre.elems) == 1 ? node2(childre.elems[0]) : tmp(childre.elems);
		}
		case element(_, "value", children): {
			return value2(children);
		}
		case element(_, "field", children): {
			return field2(children);
		}
		case element(_, "next", children): {
			childre = getAttrsAndElems(children);
			return size(childre.elems) == 1 ? node2(childre.elems[0]) : tmp(childre.elems);
		}
		case element(_, _, children): {
			return tmp(children);
		}
		case attribute(_, "type", "start"): {
			return "";
		}
		case attribute(_, "type", text): {
			return text + " ";
		}
		case attribute(_, name, text): {
			return "";
		}
		case charData(text):
			return "<text>";
		default:
      		throw "Unsupported node: <n>";
	}
}

&T block2ADT(list[Node] children) {
	childre = getAttrsAndElems(children);
	if (!isStart(childre.attrs)) {
		blockType = getTypeAttribute(childre.attrs);
		typeDef = getTypeDef(blockType);
		return reify(typeDef.\type, typeDef.constructor, [ node2(element) | element <- childre.elems ]);
	}
	else
		return size(childre.elems) == 1 ? node2(childre.elems[0]) : tmp(childre.elems);
}

void parameters(list[Node] nodes){
	for( n <- nodes){
		rta = node2(n);
		println(rta);
	}
}

&T tmp(list[Node] elements){
	&T n;
	for (elem <- elements)
		n = node2(elem);
	return n;
}

list[Node] getAllElements(list[Node] children)
	= [ child | child <- children, element(_, _, _) := child ];
	
list[Node] getAllAttributes(list[Node] children)
	= [ child | child <- children, attribute(_, _, _) := child ];
	
str getTypeAttribute(list[Node] attributes)
	= ( "" | it + text | attr <- attributes, attribute(_, "type", text) := attr );	

&T statement2(list[Node] children) {
	childre = getAttrsAndElems(children);
	return tmp(childre.attrs);
}

bool isStart(list[Node] attrs) {
	for(attr <- attrs){
		if(attribute(_, _, "start") := attr)
			return true;
	}
	return false;
}

&T field2(list[Node] children) {
	childre = getAttrsAndElems(children);
	// Attributes are being ignored
	elements = children - childre.attrs;
	return size(elements) == 1 ? node2(elements[0]) : tmp(elements);
}

&T element2(list[Node] children) {
	childre = getAttrsAndElems(children);
	return size(children) == 1 ? node2(childre.elems[0]) : tmp(childre.elems);	
}

&T value2(list[Node] children) {
	elements = getAllElements(children);
	return size(elements) == 1 ? node2(elements[0]) : tmp(elements);
}
	
&T reify(str \type, str constructor, list[value] params) {
	try
		return make(lookupType(\type), constructor, params);
	catch:
		throw "Unsupported definition for: <\type>";
}

tuple[list[Node] attrs, list[Node] elems] getAttrsAndElems(list[Node] children)
	= <getAllAttributes(children), getAllElements(children)>;
	
tuple[str \type, str constructor] getTypeDef(str blockDef) {
	typeDef = split("/", blockDef);
	return <typeDef[0], typeDef[1]>;
}	