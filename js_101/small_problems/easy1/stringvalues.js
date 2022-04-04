function sumUTFValues(string) {
  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    let charCode = string.charCodeAt(index);
    sum += charCode;
  }
  return sum;
}

console.log(sumUTFValues('Four score'));
console.log(sumUTFValues('Launch School'));
console.log(sumUTFValues('a'));
console.log(sumUTFValues(''));