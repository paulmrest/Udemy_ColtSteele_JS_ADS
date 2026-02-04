//assuming parameter array contains only integers
function findAllDuplicates(arr) {
  let twice = [];
  if (arr.length <= 0) {
    return twice;
  }
  let tracker = {};
  for (let num of arr) {
    if (tracker[num] === 1) {
      twice.push(num);
      tracker[num] = ++tracker[num];
    } else {
      tracker[num] = ++tracker[num] || 1;
    }
  }
  return twice;
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1]));
console.log(findAllDuplicates([4, 3, 2, 1, 0]));
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));