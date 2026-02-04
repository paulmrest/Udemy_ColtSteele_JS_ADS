//assuming strings contain only lowercase alpha characters, no spaces, numbers, or special characters
//assuming if both strings are empty, function returns true
function constructNote(message, letters) {
  //if message has a length of 0
    //return true
  if (message.length === 0) {
    return true;
  }
  //if message or letters have a length of 0
    //return false
  if (letters.length === 0 || message.length === 0) {
    return false;
  }
  //instantiate object to track the characters from letters
  var tracker = {};
  //loop over letters
    //if char in letters is in the tracking object
      //increment its value
    //else
      //add char from letters to tracking object
  for (let char of letters.split('')) {
    tracker[char] = ++tracker[char] || 1;
  }
  //loop over message
    //if char in message is in the tracking object and has a value > 1
      //decrement value for char in tracking object
    //else
      //return false
  for (let char of message.split('')) {
    if (tracker[char]) {
      tracker[char] = --tracker[char];
    } else {
      return false;
    }
  }
  //return true
  return true;
}

console.log(constructNote('aa', 'abc'));
console.log(constructNote('abc', 'dcba'));
console.log(constructNote('aabbcc', 'bcabcaddff'));

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true