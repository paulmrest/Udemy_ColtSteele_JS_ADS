function pivot(arr, comparator = (a, b) => a - b, startIndex = 0, endIndex = arr.length - 1) {
  let swapIndex = startIndex;
  const pivotValue = arr[startIndex];
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (comparator(pivotValue, arr[i]) > 0) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[startIndex], arr[swapIndex]] = [arr[swapIndex], arr[startIndex]];
  return swapIndex;
}

// console.log(pivot([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]));
// console.log(pivot([26, 23, 27, 44, 17, 47, 39, 42, 43, 1]));
// console.log(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]));

var arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
var arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
var arr3 = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strLength(a, b) {
  return a.length - b.length
}

console.log(pivot(arr1)); //3
console.log(pivot(arr2)); //4
console.log(pivot(arr3, strLength)); //1 d