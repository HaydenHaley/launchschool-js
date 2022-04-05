// calculates the fib number
// converts to string, compares length to input 
// if not the same length, increase index and repeat

function findFibonacciIndexByLength(desiredLength) {
  let index = 2n;
  let currentFib = 1n;
  let previousFib = 1n;
  while (String(currentFib).length < desiredLength) {
    let fibStorage = currentFib;
    currentFib += previousFib;
    previousFib = fibStorage;
    index++;
  }
  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.