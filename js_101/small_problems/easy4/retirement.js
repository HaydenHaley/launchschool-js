const readline = require('readline-sync');

console.log("What is your age?");
let age = readline.questionInt();

console.log("At what age would you like to retire?");
let retirementAge = readline.questionInt();

let currentYear = new Date().getFullYear();

console.log(`It is currently ${currentYear}. You will retire in ${currentYear + (retirementAge - age)}.`)