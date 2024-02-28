//DOM Manipulation

//GetElementById()
const title=document.getElementById('main-heading');
console.log(title);
//GetElementByClassName()

const movieListDiv=document.getElementsByClassName('movie-list');
console.log(movieListDiv);

const movieList=document.getElementsByClassName('list-movie');
console.log(movieList);
//getElementByTagName()

const liElements=document.getElementsByTagName('li');
console.log(liElements);


//querySelector()
//-->querySelector helps in selecting the first matching tag/id/class element...
const spider=document.querySelector('#spider');
console.log(spider);

const firstLiElement=document.querySelector('li');
console.log(firstLiElement);

//querySelectorAll()
//-->querySelectorAll helps in selecting all the matching tag/id/class elements...

const allLiElements=document.querySelectorAll('li');
console.log(allLiElements);


//styling elements..
title.style.color='Yellow';
const spiderMovie=document.querySelectorAll('#spider');
console.log(spiderMovie);
spiderMovie.forEach((movie)=>{
    movie.style.fontSize='2rem';
});


//Creating Elements...

const ulElement=document.querySelector('ul');
const liElement=document.createElement('li');

//adding text , there are three ways to add text..
//1.innerText --> the safest one.
//2.innerHtml --> it will show the inner Html also.
//3.textContent --> it shows the way text written in html, with indentation.
liElement.innerText='Avatar';
//adding element ...
ulElement.append(liElement);

//adding/modifying attribute...
liElement.setAttribute('id','avatarMovie');

//to get attribute..
console.log(liElement.getAttribute('id'));

//to remove attribute...
liElement.removeAttribute('id');


//classes adding and removing...

liElement.classList.add('list-item');
console.log(liElement.classList.contains('list-item'));
liElement.classList.remove('list-item');

//to remove an element we should have that element in some variable and then we can remove it...
liElement.remove(); // this will remove liElement from DOM.

//DOM Traversal...

//Parent Node Traversal

let ul=document.querySelector('ul');
console.log(ul);
console.log(`to get parent`,ul.parentNode);
console.log(`to get parent`,ul.parentElement);

console.log(`to get grand parent`,ul.parentNode.parentNode);
console.log(`to get grand parent`,ul.parentElement.parentElement);

const html=document.documentElement; // gives reference to html element..
console.log(html.parentNode);//it returns any kind of node..
console.log(html.parentElement) // it returns elements if it exists eles returns null.
//Child Node Traversal

console.log(ul.childNodes); // nodes are text indentations also , so all are counted..
console.log(ul.firstChild);
console.log(ul.lastChild);

//to select elements..
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

//Sibling Node Traversal
const h3Element=document.querySelector('h3');
console.log(h3Element);

console.log(h3Element.previousElementSibling);
console.log(h3Element.nextElementSibling);


//Event Listeners..
const enterBtn=document.querySelector('button');
function alertFunc(){
    alert('I love Javascript!!');
}
enterBtn.addEventListener('click',alertFunc);

const revealBtn=document.querySelector('#btn-reveal');

const hiddenContent=document.querySelector('.hidden-content');

function hideContent(){
    if(hiddenContent.classList.contains('button-reveal')){
        hiddenContent.classList.remove('button-reveal');
    }else{
        hiddenContent.classList.add('button-reveal');
    }
}

revealBtn.addEventListener('click',hideContent);