
var header = document.querySelector('header');
var iframeset = document.querySelector('iframeset');
//var body = document.querySelector('body');

var requestURL = 'https://etollo.github.io/json/treeBase.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var treeBaseText = request.response;

    showTree(treeBaseText);
    tree_toggle(treeBaseText);
    hasClass(treeBaseText);
};
// function bodyUl(typeA) {
    
//     myUl.classList.add('Container');
//     //myUl.id = "myUL";
// }

// function frameset(typeA) {
//     var frame = document.createElement('frame');
//     frame.appendChild(srcElement);
// }
function showTree(typeA) {
    var myUl = document.createElement('ul');
    myUl.textContent = typeA.title;
    header.appendChild(myUl);
    var trees = typeA.children;
    myUl.classList.add('Container');
    for (var i = 0; i < trees.length; i++){
        var myLi = document.createElement('ul');

        
        myLi.classList.add('ContainerInside');

        myLi.textContent = trees[i].name;

        var childrenK1 = trees[i].k1;
        for (var j = 0; j < childrenK1.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = childrenK1[j].sedan;

            var sedan = childrenK1[j].k1;
            for (var k = 0; k < sedan.length; k++){
                var info = document.createElement('ul');
                info.textContent = sedan[k];
                listItem.appendChild(info);
            }
            var a = document.createElement('a');

            listItem.classList.add('Node');
            listItem.classList.add('IsRoot');
            listItem.classList.add('ExpandOpen');

            
            var div = document.createElement('div');
            div.classList.add('Expand');
            listItem.appendChild(div);

            var span = document.createElement('div');
            span.classList.add('Content');
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
	var re =  /(^|\s)(ExpandOpen|ExpandClosed)(\s|$)/;
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

