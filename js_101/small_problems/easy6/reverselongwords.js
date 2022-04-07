function reverseWords(words) {
  // so map doesn't get too cluttered
  function reverseIfBig(word) {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  }

  return words.split(' ').map(reverseIfBig).join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"