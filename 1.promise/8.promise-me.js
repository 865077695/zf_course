const PENDING = "PENDING";
const FULLFILLED = "FULLFILLED";
const REJECTED = "REJECTED";
// promise处理函数
// 返回值如果为普通值或无返回值，则直接传递给下个then，若为promise，则要执行这个
const resolvePromise = (promise, x, resolve, reject) => {
  // 对不同类型x值做不同处理

  // 1. 如果promise和x是同一个对象：  promise = p.then(data => promise)
  if (promise === x) {
    return reject(new TypeError("Chaining cycle detected for promise #<Promise>"))
  }

  // 3. 如果x是一个promise，那就采用他的状态
  if ((x !== null && typeof x === 'object') || typeof x === 'function') {
    // 可能是promise
    try {
      let then = x.then // 检查是否thenable
      if (typeof then === 'function') { // then是函数，那promise就可以被认为是一个Promise类型的对象
        then.call(x, (y) => { // p.then(data => new Promise((resolve, reject) => {settimeout(() => {resolve("111")})}))
          // resolve(y)
          resolve(resolvePromise(promise2, y, resolve, reject));
        }, (r) => { // p.then(data => new Promise((resolve, reject) => {settimeout(() => {reject("111")})}))
          reject(r)
        })

      } else {
        resolve(x)  // 不是函数，就直接将常量抛出去
      }
    } catch (e) {
      reject(e);
    }

  } else {
    // 2. 如果x不是一个promise，那就将直接将x作为成功的参数传递
    resolve(x)
  }
}
class Promise {
  constructor(executor) {
    this.value = undefined; // 默认值
    this.reason = undefined;  // 默认值
    this.status = PENDING;

    this.onResolveCallbacks = []
    this.onRejectCallbacks = []

    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULLFILLED;
        this.onResolveCallbacks.forEach(fn => fn()) // 若resolve在then后执行，先将方法存起来，当调用resolve方法时在一次执行之前存的所有函数
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectCallbacks.forEach(fn => fn())
      }
    }

    // 这里可能会发生异常，捕获到异常后，执行reject
    try {
      executor(resolve, reject); // 传入的执行器函数立即执行
    } catch (e) {
      reject(e);  // 将e赋值到reason
    }
  }

  // 调用then方法时，根据状态执行对应的回调函数
  then(onFullfilled, onRejected) {
    // then方法调用后应该返还一个新的promise

    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULLFILLED) {
        // 当前onFullfilled onRejected不能再当前的上下文中执行，为了确保代码中Promise2存在，因为在new结束之前promise是不存在的
        setTimeout(() => {
          try {
            let x = onFullfilled(this.value); // data为参数执行onFullfilled回调函数，并将执行结果传递到promise2的回调中
            resolvePromise(promise2, x, resolve, reject); // 返回值如果为普通值或无返回值，则直接传递给下个then，若为promise，则要执行这个
          } catch (e) {
            reject(e);  // 如果onFullfilled执行出错，将错误传递到下一个then
          }
        });

      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e);  // 如果onFullfilled执行出错，将错误传递到下一个then
          }
        });

      }

      if (this.status === PENDING) {
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFullfilled(this.value)
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);  // 如果onFullfilled执行出错，将错误传递到下一个then
            }
          });

        })

        this.onRejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e);  // 如果onFullfilled执行出错，将错误传递到下一个then
            }
          });

        })
      }
      // let x = onFullfilled(this.value); // data为参数执行onFullfilled回调函数，并将执行结果传递到promise2的回调中
      // resolve(x);
    })

    return promise2;

  }
}

module.exports = Promise;