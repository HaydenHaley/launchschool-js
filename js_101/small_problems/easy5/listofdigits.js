function digitList(digits) {
  let returnArray = [];

  while (digits > 0) {
    let lastDigit = digits % 10;
    returnArray.unshift(lastDigit);
    digits -= lastDigit;
    digits /= 10;
  }

  return returnArray;
}

console.log(digitList(12345));
console.log(digitList(7));
console.log(digitList(375290));
console.log(digitList(444));