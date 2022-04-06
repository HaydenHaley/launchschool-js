function multiplicativeAverage(numberArray) {
  let multiplied = numberArray.reduce((previousValue, currentValue) => previousValue * currentValue);
  return (multiplied / numberArray.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));