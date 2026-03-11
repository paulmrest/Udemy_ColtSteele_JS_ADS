function insertionSort(arr) {
  console.log('Sorting With Splices: [' + arr + ']');
  console.time('insertionSort With Splices');
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      for (let j = i - 1; j >= 0; j--) {
        if (j === 0 || arr[j - 1] < arr[i]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
          break;         
        }
      }
    }
  }
  console.timeEnd('insertionSort With Splices');
  return arr;
}

function insertionSort2(arr) {
  console.log('Sorting Without Splices: [' + arr + ']');
  console.time('insertionSort Without Splices');
  
  for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      //let lastInnerIndex = i - 1;
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
        //lastInnerIndex = j;
      }
      arr[j + 1] = currentVal;
  }
  console.timeEnd('insertionSort Without Splices');
  return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2]));
console.log(insertionSort2([5, 3, 4, 1, 2]));

console.log(insertionSort([3, 44, 38, 5, 47, 15]));
console.log(insertionSort2([3, 44, 38, 5, 47, 15]));

console.log(insertionSort([2, 1, 9, 76, 4]));
console.log(insertionSort2([2, 1, 9, 76, 4]));

console.log(insertionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]));
console.log(insertionSort2([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]));

// console.log(insertionSort2([5, 3, 4, 1, 2]));
// console.log(insertionSort2([3, 44, 38, 5, 47, 15]));
// console.log(insertionSort2([2, 1, 9, 76, 4]));
// console.log(insertionSort2([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]));