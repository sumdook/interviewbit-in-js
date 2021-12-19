function longestCommonPrefix(A) {
  if (A.length === 0) return "";
  if (A.length === 1) {
    return A[0];
  }
  let common = findCommonPrefix(A[0], A[1]);
  if (A.length === 2) return common;
  for (let i = 2; i < A.length; i++) {
    common = findCommonPrefix(common, A[i]);
  }
  return common;
}

function findCommonPrefix(str1, str2) {
  const length = Math.min(str1.length, str2.length);
  let common = "";
  let i = 0;
  while (str1[i] === str2[i] && i < length) {
    common += str1[i];
    i++;
  }
  return common;
}

console.log(longestCommonPrefix(["abab", "ab", "abcd"]));
