// Selection Sort

const unsortedArr = [5,3,8,4,2,1,7];

function selectionSort(arr){
    const n = arr.length;
    for(let i=0; i<n-1; i++){
        let minIndex = i;
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log({selectionSort:  selectionSort([...unsortedArr])});

// Bubble Sort

function bubbleSort(arr){
    const n = arr.length;
    for(let k = 0; k<n; k ++){
    for(let i = 0; i<n-k; i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
}
return arr;
}

console.log({bubbleSort:  bubbleSort([...unsortedArr])});
