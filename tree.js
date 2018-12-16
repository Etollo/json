
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

        //myLi.id('myUL');
        myLi.classList.add('nested');

        myLi.textContent = trees[i].name;

        var childrenK1 = trees[i].k1;
        for (var j = 0; j < childrenK1.length; j++){
            var listItem = document.createElement('li');
            

            listItem.textContent = childrenK1[j];
            myLi.appendChild(listItem);

            
            //listItem.classList.add('caret');
        }
        header.appendChild(myLi);
        
    }
 }
 var toggler = document.getElementsByClassName("caret");
 
 for (var i = 0; i < toggler.length; i++) {
   toggler[i].addEventListener("click", function() {
     this.parentElement.querySelector(".nested").classList.toggle("active");
     this.classList.toggle("caret-down");
   });
 }
 
