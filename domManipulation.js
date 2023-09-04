'use strict';
console.log('dom');
console.log(document.querySelector('.message').textContent);
/*
Dom- Document object model is structured representation of html 
documents . Allows javascript to access html elements and style to manipulate them.

Note:- DOM is not javascript/it's part rather it is created by browsers.These are web apis created by browsers, DOM methods and properties are all part of these apis and using these apis Javascript can manipulate DOM.
*/

//setting content..
// document.querySelector(".message").textContent='Correct Number 🎉';
// document.querySelector('.showNumber').textContent=13;
// console.log(document.querySelector('.inputValue').value);
// document.querySelector('.inputValue').value=23;

let secreatNumber=Math.trunc(Math.random()*20)+1;
let curScore=20;
let allScores=[];
document.querySelector('.resetBtn').classList.add('disabled');
const calcHighScore=function(allScores){
    console.log(allScores);
    let max=-1;
    for(let i=0;i<allScores.length;i++)
    {
        if(max<allScores[i])
        {
            max=allScores[i];
        }
        return max;
    }
}
const checkLost=function(curScore)
{
    if(curScore<=0)
    {
        document.querySelector('.message').textContent='❌You Lost The Game!';
        document.querySelector('#score').textContent=0;
        document.querySelector('body').style.backgroundColor='pink';
    }
}
document.querySelector('#score').textContent=curScore;
document.querySelector('.numCheckBtn').addEventListener(
    'click',function(){
        const guess= Number(document.querySelector('.inputValue').value);
        console.log(typeof guess);

        if(!guess)
        {
            document.querySelector('.message').textContent='⛔ No Number!';
        }
        else
        {
            if(guess==secreatNumber)
            {
                document.querySelector('.message').textContent='✅Correct guess!';
                document.querySelector('.showNumber').textContent=guess;
                curScore++;
                allScores.push(curScore);
                document.querySelector('#score').textContent=curScore;
                document.querySelector('#highScore').textContent=calcHighScore(allScores);
                document.querySelector('body').style.backgroundColor='#60b347';
                document.querySelector('.showNumber').style.width='20%';
                document.querySelector('.showNumber').style.textAlign='center';
                document.querySelector('.numCheckBtn').classList.add('disabled');
                document.querySelector('.inputValue').classList.add('readonly');
                document.querySelector('.resetBtn').classList.remove('disabled');
            }
            else if(guess>secreatNumber)
            {
                document.querySelector('.message').textContent='👇Go a bit lower!';
                curScore--;
                document.querySelector('#score').textContent=curScore
                checkLost(curScore);
            }else{
                document.querySelector('.message').textContent='☝️ Guess a bit high!';
                curScore--;
                document.querySelector('#score').textContent=curScore
                checkLost(curScore);
            }
            // guess<secreatNumber?(document.querySelector('.message').textContent='☝️ Guess a bit high!',
            // checkLost(curScore))
            // :
            // ((guess>secreatNumber)
            // ?(document.querySelector('.message').textContent='👇Go a bit lower!',
            // curScore--,
            // document.querySelector('#score').textContent=curScore)
            // :(
            //     document.querySelector('.message').textContent='✅Correct guess!',
            //  document.querySelector('.showNumber').textContent=guess,
            //  curScore++,
            // document.querySelector('#score').textContent=curScore,
            // document.querySelector('body').style.backgroundColor='#60b347',
            // document.querySelector('.showNumber').style.width='20%',
            // document.querySelector('.showNumber').style.textAlign='center'
            // ))
            
            // ;

        }
    }
);

document.querySelector('.resetBtn').addEventListener('click',function(){
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.showNumber').textContent='?';
    document.querySelector('.inputValue').value='';
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.showNumber').style.width='9%'
    secreatNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.numCheckBtn').classList.remove('disabled');
     document.querySelector('.resetBtn').classList.add('disabled');
     curScore=20;
});
