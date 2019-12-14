// 装饰器  装饰模式， 在执行类之前可以进行包装
// 装饰器必须是一个函数，如果这个type1没有返回一个函数，那么默认参数为类，且从下往上依次执行所有装饰器
// 如果装饰器返回一个函数，那返回的这个函数的参数是类，而装饰器此时可以接受一个参数作为type这个函数的参数

// @type1   // 相当于type(Animal)
// @type2("type")  // type2返回一个函数，这里传入的值为type2函数的参数。
// class Animal {

// }

// function type1(constructor) {
//     console.log(constructor)
// }

// function type2(type) {
//     return function (constructor) {
//         constructor.type2 = type
//     }
// }

// mixin 混合

// let obj = {
//     name: '1',
//     age: '18'
// }
// @mixin(obj)
// class School {

// }

// function mixin(obj) {
//     return function (constructor) {
//         Object.assign(constructor.prototype, obj)
//     }
// }