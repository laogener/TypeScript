function 女朋友(属性) {
    console.log(属性.姓名 + 属性.年龄);
}
var 属性 = { 年龄: 22, 姓名: '杨幂' };
女朋友(属性);
var findFun;
findFun = function (sourceX, findX) {
    var result = sourceX.search(findX);
    if (result != -1) {
        return true;
    }
    else {
        return false;
    }
};
console.log(findFun('hello word', 'llo'));
console.log(findFun('hello word', 'aa'));
// implements贯彻  执行  使...生效
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.setTime = function (d) {
        this.currenttime = d;
    };
    ;
    return Clock;
}());
var sss = new Clock(2018, 2018);
console.log(sss.setTime);
var 属性2 = {};
属性2.年龄 = 22;
属性2.姓名 = '赵敏';
属性2.身高 = 170;
function 女朋友2(属性2) {
    console.log(属性2.姓名 + 属性2.年龄 + 属性2.身高);
}
女朋友2(属性2);
