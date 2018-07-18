var tempBoolean : boolean = true;
console.log(tempBoolean);

var tempNumber : number = 1;
console.log(tempNumber);

var tempStr : string = 'hello';
tempStr +=' world'
console.log(tempStr);

var name : string = 'wos';
var age : number = 18;
var outputChr : string = `Hello,my name is ${name} I will be ${age+1} years old this year.`;
console.log(outputChr);

// let tempList : number[] = [1,2,3];
let tempList : Array<number> = [1,2,3];
console.log(tempList);

let tempRow : [number,string,number] = [100,"分数",20];
console.log(tempRow);
console.log(typeof (tempRow[1]));

enum color {Red,Green,Blue};
console.log(color);
console.log(color.Green);
var c:color = color.Blue;
console.log(c);

let tempAny :any = 4;
tempAny = 'may be a string instand';
console.log(tempAny);
tempAny = false;
console.log(tempAny);

let tempRows : any[] = [100,"分数",20];
console.log(tempRows);

// function outputText() :void {
//     alert()
// }
// console.log(outputText());

var someValue : any = '123132123123';
// let strLength : number = (<string>someValue).length;
let strLength : number = (someValue as string).length;
console.log(strLength);