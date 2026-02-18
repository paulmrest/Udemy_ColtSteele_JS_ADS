function countZeroes(arr) {
  let firstZero = findFirstNum(arr, 0);
  return firstZero === -1 ? 0 : arr.length - firstZero;
}

function findFirstNum(arr, num, lowIndex = 0, highIndex = arr.length - 1) {
  if (highIndex >= lowIndex) {
    let midIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2);
    if (arr[midIndex] === num && (midIndex === 0 || arr[midIndex - 1] === 1)) {
      return midIndex;
    } else if (arr[midIndex] === 1) {
      return findFirstNum(arr, num, midIndex + 1, highIndex);
    } else {
      return findFirstNum(arr, num, lowIndex, midIndex - 1);
    }
  }
  return -1;
}

console.log(countZeroes([1,1,1,1,0,0]));
console.log(countZeroes([1,0,0,0,0]));
console.log(countZeroes([0,0,0]));
console.log(countZeroes([1,1,1,1]));