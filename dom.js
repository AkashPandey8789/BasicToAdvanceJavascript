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