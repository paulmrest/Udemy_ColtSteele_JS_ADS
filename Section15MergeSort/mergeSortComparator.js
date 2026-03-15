function mergeSortComparator(arr, comparator = (a, b) => a - b) {
  if (arr.length <= 1) {
    return arr;
  }
  let leftHalf = arr.slice(0, Math.floor(arr.length / 2));
  let rightHalf = arr.slice(Math.floor(arr.length / 2));
  return mergeComparator(mergeSortComparator(leftHalf, comparator), 
                         mergeSortComparator(rightHalf, comparator), 
                         comparator);
}

function mergeComparator(arr1, arr2, comparator = (a, b) => a - b) {
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
    } else if (comparator(arr1[index1], arr2[index2]) <= 0) {
      mergedArray.push(arr1[index1]);
      index1++;
    } else if (comparator(arr1[index1], arr2[index2]) >= 0) {
      mergedArray.push(arr2[index2]);
      index2++;
    }
  }
  return mergedArray;
}

// var arr3 = [-2,-1,0,4,5,6];
// var arr4 = [-3,-2,-1,2,3,5,7,8];
// console.log(mergeComparator(arr3, arr4));

// var names = ["Bob", "Ethel", "Christine"];
// var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];
 
// function stringLengthComparator(str1, str2) {
//   return str1.length - str2.length;
// }

// console.log(mergeComparator(names, otherNames, stringLengthComparator));

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(mergeSortComparator(nums));

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
// function strComp(a, b) {
//   if (a < b) { return -1;}
//   else if (a > b) { return 1;}
//   return 0;
// }

// console.log(mergeSortComparator(kitties, strComp));

var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 
function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(mergeSortComparator(moarKittyData, oldestToYoungest));

// console.log(mergeSortComparator([10, 2, 55, 6, 3, 11, 15]));
// console.log(mergeSortComparator([10, 24, 76, 73, 1, 9]));
// console.log(mergeSortComparator([10, 24, 76, 73]));

// const descending = (a, b) => b - a;

// console.log(mergeSortComparator([10, 2, 55, 6, 3, 11, 15], descending));
// console.log(mergeSortComparator([10, 24, 76, 73, 1, 9], descending));
// console.log(mergeSortComparator([10, 24, 76, 73], descending));