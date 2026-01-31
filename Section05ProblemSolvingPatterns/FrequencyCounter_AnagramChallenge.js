//assuming both strings have only alpha characters (no numerics, spaces, or other special characters)
//assuming we are doing this CI
function validAnagram(str1, str2) {
  //check that two strings have the same length
  if (str1.length !== str2.length)
  {
    return false;
  }
  //create count/frequency object
  var counts = {};
  //loop over chars in str1
  for (var char1 of str1) {
    //convert char to lowercase
    char1 = char1.toLowerCase();
    //for each char in str1, increment the value for the key that is that char in the count/frequency object
    counts[char1] = (counts[char1] || 0) + 1;
  }
  //loop over chars in str2
  for (var char2 of str2){
    //convert char to lowercase
    char2 = char2.toLowerCase();
    //for each char in st2, decrement the value for the key that is that is the char in the count/frequency object
    counts[char2] = (counts[char2] || 0) - 1;
  }
  //loop over the count/frequency object
  for (var count of Object.values(counts)) {
    //check that each value is 0
    //if not return false
    if (count !== 0) {
      return false;
    }
  }
  //return true
  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram("rat","car"));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));


// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true