function cleanUp(dirtyString) {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz ';

    // splits string into char array
    let charArray = dirtyString.split('');

    let index = 0;
    while (index < charArray.length) {
      // checks if this is a bad character
      let dirtyChars = 0;
  
      // if it is, it keeps going until it finds one that isn't dirty, or until it hits the end of the array.
      while (charArray[dirtyChars + index] !== undefined && !ALPHABET.includes(charArray[dirtyChars + index].toLowerCase())) {
        dirtyChars++;
      }
      
      // remove the bad
      if (dirtyChars > 0) {
        charArray.splice(index, dirtyChars, ' ');
      }
      
      // check the next index of the modified array and repeat
      index++;
    }
    return charArray.join('');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "