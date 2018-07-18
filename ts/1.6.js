function whatis(chr) {
    return chr + ' is ' + typeof (chr);
}
console.log(whatis('hello'));
console.log(whatis(1));
function whatIs(chr) {
    return chr;
}
var num = whatIs;
console.log(num(10));
function testFun(chr) {
    console.log(chr.length);
    return chr;
}
console.log(testFun('hello'));
