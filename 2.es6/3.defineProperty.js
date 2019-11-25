// Object.defineProperty  getter setter


/**
 * 基础用法
 */
// let obj = {
//     _a: '',
//     get a() {
//         return this._a;
//     },
//     set a(value) {
//         this._a = value;
//     }
// }

// obj.a = 100
// console.log(obj.a)

/**
 * defineProperty用法
 */
// let obj = {};
// let val = ''
// Object.defineProperty(obj, 'a', {
//     // value: 1,   //默认不可枚举,不可修改,不可删除
//     // enumerable: true,
//     // writable: true,
//     // 使用get set替代value,此时不可添加enumerable、writable属性，因为这两个属性已默认为true
//     get() {
//         return val
//     },
//     set(value) {
//         val = value
//     },
//     configurable: truq

// })

/**
 * vue数据劫持实现
 * 使用defineProperty递归遍历重写每一项属性,数组类型重写其push等方法
 * 
 * 性能差
 */
let obj = {
    a: 1,
    b: 2
}

// 遍历监听对象属性
function observer(obj) {
    // 递归先设定终止条件
    if (typeof obj !== 'object' && obj === null) {
        return
    }

    for (let key in obj) {
        // 因为defineProperty需要一个变量来储值，因此传入obj[key]来保存临时值
        defineReactive(obj, key, obj[key]);
    }
}

// 使用defineProperty重写对象的每个属性
function defineReactive(obj, key, value) {
    observer(value);    // 将属性值继续执行observer，直至属性值不是obj
    Object.defineProperty(obj, key, {
        get() {
            console.log("get")
            return value;
        },
        set(val) {
            updateView();   // 通知相关试图更新
            value = val;
        }
    })
}

observer(obj)
obj.a = 100;
console.log(obj.a)


function updateView() {
    console.log("更新")
}


