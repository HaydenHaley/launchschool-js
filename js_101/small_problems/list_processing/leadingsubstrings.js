function leadingSubstrings(string) {
  let returnValue = [];
  for (let index = 1; index <= string.length; index++) {
    returnValue.push(string.substring(0, index));
  }
  return returnValue;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]