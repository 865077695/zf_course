let obj = {
    name: "zhiq",
    age: 18,
    a: { b: 2 },
    fn: () => { },
    c: undefined,
    d: null,
    e: /\d+/
}

/**
 * 1. 判断类型
 * typeof object array
 * Object.prototype.toString.call()
 * instanceof
 * constructor 构造函数
 */

const deepClone = (value, hash = new WeakMap) => {
    //  null == undefined
    if (value == undefined) return value;

    // 非对象(包含函数)
    if (typeof value !== 'object') return value;

    // 正则
    if (value instanceof RegExp) return new RegExp(value);
    // 日期
    if (value instanceof Date) return new Date(value)
    // Math,Error...

    // 对象、数组
    let instance = new value.constructor;   // 根据当前属性构造一个新的空实例
    if (hash.has(value)) {    // 如果hash中有存这个对象，就不在深拷贝他，直接返回对应的instance
        return hash.get(value);
    }
    hash.set(value, instance);  // 将value作为key存入WeakMap，下次再遇到循环引用这个对象时直接返回之前拷贝好的instance
    for (let key in value) {
        // 过滤掉原型链上的属性
        if (value.hasOwnProperty(key)) {
            instance[key] = deepClone(value[key], hash);  // 递归，去产生一个新的copy结果，带上hash，保证每次copy都能带上所有被拷贝过的对象的记录
        }
        return instance
    }
}

let obj = { a: 1 }
obj.b = obj;    // 如果obj已经被deepClone过了，那么下次用到时直接返回obj就行了，不要在拷贝了


deepClone(null)