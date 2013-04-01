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
        var replaces = {
                "you're": new RegExp(/\byour\b/ig),
                "definately": new RegExp(/\bdefinitely\b/ig),
                "there": new RegExp(/\btheir\b/ig),
                "alot": new RegExp(/\ba lot\b/ig),
                "it's": new RegExp(/\bits\b/ig),
                "whom": new RegExp(/\bwho\b/ig),
                "to": new RegExp(/\btoo\b/ig),
                "than": new RegExp(/\bthen\b/ig),
                "leopard": new RegExp(/\bkeyboard\b/ig)
        };

	if (randnum == 10){
	
		var v = textNode.nodeValue;
		for (var replace_with in replaces) {
			var replace_this = replaces[replace_with];
			v = v.replace(replace_this, function(match) {
				for (var i = 0; i < match.length && i < replace_with.length; i++) {
					if (match[i] == match[i].toUpperCase()) {
						replace_with[i] = replace_with[i].toUpperCase();
					}
				}
				return replace_with;
			});
		}
		textNode.nodeValue = v;
	}
}


