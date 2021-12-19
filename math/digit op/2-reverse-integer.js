function reverseInteger(A) {
  let multiplier = A > 0 ? 1 : -1;
  A = Math.abs(A);
  let reverseNumber = 0,
    prevNumber = 0;
  while (A > 0) {
    reverseNumber = reverseNumber * 10 + (A % 10);
    console.log(reverseNumber, prevNumber, A);
    if ((reverseNumber - (A % 10)) / 10 !== prevNumber) {
      return 0;
    }
    prevNumber = reverseNumber;
    A = Math.floor(A / 10);
  }
  return reverseNumber * multiplier;
}

reverseInteger(1234567891);
