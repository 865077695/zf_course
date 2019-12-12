race 那个快执行哪个

all所有都执行完才

``` javascript
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ok1")
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ok2")
    }, 2000)
})


Promise.race ([p1, p2]).then(res => {
    console.log(res);   // ok1
})


Promise.all([p1, p2]).then(res => {
    console.log(res)    // ["ok1", "ok2"]
})
```