function radixSort(arr) {
  let maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    let decBuckets = Array.from({length: 10}, () => []);
    for (let num of arr) {
      let kthDigit = getDigit(num, k);
      decBuckets[kthDigit].push(num);
    }
    arr = [].concat(...decBuckets);
  }
  return arr;
}

function getDigit(num, position) {
  return Math.floor(Math.abs((num / Math.pow(10, position)) % 10));
}

function mostDigits(arr) {
  let maxDigits = 0;
  arr.forEach(num => {
    maxDigits = Math.max(maxDigits, digitCount(num));
  });
  return maxDigits;
}

function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(radixSort([3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127]));