function capitalizeWords(arr) {
  if (arr.length <= 0 || typeof arr[0] !== 'string') {
    return [];
  }
  let str = arr[0];
  return [str.toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));