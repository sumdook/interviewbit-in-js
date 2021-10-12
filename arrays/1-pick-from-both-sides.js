function pickFromBothSides(A, B) {
  let maxSum = 0;
  for (let i = 0; i < B; i++) {
    maxSum += A[i];
  }
  let baseSum = maxSum;
  for (i = 0; i < B; i++) {
    baseSum = baseSum - A[B - 1 - i] + A[A.length - 1 - i];
    if (baseSum > maxSum) maxSum = baseSum;
  }
  return maxSum;
}
