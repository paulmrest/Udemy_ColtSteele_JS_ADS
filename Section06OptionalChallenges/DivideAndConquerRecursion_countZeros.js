function countZeroes(arr) {
  let firstZero = findFirst(arr, 0);
  return firstZero < 0 ? 0 : arr.length - firstZero;
}

function findFirst(arr, num, lowIndex = 0, highIndex = arr.length - 1) {
  if (highIndex >= lowIndex) {
    let midIndex = Math.floor((highIndex - lowIndex) / 2) + lowIndex;
    if (arr[midIndex] === num && (midIndex === 0 || arr[midIndex - 1] === 1)) {
      return midIndex;
    } else if (arr[midIndex] != num) {
      return findFirst(arr, num, midIndex + 1, highIndex);
    } else {
      return findFirst(arr, num, lowIndex, midIndex - 1);
    }
  }
  return -1;
}

console.log(countZeroes([1,1,1,1,0,0]));
console.log(countZeroes([1,0,0,0,0]));
console.log(countZeroes([0,0,0]));
console.log(countZeroes([1,1,1,1]));