function maxSubArray(A) {
  let ans = Number.MIN_SAFE_INTEGER,
    localMax = 0;
  for (let i = 0; i < A.length; i++) {
    localMax += A[i];
    ans = Math.max(ans, localMax);
    if (localMax < 0) {
      localMax = 0;
    }
  }
  return ans;
}
