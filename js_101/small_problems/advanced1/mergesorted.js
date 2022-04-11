function merge(arrayone, arraytwo) {
  // start with element1 of the first array, putting it at the start.
  // then add element1 of the second array, putting it either before or after the first depending on size.
  // alternate between arrays until all elements have been added.

  // saves time in case of empty array
  if (arrayone.length === 0) return arraytwo.slice();
  if (arraytwo.length === 0) return arrayone.slice();

  let sortedMerged = [];
  let totalLength = arrayone.length + arraytwo.length;
  for (let index = 0; index < totalLength; index++) {
    let itemToInsert = (index % 2 === 0) ? (arrayone[Math.floor(index / 2)]) : (arraytwo[Math.floor(index / 2)]);
    if (itemToInsert === undefined) continue; // for uneven lists

    if (sortedMerged.length === 0) {
      sortedMerged[0] = itemToInsert;
      continue;
    }

    // each element goes where it is >= the previous element and < the next element, unless it's the end of the array.
    for (let checkIndex = 0; checkIndex < sortedMerged.length; checkIndex++) {

      // if at the start of the array, or if the previous is smaller
      let biggerThanPrev = checkIndex === 0 || itemToInsert >= sortedMerged[checkIndex - 1];

      // if at the end of the array, or if the current one is smaller
      let smallerThanCur = itemToInsert < sortedMerged[checkIndex]

      let endOfArray = checkIndex === sortedMerged.length - 1;

      // inserts the new item and exits the check loop
      if (biggerThanPrev && smallerThanCur) {
        sortedMerged.splice(checkIndex, 0, itemToInsert);
        break;
      } else if (biggerThanPrev && endOfArray) {
        sortedMerged.push(itemToInsert);
        break;
      }
    }
  }
  return sortedMerged;
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]