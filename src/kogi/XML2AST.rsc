module kogi::XML2AST

import IO;
import List;
import Type;
import String;
import lang::xml::DOM;
import lang::xml::IO;

void parseXML(){
	//x = readXML(|project://kogi/src/kogi/demo/blocklyXML/stateMachine.xml|);
	x = readXML(|project://kogi/src/kogi/demo/blocklyXML/smallStateMachine.xml|);
	//root = x[0];
	println(x.root);
	writeFile(|project://kogi/src/kogi/demo/blocklyXML/res.xml|,x);
}


str parseXML2(){
	file = readFile(|project://kogi/src/kogi/demo/blocklyXML/stateMachine2.xml|);
	//file = readFile(|project://kogi/src/kogi/demo/blocklyXML/smallStateMachine.xml|);
	dom = parseXMLDOMTrim(file);
	return doc2(dom);
}

str doc2(Node n) {
	switch (n) {
		case document(element(_, "xml", children)):
			return take(children);
		default:
      		throw "Unsupported: <n>";
	}	
}

str node2(Node n) {
	switch (n) {
		case element(_, "block", children): {
			return block2(children);
		}
		case element(_, "statement", children): {
			return  statement2(children);
		}
		case element(_, "value", children): {
			return value2(children);
		}
		case element(_, name, children): {
			return take(children);
		}
		case element(_, "field", children): {
			return field2(children);
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
			return "\"<text>\"";
		default:
      		throw "Unsupported node: <n>";
	}
}

str take(list[Node] children)
	= ("" | it + node2(child)| child <- children);
	
str block2(list[Node] children) {
	attributes = [child | child <- children, attribute(_, _, text) := child];
	elements = [child | child <- children, element(_, _, _) := child];
	if(!isStart(attributes)) {
		blockType = ( "" | it + text | attr <- attributes, attribute(_, "type", text) := attr );
		typeDef = split("/", blockType);
		return ("make(#<typeDef[0]>, \"<typeDef[1]>\", [<( "" | it + node2(element) + ","| element <- elements )>])");
	}
	else
		return ("" | it + node2(element) | element <- elements);
}
str statement2(list[Node] children) {
	attributes = [child | child <- children, attribute(_, _, _) := child];
	elements = [child | child <- children, element(_, _, _) := child];
	return ( "" | it + node2(element) | element <- elements );
}

bool isStart(list[Node] attrs) {
	for(attr <- attrs){
		if(attribute(_, _, "start") := attr)
			return true;
	}
	return false;
}

str field2(list[Node] children) {
	attributes = [child | child <- children, attribute(_, _, _) := child];
	return ( "" | it + text | child <- children, charData(text) := child);
}

str value2(list[Node] children)
	= ( "" | it + node2(child) | child <- children, element(_, _, _) := child);