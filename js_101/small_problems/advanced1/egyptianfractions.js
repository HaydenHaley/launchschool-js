const Fraction = require('fraction.js');

function egyptian(rational) {
  let denomArray = [];
  
  let testedDenom = 1;
  while (rational > 0) {
    // check if 1/1 can fit inside
    // if so, add 1 to denom array 
    let testingFraction = new Fraction(1, testedDenom);
    if (rational - testingFraction >= 0) {
      rational = rational.sub(testingFraction);
      denomArray.push(testingFraction.d);
    }
    testedDenom++;
  }
  return denomArray;
}

function unegyptian(egyptian) {
  let rational = new Fraction(0);
  egyptian.forEach(element => rational = rational.add(new Fraction(1, element)));
  return rational.valueOf();
}

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3