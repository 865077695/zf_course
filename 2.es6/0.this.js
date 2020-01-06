// 1、 是否由箭头函数调用 ->指向箭头函数外层非箭头函数的this指向 ;
// 2、 是否由new调用 ->指向新创建的对象 ;
// 3、 是否由call || apply || bind 调用 -> 指向指定的对象 ;
// 4、 是否由对象调用 -> 指向这个对象 ;
// 5、 上面几种情况都不是：严格模式下指向undefined，非严格模式下指向全局对象

/**
 * 构造函数返回值
 * 在JavaScript构造函数中：如果return值类型，那么对构造函数没有影响，实例化对象返回空对象；如果return引用类型（数组，函数，对象），那么实例化对象就会返回该引用类型，但仍然可以读取到prototype上的属性和方法；
 */
// let声明的变量不在window上


let a = 100;

let obj = {
    a: 1,
    fn1() {
        console.log('fn1', this.a);
    },
    fn2() {
        setTimeout(function () {
            console.log('fn2', this.a);
        })
    },
    fn3() {
        setTimeout(() => {
            console.log('fn3', this.a);
        })
    },
    fn4: () => {
        setTimeout(() => {
            console.log('fn4', this.a)
        });
    }
}

obj.fn1();
obj.fn2();
obj.fn3();
obj.fn4();




function Person() {
    //      return 123;                         //值类型
    //      return "abcdef";                    //值类型
    //      return ["a","b"];                   //引用类型
    //      return {a:2};                       //引用类型
    return function () { console.log(1) };   //引用类型
}
Person.prototype.sayHello =
    function () {
        console.log('hello world');
    };
console.log(new Person());

    //new Person()分别返回以下:
    //        1. Person{}
    //        2. Person{}
    //        3. ["a","b"];
    //        4. Object {a:2}
