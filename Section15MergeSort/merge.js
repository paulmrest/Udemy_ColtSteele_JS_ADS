// function merge(arr1, arr2) {
//   let index1 = 0;
//   let index2 = 0;
//   let mergedArray = [];
//   while (index1 < arr1.length || index2 < arr2.length) {
//     if (index2 > arr2.length - 1) {
//       mergedArray.push(arr1[index1]);
//       index1++;
//     } else if (index1 > arr1.length - 1) {
//       mergedArray.push(arr2[index2]);
//       index2++;
//     } else if (arr1[index1] <= arr2[index2]) {
//       mergedArray.push(arr1[index1]);
//       index1++;
//     } else if (arr1[index1] >= arr2[index2]) {
//       mergedArray.push(arr2[index2]);
//       index2++;
//     }
//   }
//   return mergedArray;
// }


function merge(arr1, arr2, comparator = (a, b) => a - b) {
  let index1 = 0;
  let index2 = 0;
  let mergedArray = [];
  while (index1 < arr1.length && index2 < arr2.length) {
    if (comparator(arr1[index1], arr2[index2]) <= 0) {
      mergedArray.push(arr1[index1]);
      index1++;
    } else if (comparator(arr1[index1], arr2[index2]) >= 0) {
      mergedArray.push(arr2[index2]);
      index2++;
    }
  }
  while (index1 < arr1.length) {
      mergedArray.push(arr1[index1]);
      index1++;
  }
  while (index2 < arr2.length) {
      mergedArray.push(arr2[index2]);
      index2++;
  }
  return mergedArray;
}

console.log(merge([1, 2], []))
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(merge([1, 10, 50, 99], [2, 10, 14, 99, 100]));