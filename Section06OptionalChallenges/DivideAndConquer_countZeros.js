function countZeroes(arr) {
  if (!arr || arr.length <= 0) {
    return 0;
  }
  let index = Math.trunc(arr.length / 2);
  let zeroCountDone = false;
  while (!zeroCountDone) {
    if (index === 0 || arr.length === index + 1) {
      if (arr.length === index + 1) {
        index++;
      }
      zeroCountDone = true;
      break;
    } else {
      if (arr[index] === 0) {
        if (index > 0 && arr[index - 1] === 1) {
          zeroCountDone = true;
          break;
        } else if (index === 1) {
          index = 0;
        } else {
          index = Math.max(0, Math.trunc((arr.length - index) / 2));
        }
      } else {
        index = Math.min(arr.length - 1, Math.trunc((arr.length + index) / 2));
      }
    }
  }
  return arr.length - index;
}

console.log(countZeroes([1,1,1,1,0,0]));
console.log(countZeroes([1,0,0,0,0]));
console.log(countZeroes([0,0,0]));
console.log(countZeroes([1,1,1,1]));