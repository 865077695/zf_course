/**
 * 怎么用es5模拟es6中的class
 * 
 * 用构造函数来模拟类
 * 勒种有两种属性：1.实例上的属性  2. 公共属性
 */
/**
 * new的原理
 * 
 */
// function Animal() {
//     // 如果不是通过new调用Animal，此时this的原型不是Animal，返回错误
//     if (!(this instanceof Animal)) {
//         throw new Error(" NOT NEW")
//     }

//     // 实例属性，每个实例这些属性不相等
//     this.name = { name: "zhiq" };
//     this.age = 10;
// }
// // 公共属性
// Animal.prototype.say = function () {
//     console.log("hello")
// }
// let a1 = new Animal();
// console.log(a1.__proto__ === Animal.prototype);  // true
// console.log(a1.__proto__.constructor === Animal);     // true
// console.log(Animal.prototype.__proto__ === Object.prototype);    // true
// console.log(Object.prototype.__proto__ === null);  // true


/**
 * 类的继承  继承实例上的属性和公共属性
 * 
 */


function Animal() {

}

Animal.prototype.say = function () {
    console.log("hello");
    this.type = "哺乳类"
}

function Tiger(name) {
    this.name = name;
    Animal.call(this);  // 调用父类的构造函数，让this指向子类来继承实例方法
}
// 获取公共方法
// Tiger.prototype = Animal.prototype; // 错误写法
// Tiger.prototype.__proto__ = Animal.prototype;    // 正确写法1，但不建议直接操作__proto__
// Object.setPrototypeOf(Tiger.prototype, Animal.prototype);   // 功能等同于上一行，es6写法，指定Tiger.prototype的__proto__指向Animal.prototype
Tiger.prototype = Object.create(Animal.prototype, { constructor: { value: Tiger } });  // 
let tiger = new Tiger("老胡");
console.log(tiger.type);
