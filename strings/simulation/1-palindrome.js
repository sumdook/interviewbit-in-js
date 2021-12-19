function palindrome(A) {
  let str = A.replace(/\W/g, "").toLowerCase();
  let str2 = str.split("").reverse().join("");
  if (str === str2) return 1;
  return 0;
}
