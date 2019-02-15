module kogi::XML2AST

import IO;
import List;
import Type;
import String;
import lang::xml::IO;
import lang::xml::DOM;
import kogi::util::LookUp;
import kogi::demo::pico::AST;
//import kogi::demo::stateMachine::StateMachineAST;

void parseXML2(){
	x = readXML(|project://kogi/src/kogi/demo/blocklyXML/stateMachine.xml|);
}


&T parseXML(){
	//file = readFile(|project://kogi/src/kogi/demo/blocklyXML/stateMachine2.xml|);
	file = readFile(|project://kogi/src/kogi/demo/blocklyXML/pico.xml|);
	dom = parseXMLDOMTrim(file);
	return doc2(dom);
}

&T doc2(Node n) {
	switch (n) {
		case document(element(_, "xml", children)):
			// Assumed that the xml node only has one child
			return node2(children[0]);    
		case element(_, "block", children): {
			block = getAttrsAndElems(children);
			return doc2(block.elems[0]);
		}
		// Ignored this part of the document because it isn't domain-specific. 
		// However, we keep the information available for further processing.
		case element(_, "statement", children): {
			block = getAttrsAndElems(children);
			return node2(block.elems[0]);
		}
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
			a = size(childre.elems) == 1 ? node2(childre.elems[0]) : tmp(childre.elems);
			if (isListType(typeOf(a)))
				return a;
			else
				return [a];
		}
		case element(_, "value", children): {
			return value2(children);
		}
		case element(_, "field", children): {
			return field2(children);
		}
		case element(_, "next", children): {
			return node2(children[0]);
		}
		case element(_, _, children): {
			return tmp(children);
		}
		case attribute(_, "type", text): {
			return text + " ";
		}
		case charData(text):
			try
				return toInt(text);
			catch:	
				return text;
		default:
      		throw "Unsupported node: <n>";
	}
}

list[&T] toList(list[&T] param, &T t)
	= [ par | par <- param] + t;

&T block2ADT(list[Node] children) {
	childre = getAttrsAndElems(children);
	typeDef = getTypeDef(getTypeAttribute(childre.attrs));
	next = [ n | n <- childre.elems, element(_, "next", _) := n ];
	parameters = [ node2(n) | n <- (childre.elems - next) ];
	if (isEmpty(parameters))
		return reify(typeDef.\type, typeDef.constructor, []);
	else if (isEmpty(next))
		return reify(typeDef.\type, typeDef.constructor, parameters);
	else {
		a = reify(typeDef.\type, typeDef.constructor, parameters );
		b = node2(next[0]);
		if (!isListType(typeOf(a)) && isListType(typeOf(b)))
			return toList(b, a);
		else
			return [a] + b;	
	}
}

&T rei(Node \node) {
	if(\node.name == "statement")
		return getParams([ n |  n <- \node.children, attribute(_, _, _) !:= n]);
	else
		return getParams([ n |  n <- \node.children, attribute(_, _, _) !:= n]);
}

&T getParams(list[Node] nodes) {
	 return node2(nodes[0]);//[ node2(\node) | \node <- nodes ];
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

bool isStart(list[Node] attrs)
	= isEmpty([ attr | attr <- attrs, attribute(_, "type", "start") := attr ]);

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
		throw "Unsupported definition <constructor> for <\type> with params: <params>";
}

tuple[list[Node] attrs, list[Node] elems] getAttrsAndElems(list[Node] children)
	= <getAllAttributes(children), getAllElements(children)>;
	
tuple[str \type, str constructor] getTypeDef(str blockDef) {
	typeDef = split("/", blockDef);
	return <typeDef[0], typeDef[1]>;
}	