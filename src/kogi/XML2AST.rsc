module kogi::XML2AST

import IO;
import lang::xml::DOM;
import lang::xml::IO;

void parseXML(){
	x = readXML(|project://kogi/src/kogi/demo/blocklyXML/stateMachine.xml|);
	//root = x[0];
	println(x.root);
	writeFile(|project://kogi/src/kogi/demo/blocklyXML/res.xml|,x);
}


void parseXML2(){
	file = readFile(|project://kogi/src/kogi/demo/blocklyXML/stateMachine.xml|);
	dom = parseXMLDOMTrim(file);
	println(doc2(dom));
}

str doc2(Node n) {
	switch (n) {
		case document(Node root):
			return doc2(root);
		case element(_, "xml", children):
			return take(children);
		default:
      		throw "Unsupported: <n>";
	}	
}

str nodes(Node n){
	bottom-up visit(n){
		case element(_, "block", children): {
			println("");
		}
		//case element(_, "statement", children): {
		//	println("");
		//}
		//case element(_, "value", children): {
		//	println("");
		//}
	}
	return "";
}

str node2(Node n) {
	switch (n) {
		case element(_, "block", children): {
			block2(children);
			return "";
		}
		case element(_, "statement", children): {
			return  statement2(children);
		}
		case element(_, "value", children): {
			return take(children);
		}
		case element(_, name, children): {
			return take(children);
		}
		case element(_, "field", children): {
			return take(children);
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
			return text + " ";
		default:
      		throw "Unsupported node: <n>";
	}
}

str take(list[Node] children)
	= ("" | it + node2(child)| child <- children);
	
void block2(list[Node] children) {
	attributes = [node2(child) | child <- children, attribute(_, "type", text) := child];
	elements = [node2(child) | child <- children, element(_, name, children) := child];

}
str statement2(list[Node] children) 
	= ("" | it + node2(child) | child <- children);
	
void block(Node n) {
	
}	


