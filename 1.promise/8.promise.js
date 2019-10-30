// 并发问题
// 链式调用

// Promise是一个类
// 每次new一个Promise，都需要传递一个执行器，且该执行器立即执行
// 执行器有两个参数，resolve、reject
// 状态更新后不会在改变
// 每个promise都有一个then方法

// 异步
// 链式调用
let Promise = require("./8.promise-me");
let a = new Promise((resolve, reject) => {
  console.log("init")   // 1
  setTimeout(() => {
    resolve("promise over")
    // reject("fialed")
  }, 1000);
})

a.then(res => { // 3
  console.log(res);
}, err => {
  console.log(err)
})

console.log(2)  // 2