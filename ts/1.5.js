function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
var myadd = function (x, y) {
    return x + y;
}(3, 4);
console.log(myadd);
function dianming(banzhang) {
    var tongxue = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        tongxue[_i - 1] = arguments[_i];
    }
    console.log('班长：' + banzhang + '，同学：' + tongxue.join(','));
}
var student = dianming('张无忌', '成昆', '谢逊', '赵敏', '张三丰');
