// Wrong approach
function trailingZeroesInFactorial(A) {
  if (A < 4) return 0;
  let temp = 4;
  let ans = 0;
  for (let i = 5; i <= A; i++) {
    temp *= i;

    while (temp % 10 === 0) {
      temp = temp / 10;
      ans++;
    }
    temp = temp % 10;
    console.log(i, temp, ans);
  }
  return ans;
}

function trailingZeroesInFactorial(A) {
  if (A < 5) return 0;
  let ans = 0;
  for (let i = 5; Math.floor(A / i) >= 1; i *= 5) {
    ans += Math.floor(A / i);
  }
  return ans;
}

console.log(trailingZeroesInFactorial(30));
