function sum(digits) {
  return String(digits).split('').map(num => Number(num)).reduce((prev, current) => prev + current);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45