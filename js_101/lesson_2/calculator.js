const readline = require('readline-sync');
const fs = require('fs');

// if the user gave a particular language, launches in that language.
// otherwise, picks the OS language.
const LANGUAGE = process.argv[2] ??
                  Intl.DateTimeFormat()
                  .resolvedOptions()
                  .locale.split('-')[0];

const MESSAGES = require('./calculatorMessages.json');

function prompt(message, extraArg) {
  // gets string by the current language type
  let messageText = MESSAGES[LANGUAGE][message];
  if (messageText === undefined) {
    console.log(`There was no message value for the key ${message} in language ${LANGUAGE}.`);
    return;
  }
  if (extraArg)
    console.log(`=> ${messageText} ${extraArg}`);
  else
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
      prompt('invalidnumber');
      number = undefined;
    }
  }
}

/* program starts here */

if (MESSAGES[LANGUAGE] === undefined) {
  console.log(`Could not read data for language ${LANGUAGE}.`);
  process.exit();
}

prompt('welcome');

let wantsToContinue = true;
while (wantsToContinue) {
  prompt('firstprompt');
  let firstNumber = getValidNumber();

  prompt('secondprompt');
  let secondNumber = getValidNumber();

  let operation;
  let output;

  while (output === undefined) {
    prompt('operationprompt');
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
        prompt('invalidoperation');
        break;
    }
  } 

  prompt('result', output);
  prompt('repeatprompt');
  wantsToContinue = readline.question() === 'y';
}

prompt('goodbye');