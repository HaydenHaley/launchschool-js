function isMultipleOf(number, divisor) {
  return number % divisor === 0;
}

function multisum(number) {
  let sum = 0;
  for (let index = 1; index <= number; index++) {
    if (isMultipleOf(index, 3) || isMultipleOf(index, 5)) {
      sum += index;
    }
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168