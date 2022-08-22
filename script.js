'use strict';

let btnCheck = document.querySelector('.check');
let message = document.querySelector('.message');
let number = Math.trunc(Math.random()*20) + 1;
let  secrNumber = document.querySelector('.number');
let score = 20;
let scoreCount = document.querySelector('.score');
let highScore = 0;
let btnAgain = document.querySelector('.again');

btnCheck.addEventListener('click', function() {
    
    
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    //when theres no input
    if (!guess) {
        message.textContent = 'no number';
        
        //when player wins    
    } else if (guess == number) {
        message.textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        secrNumber.style.width = '30rem'
        secrNumber.textContent = number;
        
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }
        //when guess is too high
    } else if (guess > number) {
        if (score > 1) {
            message.textContent = 'too high';
            score--;
            scoreCount.textContent = score;
        } else {
            message.textContent = 'Game Over:(';
            scoreCount.textContent = 0;
        } 
       
        //when guess is too loaw
    } else if (guess < number) {
        if (score > 1) {
            message.textContent = 'too low';
            score--;
            scoreCount.textContent = score;
        } else {
            message.textContent = 'Game Over:(';
            scoreCount.textContent = 0;
        } 
        

    }

    btnAgain.addEventListener('click', function() {
        
        score = 20;
        document.querySelector('.guess').value = ''
        number = Math.trunc(Math.random()*20) + 1;
        message.textContent = 'Start guessing...';
        scoreCount.textContent = score;
        
        secrNumber.textContent = '?';
        secrNumber.style.width = '15rem'
        document.querySelector('body').style.backgroundColor = '#222'
        
    })
   
});