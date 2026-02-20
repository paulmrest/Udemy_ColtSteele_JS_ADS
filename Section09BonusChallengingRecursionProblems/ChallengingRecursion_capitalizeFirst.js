function capitalizeFirst(arr) {
  if (arr.length === 0 || arr[0].length === 0) {
    return [];
  }
  let str = arr[0];
  return [str[0].toUpperCase().concat(str.slice(1))].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana']));