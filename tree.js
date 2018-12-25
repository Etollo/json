
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
function showTree(typeA) {
    var myUl = document.createElement('ul');
    var firstLi = document.createElement('li');

    firstLi.textContent = typeA.title;
    myUl.appendChild(firstLi);
    header.appendChild(myUl);
    var trees = typeA.children;
    myUl.classList.add('Container');
    var secondUl = document.createElement('ul');
    for (var i = 0; i < trees.length; i++){
        
        var myLi = document.createElement('li');
        secondUl.appendChild(myLi);
        myLi.textContent = trees[i].name;
        
        var childrenK1 = trees[i].k1;
        var terdUl = document.createElement('ul');
        for (var j = 0; j < childrenK1.length; j++){
            
            var listItem = document.createElement('li');
            terdUl.appendChild(listItem);

            // listItem.classList.add('Container');
            var a = document.createElement('a');
            
            listItem.appendChild(a);
            // Обрабатывает объект sedan 
            a.textContent = childrenK1[j].sedan;
    
            myLi.appendChild(terdUl);
        }
        firstLi.appendChild(secondUl);
        header.appendChild(myUl);
       
    }
 }
 function tree_toggle() {
    var tree = document.getElementsByTagName('ul')[0];

    var treeLis = tree.getElementsByTagName('li');

    /* wrap all textNodes into spans */
    for (var i = 0; i < treeLis.length; i++) {
        var li = treeLis[i];
        
        var span = document.createElement('span');
        li.insertBefore(span, li.firstChild);
        span.appendChild(span.nextSibling);
    }
    /* catch clicks on whole tree */
    tree.onclick = function(event) {
        var target = event.target;

        if (target.tagName != 'SPAN') {
            return;
        }
        /* now we know the SPAN is clicked */
        var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
        if (!childrenContainer) return; // no children

        childrenContainer.hidden = !childrenContainer.hidden;
    };
 }


