const PENDING = "PENDING";
const FULLFILLED = "FULLFILLED";
const REJECTED = "REJECTED";
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
    if (this.status === FULLFILLED) {
      onFullfilled(this.value);
    }

    if (this.status === REJECTED) {
      onRejected(this.reason);
    }

    if (this.status === PENDING) {
      this.onResolveCallbacks.push(() => {
        onFullfilled(this.value)
      })

      this.onRejectCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  }
}

module.exports = Promise;