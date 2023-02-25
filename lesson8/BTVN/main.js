console.log("BTVN");
console.log("---------");
//BT1
console.log("Bài tập 1: ");
function TinhCuocDienThoai(Number){
    let t = 25000;
    if(0 < Number & Number <= 50){
        t = t + Number * 600;
    } else if (Number > 50 % Number <= 200){
        t = t + 50 * 600 + 400 * (Number - 50);
    } else if (Number > 200){
        t = t + 50 * 600 + 400 * 150 + 200 * (Number - 200);
    }
    console.log("Cước điện thoại là: " + t + " đồng");
}
TinhCuocDienThoai(220);
console.log("---------");
//BT2
console.log("Bài tập 2: ");
function TongCacSoChan(Number){
    let tong = 0;
    for(i = 1; i <= Number; i++){
        if(i % 2 == 0){
            console.log(i);
            tong = tong + i;
        }
    }
    console.log("Tổng các số chẵn là: " + tong);
}
TongCacSoChan(10);