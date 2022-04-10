function rotateLastDigits(digitsArray, count) {
  // isolate the last x digits into a seperate array with splice
  let rotationArray = digitsArray.splice(-count);
  
  // rotate the second array
  rotationArray.push(rotationArray.shift());
  
  // combine with initial array and join
  digitsArray = digitsArray.concat(rotationArray);
  return digitsArray;
}

function maxRotation(number) {
  let rotations = String(number).length;

  // split the digits into an array
  let digitsArray = String(number).split('');


  for (let index = rotations; index > 0; index--) {
    digitsArray = rotateLastDigits(digitsArray, index);
  }

  // parse to number and return
  return Number(digitsArray.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845