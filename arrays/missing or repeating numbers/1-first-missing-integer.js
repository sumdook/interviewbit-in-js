// Approach 1 with O(n) time  and O(n) space complexity
function firstMissingInteger(A) {
  const set = new Set();
  let ans = 1;
  const filteredArr = A.filter((item) => item > 0);
  filteredArr.forEach((item) => {
    set.add(item);
    if (item === ans) {
      while (set.has(ans)) {
        ans++;
      }
    }
  });
  return ans;
}

// Approach 2: Taken from IB editorial, very smart
function firstMissingInteger(A) {
  A = A.filter((item) => item > 0);
  let n = A.length;
  for (var i = 0; i < n; i++) {
    var temp = Math.abs(A[i]) - 1;
    if (temp < n) A[temp] = -Math.abs(A[temp]);
  }
  for (var i = 0; i < n; i++) if (A[i] > 0) return i + 1;
  return n + 1;
}

console.log({ firstMissingInteger: firstMissingInteger([3, 4, -1, 1]) });
