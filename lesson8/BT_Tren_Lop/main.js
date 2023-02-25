//BT1
console.log("Bài tập 1: ");
for (i = 1; i < 101; i++){
    console.log(i);
}
//BT2
console.log("Bài tập 2: ");
for (i = 100; i > 0; i--){
    console.log(i);
}
//BT3
console.log("Bài tập 3: ");
function Kiemtrachiahet5(Number){
    for (i = 1; i < Number; i++){
         if(i % 5 == 0){
             console.log(i);
         }
     }
}
Kiemtrachiahet5(30);
//BT4
console.log("Bài tập 4: ");
function Uoc(Number){
    let dem = 0;
    for(i = 1; i <= Number ; i++){
        if(Number % i == 0){
            console.log(i);
            dem++;
        }
    }
    console.log("Số ước: " + dem);
}
Uoc(100);
//BT5
console.log("Bài tập 5: ");
function Timsohoanhao(Number){
    let tong = 0;
    for(i = 1; i < Number; i++){
        if(Number % i == 0){
            tong = tong + i;
        }
    }
    if (tong === Number & Number !== 0){
        console.log(Number + " là số hoàn hảo");
    } else{
        console.log(Number + " ko là số hoàn hảo");
    }
}
Timsohoanhao(12);
//BT6
// Right-angled triangle

// Nhập vào một số n và in ra màn hình theo định dạng sau:

// rightAngledTriangle(4);

// rightAngledTriangle(6);
console.log("Bài tập 6: ");
function rightAngledTriangle(Number){
    let myString = '';
    for (let i = 0; i < Number; i++){
        myString += '#';
        console.log(myString);
    }
}
rightAngledTriangle(4);
rightAngledTriangle(6);





