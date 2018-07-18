function whatis<x>(chr: x) :string{
    return chr + ' is ' +typeof (chr)
}
console.log(whatis('hello'));
console.log(whatis(1));


interface ss<t> {
    (arg:t):t
}
function whatIs<t>(chr:t):t {
    return chr
}
let num :ss<number> = whatIs;
console.log(num(10));


interface jicheng {
    length:number;
}
function testFun<t extends jicheng>(chr: t) :t{
    console.log(chr.length);
    return chr
}
console.log(testFun('hello'));