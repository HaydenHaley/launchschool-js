function sumSquareDifference(count) {
  return squareOfSums(count) - sumOfSquares(count);
}

function squareOfSums(count) {
  let intArray = Array(count).fill(1).map((value, index) => value + index);
  let returnValue = intArray.reduce((prev, cur) => prev + cur) ** 2;
  return returnValue;
}

function sumOfSquares(count) {
  let intArray = Array(count).fill(1).map((value, index) => value + index);
  let returnValue = intArray.map(value => value ** 2).reduce((prev, cur) => prev + cur);
  return returnValue;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150