// Selection Sort

const unsortedArr = [5, 3, 8, 4, 2, 1, 7];

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log({ selectionSort: selectionSort([...unsortedArr]) });

// Bubble Sort

function bubbleSort(arr) {
  const n = arr.length;
  for (let k = 0; k < n; k++) {
    let isSwappedInThisPass = false;
    for (let i = 0; i < n - k; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwappedInThisPass = true;
      }
    }
    if (!isSwappedInThisPass) {
      return arr;
    }
  }
  return arr;
}

console.log({ bubbleSort: bubbleSort([...unsortedArr]) });

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let value = arr[i];
    let hole = i;
    while (hole > 0 && arr[hole - 1] > value) {
      arr[hole] = arr[hole - 1];
      hole--;
    }
    arr[hole] = value;
  }
  return arr;
}

console.log({ insertionSort: insertionSort([...unsortedArr]) });

// Merge Sort

function merge(leftArray, rightArray) {
  let finalArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      finalArray.push(leftArray.shift());
    } else {
      finalArray.push(rightArray.shift());
    }
  }
  return [...finalArray, ...leftArray, ...rightArray];
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = parseInt(arr.length / 2);
  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log({ mergeSort: mergeSort([...unsortedArr]) });

// Spiral Order

function spiralOrder(a) {
  let left = 0,
    right = a[0].length - 1,
    top = 0,
    bottom = a.length - 1,
    dir = 0;
  const ans = [];
  while (left <= right && top <= bottom) {
    if (dir == 0) {
      for (let i = left; i <= right; i++) {
        ans.push(a[top][i]);
      }
      top++;
    }
    if (dir == 1) {
      for (let i = top; i <= bottom; i++) {
        ans.push(a[i][right]);
      }
      right--;
    }
    if (dir == 2) {
      for (let i = right; i >= left; i--) {
        ans.push(a[bottom][i]);
      }
      bottom--;
    }
    if (dir == 3) {
      for (let i = bottom; i >= top; i--) {
        ans.push(a[i][left]);
      }
      left++;
    }

    dir = (dir + 1) % 4;
  }
  return ans;
}

console.log(spiralOrder([[1, 2, 3]]));
