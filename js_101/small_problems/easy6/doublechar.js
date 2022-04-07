function repeatOnlyConsonant(char) {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  if (consonants.includes(char.toLowerCase()))
    return char.repeat(2);
  else
    return char;
}

function repeater(string) {
  return string.split('').map(char => char.repeat(2)).join('');
}

function doubleConsonants(string) {
  return string.split('').map(repeatOnlyConsonant).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""