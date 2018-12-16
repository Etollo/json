
var header = document.querySelector('header');
var section = document.querySelector('section');
//var body = document.querySelector('body');

var requestURL = 'https://github.com/Etollo/json/blob/master/treeBase.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var treeBaseText = request.response;
    var treeBase = JSON.parse(treeBaseText);
    bodyUl(treeBase);
};
function bodyUl(typeA) {
    var myUl = document.createElement('ul');
    myUl.textContent = typeA.children;
    header.appendChild(myUl);

    var myLi = document.createElement('li');
    myLi.textContent = typeA.k1;
    header.appendChild(myLi);

    
}
function showTree(typeA) {
    var trees = typeA.title;

    for (var i = 0; i < trees.length; i++) {
        var myArticle = document.createElement('article');
        var myList = document.createElement('ul');
        var myH2 = document.createElement('h2');

        myH2.textContent = trees[i].children;

        var superK1 = trees[i].children;
        for (var j = 0; j < superK1.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = superK1[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myList);
        
        section.appendChild(myArticle);
    }
}