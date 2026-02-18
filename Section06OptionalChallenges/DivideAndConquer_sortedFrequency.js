function sortedFrequency(arr, num) {
  let firstIndex = findFirst(arr, num);
  if (firstIndex < 0) {
    return -1;
  }
  let lastIndex = findLast(arr, num);
  return lastIndex - firstIndex + 1;
}

function findFirst(arr, num, lowIndex = 0, highIndex = arr.length - 1) {
  if (highIndex >= lowIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (arr[midIndex] === num && (midIndex === 0 || arr[midIndex - 1] < num)) {
      return midIndex;
    } else if (arr[midIndex] < num) {
      return findFirst(arr, num, midIndex + 1, highIndex);
    } else {
      return findFirst(arr, num, lowIndex, midIndex - 1);
    }
  }
  return -1;
}

function findLast(arr, num, lowIndex = 0, highIndex = arr.length - 1) {
  if (highIndex >= lowIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (arr[midIndex] === num && (midIndex === arr.length - 1 || arr[midIndex + 1] > num)) {
      return midIndex;
    } else if (arr[midIndex] > num) {
      return findLast(arr, num, lowIndex, midIndex - 1);
    } else {
      return findLast(arr, num, midIndex + 1, highIndex);
    }
  }
  return -1;
}

console.log(sortedFrequency([1,1,2,2,2,2,3],2));
console.log(sortedFrequency([1,1,2,2,2,2,3],3));
console.log(sortedFrequency([1,1,2,2,2,2,3],1));
console.log(sortedFrequency([1,1,2,2,2,2,3],4));