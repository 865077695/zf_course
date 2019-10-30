// react 事务的改变

const perform = (anyMethod, wrappers) => {
  wrappers.forEach(wrap => {
    wrap.initilizae();
  })
  anyMethod();
  wrappers.forEach(wrap => {
    wrap.close();
  })
}


perform(() => {
  console.log("说话")
}, [
  { // warpper
    initilizae() {
      console.log("你好")
    },
    close() {
      console.log("再见")
    }
  }, { // warpper
    initilizae() {
      console.log("你好1")
    },
    close() {
      console.log("再见1")
    }
  }
])

// 柯里化
