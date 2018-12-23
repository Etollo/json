
var header = document.querySelector('header');
var section = document.querySelector('section');
//var body = document.querySelector('body');

var requestURL = 'https://etollo.github.io/json/treeBase.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var treeBaseText = request.response;
    bodyUl(treeBaseText);
    showTree(treeBaseText);
    tree_toggle(treeBaseText);
    hasClass(treeBaseText);
};
function bodyUl(typeA) {
    var myUl = document.createElement('ul');
    myUl.textContent = typeA.title;
    header.appendChild(myUl);
    myUl.id = "myUL";
}
    
 function showTree(typeA) {
    var trees = typeA.children;
    
    for (var i = 0; i < trees.length; i++){
        var myLi = document.createElement('ul');

        
        myLi.classList.add('nested');

        myLi.textContent = trees[i].name;

        var childrenK1 = trees[i].k1;
        for (var j = 0; j < childrenK1.length; j++){
            var listItem = document.createElement('li');
            var span = document.createElement('span');
            span.classList.add('caret');
            span.textContent = childrenK1[j];
            listItem.appendChild(span);
            myLi.appendChild(listItem);
            
        }
        header.appendChild(myLi);
    }
 }
 function tree_toggle(event) {
	event = event || window.event;
	var clickedElem = event.target || event.srcElement;

	if (!hasClass(clickedElem, 'Expand')) {
		return; // клик не там
	}

	// Node, на который кликнули
	var node = clickedElem.parentNode;
	if (hasClass(node, 'ExpandLeaf')) {
		return; // клик на листе
	}

	// определить новый класс для узла
	var newClass = hasClass(node, 'ExpandOpen') ? 'ExpandClosed' : 'ExpandOpen';
	// заменить текущий класс на newClass
	// регексп находит отдельно стоящий open|close и меняет на newClass
	var re =  /(^|\s)(ExpandOpen|ExpandClosed)(\s|$)/
	node.className = node.className.replace(re, '$1'+newClass+'$3');
}

function hasClass(elem, className) {
	return new RegExp("(^|\\s)"+className+"(\\s|$)").test(elem.className);
}



// var toggler = document.getElementsByClassName("caret");
    
// for (var i = 0; i < toggler.length; i++) {
//     toggler[i].addEventListener("click", function() {
//         this.parentElement.querySelector(".nested").classList.toggle("active");
//         this.classList.toggle("caret-down");
//     });
// }

