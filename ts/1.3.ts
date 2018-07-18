interface 妈{
    姓名: string,
    年龄: number
}
function 女朋友(属性: { 妈 }) {
    console.log(属性.姓名 + 属性.年龄)
}
var 属性 = {年龄:22,姓名:'杨幂'};
女朋友(属性);

interface seachRepeat {
    (sourceText:string,findText:string):boolean
}
var findFun : seachRepeat;
findFun = function (sourceX: string, findX: string) {
    var result = sourceX.search(findX);
    if(result != -1){
        return true
    }else {
        return false
    }
};
console.log(findFun('hello word','llo'));
console.log(findFun('hello word','aa'));

interface ClockInterface {
    currenttime: Date;
    setTime(d:Date);
}
// implements贯彻  执行  使...生效
class Clock implements ClockInterface{
    currenttime: Date;
    setTime(d:Date){
        this.currenttime = d;
    };
    constructor(h:number,m:number);
}
var sss = new Clock(2018,2018);
console.log(sss.setTime);

interface 妈2{
    姓名: string,
    年龄: number
}
interface 爸 extends 妈2{
    身高 :number
}
var 属性2 = <爸>{}
属性2.年龄 = 22;
属性2.姓名 = '赵敏';
属性2.身高 = 170;

function 女朋友2(属性2) {
    console.log(属性2.姓名 + 属性2.年龄 + 属性2.身高)
}
女朋友2(属性2);