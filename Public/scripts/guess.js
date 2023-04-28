'use strict';
/*
console.log(document.querySelector('.message'));
document.querySelector('.message').textContent = "🎉 Correct Number!"; // Access the element of html with class message,
                                                                       // which is "Start Guessing!" and changes it to "Correct Number!"
document.querySelector('.number')
document.querySelector('.score')

documnet.querySelector('.guess').value = 23; // It access the input box and changes the value to 23.
                                             // .value changes numbers/values.
*/

//Now to make the check button actually check the value and give us a result we do this,
//for that we use addEventListener, in this case we give the value 'click' into (), because we want it to work when we click on it.
//secondly we will write a function to make it do what we want it to do.

let secretN = Math.trunc(Math.random() * 20) + 1;// document.querySelector('.number').textContent = secretN; // Now just to show that it works we pass it to the secret number location where it says: "?"
let score = 20; // we start with a score of 20 point. Now for each wrong answer we will decrease the score by one,
               //  and so we define our initial score of "20" in a variable.
let highscore = 0; // We will create a function to store the highest score in the game in the highscore text area.


document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value; // this is the function and it will take the value that we enter in the box and
    // in this case log it into the console to check that it actually do something.
    console.log(guess);

    //When no number are entered:

    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No Number Entered!"; // if i click now on the check button this message will show up 
        // instead of "start guessing".
    }

    //When player guessed correct number:

    else if (guess == secretN) // Now if the input number is equal to the secret number, the we will have guessed the number and we will show the message " correct number!"
    {
        document.querySelector('.message').textContent = "🎉 Correct Number!";
        document.querySelector('body').style.backgroundColor = '#60b347'; // Will change the background color of the page once the player guesses the number,
        document.querySelector('.number').textContent = secretN; // Will show the secret number.
        document.querySelector('.number').style.width = '30rem'; // Will make the top number Bigger when the player guess the number.
        if (score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
        //When Number entered is greater then secret number:

    else if (guess > secretN) {
        if (score > 0) {
            document.querySelector('.message').textContent = "👎 Number is too High!";
            // will decrease the score by 1 point for each wrong answer:
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = "😔 You lost!";
        }

    }
        //When number entered is lower then secret number:

    else if (guess < secretN) {
        if (score > 0)
        {
            document.querySelector('.message').textContent = "👎 Number is too Low!";
            // will decrease the score by 1 point for each wrong answer:
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = "😔 You lost!";
        }
    }
}
);

// Challenge 1 Dom - Restore the page to original settings clicking on again button:

document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretN = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = "Start guessing...";
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.guess').value = ' ';
    
});