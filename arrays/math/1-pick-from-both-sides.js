function pickFromBothSides(A, B) {
  let baseSum = 0;
  for (let i = 0; i < B; i++) {
    baseSum += A[i];
  }
  let maxSum = baseSum;
  for (i = 0; i < B; i++) {
    baseSum = baseSum - A[B - 1 - i] + A[A.length - 1 - i];
    maxSum = Math.max(baseSum, maxSum);
  }
  return maxSum;
}
