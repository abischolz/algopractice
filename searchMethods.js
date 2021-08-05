//bubble sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// selection sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
//insertion sort

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j;
    for (let j = i - 1; j < arr.length && j >= 0; j--) {}
  }
  return arr;
}
//merge sort

//quick sort

//radix sort ?

console.log(selectionSort([64, 25, 12, 22, 11]));
