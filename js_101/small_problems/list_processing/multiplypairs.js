function multiplyAllPairs(arrayOne, arrayTwo) {
  let newArray = [];
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      newArray.push(arrayOne[i] * arrayTwo[j]);
    }
  }
  return newArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]