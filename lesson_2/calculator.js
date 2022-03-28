const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isValidNumber(number){
  return !(number.trimStart() === '' || Number.isNaN(Number(number)));
}

prompt("Welcome to Calculator!");

prompt("What's the first number?");
let firstNumber = readline.questionFloat();
prompt(`Great! You entered ${firstNumber}.`);

prompt("What's the second number?");
let secondNumber = readline.questionFloat();
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

prompt(`Result: ${output}.`);