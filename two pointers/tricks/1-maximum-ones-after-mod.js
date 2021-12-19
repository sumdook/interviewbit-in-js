// Approach 1
// Time complexity failed;
function maxOnesAfterMod(A, B) {
  let ans = 0;
  let zeroIndices = [];
  A.forEach((item, index) => item === 0 && zeroIndices.push(index));

  if (B > zeroIndices.length) return A.length;
  for (let i = 0; i <= zeroIndices.length - B; i++) {
    let allowedIndices = zeroIndices.slice(i, i + B);
    ans = Math.max(findMaxOnes(A, allowedIndices), ans);
  }
  return ans;
}

function findMaxOnes(arr, allowedIndices) {
  let startingPoint = allowedIndices[0],
    ans = 0;
  while (startingPoint - 1 >= 0 && arr[startingPoint - 1] === 1) {
    startingPoint--;
  }
  while (arr[startingPoint] === 1 || allowedIndices.includes(startingPoint)) {
    ans++;
    startingPoint++;
  }
  return ans;
}

function maxOnesAfterMod2(A, B) {
  let l = 0,
    count = 0,
    ans = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      count++;
    }
    while (count > B) {
      if (A[l] === 0) {
        count--;
      }
      l++;
    }
    ans = Math.max(ans, i - l + 1);
  }
}

console.log(maxOnesAfterMod([0, 0, 0, 0, 0, 1, 1, 1, 1, 1], 2));
