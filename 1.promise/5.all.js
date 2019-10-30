// 读取数据  node异步会等待同步代码执行完成后执行

let school = {}

// 计数器，在多个函数执行完后执行某操作
const after = (times, fn) => (() => --times === 0 && fn())
// const after = (times, fn) => {
//   return () => {
//     --times === 0 && fn();
//   }
// }

let newAfter = after(2, () => {
  console.log("全部执行完了")
})

setTimeout(() => {
  newAfter();
}, 1000);

setTimeout(() => {
  newAfter();
}, 1000);