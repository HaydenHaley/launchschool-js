function fibonacci(places) {
  let value = 1;
  let valueLast = 1;
  for (let index = 2; index < places; index++) {
    let valStor = value;
    value += valueLast;
    valueLast = valStor;
  }
  return value;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050