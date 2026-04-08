function digitCount(num) {
  let count = 0;
  let checkValue = Math.abs(Math.floor(num));
  while (checkValue > 0) {
    num = num / 10;
    count++;
    checkValue = Math.abs(Math.floor(num));
  }
  return count;
}

function digitCountRev(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(12345));
console.log(digitCount(1));
console.log(digitCount(25));
console.log(digitCount(314));
console.log(digitCount(0));
console.log(digitCount(674.7188));

console.log(digitCountRev(-12345));
console.log(digitCountRev(-1));
console.log(digitCountRev(-25));
console.log(digitCountRev(-314));
console.log(digitCountRev(0));
console.log(digitCountRev(674.7188));