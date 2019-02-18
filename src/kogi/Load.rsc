module kogi::Load

import IO;
import kogi::XML2ADT;
import lang::xml::DOM;

&T loadXML(loc input){
	dom = parseXMLDOMTrim(readFile(input));
	return doc2(dom);
}