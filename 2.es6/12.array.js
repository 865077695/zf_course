// reduce求和
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
// function compose(...args) {  // compose接收一个要执行的函数列表并返回一个函数
//     return function (...val) {    // compose返回的函数接收一些参数并需要将执行结果传递给函数参数列表中的上一个
//         let fn = args.pop();    // compose的函数列表参数倒序执行，先将最后一个取出来并传入val参数
//         args.reduceRight((prev, next) => {
//             return next(prev);   // 上个函数的返回值作为这个函数的参数
//         }, fn(...val))
//     }
// }

// const compose = (...args) => (...val) => { args.reduceRight((prev, next) => next(prev), args.pop()(...val)) }

// 新redux  先组合三个函数后在返回最终函数去执行参数
function compose(...args) {
    // 先遍历函数列表，返回一个函数，用返回的函数去处理后面传入的参数。这样前面遍历函数的结果应该是几个函数一个套一个:addcurrency(len(sum(...val)))
    return args.reduce((prev, current) => {
        return function (...val) {
            return prev(current(...val))
        }
    })
}
