function centerOf(string) {
  let charArray = string.split('');
  if (charArray.length % 2 === 0) {
    return charArray[(charArray.length / 2) - 1] + charArray[charArray.length / 2]
  }
  return charArray[Math.floor(charArray.length / 2)];
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"