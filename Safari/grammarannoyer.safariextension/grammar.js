// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
var randnum = Math.floor((Math.random()*10)+1);
	if (randnum == 10){

		var v = textNode.nodeValue;

		v = v.replace(/\bYour\b/g, "You're");
		v = v.replace(/\byour\b/g, "you're");
		v = v.replace(/\bDefinitely\b/g, "Definately");
		v = v.replace(/\bdefinitely\b/g, "definately");
		v = v.replace(/\bTheir\b/g, "There");
		v = v.replace(/\btheir\b/g, "there");
		v = v.replace(/\bA lot\b/g, "Alot");
		v = v.replace(/\ba lot\b/g, "alot");
		v = v.replace(/\bIts\b/g, "It's");
		v = v.replace(/\bits\b/g, "it's");	
		v = v.replace(/\bWho\b/g, "Whom");
		v = v.replace(/\bwho\b/g, "whom");	
		v = v.replace(/\bToo\b/g, "To");
		v = v.replace(/\btoo\b/g, "to");	
		v = v.replace(/\bThen\b/g, "Than");
		v = v.replace(/\bthen\b/g, "than");	
		v = v.replace(/\bKeyboard\b/g, "Leopard"); // http://xkcd.com/1031/
		v = v.replace(/\bkeyboard\b/g, "leopard");	

		textNode.nodeValue = v;
	}
}
