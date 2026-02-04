//assuming ints represented as strings can be compared to ints represented as ints
//assuming strings and chars are CS
function areThereDuplicates(...args) {
  //check if there at least 2 arguments
  if (args.length < 2) {
    return false;
  }
  //create object to track which arguments have been seen
  let counts = {};
  //loop over the arguments
    //check if the argument is or can be parsed to a number
    //if we've seen the argument before
      //return true
    //else add the argument to the object
  for (let arg of args) {
    let intArg = parseInt(arg, 10);
    if (!isNaN(intArg)) {
      arg = intArg;
    }
    if (counts[arg]) {
      return true;
    } else {
      counts[arg] = 1;
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