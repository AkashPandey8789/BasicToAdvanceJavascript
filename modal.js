'use strict';
const modal=document.querySelector('.model');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnOpenModal=document.querySelectorAll('.modelBtn');
console.log(btnOpenModal);

for(let i=0;i<btnOpenModal.length;i++)
{
    console.log(btnOpenModal[i].textContent);
    btnOpenModal[i].addEventListener('click',function(){
        modal.classList.remove('d-none');
    });
}
console.log(btnCloseModal);
btnCloseModal.addEventListener('click',function(){
    modal.classList.add('d-none');
})
overlay.addEventListener('click',function(){
    modal.classList.add('d-none');
});

//working with keypress event.. esc key press..
document.addEventListener('keydown',function(e){
    
    if(e.key==="Escape" && !modal.classList.contains('d-none')){
        modal.classList.add('d-none');
        console.log(e.key);
    }   
});