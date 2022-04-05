function stringToInteger(numberString) {
  const NUMBERS = '0123456789';
  let numberValue = 0;
  for (var i = numberString.length - 1; i >= 0; i--) {

    // cheating? Absolutely.
    let intValue = NUMBERS.indexOf(numberString[i]);

    // zero when at the end of the string, multiplied by 10 for every position
    let placeMultiplier = 10 ** Math.abs(i - (numberString.length - 1));

    // If at the start of the string, makes sure it doesn't multiply by zero
    numberValue += intValue * placeMultiplier;
  }
  return numberValue;
}

function stringToSignedInteger(numberString) {
  if (numberString[0] === '-') {
    return -stringToInteger(numberString.slice(1));
  } else if (numberString[0] === '+') {
    return stringToInteger(numberString.slice(1));
  } else {
    return stringToInteger(numberString);
  }
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true