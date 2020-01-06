// 其他：适合CPU密集的，计算压缩等单任务难度较大的,每个进程专注处理一件事
// 相当于饭店里一个服务员负责一桌,服务员不够时其他顾客等着

// node：事件驱动、适合任务多但单个任务简单的,事件回调
// 相当于一个服务员站在这儿,客人有需求找到服务员,服务员去处理

/**
 * node 中的global相当于浏览器中的window
 * 全局属性
 * process 进程
 * Buffer 缓存区。读取文件存储到内存中。16进制
 * 
 * clearInterval  setInterval
 * clearTimeout  setTimeout
 * clearImmediate  setImmediate
 *  */


(function () {
    // console.log(this === global)
    // console.log(Object.keys(global))
    // console.log(this.Buffer)
    // console.log('process.platform: ', process.platform);
    // console.log('process.argv: ', process.argv.slice(2));    // 执行的文件,可用于收集用户传入的参数
    // console.log('process.pid: ', process.pid);
    // console.log('process.cwd(): ', process.cwd()); // 目录
    console.log('process.env: ', process.env);
})()