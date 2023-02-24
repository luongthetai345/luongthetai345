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
}else{
    console.log(a + "Không là số nguyên");
}
//BT3
console.log("Bài tập 3: ");
var b;
b = prompt("Nhập b: ");
b = parseInt(b);
if(Number.isInteger(b)){
    if(Number.isInteger(Math.sqrt(b))){
        console.log("Là số chính phương");
    }else{
        console.log("Ko là số chính phương");
    }
}else{
    console.log(b + "không là số nguyên")
}
//BT4
console.log("Bài tập 4");
var c;
c = prompt("Nhập c: " + c);
console.log(c.toString().length);
//Số nguyên tố
var n;
n = prompt("Nhập n: ");
n = parseInt(n);
function kiem_tra_snt(n)
{
    var flag = true;
    if (n < 2){
        flag = false;
    }
    else{
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true){
        console.log(n + " là số nguyên tố");
    }
    else{
        console.log(n + " không phải là số nguyên tố");
    }
}
kiem_tra_snt(n);
