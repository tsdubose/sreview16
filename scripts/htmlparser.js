const parse5 = require('parse5');

hexo.extend.helper.register('parse5', function(string, picture, accentText){
	var newFrag = parse5.parseFragment(string);
	//you need to drop both of these into if statements
	if (picture) {
		var pictureElement = parse5.parseFragment("<img class='accent-image' src='" + picture + "'/>");
		newFrag.childNodes.splice(3, 0, pictureElement.childNodes[0]);
	}

	if (accentText) {
		var accentElement = parse5.parseFragment("<div class='accent-text'>" + accentText + "</div>");
		newFrag.childNodes.splice(7, 0, accentElement.childNodes[0]);
	}
	return parse5.serialize(newFrag);
});
