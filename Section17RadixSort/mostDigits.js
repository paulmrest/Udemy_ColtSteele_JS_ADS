function mostDigits(arr) {
  let maxDigits = 0;
  for (const num of arr) {
    const currDigits = digitCount(num);
    if (currDigits > maxDigits) {
      maxDigits = currDigits;
    }
  }
  return maxDigits;
}

function mostDigitsRev(arr) {
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

console.log(mostDigits([1234, 56, 7]));
console.log(mostDigits([1, 1, 11111, 1]));
console.log(mostDigits([12, 34, 56, 78]));

console.log(mostDigitsRev([1234, 56, 7]));
console.log(mostDigitsRev([1, 1, 11111, 1]));
console.log(mostDigitsRev([12, 34, 56, 78]));