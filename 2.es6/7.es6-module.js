// es6模块化
// es6 Module   commonjs(node模块)


// es6静态导入  不能在作用域中使用
// commonJs动态导入


// export {
//     a as c,         // 导出一个引用
//     b,              
//     h as default    // 这样变成导出一个值  export default h
// }

// import _, {c, b} from "xxx";
// import * as obj from "xxx";

// es6 export a, import时引入的是值的接口，元变量改变时引入的值也会变化。且import会自动提升到页面顶部(同时赋值)



// 文件合并导出：
// export *, {b} from "xxx"; // 这种方式不能再模块中使用变量b
// export * from "yyy";
// import * as obj from "zzz"


import "./a";   // 有副作用的导入，可以让文件执行，但是没有使用文件中的内容


// 动态导入  比如点击一个按钮再去调文件,可以在作用域中使用
btn.onClick(() => {
    // 在这里import()返回一个promise
    import("xxx").then(res => {});  // 动态使用jsonp加载一个新的文件(es7)   res   * as res
})