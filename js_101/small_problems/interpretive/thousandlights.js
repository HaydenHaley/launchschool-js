function lightsOn(count) {
  // initializes the array with switches
  const switches = [];
  for (let i = 1; i <= count; i++) {
    switches.push(-i);
  }

  // a loop of loops, each one hitting every i switches
  for (let i = 0; i < count; i++) {
    for (let j = i; j < count; j += i + 1) {
      switches[j] = -switches[j];
    }
  }

  // returns only on switches, and accounts for 0-indexing
  return switches.filter(val => val >= 0);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]