const readline = require('readline-sync');

console.log('Please enter an integer greater than 0.');
let integer = readline.prompt();

console.log('Enter "s" to compute the sum, or "p" to compute the product');
let varient = readline.prompt();

let result = 1;
for (let index = 2; index <= integer; index++) {
  if (varient === 's') {
    result += index;
  } else if (varient === 'p') {
    result *= index;
  }
}

let operationName = varient === 's' ? 'sum' : 'product';
console.log(`The ${operationName} of the integers between 1 and ${integer} is ${result}.`);