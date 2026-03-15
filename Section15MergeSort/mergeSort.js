function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let leftHalf = arr.slice(0, Math.floor(arr.length / 2));
  let rightHalf = arr.slice(Math.floor(arr.length / 2));
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(arr1, arr2) {
  let index1 = 0;
  let index2 = 0;
  let mergedArray = [];
  while (index1 < arr1.length || index2 < arr2.length) {
    if (index2 > arr2.length - 1) {
      mergedArray.push(arr1[index1]);
      index1++;
    } else if (index1 > arr1.length - 1) {
      mergedArray.push(arr2[index2]);
      index2++;
    } else if (arr1[index1] <= arr2[index2]) {
      mergedArray.push(arr1[index1]);
      index1++;
    } else if (arr1[index1] >= arr2[index2]) {
      mergedArray.push(arr2[index2]);
      index2++;
    }
  }
  return mergedArray;
}

console.log(mergeSort([10, 2, 55, 6, 3, 11, 15]));
console.log(mergeSort([10, 24, 76, 73, 1, 9]));
console.log(mergeSort([10, 24, 76, 73]));