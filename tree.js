
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
};
function bodyUl(typeA) {
    var myUl = document.createElement('ul');
    myUl.textContent = typeA.title;
    header.appendChild(myUl);

}
 function showTree(typeA) {
    var trees = typeA.children;
    
    for (var i = 0; i < trees.length; i++){
        var myLi = document.createElement('ul');
        var myH2 = document.createElement('h2');

        myH2.textContent = trees[i].name;

        var childrenK1 = trees[i].k1;
        for (var j = 0; j < childrenK1.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = childrenK1[j];
            myLi.appendChild(listItem);
        }
        header.appendChild(myH2);
        header.appendChild(myLi);
        
    }
 }
 function tree_toggle(event) {
	event = event || window.event;
	var clickedElem = event.target || event.srcElement;

	if (!hasClass(clickedElem, 'Expand')) {
		return ;// клик не там
	}

	// Node, на который кликнули
	var node = clickedElem.parentNode;
	if (hasClass(node, 'ExpandLeaf')) {
		return ;// клик на листе
	}

	// определить новый класс для узла
	var newClass = hasClass(node, 'ExpandOpen') ? 'ExpandClosed' : 'ExpandOpen';
	// заменить текущий класс на newClass
	// регексп находит отдельно стоящий open|close и меняет на newClass
	var re =  /(^|\s)(ExpandOpen|ExpandClosed)(\s|$)/;
	node.className = node.className.replace(re, '$1'+newClass+'$3');
}


function hasClass(elem, className) {
	return new RegExp("(^|\\s)"+className+"(\\s|$)").test(elem.className);
}
