const readline = require('readline-sync');

console.log("Welcome to Calculator!");

console.log("What's the first number?");
let firstNumber = readline.questionFloat();
console.log(`Great! You entered ${firstNumber}.`);

console.log("What's the second number?");
let secondNumber = readline.questionFloat();
console.log(`Great! You entered ${secondNumber}.`);

console.log('What operation would you like to perform?\n1) Add \n2) Subtract \n3) Multiply \n4) Divide')
let operation = readline.questionInt();

let output;

switch (operation){
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
  default: console.log('Sorry, that\'s not a valid operation type.');
}
if (typeof output === 'undefined')
  console.log('The program could not complete with the given input. Please try again.');
else
  console.log(`Result: ${output}.`);