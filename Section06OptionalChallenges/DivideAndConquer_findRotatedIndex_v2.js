function findRotatedIndex(arr, num) {
  let pivotIndex = findPivotIndex(arr);
  if (pivotIndex > 0 && arr[0] <= num && arr[pivotIndex - 1] >= num) {
    return searchArray(arr, num, 0, pivotIndex - 1);
  } else {
    return searchArray(arr, num, pivotIndex);
  }
}

function searchArray(arr, num, lowIndex = 0, highIndex = arr.length - 1) {
  if (!arr || arr.length <= 0) {
    return -1;
  }
  if (arr[lowIndex] > num || arr[highIndex] < num) {
    return -1;
  }
  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (arr[midIndex] === num) {
      return midIndex;
    }
    if (arr[midIndex] < num) {
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }
  return -1;
}

function findPivotIndex(arr) {
  if (!arr || arr.length <= 0) {
    return -1;
  }
  if (arr.length <= 1 || arr[0] < arr[arr.length - 1]) {
    return 0;
  }
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] > arr[midIndex + 1]) {
      return midIndex + 1;
    }
    if (arr[leftIndex] <= arr[midIndex]) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
}

console.log(findRotatedIndex([3,4,1,2],4));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3));
console.log(findRotatedIndex([37,44,66,102,10,22],14));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12));
console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16));