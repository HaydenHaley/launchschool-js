const readline = require('readline-sync');
const fs = require('fs');
const language = process.argv[2] ? process.argv[2] : 'en';

function prompt(message) {
  // gets string by the current language type
  let messageText = languageInfo[language][message];
  console.log(`=> ${messageText}`);
}

function isValidNumber(number){
  return !(number.trimStart() === '' || Number.isNaN(Number(number)));
}

function getValidNumber() {
  let number;
  while (number === undefined) {
    number = readline.question();
    if (isValidNumber(number)) {
      return Number(number);
    } else {
      prompt("Sorry, that isn't a valid number.");
      number = undefined;
    }
  }
}

/* program starts here */

// checks if the language has a config file. if not, prints an error message. If undefined, sets to the default, english.
// If no config file exists at all, warn the user and quit.

let languageFile = fs.readFileSync('calculatorMessages.json');
let languageInfo = JSON.parse(languageFile);

console.log(`The selected language is ${language}`);
prompt("Welcome to Calculator!");

let wantsToContinue = true;
while (wantsToContinue) {
  prompt("What's the first number?");
  let firstNumber = getValidNumber();
  prompt(`Great! You entered ${firstNumber}.`);

  prompt("What's the second number?");
  let secondNumber = getValidNumber();
  prompt(`Great! You entered ${secondNumber}.`);

  let operation;
  let output;

  while (output === undefined) {
    prompt('What operation would you like to perform?\n1) Add \n2) Subtract \n3) Multiply \n4) Divide');
    operation = readline.questionInt();
    switch (operation) {
      case 1:
        output = firstNumber + secondNumber;
        break;
      case 2:
        output = firstNumber - secondNumber;
        break;
      case 3:
        output = firstNumber * secondNumber;
        break;
      case 4:
        output = firstNumber / secondNumber;
        break;
      default: 
        prompt('Sorry, that\'s not a valid operation type.');
        break;
    }
  } 

  prompt(`Result: ${output}. Would you like to make another calculation? Enter y to continue, or n otherwise.`);
  wantsToContinue = readline.question() === 'y';
}

prompt("Goodbye!");