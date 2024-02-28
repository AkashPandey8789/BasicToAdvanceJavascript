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