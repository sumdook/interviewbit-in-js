function addOneToNumArr(A) {
  let i = A.length - 1;
  while (i >= 0 && A[i] === 9) {
    A[i] = 0;
    i--;
  }
  if (i >= 0) {
    A[i] += 1;
  } else {
    A = [1, ...A];
  }
  i = 0;
  while (A[i] === 0) {
    A.shift();
  }
  return A;
}

console.log(addOneToNumArr([0, 9, 9, 9, 9]));
