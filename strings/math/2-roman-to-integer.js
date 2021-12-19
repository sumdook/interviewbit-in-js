const lettersToNumbers = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function romanToInteger(A) {
  if (lettersToNumbers[A]) {
    return lettersToNumbers[A];
  } else {
    let divider = 0;
    while (lettersToNumbers[A.substr(0, divider + 1)]) {
      divider++;
    }
    return (
      romanToInteger(A.substr(0, divider)) + romanToInteger(A.substr(divider))
    );
  }
}

console.log(romanToInteger("MMCDLXXV"));
