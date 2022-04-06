function multiplyList(arrayone, arraytwo) {
  return arrayone.map((element, index) => element * arraytwo[index]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));