function anonymous(obj
) {
    let str = "";
    with (obj) {
        arr.forEach(item => {
            str += `
        <li>123</li>
        `
        })
    }
    return str;
}

console.log(anonymous({ arr: [1, 2, 3] }))
