module kogi::html::WebPage

import IO;
import String;

private loc HTML_TEMPLATE = |project://kogi/src/kogi/html/blocklyTemplate.html|;

void createHTML(str toolbox, str title, str div, loc dstPath)
	= writeFile(dstPath + "index.html", HTMLcontent(toolbox, title, div));


str HTMLcontent(str toolbox, str title, str div) 
  = replaceAll(
       replaceAll(
         replaceAll(tmpl, 
           "{__TOOLBOX__}", toolbox),
           "{__TITLE__}", title),
           "{__DIV__}", div)
  when tmpl := readFile(HTML_TEMPLATE);