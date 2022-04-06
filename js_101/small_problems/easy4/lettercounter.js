function wordSizes(words) {
  let wordSizeCounter = {};
  if (!words) return wordSizeCounter; // catches empty strings

  words = words.replace(/[^\w\s]/gi, '');

  let splitWords = words.split(' ');
  splitWords.forEach(element => wordSizeCounter[element.length] = (wordSizeCounter[element.length] ? wordSizeCounter[element.length] + 1 : 1));
  return wordSizeCounter;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));