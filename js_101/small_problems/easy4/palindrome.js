function isPalindrome(string, caseSensitive = false, ignoreSpecialCharacters = true) {
  string = String(string); // to handle numbers

  if (!caseSensitive) {
    string = string.toLowerCase();
  }

  if (ignoreSpecialCharacters) {
    string = string.replace(/[^\w]/gi, '');
  }

  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[string.length - index - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // true (case does not matter)
console.log(isPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isPalindrome('356653'));              // true
console.log(isPalindrome('356a653'));             // true
console.log(isPalindrome('123ab321'));            // false
console.log(isPalindrome(34543));                 // true
console.log(isPalindrome(123210));                // false
console.log(isPalindrome(22));                    // true
console.log(isPalindrome(5));                     // true