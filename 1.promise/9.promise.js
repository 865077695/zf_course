let fs = require('fs');


// 如果需要改造成promise， 先将回调的方法改造成promise，此时函数返回的是一个promise对象
function readFile(...args) {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, function (err, data) {
      if (err) reject(err)
      resolve(data)
    })
  })
}

// 链式调用
// 如果没有在前面的then里面做错误处理，那么错误会一直往后面的then推，如果在前面的then里处理了错误，那么后一个then的success会接收then，err里返回的值
// 1. 普通值（不是promise也不时错误）
// 2. 如果返回的是一个promise，那这个promise会自动执行，并将自己的状态往下一个then传递
// 返回普通值时是返回了一个新的promise来实现链式调用
readFile("./1.promise/name.txt", "utf-8").then(data => {
  console.log("success: ", data)
  return data;  // 此处返回的data若为普通值会成为下一个then函数的参数
  // 想让下一个then走失败：返回一个失败的promise或者抛出异常：  throw new Error('err)  return new Promise((resolve,reject) => {reject()})
}, err => {
  console.log('err: ', err)
}).then(data => {
  return data // 直接return普通值，会继续往下传递
}, err => {
  console.log(err)
}).then(data => {
  return readFile(`./1.promise/${data}`, "utf-8") // return promise对象会使用这个新的promise对象的状态来决定下一个then的调用
}).then(res => {
  console.log(res)
})




// 原生方法，通过函数的第一个参数来控制
// fs.readFile('./1.promise/name.txt', 'utf-8', (err, data) => {
//   if (err) {
//     return console.log(err);
//   }
//   fs.readFile(`./1.promise/${data}`, 'utf-8', (err, data) => {
//     if (err) return console.log(err)
//     console.log(data)
//   })
// })