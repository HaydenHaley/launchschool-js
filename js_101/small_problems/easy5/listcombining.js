function interleave(arrayone, arraytwo) {
  let combinedArray = [];
  let totalLength = arrayone.length + arraytwo.length;

  for (let index = 0; index < totalLength; index++) {
    let adjustedIndex = Math.floor(index / 2);
    if (index % 2 === 0) {
      combinedArray.push(arrayone[adjustedIndex]);
    } else {
      combinedArray.push(arraytwo[adjustedIndex]);
    }
  }

  return combinedArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));