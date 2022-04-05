function isPalindrome(string) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[string.length - index - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true