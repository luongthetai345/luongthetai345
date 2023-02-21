
let welcome = "Hello!";

let yourName = "Lương Thế Tài",
  age = 20;

let car; 
console.log("car:", car);
car = "huyndai"; 
console.log("car:", car);
let myNumber = 10;


console.error(`Xin chào mọi người, mình tên là ${yourName}, mình ${age} tuổi`);

console.dir({ user: "tai", age: "20" });

let myBloolean = false;
console.log(myBloolean);

let myNull = null;
var matTroi = "la mot ngoi sao";
var matTroi = "thi toa nang";
console.log(matTroi);


let newNumber = 10;
newNumber++; 
const newNumber_2 = 2;
const result = newNumber % newNumber_2;



let x = 0;
x += 2; 
console.log(x); 

let newNumber3 = 12;
let newNumber5 = "12";
let newNumber4 = "10"; 
console.log(newNumber3 + newNumber5 + newNumber4 + newNumber5);

console.log(newNumber3 !== newNumber5);

let isAuthenticated = true;
console.log(isAuthenticated);

if (!(3 < 5)) {
  console.log("ket qua phep so sanh la nho hon");
}

let logic1 = false;
let logic2 = true;
let ketqua = logic1 && logic2;

console.log("ketqua: ", ketqua);

/**
 *                       &&             ||
 * true, true           true           true
 * true, false          false          true
 * false, true          false          true
 * false, false         false          false
 */

