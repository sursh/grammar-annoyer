walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
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

function handleText(textNode) 
{
	var randnum = Math.floor((Math.random()*10)+1);
	if (randnum == 10){
	
		var v = textNode.nodeValue;

		v = v.replace(/\b([Yy])our\b/g, "$1ou're");
		v = v.replace(/\b([Dd])efinitely\b/g, "$1efinately");
		v = v.replace(/\b([Tt])heir\b/g, "$1here");
		v = v.replace(/\b([Aa]) lot\b/g, "$1lot");
		v = v.replace(/\b([Ii])ts\b/g, "$1t's");
		v = v.replace(/\b([Ww])ho\b/g, "$1hom");
		v = v.replace(/\b([Tt])oo\b/g, "$1o");
		v = v.replace(/\b([Tt])hen\b/g, "$1han");
		v = v.replace(/\bKeyboard\b/g, "Leopard"); // http://xkcd.com/1031/
		v = v.replace(/\bkeyboard\b/g, "leopard");	

		textNode.nodeValue = v;
	}
}


