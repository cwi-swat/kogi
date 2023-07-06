module kogi::CategoryHighlights

/*start of category highlighting 
	The categoryHighlighter function is the main function which calls helper functions in order to highlight categories.
	When we have a select event on a block, we want to extract the field types (the arguments) from this block and colour the corresponding categories.
	This should help the user identify the categories in which they should look for when attaching new blocks to the selected blocks.
*/

str createHighlighter() {
    content = categoryHighlighter();
    content += colourCategories();
    content += resetCategories();
    content += extractFieldTypes();
    content += addListener();
    return content;
}

str categoryHighlighter() = 
    "
    'var blockId;
    'function categoryHighlighter(event) {
	'   categories = workspace.getToolbox().getToolboxItems();
	'   green = \"#AFD98B\";
	'   grey = \"#DDDDDD\";
    '   orange = \"#EDC174\";
	'   
    '   if (event.type == Blockly.Events.SELECTED) {
	'	    blockId = event.newElementId;
	'	    if (blockId != undefined) {
	'		    var fieldTypes = extractFieldTypes(blockId);
    '           var greenTypes = fieldTypes[0];
	'		    var orangeTypes = fieldTypes[1];
    '           resetCategories(categories, grey);
	'		    colourCategories(greenTypes, orangeTypes, categories, green, orange);
	'	    } else {
	'		    resetCategories(categories, grey);
	'	    }
	'   } else if (event.type == Blockly.Events.TOOLBOX_ITEM_SELECT) {
	'	    if (blockId != undefined) {
    '	        selectedCategory = workspace.getToolbox().getSelectedItem();
    '	        if (selectedCategory != null) {
    '			    var fieldTypes = extractFieldTypes(blockId);
    '			    var greenTypes = fieldTypes[0];
    '			    var orangeTypes = fieldTypes[1];
    '			    colourCategories(greenTypes, orangeTypes, categories, green, orange);
    '		    }
	'       }
	'   }
    '};
    '
    '";

str colourCategories() = 
    "function colourCategories(greenTypes, orangeTypes, categories, green, orange) {
	'
    '   //draw orange categories
    '   for (var i = 0; i \< orangeTypes.length; i++) {
    '       for (var j = 0; j \< categories.length; j++) {
    '           if (orangeTypes[i] == categories[j].name_) categories[j].rowDiv_.style.backgroundColor = orange;
    '      }
    '   }
    '    
    '   //then green
    '   for (var i = 0; i \< greenTypes.length; i++) {
    '   for (var j = 0; j \< categories.length; j++) {
    '           if (greenTypes[i] == categories[j].name_) categories[j].rowDiv_.style.backgroundColor = green;
    '      }
    '   }
    '};
";

str resetCategories() = 
    "function resetCategories(categories, colour) {
	'   for (var i = 0; i \< categories.length; i++) categories[i].rowDiv_.style.backgroundColor = colour;
    '};
    '
    ";

str extractFieldTypes() =
    "
    'function extractFieldTypes(blockid) {
    '   var block = workspace.getBlockById(blockid);
    '   var args = block.inputList;
    '   var types = [];
    '   var greentypes = [];
    '   var orangetypes = [];
    '
    '   for (var i = 0; i \< args.length; i++) {
    '      var conn = args[i].connection;
    '         if (conn != null) {
    '            var check_ = conn.check;
    '            if (conn.targetConnection != null) {
	'			    for (var j = 0; j \< check_.length; j++) {
	'				   if (!orangetypes.includes(check_[j])) orangetypes.push(check_[j]);
	'			    }
	'		    } 
    '           else {
    '              for (var j = 0; j \< check_.length; j++) {
    '                 if (!greentypes.includes(check_[j])) greentypes.push(check_[j]);
    '              }
    '           }
    '        }
    '    }
    '    types.push(greentypes);
    '    types.push(orangetypes);
    '    return types;
    '};
    '
    ";

str addListener() =
    "
    'workspace.addChangeListener(categoryHighlighter);
    '
    ";