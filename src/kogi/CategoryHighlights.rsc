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
	'   lightgreen = \"#AFD98B\";
	'   lightgrey = \"#DDDDDD\";
	
	'   if (event.type == Blockly.Events.SELECTED) {
	'	    blockId = event.newElementId;
	'	    if (blockId != undefined) {
	'		    var fieldTypes = extractFieldTypes(blockId);
    '           resetCategories(categories, lightgrey);
	'		    colourCategories(blockId, fieldTypes, categories, lightgreen);
	'	    } else {
	'		    resetCategories(categories, lightgrey);
	'	    }
	'   } else if (event.type == Blockly.Events.TOOLBOX_ITEM_SELECT) {
	'	    if (blockId != undefined) {
	'		    var fieldTypes = extractFieldTypes(blockId);
	'		    selectedCategory = workspace.getToolbox().getSelectedItem();
	'		    if (selectedCategory != null) colourCategories(blockId, fieldTypes, categories, lightgreen);
	'	    }
	'   }
    '};
    '
    '";

str colourCategories() = 
    "function colourCategories(blockid, fieldTypes, categories, colour) {
    '   for (var i = 0; i \< fieldTypes.length; i++) {
    '       for (var j = 0; j \< categories.length; j++) {
    '            if (fieldTypes[i] == categories[j].name_) categories[j].rowDiv_.style.backgroundColor = colour;
    '        }
    '    }
    '};
    '
    '";

str resetCategories() = 
    "function resetCategories(categories, colour) {
	'   for (var i = 0; i \< categories.length; i++) categories[i].rowDiv_.style.backgroundColor = colour;
    '};
    '
    ";

str extractFieldTypes() =
    "
    'function extractFieldTypes(blockid) {
    '    var block = workspace.getBlockById(blockid);
    '    var args = block.inputList;
    '    var types = [];
    '    for (var i = 0; i \< args.length; i++) {
    '        var conn = args[i].connection;
    '        if (conn != null) {
    '            var check = conn.check_;
    '            for (var j = 0; j \< check.length; j++) {
    '               if (!types.includes(check[j])) types.push(check[j]);
    '            }
    '        }
    '    }
    '    return types;
    '};
    '
    ";

str addListener() =
    "
    'workspace.addChangeListener(categoryHighlighter);
    '
    ";