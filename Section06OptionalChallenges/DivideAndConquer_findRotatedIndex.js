function findRotatedIndex(arr, num) {
  let index = findNumInRotatedArray(arr, num);
  return index < 0 ? -1 : index;
}

function findNumInRotatedArray(arr, num, lowIndex = 0, highIndex = arr.length - 1) {
  if (highIndex >= lowIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (arr[midIndex] === num) {
      return midIndex;
    }
    let leftIndex = findNumInRotatedArray(arr, num, lowIndex, midIndex - 1);
    if (leftIndex >= 0) {
      return leftIndex;
    }
    let rightIndex = findNumInRotatedArray(arr, num, midIndex + 1, highIndex);
    if (rightIndex >= 0) {
      return rightIndex;
    }
  }
  return -1;
}

console.log(findRotatedIndex([3,4,1,2],4));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3));
console.log(findRotatedIndex([37,44,66,102,10,22],14));
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12));
console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16));