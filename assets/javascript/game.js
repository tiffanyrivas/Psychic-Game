var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guesses = 10;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

  // this is to check if all the letter in the array alphabet will come up
  console.log(computerGuess);
  

  

  // This logic determines the outcome of the game (win/loss/guesses), and increments the appropriate number
  if (userGuess === computerGuess) {
    wins++;
    guesses--;
  }
  else {
      losses++;
      guesses--;
      
    }
    if (guesses === 0){
        alert("You ran out of guesses!");
        guesses = 10;
        wins = 0;
        losses = 0;

    }
   
    

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesText.textContent = "guesses: " + guesses;
    
  
};