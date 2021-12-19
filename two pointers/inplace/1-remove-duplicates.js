function removeDuplicates(A) {
  let ans = 1,
    p = 1;
  for (let i = 1; i < A.length; i++) {
    if (A[i] !== A[i - 1]) {
      A[p] = A[i];
      p++;
      ans++;
    }
  }
  return ans;
}
