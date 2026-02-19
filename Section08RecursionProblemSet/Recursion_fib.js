function fib(ordinalFib) {
  let fibSeq = [];
  function fibHelper(ordinalFib, fibSeq) {
    if (ordinalFib === 0) {
      return fibSeq[fibSeq.length - 1];
    }
    if (fibSeq.length === 0) {
      fibSeq.push(1);
    } else if (fibSeq.length === 1) {
      fibSeq.push(1);
    } else {
      fibSeq.push(fibSeq[fibSeq.length - 2] + fibSeq[fibSeq.length -1]);
    }
    return fibHelper(ordinalFib - 1, fibSeq);
  }
  return fibHelper(ordinalFib, fibSeq);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));