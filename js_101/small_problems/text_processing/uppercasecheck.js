function isUppercase(string) {
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index].toUpperCase()) {
      return false;
    }
  }
  return true;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true