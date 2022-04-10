function fridayThe13ths(year) {
  let unluckies = 0;
  for (let index = 0; index < 12; index++) {
    let thirteenth = new Date(year, index, 13);
    if (thirteenth.getDay() === 5) unluckies++;
  }
  return unluckies;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2