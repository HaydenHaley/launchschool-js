const LETTER_BLOCKS = [
  ['B', 'O'],
  ['X', 'K'],
  ['D', 'Q'],
  ['C', 'P'],
  ['N', 'A'],
  ['G', 'T'],
  ['R', 'E'],
  ['F', 'S'],
  ['J', 'W'],
  ['H', 'U'],
  ['V', 'I'],
  ['L', 'Y'],
  ['Z', 'M']
];

function isBlockWord(word) {
  word = word.toUpperCase();
  for (let i = 0; i < LETTER_BLOCKS.length; i++) {
    if (word.includes(LETTER_BLOCKS[i][0]) && word.includes(LETTER_BLOCKS[i][1]))
      return false;
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true