function countOccurrences(list) {
  let occuranceCounter = {};
  list.forEach(element => occuranceCounter[element.length] = (occuranceCounter[element] ? occuranceCounter[element] + 1 : 1));
  return wordSizeCounter;
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);