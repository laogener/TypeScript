class 幸福的家庭{
    父亲:string;
    母亲:string;
    儿子打招呼(age:number){
        console.log('我是'+this.父亲+'的儿子，你好！我今年'+age+'岁')
    }
    constructor(fatherName:string,matherName?:string){
        this.父亲 = fatherName;
        this.母亲 = matherName;
    }
}
// let family = new 幸福的家庭('郭靖','黄蓉');
// console.log(family.父亲);
// console.log(family.儿子打招呼());
class 儿子 extends 幸福的家庭{
    年龄:number;
    constructor(fatherName:string,age:number){
        super(fatherName);
        this.年龄 = age;
    }
    hi(age = this.年龄){
        super.儿子打招呼(age)
    }
}
let family = new 儿子('郭靖',18);
family.hi();

// public  公有的  public声明的属性和方法在类的内部和外部均能访问到
// private  私有的  protected声明的方法和属性只能在类的内部和其子类能访问
// protected  受保护的  private声明的方法和属性只能在其类的内部访问
// static  静态属性   静态属性直接通过类名访问，无需实例化
// abstract 抽象类  abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。子类必须实现父类的抽象方法。抽象类不能直接实例化。