function star(length) {
  if (length < 7) return;

  let middlePoint = Math.ceil(length / 2);

  for (let i = 0; i < middlePoint - 1; i++) {
    starLine(i);
  }

  console.log("*".repeat(length));

  for (let i = middlePoint - 2; i >= 0; i--) {
    starLine(i);
  }

  function starLine(offset) {
    let totalSpaces = length - 3;
    let midSpaces = (totalSpaces / 2) - offset;
    let endSpaces = (totalSpaces - (midSpaces * 2)) / 2;
    console.log(' '.repeat(endSpaces) + '*' + ' '.repeat(midSpaces) + '*' + ' '.repeat(midSpaces) + '*');
  }
}

star(7);