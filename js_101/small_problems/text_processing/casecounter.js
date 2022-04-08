function letterCaseCount(string) {
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
  return stringObject;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }