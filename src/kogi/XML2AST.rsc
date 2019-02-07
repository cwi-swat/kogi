module kogi::XML2AST

import IO;
import Set;
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
	file = readFile(|project://kogi/src/kogi/demo/blocklyXML/stateMachine2.xml|);
	//file = readFile(|project://kogi/src/kogi/demo/blocklyXML/smallStateMachine.xml|);
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
	if (isStart(childre.attrs)) {
		typeDef = getTypeDef(getTypeAttribute(childre.attrs));
		nextElement = [ n | n <- childre.elems, element(_, "next", _) := n ];
		stms = [ n | n <- childre.elems, element(_, "statement", _) := n ];
		eles = childre.elems - nextElement - stms;
		
		params = getParams(eles);
		
		if(!isEmpty(stms)) {
			bv = getParams(stms);
			if(isListType(typeOf(bv[0])))
				params = params + bv;
			else{
				params = params + [bv];
				}	
		}
		
		a = reify(typeDef.\type, typeDef.constructor, params );
		if (!isEmpty(nextElement)){
			params2 = node2(nextElement[0]);
			//b = reify(typeDef.\type, typeDef.constructor,params2);
			return [] + a + params2;
		}
		else
			return a;	
			
		//return parameters(typeDef.\type, typeDef.constructor, childre.elems);
		//return reify(typeDef.\type, typeDef.constructor, [ node2(element) | element <- childre.elems ]);
															// if element is "next" take everything except element and keep the recursion.
	}
	else
		return size(childre.elems) == 1 ? node2(childre.elems[0]) : tmp(childre.elems);
}

//&T block2ADT(list[Node] children) {
//	childre = getAttrsAndElems(children);
//	if (isStart(childre.attrs)) {
//		typeDef = getTypeDef(getTypeAttribute(childre.attrs));
//		nextElement = [ n | n <- childre.elems, element(_, "next", _) := n ];
//		stms = [ n | n <- childre.elems, element(_, "statement", _) := n ];
//		eles = childre.elems - nextElement - stms;
//		params = getParams(eles);
//		if(!isEmpty(stms)) {
//			bv = node2(stms[0]);
//			
//			if(!isListType(typeOf(bv)))
//				bv = [bv];
//			cp = bv;
//			params = params + cp;
//			println(bv);
//		}
//		a = reify(typeDef.\type, typeDef.constructor, params );
//		if (!isEmpty(nextElement)){
//			params2 = node2(nextElement[0]);
//			return [] + a + params2;
//		}
//		else
//			return a;	
//	}
//	else
//		return size(childre.elems) == 1 ? node2(childre.elems[0]) : tmp(childre.elems);
//}

list[value] getParams(list[Node] nodes) {
	list[value] params = [];
	for (\node <- nodes) {
			params += node2(\node);	
		// Assuming the only option left is a statement
		//else {
		//	 childre = getAttrsAndElems(\node.children);
		//	 cc = [ node2(child) | child <- childre[1] ];
		//	 xx = cc + params;
		//	 params += cc;
		//}
	}
	return params;
}

//&T parameters(str \type, str constructor, list[Node] nodes) {
//	n = getAttrsAndElems(nodes);
//	// TODO: Next???
//	//elems = [ elem | elem <- n[1], element(_, "statement", children) !:= elem ];
//	elems = [ elem | elem <- n[1], element(_, "next", children) !:= elem ];
//	next = n[1] - elems;
//	if (isEmpty(next)) {
//		x = [ node2(elem) | elem <- elems];
//		return reify(\type, constructor, x);
//	}
//	else {
//		e = [ node2(ele) | ele <- elems ];
//		par = [ node2(next2) | next2 <- next ];
//		rr = elems + [ par ];
//		return reify(\type, constructor, par);
//	}
//	//rta = [ node2(n) | n <- (t[1] - next) ];
//	
//	
//	// need to handle <next> in a different way since right now it is being used as additional params instead as a different object.
//	// example: transition( [id("a"), id("b"), transition([id("c"), id("d")])])
//	// Target: transition( [id("a"), id("b")], transition([id("c"), id("d")])])
//}

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