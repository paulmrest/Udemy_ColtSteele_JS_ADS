function someRecursive(arr, cb) {
  if (typeof cb !== 'function') {
    return false;
  }
  if (arr.length <= 0) {
    return false;
  }
  return cb(arr[0]) || someRecursive(arr.slice(1), cb);
}

function isOdd(num) {
  return num % 2 !== 0;
}

console.log(someRecursive([1,2,3,4], isOdd));
console.log(someRecursive([4,6,8,9], isOdd));
console.log(someRecursive([4,6,8], isOdd));
console.log(someRecursive([4,6,8], val => val > 10));