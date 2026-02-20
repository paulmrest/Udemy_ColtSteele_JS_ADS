function flatten(arr) {
  if (arr.length === 0) {
    return [];
  }
  let nextSubArray = Array.isArray(arr[0]) ? flatten(arr[0]) : [arr[0]];
  return nextSubArray.concat(flatten(arr.slice(1)));
}

console.log(flatten([[[3, 4], [[5]]]]));

console.log(flatten([1, 2, 3, [4, 5] ]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1],[2],[3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));