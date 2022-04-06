function union(arrayone, arraytwo) {
  let newArray = [];

  function addNonDupes(element) {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }

  arrayone.forEach(addNonDupes);
  arraytwo.forEach(addNonDupes);

  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]