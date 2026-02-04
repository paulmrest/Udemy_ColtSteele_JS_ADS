function findAllDuplicates(arr) {
  let dupes = [];
  if (arr.length === 0) {
    return dupes;
  }
  let set = new Set();
  for (let num of arr) {
    set.has(num) ? dupes.push(num) : set.add(num);
  }
  return dupes;
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1]));
console.log(findAllDuplicates([4, 3, 2, 1, 0]));
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));