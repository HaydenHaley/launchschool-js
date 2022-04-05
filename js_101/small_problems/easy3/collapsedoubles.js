function crunch(string) {
  // splits string into char array
  let charArray = string.split('');

  let index = 0;
  while (index < charArray.length) {
    // looks at the first character, checks if the next one is the same.
    let checkedChar = charArray[index];
    let charOccurances = 0;

    // if it is, it keeps going until it finds one that isn't identical.
    while (charArray[charOccurances + index] === checkedChar) {
      charOccurances++;
    }

    // remove every instance except the first
    charArray.splice(index, charOccurances - 1);
    
    // check the next index of the modified array and repeat
    index++;
  }
  return charArray.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""