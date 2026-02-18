//assuming when array is empty we return null
//assuming when length is larger than the array, we return null
function maxSubarraySum(array, len) {
  //if array is empty
    //return null
  if (!array || array.length === 0) {
    return null;
  }
  //if length > array
    //return null
  if (array.length < len) {
    return null;
  }
  //declare tracking sum
  let trackingSum = 0;
  //loop over the first length elements in array
    //build initial value for tracking sum
  for (let i = 0; i < len; i++) {
    trackingSum += array[i];
  }
  //declare max sum and set it to tracking sum
  let maxSum = trackingSum;
  //loop over the array starting at length
    //add value from current index to tracking sum
    //subtract value from current index minus length from tracking sum
    //set max sum to whichever is larger, tracking sum or max sum
  for (let i = len; i < array.length; i++) {
    trackingSum += array[i] - array[i - len];
    maxSum = Math.max(trackingSum, maxSum);
  }
  //return max sum
  return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2));
console.log(maxSubarraySum([2,3], 3));