async function async1() {
    console.log("async1 start");
    // await async2(); // 会直接执行async2，但是await下一行的内容会被加到微任务里.新版本node这种写法和promise.then结果一致，都直接加入微任务了
    // console.log("async1 end")
    async2().then(() => {
        console.log("async1 end")
    })
}

async function async2() {
    console.log("async2")
}

console.log("window1");

setTimeout(() => {
    console.log("settimeout")
})

async1();

new Promise(function (resolve) {
    console.log("promise")
    resolve()
}).then(function () {
    console.log("promise.then")
})

console.log("end")


// window1, async1 start, async2, promise, end, async1 end, promise.then, settimeout 