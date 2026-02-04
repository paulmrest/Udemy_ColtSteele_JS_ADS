//assuming ints represented as strings can be compared to ints represented as ints
//assuming strings and chars are CS
function areThereDuplicates(...args) {
  //check if there are at least two arguments
  if (args.length <= 1) {
    return false;
  }
  //create the two pointers
  let firstIndex = 0;
  let secondIndex = 1;
  //loop over the args
    //check if arg at the first and second pointer are ints
    //if first and second pointer point at equal values
      //return true
    //else
      //if second index is at the end of the array
        //increment first index
        //move second index to first index + 1
      //else if second index is not at the end of the array
        //increment second index
  while (args.length > firstIndex + 1) {
    let firstValue = args[firstIndex];
    let secondValue = args[secondIndex];
    let intFirstValue = parseInt(firstValue, 10);
    if (!isNaN(intFirstValue)) {
      firstValue = intFirstValue;
    }
    let intSecondValue = parseInt(secondValue, 10);
    if (!isNaN(intSecondValue)) {
      secondValue = intSecondValue;
    }
    if (firstValue === secondValue) {
      return true;
    }
    else {
      if (args.length === secondIndex + 1) {
        firstIndex++;
        secondIndex = firstIndex + 1;
      } else if (args.length > secondIndex + 1) {
        secondIndex++;
      }
    }
  }
  //return false
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
console.log(areThereDuplicates('1', 'b', 1, 'a'));
console.log(areThereDuplicates('a', 'b', 'c', 'A'));
console.log(areThereDuplicates('a', 'b', 'c', 'd', 'e', 'f', 'd'));