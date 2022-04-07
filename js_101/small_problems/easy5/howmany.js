function countOccurrences(list) {
  let occuranceCounter = {};
  list.forEach(element => occuranceCounter[element] = (occuranceCounter[element] ? occuranceCounter[element] + 1 : 1));
  return occuranceCounter;
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));