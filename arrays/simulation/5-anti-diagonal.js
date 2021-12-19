function antiDiagonal(A) {
  let n = A.length;
  let ans = [];
  for (let i = 0; i < 2 * n - 1; i++) {
    ans.push([]);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans[i + j].push(A[i][j]);
    }
  }
  return ans;
}

console.log(
  antiDiagonal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
