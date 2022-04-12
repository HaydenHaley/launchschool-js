const readline = require('readline-sync');
const EMPTY = ' ';
const PLAYERPICK = 'X';
const COMPUTERPICK = 'O';

function resetGame() {
  entries = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
  ];
}

function displayBoard() {
  console.log('');
  console.log('     |     |');
  console.log('  ' + entries[0][0] + '  |  ' + entries[0][1] + '  |  ' + entries[0][2]);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log('  ' + entries[1][0] + '  |  ' + entries[1][1] + '  |  ' + entries[1][2]);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log('  ' + entries[2][0] + '  |  ' + entries[2][1] + '  |  ' + entries[2][2]);
  console.log('     |     |');
  console.log('');
}

// returns the input parsed as an array if valid, else null
function tryParseInput(inputString) {
  // makes sure the input is exactly two characters
  if (!inputString || inputString.trim().length !== 2) {
    return null;
  }

  // changes to account for 0-index
  let digits = inputString.split('').map(d => Number(d) - 1);

  // makes sure all input is numbers
  if (digits.some(val => isNaN(val))) {
    return null;
  }

  return digits;
}

function getValidResponse() {
  let response;
  while (!response) {

    // checks if the input is valid
    response = tryParseInput(readline.question());

    if (!response) {
      console.log('Sorry, that isn\'t a valid selection.');
    }

    // checks if the space is already filled
    if (entries[response[0]][response[1]] !== EMPTY) {
      response = null;
      console.log('Sorry, that space is already taken.');
    }

  }
  return response;
}

function checkGameEnd() {
  function hasThree() {
    let checked;

    // checks rows
    for (let index = 0; index < 3; index++) {
      checked = [entries[index][0], entries[index][1], entries[index][2]];
      if (checked.every(val => val !== EMPTY)) return checked[0];
    }

    // checks columns
    for (let index = 0; index < 3; index++) {
      checked = [entries[0][index], entries[1][index], entries[2][index]];
      if (checked.every(val => val !== EMPTY)) return checked[0];
    }

    // checks diagonals
    checked = [entries[0][0], entries[1][1], entries[2][2]];
    if (checked.every(val => val !== EMPTY)) return checked[0];

    checked = [entries[0][2], entries[1][1], entries[2][0]];
    if (checked.every(val => val !== EMPTY)) return checked[0];

    // if no match is found, nobody has won yet
    return null;
  }

  function isGameTied() {
    return entries.flat().every(val => val !== EMPTY);
  }

  let maybeWinner = hasThree();
  if (maybeWinner) {
    if (maybeWinner === PLAYERPICK) {
      console.log("You win! Great work!");
    } else {
      console.log("Computer wins! Sorry, better luck next time!");
    }
    return true;
  } else if (isGameTied()) {
    console.log("A tie? That's no fun, try again!");
    return true;
  }
  return false;
}

function computerMove() {

}

// initialize board
let entries;
let playAgain = true;

// outer replay loop
while (playAgain) {
  resetGame();
  displayBoard();

  console.log("Welcome to tic tac toe! To make a move, input the row and column - for example, the middle square is 22.");

  // inner move loop
  let gameOver = false;
  while (!gameOver) {

    let response = getValidResponse();
    entries[response[0]][response[1]] = PLAYERPICK;
    displayBoard();
    // checks if player won
    gameOver = checkGameEnd();
    if (gameOver) break;

    // computer makes a move
    displayBoard();
    gameOver = checkGameEnd();
  }

  console.log("Would you like to play again? Type yes or y for another round.");
  let response = readline.question();
  playAgain = ['y', 'yes'].includes(response.toLowerCase());
}

console.log("Thanks for playing!");