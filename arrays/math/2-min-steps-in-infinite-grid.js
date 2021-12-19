function coverPoints(A, B) {
  let ans = 0;
  for (let i = 0; i < A.length - 1; i++) {
    let x1 = A[i];
    let y1 = B[i];
    let x2 = A[i + 1];
    let y2 = B[i + 1];
    ans += Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
  }
  return ans;
}

console.log(coverPoints([0, 1, 1], [0, 1, 2]));
