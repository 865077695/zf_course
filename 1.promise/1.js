// 高阶函数
// 一个函数的参数是一个函数(回调)、一个函数返回一个函数
function a(fn) {
  fn();
}

function b() {
  return fn
}


// 函数的before
Function.prototype.before = function (beforeFn) {
  return (...args) => { // 将所有参数收集为一个数组
    beforeFn();
    console.log(this)
    this(...args);  // 将数组参数展开
  }
}
const say = () => {
  console.log("说话")
}

let newSay = say.before(() => {
  console.log("您好")
})

newSay();
