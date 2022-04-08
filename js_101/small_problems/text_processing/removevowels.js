function removeVowels(stringArray) {
  return stringArray.map(stripVowels);
}

function stripVowels(word) {
  const VOWELS = 'aeiou';
  let charArray = word.split('');
  return charArray.filter(char => !VOWELS.includes(char.toLowerCase())).join('');
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]