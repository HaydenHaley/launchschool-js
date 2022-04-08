function buyFruit(groceryArray) {
  let condensedArray = [];
  for (let i = 0; i < groceryArray.length; i++) {
    for (let j = 0; j < groceryArray[i][1]; j++) {
      condensedArray.push(groceryArray[i][0]);
    }
  }
  return condensedArray;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]