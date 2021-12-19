function zigzagString(A, B) {
  if (B === 1) return A;
  if (B > A.length) return A;
  let ans = "";
  for (let i = 1; i <= B; i++) {
    let direction = 1;
    let positiveDirDifference = 2 * (B - i);
    let negativeDirDifference = 2 * (i - 1);
    let count = i;

    if (positiveDirDifference === 0) {
      while (A[count - 1]) {
        ans = ans + A[count - 1];
        count += negativeDirDifference;
      }
    } else if (negativeDirDifference === 0) {
      while (A[count - 1]) {
        ans = ans + A[count - 1];
        count += positiveDirDifference;
      }
    } else {
      while (A[count - 1]) {
        ans = ans + A[count - 1];
        if (direction > 0) {
          count += positiveDirDifference;
        } else {
          count += negativeDirDifference;
        }
        direction = direction * -1;
      }
    }
  }
  return ans;
}

console.log(zigzagString("PAYPALISHIRING", 6));
