function palindromeInteger(A) {
  if (A < 0) return 0;
  let n = A;
  let reverseN = 0;
  while (n > 0) {
    reverseN = reverseN * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reverseN === A ? 1 : 0;
}
