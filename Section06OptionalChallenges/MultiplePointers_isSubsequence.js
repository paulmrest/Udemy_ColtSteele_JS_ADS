//assuming CI
//assuming if substring is empty, then we return true
function isSubsequence(subStr, str) {
  //if substring is empty
    //return true
  if (!subStr) {
    return true;
  }
  //if string is empty
    //return false
  if (!str) {
    return false;
  }
  //declare pointer for substring
  //declare pointer for string
  let subPointer = 0;
  let strPointer = 0;
  //loop over substring
    //declare variable to hold lowercase char of substring
    //declare variable to hold lowercase char of string
    //if substring char equals string char
      //increment substring pointer
      //increment string pointer
    //else if at the end of string and no match
      //return false
    //else
      //increment string pointer
  while (subStr.length > subPointer) {
    let subChar = subStr.charAt(subPointer).toLowerCase();
    let strChar = str.charAt(strPointer).toLowerCase();
    if (subChar === strChar) {
      subPointer++;
      strPointer++;
    } else if (str.length < strPointer + 1) {
      return false;
    } else {
      strPointer++
    }
  }
  //return true
  return true;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));