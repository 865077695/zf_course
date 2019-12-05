/**
 * Reflect: 反射
 * 更自由，与直接修改对象属性方法相比可以有第四个参数指定this
 *   
*/
const obj = {a: 1};
Reflect.set(obj, "name", "zhiq")

Reflect.get(obj, "name");

'a' in { a: 1 }    // true
Reflect.has({ a: 1 }, 'a')  // true

Object.defineProperty;  // 设置值，如果属性无法设置，不会有提示信息。比如被Object.freeze(obj)的对象就不能修改,此时修改这个对象的属性会报错
Reflect.defineProperty; // 如果用这个方法设置失败会返回false

// 获取自己的属性描述器
// ????
console.log(Object.getOwnPropertyDescriptor(obj, "a"));
// Symbol


// 模块


// class