const readline = require('readline-sync');

function isValidNumber(number){
  return !(number.trimStart() === '' || Number.isNaN(Number(number)));
}

console.log('Welcome to the loan calculator!');

// ask loan total amount.
console.log('To start, what\'s the total amount of the loan?');
let loanAmount;
while (loanAmount === undefined) {
  let response = readline.question();
  if (!isValidNumber(response)) {
    console.log("Sorry, that doesn't seem to be a number. Please try again.");
    continue;
  } 

  response = Number(response);

  if (response <= 0) {
    console.log("That doesn't seem right. A loan must be more than 0.");
  } else {
    console.log(`Ok, the loan total is $${response}.`);
    loanAmount = response;
  }
}

// ask interest rate. interest rate should be expressed as a percentage, aka lower than 0
console.log("\nWhat's the APR of the loan? No need to type the percentage sign - if it's 10%, just type 10.");
let monthlyInterestRate;
while (monthlyInterestRate === undefined) {
  let response = readline.question();
  if (!isValidNumber(response)) {
    console.log("Sorry, that doesn't seem to be a number. Please try again.");
    continue;
  } 
  
  response = Number(response);

  if (response < 0) {
    console.log("Negative interest? Sorry, you must be looking for an investment calculator.")
  } else if (response === 0) {
    console.log("No interest? Nice!");
    monthlyInterestRate = (response / 100) / 12; // converts to decimal then to monthly
  } else {
    console.log(`Ok, the interest rate is ${response}%.`);
    monthlyInterestRate = (response / 100) / 12; // converts to decimal then to monthly
  }
}

// ask loan duration, in months. 
console.log("\nLast thing: how many months are in the loan?");
let monthsInLoan;
while (monthsInLoan === undefined) {
  let response = readline.question();
  if (!isValidNumber(response)) {
    console.log("Sorry, that doesn't seem to be a number. Please try again.");
    continue;
  }
  
  response = Number(response);
  if (response <= 0) {
    console.log("No months? That doesn't really count as a loan.");
  } else {
    console.log(`Ok, you have ${response} months in the loan.`);
    monthsInLoan = response;
  }
}

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-monthsInLoan))));

console.log(`Here's the final result: \nYour monthly payment will be $${monthlyPayment.toFixed(2)}.`);