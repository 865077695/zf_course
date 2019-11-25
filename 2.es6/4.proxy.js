/**
 * 兼容性差
 * 代理  创建一个代理，帮我们干某些事
 * 
 * 
 * 优势
 * 可以监听数组的变化
 * 监听整个对象,并返回一个对象,不用遍历对象属性
 */

let obj = {
    a: { a: 2 },
    b: 2
}
// let obj = [1, 2, 3]

// proxy相当于代理一个对象，在访问这个对象时由proxy先进行拦截处理，所以在修改proxy时原对象的值也发生了改变，但其实二者并不是同一个东西，虽然打印的结果一样

// proxy只代理当前对象,多层需要递归
let handler = {
    get(target, key){
        // 如果key的值是一个对象，那递归代理这个对象
        if(typeof target[key] === "object"){
            return new Proxy(target[key], handler)
        }
        return Reflect.get(target,key)
    },
    set(target,key,value){
        if(key === 'length') return true
        return Reflect.set(target, key, value)
    }
}

let proxy = new Proxy(obj, handler)

proxy.a.a = 100;

// proxy.push(1)

// console.log(obj.length)