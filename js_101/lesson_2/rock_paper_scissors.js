const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
Object.freeze(VALID_CHOICES);

function prompt(message) {
  console.log(`=> ${message}`);
}

function isPlayerWinner(playerMove, computerMove) {
  return (playerMove === 'rock' && computerMove === 'scissors') ||
          (playerMove === 'paper' && computerMove === 'rock') ||
          (playerMove === 'scissors' && computerMove === 'paper')
}

// returns true for the full word or the first letter of a word.
function isValidChoice(choice) {
  return VALID_CHOICES.includes(choice);
}

/* program starts here */

let wantsToContinue = true;
while (wantsToContinue) {
  prompt('Choose one: ' + VALID_CHOICES.join(', '));
  let choice = readline.question();

  while (!isValidChoice(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let computerChoice = VALID_CHOICES[Math.floor(Math.random() * VALID_CHOICES.length)];

  prompt(`You chose ${choice}, the computer chose ${computerChoice}.`);
  if (choice === computerChoice) {
    prompt("It's a tie!");
  } else if (isPlayerWinner(choice, computerChoice)) {
    prompt("You win!");
  } else {
    prompt("Computer wins!");
  }

  prompt("Would you like to play again?");
  let answer = readline.question();
  if (answer[0] !== 'y') {
    prompt("Goodbye, and thanks for playing!");
    wantsToContinue = false;
  }
}