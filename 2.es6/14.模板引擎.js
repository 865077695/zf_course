// 如何实现一个模板引擎

let fs = require('fs');
let template = fs.readFileSync('./2.es6/14.template.html', 'utf8');

// let r = render(template, { name: 'zhiq', age: 10 })
let r = render(template, { name: 'zhiq', age: 10, arr: [1, 2, 3] })
console.log(r);

function render(templateStr, obj) {
    // 解析由双花括号包裹的字符串模板
    // return templateStr.replace(/\{\{(.*?)\}\}/g, function () {
    //     return obj[arguments[1]] === undefined ? '' : obj[arguments[1]]
    // })

    // 解析由{% %}包裹的js语法
    let head = 'let str ="";';
    head += 'with(obj){\r\n'
    let content = 'str += `';
    // 解析{{}}
    templateStr = templateStr.replace(/\{\{(.*?)\}\}/g, function () {
        return '${' + arguments[1] + '}'
    })
    // 解析{% %}
    content += templateStr.replace(/\{\%(.+?)\%\}/g, function () {
        return '`\r\n' + arguments[1] + '\r\nstr+=`'
    })
    let foot = '`} \r\n return str;'
    // 产生函数
    let fn = new Function('obj', head + content + foot);
    return fn(obj)
}