function pascalTriangle(A) {
  if (A === 1) return [[1]];
  const ans = [[1], [1, 1]];
  for (let i = 1; i < A - 1; i++) {
    let row = [1];
    for (j = 0; j < ans[i].length - 1; j++) {
      row.push(ans[i][j] + ans[i][j + 1]);
    }
    row.push(1);
    ans.push(row);
  }
  return ans;
}

console.log(pascalTriangle(4));
