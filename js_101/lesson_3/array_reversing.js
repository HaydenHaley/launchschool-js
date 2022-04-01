let numbers = [1, 2, 3, 4, 5];
let reversedArray = [];
Object.assign(reversedArray, numbers);
reversedArray.reverse();
console.log(reversedArray); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
Object.assign(reversedArray, numbers);
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]