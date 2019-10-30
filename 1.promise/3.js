// 柯里化： 将一个函数拆分成多个函数

// 判断类型 Object.prototype.toString.call

const checkType = (type) => {
  return (content) => {
    return Object.prototype.toString.call(content) === `[object ${type}]`
  }
}

const types = ["Number", "String", "Boolean"];
let utils = {}
types.forEach(type => {
  utils['is' + type] = checkType(type)
})

console.log(utils.isString("123"))
console.log(utils.isString(123))


add = (a, b, n, s, r) => {
  return a + b + n + s + r
}

const curring = (fn, arr = []) => {
  let len = fn.length;
  return (...args) => {
    arr = arr.concat(args);
    if (arr.length < len) {
      return curring(fn, arr)
    }
    console.log(arr)
    return fn(...arr)
  }
}

let r = curring(add)(1)(2)(3)(4, 5)
console.log(r)