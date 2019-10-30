class Subject { // 被观察者
  constructor() {
    this.arr = [];
    this.state = "打开"
  }
  attach(o) {
    this.arr.push(o);
  }

  setState(newState) {
    this.state = newState;
    this.arr.forEach(o => o.update(newState));
  }
}

class Observer { // 观察者
  constructor(name){
    this.name = name
  }

  update(newState){
    console.log(this.name + newState)
  }
}

let oa = new Observer("a");
let ob = new Observer("b");
let s = new Subject("s");

s.attach(oa);
s.attach(ob);

s.setState("关闭"); //状态修改时，通知到所有的观察者