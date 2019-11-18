const Promise = require('./8.promise-me')

// 如果一个promise then的方法中返回了一个普通值

let p = new Promise((resolve, reject) => {
  resolve("hello");
})


// then方法返回一个新的promise
p.then(data => {
  return data
}).then(data => {
  console.log(data)
})