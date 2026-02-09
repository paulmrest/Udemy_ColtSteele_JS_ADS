//assuming an empty array returns false
//assuming we are looking for absolute values of differences
function findPair(array, diff) {
  //if array is empty
    //return false
  if (!array || array.length === 0) {
    return false;
  }
  //declare following pointer
  //declare leading pointer
  let following = 0;
  let leading = 1;
  //loop over array
    //declare variable for value at following pointer
    //declare variable for value at leading pointer
    //if absolute value of difference between values equal the sought diff
      //return true
    //else if following pointer is at the end of the array
      //return false
    //else if leading pointer is at the end of the array
      //increment following pointer
      //set leading pointer to following pointer + 1
    //else
      //increment leading pointer
  while (array.length > following + 1) {
    if (Math.abs(array[following] - array[leading]) === Math.abs(diff)) {
      return true;
    } else if (array.length > leading) {
      leading++;
    } else {
      following++;
      leading = following + 1;
    }
  }
  //return false
  return false;
}

console.log(findPair([6,1,4,10,2,4], 2));
console.log(findPair([8,6,2,4,1,0,2,5,13],1));
console.log(findPair([4,-2,3,10],-6));
console.log(findPair([6,1,4,10,2,4], 22));
console.log(findPair([], 0));
console.log(findPair([5,5], 0));
console.log(findPair([-4,4], -8));
console.log(findPair([-4,4], 8));
console.log(findPair([1,3,4,6],-2));
console.log(findPair([0,1,3,4,6],-2));
console.log(findPair([1,2,3], 0));