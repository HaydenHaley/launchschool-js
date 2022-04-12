function range(end) {
  return rangeBetween(0, end);
}

function rangeBetween(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(rangeBetween(10, 20));
console.log(range(5));