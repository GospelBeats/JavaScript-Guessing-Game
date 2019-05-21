// Guess Random Number Between 1 and 6 Game

let correctGuess = false;

// generate random number and put in variable
let randomNumber = Math.floor(Math.random() * 6) + 1;

// ask user to enter a number
let guess = prompt("Guess a number between 1 and 6");

// convert string to int and assigned to variable
let guessNew = parseInt(guess);

// check if user guessed the number
if (guessNew === randomNumber) {
  correctGuess = true;
} 

// check if guess is less than the random number
else if (guessNew < randomNumber) {
  
  // ask user to try again
  let guessMore = prompt('<p>You guessed too low! Try Again!</p>');
  
  // check if second guess is the random number
  if (parseInt(guessMore) === randomNumber) {
  correctGuess = true;
  }  
}

// check if guess is greater than the random number
else if (guessNew > randomNumber) {
  
  // ask user to try again
  let guessLess = prompt('<p>You guessed too high! Try Again!</p>'); 
  
  // check if second guess is the random number
  if (parseInt(guessLess) === randomNumber) {
  correctGuess = true;
  }   
}

// if user guess correct message
if (correctGuess){
 document.write('<p>You guessed the number!</p>');
} 

// if user didn't guess correctly
else {
 document.write('<p>Sorry. The number was ' + randomNumber + '</p>'); 
}