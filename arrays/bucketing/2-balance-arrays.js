function balanceArray(A) {
  let oddSum = 0;
  let evenSum = 0;
  if (A.length === 0) return 0;
  if (A.length === 1) return 1;

  const bucket = [];
  for (let [i, v] of A.entries()) {
    if (i % 2 === 0) oddSum += v;
    else evenSum += v;
  }
  let oddSumSoFar = 0;
  let evenSumSoFar = 0;

  for (let [i, v] of A.entries()) {
    if (i % 2 === 0) {
      bucket.push([oddSumSoFar, oddSum - v - oddSumSoFar]);
      oddSumSoFar += v;
    } else {
      bucket.push([evenSumSoFar, evenSum - v - evenSumSoFar]);
      evenSumSoFar += v;
    }
  }
  for (let [i, v] of A.entries()) {
    if (i % 2 === 0) {
      bucket.push([oddSumSoFar, oddSum - v - oddSumSoFar]);
      oddSumSoFar += v;
    } else {
      bucket.push([evenSumSoFar, evenSum - v - evenSumSoFar]);
      evenSumSoFar += v;
    }
  }

  let ans = 0;
  if (oddSum - A[0] === evenSum) ans++;
  if (A.length % 2 === 0 && evenSum - A[A.length - 1] === oddSum) {
    ans++;
  }
  if (A.length % 2 !== 0 && oddSum - A[A.length - 1] === evenSum) {
    ans++;
  }
  for (let i = 1; i < A.length - 1; i++) {
    const newOddSum = bucket[i][0] + bucket[i - 1][1];
    const newEvenSum = bucket[i + 1][0] + bucket[i][1];
    if (newOddSum === newEvenSum) ans++;
  }

  return ans;
}

console.log({ balanceArray: balanceArray([5, 5, 2, 5, 8]) });
