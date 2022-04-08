function substrings(string) {
  let substrings = [];
  for (let i = 0; i <= string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      substrings.push(string.substring(i, j));
    }
  }
  return substrings;
}

function isPalindrome(string) {
  if (string.length <= 1) return false; // single characters and empty strings are not palindromes
  let checkLength = Math.floor(string.length / 2); // prevents unneeded double checking
  for (let index = 0; index < checkLength; index++) {
    if (string[index] !== string[string.length - index - 1]) {
      return false;
    }
  }
  return true;
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]