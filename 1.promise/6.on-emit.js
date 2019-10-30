// 发布订阅
// 读取数据  node异步会等待同步代码执行完成后执行
let school = {}

let e = {
  arr: [],
  obj: {},
  on(eventName, fn) {
    // this.arr.push(fn);
    if (!this.obj[eventName]) {
      this.obj[eventName] = [];
    }
    this.obj[eventName].push(fn)
  },
  emit(eventName) {
    console.log(this.obj)
    if (eventName && this.obj[eventName]) {
      this.obj[eventName].forEach(fn => fn())
    }
  }
}

// 订阅
e.on('a', () => {
  console.log("a")
})

// 订阅
e.on('b', () => {
  console.log("b")
})

// e.on('a', () => {
//   if (Object.keys(school).length === 2) {
//     console.log(school)
//   }
// })


setTimeout(() => {
  school.name = "zhiq"
  // 触发
  e.emit('a');
}, 1000);

setTimeout(() => {
  school.age = 18
  // e.emit('b');
}, 1000);


// 发布-订阅   观察者模式

// 发布订阅模式。发布者和订阅者没有关系
// 观察者模式，一方关注另一方之后，根据另一方的改变通知到关注者

// 发布订阅由第三方收集所有主题，及主题对应的订阅者。当主题被触发时，执行所有的订阅者函数
// 观察者模式，由主题收集所有的观察者，在某条件下主题将变化通知到所有的观察者