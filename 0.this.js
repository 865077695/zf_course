// 1、 是否由箭头函数调用 ->指向箭头函数外层非箭头函数的this指向 ;
// 2、 是否由new调用 ->指向新创建的对象 ;
// 3、 是否由call || apply || bind 调用 -> 指向指定的对象 ;
// 4、 是否由对象调用 -> 指向这个对象 ;
// 5、 上面几种情况都不是：严格模式下指向undefined，非严格模式下指向全局对象

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

