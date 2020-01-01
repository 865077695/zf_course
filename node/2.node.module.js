// 模块  es模块  commonJS模块

// AMD requirejs  CMD seajs


/**
 *  commonjs只是一个规范
 * 每个文件都是一个模块
 * module.exports暴露出去
 * require引入
 * 
 * 
 * 
 * 作用：防止命名冲突，代码模块化
 *  */

/**
 * 文件读写模块
// fs.readFileSync("readme.md");同步读取文件
// fs.accessSync("README.md");检查文件是否存在
 */
const fs = require('fs');

/**
 * path
 * path.resolve()拼接路径
 * path.join()拼接字符串
 * path.extname()获取扩展名
 * path.basename()获取文件名
 * path.dirname()获取父路径
 */
const path = require('path')
// console.log(path.resolve(__dirname, './node.js'))

/**
 * vm
 * 沙箱:单独运行，不依赖外部值
 */
let vm = require('vm')
let b = 1;
let fn = vm.runInThisContext(`(function (){console.log(1)})`)
fn()