function stringy(integer) {
  let stringArray = [];
  for (let index = 0; index < integer; index++) {
    if (index % 2 === 0) {
      stringArray.push('1');
    } else {
      stringArray.push('0');
    }
  }
  return stringArray.join('');
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"