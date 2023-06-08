module kogi::html::WebPage

import IO;
import String;

private loc HTML_TEMPLATE = |project://kogi/src/kogi/html/blocklyTemplate.html|;

void createHTML(str title, str div, loc dstPath, str lib)
	= writeFile(dstPath + "index.html", HTMLcontent(title, div, lib));


str HTMLcontent(str title, str div, str lib) 
  = replaceAll(
       replaceAll(
         replaceAll(tmpl, 
           "{__TITLE__}", title),
           "{__DIV__}", div),
           "{__BLOCKLY__}", lib)
  when tmpl := readFile(HTML_TEMPLATE);