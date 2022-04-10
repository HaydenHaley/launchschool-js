function rotateRightmostDigits(digits, count) {
  // split the digits into an array, probably as a string
  let digitsArray = String(digits).split('');

  // isolate the last x digits into a seperate array with splice
  let rotationArray = digitsArray.splice(-count);
  
  // rotate the second array
  for (let index = 0; index <= count; index++) {
    rotationArray.push(rotationArray.shift());
  }
  
  // combine with initial array and join
  digitsArray = digitsArray.concat(rotationArray);

  // parse to number and return
  return Number(digitsArray.join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917