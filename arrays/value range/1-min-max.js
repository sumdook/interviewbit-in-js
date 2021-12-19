function minMax(A) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) max = A[i];
    if (A[i] < min) min = A[i];
  }
  return max + min;
}

console.log({ minMax: minMax([-2, 1, -4, 5, 3]) });
console.log({ minMax: minMax([1, 3, 4, 1]) });
