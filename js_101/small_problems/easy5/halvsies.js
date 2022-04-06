function halvsies(array) {
  let arrayone = [];
  let arraytwo = [];

  array.forEach((element, index) => {
    if (index < array.length / 2) {
      arrayone.push(element);
    } else {
      arraytwo.push(element);
    }
  });
  return [arrayone, arraytwo];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]  