const CALCULATED_VALUES = [0, 1, 1];

function fibonacci(places) {
  if (CALCULATED_VALUES[places] !== undefined) return CALCULATED_VALUES[places]; // manually setting the first two values
  let value = fibonacci(places - 1) + fibonacci(places - 2);
  CALCULATED_VALUES[places] = value;
  return value;
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 12586269025