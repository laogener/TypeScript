function add(x: number, y: number):number {
    return x+y
}
console.log(add(1,2));

let myadd = function (x: number, y: number):number {
    return x+y
}(3,4);
console.log(myadd);

function dianming(banzhang: string, ...tongxue: string[]) {
    console.log('班长：'+banzhang + '，同学：' +tongxue.join(','))
}
let student = dianming('张无忌','成昆','谢逊','赵敏','张三丰');