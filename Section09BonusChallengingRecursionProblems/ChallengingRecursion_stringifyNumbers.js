function stringifyNumbers(obj) {
  if (!obj) {
    return null;
  }
  const keyValues = Object.entries(obj);
  if (keyValues.length <= 0) {
    return obj;
  }
  let newObj = {};
  for (let kv of keyValues) {
    let key = kv[0];
    let value = kv[1];
    if (typeof value === 'object') {
      newObj[key] = stringifyNumbers(value);
    } else {
      newObj[key] = typeof value !== 'number' ? value : value.toString();
    }
  }
  return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));