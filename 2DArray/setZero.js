let arr = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

function setZeroes(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const rowTrack = new Array(rows);
  const colTrack = new Array(cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowTrack[i] = true;
        colTrack[j] = true;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rowTrack[i] === true || colTrack[j] === true) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix
}
console.log(setZeroes(arr));