// reduce
[1, 2, 3].reduce((prev, current) => {
    console.log(prev, current)
    return prev + current
}, 0)

// 使用reduce进行数组扁平化
let arr = [1, [2, [3, [4]]]]
console.log(arr.flat(100));

function flatArray(arr) {
    return arr.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? flatArray(next) : next)
    }, [])
}
console.log(flatArray(arr))

// 函数的组合  compose   redux
function sum(a, b) {
    return a + b;
}

function len(str) {
    return str.length;
}

function addCurrent(val) {
    return '¥' + val;
}
console.log(addCurrent(len(sum('abc', 'bed'))))

console.log('compose', compose(addCurrent, len, sum)('abc', 'bed'));
// 老redux
// function compose(...args) {
//     return function (...val) {
//         let lastFn = args.pop()(...val);    // 先取出最后一个函数,作为reduceRight的第二个参数
//         return args.reduceRight((prev, current) => {
//             return current(prev);   // 上个函数的返回值作为这个函数的参数
//         }, lastFn);
//     }
// }
// 新redux
function compose(...args) {
    return args.reduce((prev, current) => {
        return function (...val) {
            return prev(current(...val))
        }
    })
}