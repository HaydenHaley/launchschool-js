function numbersToArray(numbers) {
  let numbersArray = [];

  // if the number is zero, skip the math and just return zero
  if (numbers === 0) {
    numbersArray[0] = 0;
    return numbersArray;
  }

  // gets the last digit, removes it, then shifts the number and continues
  while (numbers > 0) {
    let endDigit = numbers % 10;
    numbersArray.unshift(endDigit);
    numbers -= endDigit;
    numbers /= 10;
  }

  return numbersArray;
}

function signedIntegerToString(integerValue) {
  const NUMBERS = '0123456789';
  let stringValue = [];
  let numbersArray = numbersToArray(Math.abs(integerValue));


  for (let index = 0; index < numbersArray.length; index++) {
    stringValue.push(NUMBERS.charAt(numbersArray[index]))
  }

  if (Math.sign(integerValue) === -1) {
    stringValue.unshift('-');
  } else if (Math.sign(integerValue) === 1) {
    stringValue.unshift('+');
  }

  return stringValue.join('');
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");