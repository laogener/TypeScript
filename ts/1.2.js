var tempBoolean = true;
console.log(tempBoolean);
var tempNumber = 1;
console.log(tempNumber);
var tempStr = 'hello';
tempStr += ' world';
console.log(tempStr);
var name = 'wos';
var age = 18;
var outputChr = "Hello,my name is " + name + " I will be " + (age + 1) + " years old this year.";
console.log(outputChr);
// let tempList : number[] = [1,2,3];
var tempList = [1, 2, 3];
console.log(tempList);
var tempRow = [100, "分数", 20];
console.log(tempRow);
console.log(typeof (tempRow[1]));
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
console.log(color);
console.log(color.Green);
var c = color.Blue;
console.log(c);
var tempAny = 4;
tempAny = 'may be a string instand';
console.log(tempAny);
tempAny = false;
console.log(tempAny);
var tempRows = [100, "分数", 20];
console.log(tempRows);
// function outputText() :void {
//     alert()
// }
// console.log(outputText());
var someValue = '123132123123';
// let strLength : number = (<string>someValue).length;
var strLength = someValue.length;
console.log(strLength);
