function insertionSort(arr, comparator = (a, b) => a - b) {
  for (let i = 1; i < arr.length; i++) {
    if (comparator(arr[i - 1], arr[i]) > 0) {
      for (let j = i - 1; j >= 0; j--) {
        if (j === 0 || comparator(arr[j - 1], arr[i]) < 0) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
          break;         
        }
      }
    }
  }
  return arr;
}

console.log(insertionSort([4, 20, 12, 10, 7, 9]));
console.log(insertionSort([0, -10, 7, 4]));
console.log(insertionSort([1, 2, 3]));
console.log(insertionSort([]));

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(insertionSort(nums));

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}

console.log(insertionSort(kitties, strComp));

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

console.log(insertionSort(moarKittyData, oldestToYoungest));