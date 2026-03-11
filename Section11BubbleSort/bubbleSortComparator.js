function bubbleSort(arr, comparator = (a, b) => a - b) {
  let sorted = true;
  for (let i = arr.length; i > 0; i--) {
    sorted = true;
    for (let j = 0; j < i - 1; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sorted = false;
      }
    }
    if (sorted) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([4, 20, 12, 10, 7, 9]));
console.log(bubbleSort([0, -10, 7, 4]));
console.log(bubbleSort([1, 2, 3]));
console.log(bubbleSort([]));

let nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(bubbleSort(nums));

console.log(bubbleSort(nums, (a, b) => b - a));

let kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}

console.log(bubbleSort(kitties, strComp));

let moarKittyData = [{
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
};

console.log(bubbleSort(moarKittyData, oldestToYoungest));
console.log("debugger hold");