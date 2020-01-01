// 浏览器的事件循环
// $nextTick
// 将nextTick的回调函数加入callback数组，在同步代码执行完之后将回调函数列表加入微任务或宏任务
// promise、MutationObserver、setImmediate(IE)、setTimeout





// 微任务：promise.then,MutationObserver、process.nextTick(node)

// 宏任务：script、ajax、事件、requestFrameAnimation、setTimeout、setInterval、setImmediate(IE)、MessageChannel、UI rendering



// node事件循环：node11与浏览器表现一致