function removeConsecutiveChars(A, B) {
  if (B === 1) return "";
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === A[i + 1]) {
      let end = i;
      while (A[i] === A[end + 1]) {
        end++;
      }
      let len = end - i + 1;
      if (len >= B) {
        let strToReplace = new Array(len % B).fill(A[i]).join("");
        A = A.substring(0, i) + strToReplace + A.substring(i + len);
        console.log(i);
        i = i + (len % B) - 1;
        console.log(i);
      }
    }
  }
  return A;
}

console.log(removeConsecutiveChars("abbbccccccd", 3));
