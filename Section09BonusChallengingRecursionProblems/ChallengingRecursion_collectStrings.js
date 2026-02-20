function collectStrings(obj) {
  if (!obj) {
    return [];
  }
  let str = [];
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === 'string') {
      str.push(value);
    } else if (typeof value === 'object') {
      str = str.concat(collectStrings(value));
    }
  }
  return str;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));