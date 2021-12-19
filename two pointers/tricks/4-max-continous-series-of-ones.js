function maxContinousOnes(A, B) {
  let l = 0,
    count = 0,
    max = 0,
    ans = [];

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
    if (i - l + 1 > max) {
      max = i - l + 1;
      ans = [];
      for (let j = l; j < i + 1; j++) {
        ans.push(j);
      }
    }
  }
  return ans;
}
