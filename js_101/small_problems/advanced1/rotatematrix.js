function rotate90(matrix) {
  // create a base array
  let newMatrix = [];

  // loops through the new matrix, assigning each row to the columns of the corrosponding
  for (let index = 0; index < matrix[0].length; index++) {
    newMatrix.push([]);
    for (let innerIndex = 0; innerIndex < matrix.length; innerIndex++) {
      newMatrix[index][innerIndex] = matrix[innerIndex][index];
    }
  }
  debugger;
  
  // reverses, to turn transposition into rotation
  newMatrix.forEach(row => row.reverse());
  return newMatrix;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
debugger;