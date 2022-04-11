function binarySearch(array, searchTerm) {

  // defines the range of the search
  let searchRange = [0, array.length];
  let middleIndex = Math.floor((searchRange[1] - searchRange[0]) / 2);

  while (array[middleIndex] !== searchTerm) {
  
    // if the seach term is below the checked index, new bounds are old low and current.
    // if above, new bounds are current and old high.
    if (array[middleIndex] > searchTerm) {
      let oldLow = searchRange[0];
      searchRange = [oldLow, middleIndex];
    } else {
      let oldHigh = searchRange[1];
      searchRange = [middleIndex, oldHigh];
    }

    // finds the middle value
    let newMiddle = Math.floor((searchRange[1] - searchRange[0]) / 2) + searchRange[0];
    
    // if the search has been narrowed to a single place and no value found, search is not in array
    if (newMiddle === middleIndex) return -1;
    middleIndex = newMiddle;
  }
  return middleIndex;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6