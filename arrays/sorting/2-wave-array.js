function waveArray(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i < parseInt(A.length / 2); i++) {
    let temp = A[2 * i];
    A[2 * i] = A[2 * i + 1];
    A[2 * i + 1] = temp;
  }
  return A;
}

console.log(waveArray([1, 2, 3, 4, 5, 6, 7]));
