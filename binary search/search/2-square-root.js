function squareRoot(A) {
  if (A == 0 || A == 1) return A;
  let ans;
  let low = 1,
    high = A,
    mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (mid * mid === A) return mid;
    else if (mid * mid > A) high = mid - 1;
    else {
      low = mid + 1;
      ans = mid;
    }
  }
  return ans;
}

console.log(squareRoot(2));
