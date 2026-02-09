//assuming by average we mean an arithmetic mean (the "average" of 2, 4, and 4 is 5, (2 + 4 + 4) / 2 = 5)
//assuming the array contains integers
//assuming the array's integers can be negative or positive
function averagePair(arr, average) {
  //if array is empty
    //return false
  if (arr.length <= 0) {
    return false;
  }
  //create following pointer 
  //create leading pointer
  let follow = 0;
  let lead = 1;
  //while loop over array
  //if the values at the following and leading pointers have the sought average
    //return true
  //else if the leading pointer is at the end of the array
    //increment the following pointer
    //move the leading pointer to one position ahead of the following pointer
  //else
    //increment the leading pointer
  while (arr.length > follow + 1) {
    if ((arr[follow] + arr[lead]) / 2.0 === average) {
      return true;
    } else if (arr.length > lead) {
      lead++;
    } else {
      follow++
      lead = follow + 1;
    }
  }
  //return false
  return false;
}

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([], 4));