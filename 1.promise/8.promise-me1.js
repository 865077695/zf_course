const PENDING = "PENDING";
const FULLFILLED = "FULLFILLED";
const REJECTED = "REJECTED";
class Promise {
  constructor(executor) {
    this.value;
    this.reason;
    this.status = PENDING;
    let resolve = value => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULLFILLED;
      }
    }

    let reject = reason => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
      }
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e)
    }
  }

  then(onFullFilled, onRejected) {
    if (this.status === FULLFILLED) {
      onFullFilled(this.value);
    }

    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
  }
}

module.exports = Promise