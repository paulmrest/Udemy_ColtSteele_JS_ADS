//assuming both parameters are positive integer values
function sameFrequency(num1, num2) {
  //checking that the parameters are valid
  if (num1 <= 0 || num2 <= 0) {
    return false;
  }
  //create object to count digits
  let digits = {};
  //loop over num1
  while (num1 !== 0) {
    //use modulo to count digits (destructively)
    let digit1 = num1 % 10;
    digits[digit1] = ++digits[digit1] || 1;
    num1 = Math.trunc(num1 / 10);
  }
  //loop over num2
  while (num2 !== 0) {
    //use modulo to extract digits
    let digit2 = num2 % 10;
    num2 = Math.trunc(num2 / 10);
    //check that each digit occurs the same number of times as they did in num1
    if (digits[digit2]) {
      digits[digit2] = --digits[digit2];
    }
    //if not, return false
    else {
      return false;
    }
  }
  //return true
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(31, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));