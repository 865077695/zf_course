// 命令行管家
const program = require("commander");

// 解析用户的参数


// 配置属性
program
    .option("-p, --port <val>", "set port")
    .version('1.0.0')

// 配置命令，输入命令时执行一些内容
// node commander create
program
    .command("create")
    .alias("c")
    .description("create project")
    .action(() => {
        console.log("create project")
    })


program.on("-help", () => {
    console.log("Examples")
    console.log("node 2.commander.js create project")
})
.parse(process.argv)