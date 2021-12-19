function vowelAndConsonantSubstr(A) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0,
    consonantCount = 0,
    ans = 0;

  for (let i = 0; i < A.length; i++) {
    if (vowels.includes(A[i])) vowelCount++;
    else consonantCount++;
  }
  for (let i = 0; i < A.length; i++) {
    if (vowels.includes(A[i])) {
      vowelCount--;
      ans += consonantCount;
    } else {
      consonantCount--;
      ans += vowelCount;
    }
  }
  return ans % (Math.pow(10, 9) + 7);
}

console.log(vowelAndConsonantSubstr("abab"));
