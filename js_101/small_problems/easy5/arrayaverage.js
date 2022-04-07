function average(array) {
  let total = array.reduce((prevvalue, currentvalue) => prevvalue + currentvalue);
  return Math.floor(total / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));