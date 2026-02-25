function binarySearch(arr, target) {
  if (!arr || arr.length === 0) {
    return -1;
  }
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] === target) {
      return midIndex;
    } else if (arr[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5],2));
console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([1,2,3,4,5],5));
console.log(binarySearch([1,2,3,4,5],6));
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10));
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95));
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100));