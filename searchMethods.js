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
    for (j = i - 1; arr[j] > current && j >= 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
}
//merge sort

function merge(arr1, arr2) {
  let newArr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      newArr.push(arr2.shift());
    } else {
      newArr.push(arr1.shift());
    }
  }
  return [...newArr, ...arr1, ...arr2];
}

function mergeSort(arr) {
  const midPoint = Math.floor(arr.length / 2);
  if (arr.length < 2) {
    return arr;
  }
  const left = arr.splice(0, midPoint);
  return merge(mergeSort(left), mergeSort(arr));
}

//quick sort

//radix sort ?

console.log(insertionSort([64, 25, 12, 22, 11]));
