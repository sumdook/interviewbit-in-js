// I am stupid. very stupid.
function largestNumber(A) {
  return A.sort((num1, num2) => {
    let a = num1.toString();
    let b = num2.toString();
    if (a[0] > b[0]) {
      return -1;
    } else if (a[0] < b[0]) {
      return 1;
    } else {
      if (a.length === b.length) {
        if (a > b) return -1;
        else return 1;
      } else {
        let lowerLength = Math.min(a.length, b.length);
        if (a.substr(0, lowerLength) > b.substr(0, lowerLength)) {
          return -1;
        } else if (a.substr(0, lowerLength) < b.substr(0, lowerLength)) {
          return 1;
        } else {
          let isALonger = a.length > b.length;
          if (isALonger) {
            let diffIndex = b.length;
            while (a[diffIndex] === a[0] && diffIndex < a.length) diffIndex++;
            if (a[diffIndex] > a[0]) return -1;
            else return 1;
          } else {
            let diffIndex = a.length;
            while (b[diffIndex] === b[0] && diffIndex < b.length) diffIndex++;
            if (b[diffIndex] > b[0]) return 1;
            else return -1;
          }
        }
      }
    }
  });
}

// Accessed solution approach
function largestNumber(A) {
  return A.sort((num1, num2) => {
    let a = num1.toString();
    let b = num2.toString();
    return a + b > b + a ? 1 : -1;
  }).join("");
}

console.log(
  largestNumber([
    931, 94, 209, 448, 716, 903, 124, 372, 462, 196, 715, 802, 103, 740, 389,
    872, 615, 638, 771, 829, 899, 999, 29, 163, 342, 902, 922, 312, 326, 817,
    288, 75, 37, 286, 708, 589, 975, 747, 743, 699, 743, 954, 523, 989, 114,
    402, 236, 855, 323, 79, 949, 176, 663, 587, 322,
  ])
);
