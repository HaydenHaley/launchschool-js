const readline = require('readline-sync');

console.log("What is the bill?");
let bill = Number(readline.prompt());

console.log("What is the tip percentage?")
let tipPercentage = Number(readline.prompt());

let tipAmount = (bill * (tipPercentage * 0.01));
let billPlusTip = bill + tipAmount;

console.log(`With a $${tipAmount.toFixed(2)} tip, the total is $${billPlusTip.toFixed(2)}.`);