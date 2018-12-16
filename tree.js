
var header = document.querySelector('header');
//var body = document.querySelector('body');

var requestURL = 'https://github.com/Etollo/json/blob/master/treeBase.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'text';
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

    var myArticle = document.createElement('article');
    var myList = document.createElement('ul');
    
    myArticle.appendChild(myList);
    
    section.appendChild(myArticle);
}
// function showTree(typeA) {
//     var trees = typeA.title;

//     for (var i = 0; i < trees.length; i++) {
//         var 
//     }
// }