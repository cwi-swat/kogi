module kogi::Load

import IO;
import kogi::XML2ADT;
import lang::xml::DOM;

&T loadXML(type[&T<:node] typ, loc input) throws Exception {
	dom = parseXMLDOMTrim(readFile(input));
	return doc2ast(typ, dom);
}

&T loadXML(type[&T<:node] typ, str input) throws Exception {
	dom = parseXMLDOMTrim(input);
	return doc2ast(typ, dom);
}