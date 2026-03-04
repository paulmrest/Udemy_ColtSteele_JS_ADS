function bubbleSort1(arr) {
  console.time('bubble sort');
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }
  console.timeEnd('bubble sort');
  return arr;
}

function bubbleSort2(arr) {
  console.time('bubble sort');
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.timeEnd('bubble sort');
  return arr;
}

function bubbleSort(arr) {
  console.time('bubble sort');
  let sorted = true;
  for (let i = arr.length - 1; i > 0; i--) {
    sorted = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sorted = false;
      }
    }
    if (sorted) {
      break;
    }
  }
  console.timeEnd('bubble sort');
  return arr;
}

console.log(bubbleSort1([5, 3, 8, 4, 9, 1, 7, 3, 2]))
console.log(bubbleSort2([5, 3, 8, 4, 9, 1, 7, 3, 2]))
console.log(bubbleSort([5, 3, 8, 4, 9, 1, 7, 3, 2]))