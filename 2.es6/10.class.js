/**
 * 类
 */
/*
//  继承公共属性prototype
class Animal {
    // 实例上的属性
    // type = "哺乳类" // 和写在constructor中是一样的，不过当下不支持,实例上的属性
    constructor() {
        this.type = '哺乳类';   // 实例上的属性
    }
    // 原型上的属性
    get a(){    // Object.defineProperty(Animal.prototype, a);  // 相当于往原型上添加属性 原型上的属性
        return 1
    }
    // 原型上的方法
    say() {  // 相当于prototype上的方法 原型上的方法
        console.log(this)
    }

    // 静态属性
    // static flag = "动物"    // es6不支持
    // 静态方法
    // static flag(){
    //     return "动物"
    // }
}

let animal = new Animal();
animal.say();
say = animal.say;
say();  // undefined   如果将类中的方法拿出来用，则必须bind this，因为say的this是既不指向window也不指向global，是undefined
console.log(JSON.stringify(animal))
console.log(animal.a)
console.log(animal.flag)
*/

// 继承
/**
 * 继承
 * 静态方法再es6内也会被继承
 */
class Animal {
    constructor(name) {
        this.name = name
        this.type = "动物"
    }
    say() {
        console.log("hello")
    }
    // static flag = 1; // 静态属性
}

// call + Object.create()  es5:继承实例属性和共有属性
class Tiger extends Animal {
    constructor(name) {
        super(name);    // 如果写了constructor，那么必须调super,来获取父实例属性 ，相当于调了Animal.call(tiger);
    }

    say() {  // 覆盖父类的原型上的方法
        super.say();    // super指向父类的原型，在这里可以这样扩展父类原型的方法
        console.log("嗷嗷嗷...")
    }
}
let tiger = new Tiger("老胡");
console.log(tiger)
tiger.say();    // 优先在Tiger的prototype上查找方法，然后到父类的原型上查找

/**
 * new 
 * 1. 创建了一个对象，并将对象传入到函数中作为this
 * 2. 将对象的原型链指向构造函数的prototype
 * 3. 返回定义的对象
 * 
 * 如果一个类返回了一个引用空间，那么实例将指向这个空间：构造函数返回{} []等情况
 */

function A() {
    this.name = 1;
    this.age = 2;
}
A.prototype.say = function () {
    console.log("hello")
}
function mockNew() {
    let obj = {};   // 创建一个对象
    let returnVal = A.call(obj);    // 执行A，并将this指向obj
    if((typeof returnVal === 'object' && returnVal !== null) || typeof returnVal === 'function'){  // 如果返回了一个引用空间
        return returnVal;
    }
    obj.__proto__ = A.prototype;    // 将obj的原型链指向A的原型
    return obj;
}

let obj = mockNew(A)

console.log(obj);