function swapLetters(word) {
  // no point in flipping a word when it would be the same
  if (word.length <= 1) return word;

  let charArray = word.split('');
  let firstLetter = charArray[0];
  charArray[0] = charArray[charArray.length - 1];
  charArray[charArray.length - 1] = firstLetter;
  return charArray.join('');
}

function swap(string) {
  let words = string.split(' ');
  words = words.map(swapLetters);
  return words.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"