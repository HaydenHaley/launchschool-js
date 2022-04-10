function fibonacci(places) {
  if (places === 1 || places === 2) return 1; // manually setting the first two values
  return fibonacci(places - 1) + fibonacci(places - 2)
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765