function peakOfArray(A) {
  if ([0, 1, 2].includes(A.length)) return 0;
  let maxSoFar = A[0];
  let maxArray = [];
  for (let i = 1; i < A.length; i++) {
    if (A[i] > maxSoFar && i !== A.length - 1) {
      maxSoFar = A[i];
      maxArray.push(A[i]);
    } else {
      maxArray = maxArray.filter((element) => element < A[i]);
    }
  }
  return maxArray.length > 0 ? 1 : 0;
}
