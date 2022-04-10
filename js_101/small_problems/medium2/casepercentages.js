function letterPercentages(string) {
  let stringObject = { lowercase: 0, uppercase: 0, neither: 0 };
  for (let index = 0; index < string.length; index++) {
    if (!/[a-zA-Z]/.test(string[index])) {
      stringObject.neither++;
    } else if (string[index] === string[index].toUpperCase()) {
      stringObject.uppercase++;
    } else {
      stringObject.lowercase++;
    }
  }
  let lowercasePercentage = ((stringObject.lowercase / string.length) * 100).toFixed(2);
  let uppercasePercentage = ((stringObject.uppercase / string.length) * 100).toFixed(2);
  let neitherPercentage = ((stringObject.neither / string.length) * 100).toFixed(2);
  return { lowercase: lowercasePercentage, uppercase: uppercasePercentage, neither: neitherPercentage };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }