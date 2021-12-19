function sortArrayWithSquares(A) {
  const ans = [];
  while (A.length) {
    if (A.length === 1) {
      ans.push(A.pop());
    }
    if (Math.abs(A[0]) > Math.abs(A[A.length - 1])) {
      ans.push(A.shift());
    } else if (Math.abs(A[0]) < Math.abs(A[A.length - 1])) {
      ans.push(A.pop());
    } else if (Math.abs(A[0]) === Math.abs(A[A.length - 1])) {
      ans.push(A.shift());
      ans.push(A.pop());
    }
  }
  return ans;
}

console.log({
  sortArrayWithSquares: sortArrayWithSquares([-6, -3, -1, 2, 4, 5]),
});
