function strStr(A, B) {
  if (A === "" || B === "") return -1;
  let j = -1;

  for (let i = 0; i < B.length; i++) {
    console.log(`i:${i} ${B[i]}, j+1:${j + 1} ${A[j + 1]}`);
    if (B[i] === A[j + 1]) {
      j++;
      if (j === A.length - 1) {
        return i - j;
      }
    } else {
      if (j !== -1) {
        i = i - j - 1;
      }
      j = -1;
    }
  }
  return -1;
}

console.log(
  strStr(
    "bba",
    "aabaaaababaabbbabbabbbaabababaaaaaababaaabbabbabbabbaaaabbbbbbaabbabbbbbabababbaaabbaabbbababbb"
  )
);
