let num1 = 10;
let num2 = 5;
let logic1 = num1 && num2;
let logic2 = num1 || num2;
let logic3 = num1 ?? num2;
console.log(logic1);
console.log(logic2);
console.log(logic3);

//BT1
console.log("Bài tập 1: ");
let x = 10;
y = ++x + --x;
console.log("y= " + y);
z = --x + ++x;
console.log("z= " + z);
console.log(x++ + --x + --y + y++);
//BT2
console.log("Bài tập 2: ");
var a;
a = prompt("Nhập a: ");
a = parseInt(a);
if(Number.isInteger(a)){
    if (a % 2 == 0){
        console.log("số chẵn");
    } else{
        console.log("số lẻ");
    }
}
//BT3
console.log("Bài tập 3: ");
var b;
b = prompt("Nhập b: ");
b = parseInt(b);
if(Number.isInteger(Math.sqrt(b))){
    console.log("La so chinh phuong");
}else{
    console.log("Ko la so chinh phuong");
}