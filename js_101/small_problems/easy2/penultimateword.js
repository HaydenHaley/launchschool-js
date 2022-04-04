function penultimate(words) {
  let wordsArray = words.split(' ');
  return wordsArray[wordsArray.length - 2]
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true