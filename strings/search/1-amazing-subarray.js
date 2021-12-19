function amazingSubarray(A) {
  const vovels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    if (vovels.includes(A[i])) {
      ans = ans + (A.length - i);
    }
  }
  return ans % 10003;
}
