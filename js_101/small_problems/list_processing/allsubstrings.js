function substrings(string) {
  let substrings = [];
  for (let i = 0; i <= string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      substrings.push(string.substring(i, j));
    }
  }
  return substrings;
}

console.log(substrings('abcde'));