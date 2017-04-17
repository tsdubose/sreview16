const parse5 = require('parse5');

hexo.extend.helper.register('parse5', function(string, picture, accentText){
  var newFrag = parse5.parseFragment(string);
	var pictureElement = parse5.parseFragment("<img class='accent-image' src='" + picture + "'/>");
	var accentElement = parse5.parseFragment("<div class='accent-text'>" + accentText + "</div>");
	newFrag.childNodes.splice(3, 0, pictureElement.childNodes[0]);
	newFrag.childNodes.splice(7, 0, accentElement.childNodes[0]);
	return parse5.serialize(newFrag);
});
