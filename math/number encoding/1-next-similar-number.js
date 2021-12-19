function nextSimilarNumber(A) {
  const numArray = A.split("").map((item) => parseInt(item));
  let swappedIndexOne = findSwapIndexOne(numArray);
  if (swappedIndexOne === -1) return "-1";
  let swappedIndexTwo = findSwapIndexTwo(numArray, swappedIndexOne);

  let temp = numArray[swappedIndexOne];
  numArray[swappedIndexOne] = numArray[swappedIndexTwo];
  numArray[swappedIndexTwo] = temp;

  return [
    ...numArray.slice(0, swappedIndexOne + 1),
    ...numArray.slice(swappedIndexOne + 1).sort((a, b) => a - b),
  ].join("");
}

function findSwapIndexOne(A) {
  for (let i = A.length - 2; i >= 0; i--) {
    if (A[i] < A[i + 1]) return i;
  }
  return -1;
}

function findSwapIndexTwo(A, start) {
  let min = Number.MAX_SAFE_INTEGER,
    minIndex;
  for (let i = start; i < A.length; i++) {
    if (A[i] > A[start] && A[i] < min) {
      min = A[i];
      minIndex = i;
    }
  }
  return minIndex;
}
