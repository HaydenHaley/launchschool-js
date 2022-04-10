const LARGEST_FEATURED = 9876543201;
const VALUE_TOO_HIGH = "There is no possible number that fulfills those requirements.";

function featured(value) {
  if (value >= LARGEST_FEATURED) return VALUE_TOO_HIGH;

  // makes sure the value is a multiple of 7 without division
  let featured = 7 * Math.max(10 * (String(value).length - 2), 1);
  
  while (featured <= value || !isFeaturedNumber(featured)) {
    featured += 7;
    if (featured > LARGEST_FEATURED) return VALUE_TOO_HIGH;
  }
  return featured;
}

function isFeaturedNumber(number) {
  return number % 2 !== 0 && hasUniqueDigits(number);
}

function hasUniqueDigits(number) {
  let digitArray = String(number).split('');
  // values cannot be duplicated in a set. If any suplicates exist, the set will be smaller than the array.
  return new Set(digitArray).size === digitArray.length;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."