function twice(number) {
  let numAsString = String(number);

  // if the number has an odd number of digits, no point in checking further
  if (numAsString.length % 2 === 0) {
    let middleIndex = (numAsString.length / 2);
    if (numAsString.slice(0, middleIndex) === numAsString.slice(middleIndex)) {
      return number;
    }
  }
  return number * 2;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676