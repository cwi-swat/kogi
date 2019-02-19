module kogi::XML2ADT

import List;
import Type;
import String;
import lang::xml::DOM;
import kogi::util::LookUp;


&T doc2ast(type[&T<:node] grammar, Node n)
	= doc2node(grammar, n);

&T doc2node(type[&T<:node] typ, Node n) {
	switch (n) {
		case document(element(_, "xml", children)):
			// Assumed that the xml node only has one child
			return node2(typ, children[0], startBlock = true);    
		case element(_, "block", children): {
			block = getAttrsAndElems(children);
			return doc2node(typ, block.elems[0]);
		}
		// Ignored this part of the document because it isn't domain-specific. 
		// However, we can still use the information available for further processing.
		case element(_, "statement", children): {
			block = getAttrsAndElems(children);
			return node2(typ, block.elems[0]);
		}
		default:
      		throw "Unsupported: <n>";
	}	
}

&T node2(type[&T<:node] typ, Node n, bool startBlock = false) {
	switch (n) {
		case element(_, "block", children): {
			return block2ADT(typ, children, startBlock = startBlock);
		}
		case element(_, "statement", children): {
			childre = getAttrsAndElems(children);
			a = size(childre.elems) == 1 ? node2(typ, childre.elems[0]) : tmp(childre.elems);
			if (isListType(typeOf(a)))
				return a;
			else
				return [a];
		}
		case element(_, "value", children): {
			return value2(typ, children);
		}
		case element(_, "field", children): {
			return field2(typ, children);
		}
		case element(_, "next", children): {
			return node2(typ, children[0]);
		}
		case element(_, _, children): {
			return tmp(typ, children);
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

&T block2ADT(type[&T<:node] typ, list[Node] children, bool startBlock = false) {
	childre = getAttrsAndElems(children);
	typeDef = getTypeDef(getTypeAttribute(childre.attrs));
	next = [ n | n <- childre.elems, element(_, "next", _) := n ];
	parameters = [ node2(typ, n) | n <- (childre.elems - next) ];
	if (isEmpty(next))
		//return reify(typeDef.\type, typeDef.constructor, parameters);
		return startBlock ? reify(typ, typeDef.\type, typeDef.constructor, parameters, location = createBlockLocation(childre.attrs)) : reify(typ, typeDef.\type, typeDef.constructor, parameters);
	else {
		// First instantiate the current Node and then evaluate the Next Node.
		a = reify(typ, typeDef.\type, typeDef.constructor, parameters );
		b = node2(typ, next[0]);
		if (!isListType(typeOf(a)) && isListType(typeOf(b)))
			return toList(b, a);
		else
			return [a] + b;	
	}
}

&T tmp(type[&T<:node] typ, list[Node] elements){
	&T n;
	for (elem <- elements)
		n = node2(typ, elem);
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

&T field2(type[&T<:node] typ, list[Node] children) {
	childre = getAttrsAndElems(children);
	// Attributes are being ignored
	elements = children - childre.attrs;
	return size(elements) == 1 ? node2(typ, elements[0]) : tmp(typ, elements);
}

&T element2(type[&T<:node] typ, list[Node] children) {
	childre = getAttrsAndElems(children);
	return size(children) == 1 ? node2(typ, childre.elems[0]) : tmp(typ, childre.elems);	
}

&T value2(type[&T<:node] typ, list[Node] children) {
	elements = getAllElements(children);
	return size(elements) == 1 ? node2(typ, elements[0]) : tmp(typ, elements);
}
	
&T reify(type[&T<:node] typ, str \type, str constructor, list[value] params, map[str,value] location = ()) {
	try
		return location == () ? make(reifyADT(\type, typ), constructor, params) : make(reifyADT(\type, typ), constructor, params, location);
	catch:
		throw "Unsupported definition <constructor> for <\type> with params: <params>";
}

tuple[list[Node] attrs, list[Node] elems] getAttrsAndElems(list[Node] children)
	= <getAllAttributes(children), getAllElements(children)>;
	
tuple[str \type, str constructor] getTypeDef(str blockDef) {
	typeDef = split("/", blockDef);
	return <typeDef[0], typeDef[1]>;
}	

loc createLocation(str id, int x, int y)
	= |block:///|(x, y) + id;

map[str,value] createBlockLocation(list[Node] attrs) {
	str id;
	int x, y;
	for (attr <- attrs) {
		if (attribute(_, "x", xCoord ) := attr)
			x = toInt(xCoord);
		else if (attribute(_, "y", yCoord ) := attr)
			y = toInt(yCoord);
		else if (attribute(_, "id", idd ) := attr)	
			id = idd;
	}
	return ("blockLocation" :createLocation(id, x, y));
}