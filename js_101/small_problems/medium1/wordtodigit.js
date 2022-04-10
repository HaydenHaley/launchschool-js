function wordToDigit(string) {
  const WORD_VALUES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let index = 0; index < WORD_VALUES.length; index++) {
    const word = WORD_VALUES[index];
    string = string.replaceAll(word, String(index));
  }
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."