const test1 = [
  "XOOXXXOO",
  "OOOOXOXX",
  "XXOXXOOO",
  "OXOOOXXX",
  "OOXXXXOX",
  "XOXXXOXO",
  "OOOXOXOX",
  "XOXXOXOX",
];
const test2 = ["OOOXXXOXX", "XXXXXXOXX", "XOOXXXXXX", "OOXXOXOXX", "XXXXXXXXX"];

function minesweeper(arr) {
  arr = arr.map((item) => item.split(""));
  let m = arr.length;
  let n = arr[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === "O") {
        let counter = 0;
        for (let k = i - 1; k <= i + 1; k++) {
          for (let l = j - 1; l <= j + 1; l++) {
            if (
              k >= 0 &&
              l >= 0 &&
              k < arr[0].length &&
              l < arr[0].length &&
              arr[k][l] === "X"
            ) {
              counter++;
            }
          }
        }
        arr[i][j] = counter;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str += `${arr[i][j]} `;
    }
    console.log(str);
  }
}
function minesweeper1(arr) {
  arr = arr.map((item) => item.split(""));
  let m = arr.length;
  let n = arr[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === "O") {
        let counter = 0;
        if (j - 1 > 0 && arr[i][j - 1] == "X") counter++;
        if (j + 1 < arr.length && arr[i][j + 1] == "X") counter++;
        if (i - 1 > 0 && arr[i - 1][j] == "X") counter++;
        if (i + 1 < arr.length && arr[i + 1][j] == "X") counter++;
        if (j - 1 > 0 && i - 1 > 0 && arr[i - 1][j - 1] == "X") counter++;
        if (
          i + 1 < arr.length &&
          j + 1 < arr.length &&
          arr[i + 1][j + 1] == "X"
        )
          counter++;
        if (i - 1 > 0 && j + 1 < arr.length && arr[i - 1][j + 1] == "X")
          counter++;
        if (i + 1 < arr.length && j - 1 > 0 && arr[i + 1][j - 1] == "X")
          counter++;

        arr[i][j] = counter;
      }
    }
  }
  console.log(arr);
}

minesweeper(test2);

// function minesweeper(arr) {
//   const arr2d = arr.map();
//   const n = arr[0].length;
//   const m = arr.length;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       let counter = 0;
//       if (arr[i][j] !== "X") {
//         if (arr[i][j - 1] == "X") counter++;
//         if (arr[i][j + 1] == "X") counter++;
//         if (arr[i - 1][j] == "X") counter++;
//         if (arr[i + 1][j] == "X") counter++;
//         if (arr[i - 1][j - 1] == "X") counter++;
//         if (arr[i + 1][j + 1] == "X") counter++;
//         if (arr[i - 1][j + 1] == "X") counter++;
//         if (arr[i + 1][j - 1] == "X") counter++;

//         arr[i][j] = counter;
//       }
//     }
//   }
//   return arr;
// }
