//assuming that if the string is empty we return 0
//assuming algorithm is CS
function findLongestSubstring(str) {
  //if string is empty
    //return 0
  if (!str || str.length === 0) {
    return 0;
  }
  //if string is all unique characters
    //return length of string
  if (new Set(str).size === str.length) {
    return str.length;
  }
  //declare tracker object
  //declare variable for longest unique string seen so far
  //declare the starting index for the current unique string
  let tracker = {};
  let currLongest = 0;
  let currStart = 0;
  //loop over the string, for loop left to right
    //if we've seen the character before
      //we shift pointer for the start of the current unique string to the either
      //the index + 1 of the last time we saw the character, or the current pointer for
      //the start of the unique string, whichever is larger.
    //set the length of the longest unique string so far: when the length of the longest unique string seen 
    //so far is less the difference between i and the pointer for the current unique string (+1 to account 
    //for zero indexing) we set the length of the longest unique string seen far to the difference between 
    //i and the pointer for the current unique string (+1) the difference between i and the pointer for the
    //current unique string (+1) being greater than the longest unique string length so far mostly occurs 
    //at the beginning of the string, when we are encountering characters for the first time
    //set/add the char to tracker object with the current index + 1
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (tracker[char]) {
      currStart = Math.max(currStart, tracker[char]);
    }
    currLongest = Math.max(currLongest, i - currStart + 1);
    tracker[char] = i + 1;
  }
  //return the length of the longest unique string seen
  return currLongest;
}

console.log(findLongestSubstring('thebrownlazy'));

console.log(findLongestSubstring('thisis'));

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));