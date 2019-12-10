/**
 * Reflect: 反射
 * 更自由，与直接修改对象属性方法相比可以有第四个参数指定this，目的在于优化Object的一些方法和属性.对于现在Object上的一些方法逐渐转移通过Reflect来实现，后面可能会废弃掉Object上的不太合理的老方法
 *   
*/

// 1. get set
const obj = { a: 1 };
Reflect.set(obj, "name", "zhiq")

Reflect.get(obj, "name");
// 2. has
'a' in { a: 1 }    // true
Reflect.has({ a: 1 }, 'a')  // true

// 3. defineProperty
Object.defineProperty;  // 设置值，如果属性无法设置，不会有提示信息。比如被Object.freeze(obj)的对象就不能修改,此时修改这个对象的属性会报错
Reflect.defineProperty; // 如果用这个方法设置失败会返回false
console.log("------------")


// 4. 获取自己的属性描述器
console.log(Object.getOwnPropertyDescriptor(obj, "a"));
console.log(Reflect.getOwnPropertyDescriptor(obj, 'a'))
console.log("------------")

// 5. getOwnPropertyNames
let obj1 = {
    a: 1,
    [Symbol()]: 1
}
console.log(Object.getOwnPropertyNames(obj1))
console.log(Object.getOwnPropertySymbols(obj1))
console.log(Reflect.ownKeys(obj1))
console.log("------------")

// 6. 设置获取对象的原型链
// Object.setPrototypeOf.XXX.__proto__
// Reflect.getPrototypeOf


// 7. 函数的apply  apply支持多个参数传参
const fn = function (a, b) {
    console.log(this, a, b)
}

// fn.apply(1, [2, 3])
// fn.call(1, 2, 3)

// 覆盖了父类的apply
fn.apply = function () {
    console.log('apply')
}
// 此时如何调原型上的apply方法,调用原型的apply方法并使用call指定this
Function.prototype.apply.call(fn, 1, [2, 3])
Reflect.apply(fn, 1, [2, 3])    // 用Reflect可以直接这样调用

// 8. new Construct
class XXX {
    constructor(name) {
        this.name = name
    }
}

Reflect.construct(XXX, ["zhiq"])  // 等同于 new XXX()

// others
Reflect.deleteProperty // delete obj.a  返回是否删除成功

// Symbol


// 模块


// class