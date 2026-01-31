function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var counts = {};
  for (var char1 of str1) {
    char1 = char1.toLowerCase();
    counts[char1] = (counts[char1] || 0) + 1;
  }
  for (var char2 of str2) {
    char2 = char2.toLowerCase();
    if (counts[char2]) {
      counts[char2] = --counts[char2];
    } else {
      return false;
    }
  }
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