//assuming array is positive integers
//assuming target sum is a positive integer
//assuming if array is empty return 0
function minSubArrayLen(arr, targetSum) {
  //if array is empty
    //return 0
  if (!arr || arr.length <= 0) {
    return 0;
  }
  //calculate sum of whole array
  //if sum of whole array is less than the target sum
    //return 0
  let currSum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= targetSum) {
      return 1;
    } else {
      currSum += arr[i];
    }
  }
  if (currSum < targetSum) {
    return 0;
  }
  currSum = 0;
  //declare the min length seen so far
  //declare left index
  //declare right index
  let minLen = Infinity;
  let leftIndex = 0;
  let rightIndex = 0;
  //loop over array, exiting when the left index is greater than or equal to the length of the array
    //if the current sum is less than target sum and the right index is less than the length of the array
      //add the value at right index to the current sum
      //increment right index
    //else if the current sum is greater than or equal to the target sum
      //set min length to whichever is smaller, the current min length or difference between right index and left index
      //subtract the value at left index from the current sum
      //increment left index
  while (arr.length > leftIndex) {
    if (currSum < targetSum && rightIndex < arr.length) {
      currSum += arr[rightIndex];
      rightIndex++;
    } else if (currSum >= targetSum) {
      minLen = Math.min(minLen, rightIndex - leftIndex);
      currSum -= arr[leftIndex];
      leftIndex++;
    } else {
      break;
    }
  }
  //return min length
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));
console.log(minSubArrayLen([2,1,6,5,4], 9));
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95));