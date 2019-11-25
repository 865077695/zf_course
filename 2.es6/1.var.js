// var 
/**
 * 1) 声明变量默认在全局上
 */
/*
let a = 1;

function b() {

    let a = 2;
    console.log(a)
}
console.log(a);
b();

*/
/**
 * 扩展运算符
 */
/*
let [name, age, address = "gz"] = ["1zhiq", "18"];


let { name1, ...args } = { name1: "", age: 1, site: 1 }


// set map
let set = new Set([1, 2, 3, 3, 3, 2]);

set.add(4);
// set.clear();
set.delete(3);

console.log(set)

console.log(set.keys(),
   set.values(),
   set.entries())

set.forEach(item => {
   console.log("item", item)
})
*/
let a1 = [1, 2, 1, 2, 3, 3]
let a2 = [3, 3, 4, 4, 3, 3]
let s1 = new Set([...a1, ...a2]);
console.log(s1);
