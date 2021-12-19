function rearrangeArray(A) {
  const maxDigits = (A.length - 1).toString().length;
  const multiplier = Math.pow(10, maxDigits);
  for (let i = 0; i < A.length; i++) {
    A[i] *= multiplier;
  }
  console.log(A);

  for (let i = 0; i < A.length; i++) {
    let value = parseInt(A[i] / multiplier);
    A[i] = A[i] + parseInt(A[value] / multiplier);
  }
  for (let i = 0; i < A.length; i++) {
    A[i] %= multiplier;
  }
  return A;
}

console.log(rearrangeArray([4, 0, 2, 1, 3]));
