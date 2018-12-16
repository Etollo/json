
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

        var childrenK1 = trees[i].k1;
        for (var j = 0; j < childrenK1.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = childrenK1[j];
            myLi.appendChild(listItem);
        }
        header.appendChild(myLi);
    }
//     var trees = typeA.children;

//     for (var i = 0; i < trees.length; i++) {
//         var myArticle = document.createElement('article');
//         var myList = document.createElement('li');
//         var myH2 = document.createElement('h2');

//         myH2.textContent = trees[i].children;

//         var superK1 = trees[i].children;
//         for (var j = 0; j < superK1.length; j++){
//             var listItem = document.createElement('li');
//             listItem.textContent = superK1[j];
//             myList.appendChild(listItem);
//         }
//         myArticle.appendChild(myH2);
//         myArticle.appendChild(myList);
        
//         section.appendChild(myArticle);
//     }
 }