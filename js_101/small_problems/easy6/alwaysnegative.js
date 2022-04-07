function negative(number) {
  if (Math.sign(number) === -1) {
    return number;
  }
  return number * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0