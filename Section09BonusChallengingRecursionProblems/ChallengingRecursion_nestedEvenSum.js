function nestedEvenSum(obj) {
  if (!obj) {
    return 0;
  }
  let arr = Array.isArray(obj) ? obj : Object.values(obj);
  if (arr.length <= 0) {
    return 0;
  }
  let nextValue = arr[0];
  let nextEvenNum = 0;
  if (typeof nextValue === 'object') {
    nextEvenNum = nestedEvenSum(Object.values(nextValue));
  } else if (!isNaN(nextValue)) {
    nextEvenNum = nextValue % 2 === 0 ? nextValue : 0;
  }
  return nextEvenNum + nestedEvenSum(arr.slice(1));
}

// function nestedEvenSum(obj) {
//   if (!obj) {
//     return 0;
//   }
//   return evenSumHelper(Object.values(obj));
// }

// function evenSumHelper(arr) {
//   if (arr.length <= 0) {
//     return 0;
//   }
//   let nextValue = arr[0];
//   let nextEvenNum = 0;
//   if (typeof nextValue === 'object') {
//     nextEvenNum = evenSumHelper(Object.values(nextValue));
//   } else if (!isNaN(nextValue)) {
//     nextEvenNum = nextValue % 2 === 0 ? nextValue : 0;
//   }
//   return nextEvenNum + evenSumHelper(arr.slice(1));
// }

// var obj3 = {
//   a: 2,
//   b: {b: 4, bb: {b: 3, bb: {b: 6}}},
//   c: {c: {c: 8}, cc: 'ball', ccc: 5},
// };

// console.log(nestedEvenSum(obj3)); //2 + 4 + 6 + 8 = 20


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));