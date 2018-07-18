var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var 幸福的家庭 = /** @class */ (function () {
    function 幸福的家庭(fatherName, matherName) {
        this.父亲 = fatherName;
        this.母亲 = matherName;
    }
    幸福的家庭.prototype.儿子打招呼 = function (age) {
        console.log('我是' + this.父亲 + '的儿子，你好！我今年' + age + '岁');
    };
    return 幸福的家庭;
}());
// let family = new 幸福的家庭('郭靖','黄蓉');
// console.log(family.父亲);
// console.log(family.儿子打招呼());
var 儿子 = /** @class */ (function (_super) {
    __extends(儿子, _super);
    function 儿子(fatherName, age) {
        var _this = _super.call(this, fatherName) || this;
        _this.年龄 = age;
        return _this;
    }
    儿子.prototype.hi = function (age) {
        if (age === void 0) { age = this.年龄; }
        _super.prototype.儿子打招呼.call(this, age);
    };
    return 儿子;
}(幸福的家庭));
var family = new 儿子('郭靖', 18);
family.hi();
// public  公有的  public声明的属性和方法在类的内部和外部均能访问到
// private  私有的  protected声明的方法和属性只能在类的内部和其子类能访问
// protected  受保护的  private声明的方法和属性只能在其类的内部访问
// static  静态属性   静态属性直接通过类名访问，无需实例化
// abstract 抽象类  abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。子类必须实现父类的抽象方法。抽象类不能直接实例化。
