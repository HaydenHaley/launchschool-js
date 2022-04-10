function bubbleSort(array) {
  // has a sub-function that tries to perform a sort, returning true if it does. 
  while (trySort(array)){ 

  }
  return array;

  function trySort(array) {
    for (let index = 1; index < array.length; index++) {
      const value = array[index];
      const lastValue = array[index - 1];

      if (value < lastValue) {
        array[index] = lastValue;
        array[index - 1] = value;
        return true;
      }
    }
    return false;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]