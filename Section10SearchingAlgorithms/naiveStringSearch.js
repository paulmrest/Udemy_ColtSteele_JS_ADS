function naiveStringSearch(str, target) {
  if (!str || str.length === 0 || target.length > str.length) {
    return 0;
  }
  let matches = 0;
  for (let i = 0; i < str.length - target.length + 1; i++) {
    if (str[i] === target[0]) {
      for (let j = 1; j < target.length; j++) {
        if (str[i + j] === target[j]) {
          if (j === target.length - 1) {
            matches++;
            i = i + j;
            break;
          }
        } else {
          break;
        }
      }
    }
  }
  return matches;
}

console.log(naiveStringSearch('wowomgzomg', 'omg'));
console.log(naiveStringSearch('aaaaaaaaa', 'aaa'));
console.log(naiveStringSearch('loried loled', 'lol'));
console.log(naiveStringSearch('loried loled', 'lo'));
console.log(naiveStringSearch('wowomomgzomg', 'omg'));