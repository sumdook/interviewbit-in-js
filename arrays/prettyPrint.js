function prettyPrint(A) {
  const n = A * 2 - 1;
  const ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(Array(n).fill(1));
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = A - 1; k >= 0; k--) {
        if ([k, n - k - 1].includes(i) || [k, n - k - 1].includes(j)) {
          ans[i][j] = A - k;
        }
      }
    }
  }
  return ans;
}

console.log(prettyPrint(3));
