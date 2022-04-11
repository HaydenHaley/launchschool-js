function transpose(matrix) {
  // create a base array
  let newMatrix = [];

  // loops through the new matrix, assigning each row to the columns of the corrosponding
  for (let index = 0; index < matrix[0].length; index++) {
    newMatrix.push([]);
    for (let innerIndex = 0; innerIndex < matrix.length; innerIndex++) {
      newMatrix[index][innerIndex] = matrix[innerIndex][index];
    }
  }

  return newMatrix;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]
debugger;

let testMatrix;
testMatrix = transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
debugger;
testMatrix = transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
debugger;
testMatrix = transpose([[1]]);                     // [[1]]
debugger;

testMatrix = transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
debugger;