function countUniqueValues(arr) {
  //check if array is empty
  if (arr.length <= 0) {
    return 0;
  }
  //declare our two pointers, one that will always be first, and another that will always be second
  var firstIndex = 0;
  var secondIndex = 1;
  //declare our unique count variable
  var unique = 1;
  //while loop over array, checking if the second pointer has gone past the bounds of the array
  while (arr.length > secondIndex) {
    //check if the array's value at the first pointer is not equal to the value at the second
    if (arr[firstIndex] != arr[secondIndex]) {
      //if they're not equal, we have found a unique pair of values, increment unique count variable
      unique++;
      //also set the first pointer to the current value of the second and increment the second
      firstIndex = secondIndex;
      secondIndex++;
    } else {
      //else increment the second pointer
      secondIndex++;
    }
  }
  //return the unique count
  return unique;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([4]));