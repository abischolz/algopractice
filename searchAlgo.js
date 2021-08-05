//binary search

function binarySearch(arr, target) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (target === arr[middleIndex]) {
      return console.log('target found at index: ', middleIndex);
    }
    if (target > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    }

    if (target < arr[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }
  return console.log('target not found');
}
