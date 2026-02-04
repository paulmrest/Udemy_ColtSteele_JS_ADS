function countUniqueValues(arr) {
  if (arr.length <= 0) {
    return 0;
  }
  var firstIndex = 0;
  var secondIndex = 1;
  while (arr.length > secondIndex) {
    if (arr[firstIndex] != arr[secondIndex]) {
      firstIndex++;
      arr[firstIndex] = arr[secondIndex];
      secondIndex++;
    } else {
      secondIndex++;
    }
  }
  return firstIndex + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([4]));