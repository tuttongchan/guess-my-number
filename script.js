'use strict';

/*
// ".textContent" property used to select text
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// ".value" property is used for <input> element
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/




// IMPLEMENTING GAME LOGIC

// "Math" is an object with a lot of different methods
// ".random" gives a random number b/w 0 and 1
// ".trunc" makes a whole number and "* 20" will make it b/w 0 and 19
// +1 is need to make it into 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
} 

// function will only be called when event occurs
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // "if(!guess)" means "if there is no guess"
  // "!" - Not Operator

  // WHEN THERE IS NO INPUT
  if (!guess) {
    //document.querySelector('.message').textContent = '🚫 No number!';
    displayMessage('🚫 No number!');

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');    
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    } 

  

    // WHEN GUESS IS WRONG

    // "!==" means "when guess is different from secretNumber"
    } else if(guess !== secretNumber) {
        if (score > 1) {
            // Ternary Operator
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            // "score--;" is the same thing
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.score').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.message').textContent = 0;
        }
    }

    // WHEN GUESS IS TOO HIGH
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       // "score--;" is the same thing
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.score').textContent = '💥 You lost the game!';
//       document.querySelector('.message').textContent = 0;
//     }

    // WHEN GUESS IS TOO LOW
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       // "score--;" is the same thing
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.score').textContent = '💥 You lost the game!';
//       document.querySelector('.message').textContent = 0;
//     }
//   }
});

 document.querySelector('.again').addEventListener('click', function() {
     score = 20;
     secretNumber = Math.trunc(Math.random() * 20) + 1;

     // document.querySelector('.message').textContent = 'Start guessing...';
     displayMessage('Start guessing...')
     document.querySelector('.score').textContent = score;
     document.querySelector('.number').textContent = '?';
     document.querySelector('.guess').value = '';

     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem';
});


