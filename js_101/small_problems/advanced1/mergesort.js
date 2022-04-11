function merge(arrayone, arraytwo) {
  // start with element1 of the first array, putting it at the start.
  // then add element1 of the second array, putting it either before or after the first depending on size.
  // alternate between arrays until all elements have been added.

  // saves time in case of empty array
  if (arrayone.length === 0) return arraytwo.slice();
  if (arraytwo.length === 0) return arrayone.slice();

  let sortedMerged = [];
  let totalLength = Math.max(arrayone.length, arraytwo.length) * 2;
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

function mergeSort(unsortedArray) {
  // breaks down array into sub-arrays
  let middleIndex = Math.floor(unsortedArray.length / 2);
  let splitArrayOne = unsortedArray.slice(0, middleIndex);
  let splitArrayTwo = unsortedArray.slice(middleIndex);
  
  if (splitArrayOne.length > 1) {
    splitArrayOne = mergeSort(splitArrayOne);
  }
  if (splitArrayTwo.length > 1) {
    splitArrayTwo = mergeSort(splitArrayTwo);
  }

  let returnValue = merge(splitArrayOne, splitArrayTwo);
  return returnValue;
}

let inspectionVar;
// inspectionVar = mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
// debugger;
// inspectionVar = mergeSort([5, 3]);                 // [3, 5]
// debugger;

inspectionVar = mergeSort([7, 1, 4]); 
debugger;

inspectionVar = mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]
debugger;

inspectionVar = mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
debugger;
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

inspectionVar = mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
debugger;
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]