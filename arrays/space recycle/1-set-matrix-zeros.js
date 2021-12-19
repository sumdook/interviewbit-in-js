/**
 * param A: list of list of integers
 * @return the same list modified
 */
function setMatrixZeros(A) {
  const m = A.length;
  const n = A[0].length;
  const row = new Set();
  const column = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i][j] === 0) {
        row.add(i);
        column.add(j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row.has(i) || column.has(j)) A[i][j] = 0;
    }
  }
  return A;
}

console.log({
  setMatrixZeros: setMatrixZeros([
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
  ]),
});
