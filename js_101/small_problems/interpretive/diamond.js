function diamond(length) {
  let middlePoint = Math.ceil(length / 2);

  for (let index = 0; index < middlePoint; index++) {
    starLine(index);
  }

  for (let index = middlePoint - 2; index >= 0; index--) {
    starLine(index);
  }

  function starLine(line) {
    let starsNeeded = ((line * 2) + 1);
    let paddingNeeded = (length - starsNeeded) / 2;
    console.log(' '.repeat((paddingNeeded + 1)) + '*'.repeat(starsNeeded));
  }
}

diamond(7);