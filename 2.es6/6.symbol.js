// 数据类型 string number boolean null undefined
// Symbol  独一无二，常用作常量不可修改

const s1 = Symbol("zhiq");  // 创建新的Symbol
const s2 = Symbol("zhiq");

console.log(s1 === s2); // false

// 属性私有化
let s3 = Symbol.for("zhiq");    // 如果这个值已经有Symbol保存他了，那就直接返回这个值给这个新的变量
let s4 = Symbol.for("zhiq");
console.log(s3 === s4)   // true

console.log(Symbol.keyFor(s3))

// Symbol作为key
let obj = {
    [s1]: 1 // es6写法，将s1的结果取出来作为key
}

// 可以用来改变js源代码的功能
// instanceof // 可以判断某个人是否是谁的实例

let o = {
    name: "zhiq"
}

let obj1 = {
    [Symbol.hasInstance]() {    // 方法
        return 'name' in o;
    },
    get [Symbol.toStringTag]() { // 属性
        return '123'
    }
}

console.log(o instanceof obj1)

console.log(obj1.toString())