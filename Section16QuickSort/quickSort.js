function quickSort(arr, leftIndex = 0, rightIndex = arr.length - 1) {
  if (leftIndex < rightIndex) {
    let pivotIndex = pivot(arr, leftIndex, rightIndex);
    quickSort(arr, leftIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, rightIndex);
  }
  return arr;
}

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  let swapIndex = startIndex;
  const pivotValue = arr[startIndex];
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivotValue > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[startIndex], arr[swapIndex]] = [arr[swapIndex], arr[startIndex]];
  return swapIndex;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
console.log(quickSort([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]));
console.log(quickSort([26, 23, 27, 44, 17, 47, 39, 42, 43, 1]));
console.log(quickSort([9, 4, 8, 2, 1, 5, 7, 6, 3]));