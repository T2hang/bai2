//tinh tong
tinht = (array) => {
    let a = 0;
    for (let i = 0; i < array.length; i++)
        a += array[i];
    return a;
}
console.log(tinht([1, 32, 3, 4, 5]))
//tan suat
const tans = (mangso, so) => {
    let tinhts = 0; // xong
    for (let i = 0; i < mangso.length; i++) {
        if (mangso[i] === so) {
            tinhts++;
        }
    }
    console.log(tinhts);
    return 0;
};
tans([1, 1, 1, 1, 2, 3, 4], 1);
//so lon nhat
timsolon = (mang) => { //xong
    let solonnhat = mang[0];
    for (let i = 0; i < mang.length; i++)
        if (mang[i] > solonnhat) {
            solonnhat = mang[i];
        }
    return solonnhat;
}
console.log(timsolon([-1, -3, -3, -5]))
// dung max
timsomax = (mang) => { // thu oi toan so < 0 la sai luon
    let somax = 0;
    for (let i = 0; i < mang.length; i++)
        if (0 < mang[i]) {
            somax = Math.max(mang); // ???
        }
    return somax;
}
console.log(timsomax([1, 6, 2, 4]))
//bai1
const xettuoihs = (namsinh) => {// xong
    const namnay = new Date().getFullYear();
    const tuoi = namnay - namsinh[0];

    if (tuoi >= 15) {
        console.log("ban du dk vao 10");
    } else {
        console.log("ban khong du dk vao 10");
    }
}

xettuoihs([2009]);

//bai2
xetso = (sodauvao) => {
    let so = sodauvao;
    if (so > 100) {
        console.log("to hon 100")
    } else if (so == 100) {
        console.log("bang 100")
    }
    else {
        console.log("be hon 100")
    }
    return;
}
xetso([100])
//bai3
timsonguyenlonnhat = (songuyen) => {
    let songuyenlonnhat = 0; // ko dung
    for (let i = 0; i < songuyen.length; i++)
        if (songuyen[0] > songuyenlonnhat) { // thieu dieu kien
            songuyenlonnhat = songuyen[i];
        }
    console.log("nhap 3 so nguyen bat ki")
    return songuyenlonnhat;
}
console.log(timsonguyenlonnhat([1, 6, 2]))
//bai4
xephanghl = (diemkiemtra, diemcuoiki, diemgiuaki) => { //xong
    let diemkt = diemkiemtra;
    let diemgk = diemgiuaki;
    let diemck = diemcuoiki;
    let diemtb = (diemck + diemgk + diemkt) / 3
    if (diemtb >= 8) {
        console.log("hoc sinh xep loai hl gioi")
    }

    if (5 >= diemtb < 8) {
        console.log("hoc sinh xep loai hl kha")
    }
    if (diemtb <= 4) {
        console.log("hoc sinh xep loai hl kem")
    }
    return;
}
xephanghl([5], [7], [8])
//bai5
// tinhpt = (giatria, giatrib, giatric) => {  // thieu dau vao va cach tinh cungbi sai
//     let a = giatria;
//     let b = giatrib;
//     let c = giatric;
//     let delta =( b * b) - 4 * (a * c);
//     let deltacan = math.sqrt(delta);
//     if (delta < 0) {
//         console.log("pt vo nghiem")
//         return;
//     }
//     if (delta == 0) {
//         console.log("vi x1 = x2 nen pt co nghiem la", -b / (2 * a))
//         return;
//     }
//     if (delta > 0) {
//         confirm.log("x1 =", (-b + deltacan) / (2 * a), "x2 =", (-b - deltacan) / (2 * a))
//         return;
//     }
// }
// tinhpt([1], [-49], [-50])
//bai6
tinhhoahong = (pthoahong, doanhsocuabn) => { // xong
    let hoahong = pthoahong;
    let doanhso = doanhsocuabn;
    console.log("doanh so cua ban trong thang qua la", doanhso, "so hoa hong bn nhan dc la", (hoahong / 100) * doanhso)
    return 0;
}
tinhhoahong([10], [55])
// // tinh S(n) = 1 den 10
// tinhtong1d10 = (so) => {
//     let tong = 0;
//     let i = 0;
//     while (i <= so) {
//         tong += i;
//         i++;
//     }
//     console.log("tong so tu 1 den", so, "la", tong);
//     return tong;
// }
// tinhtong1d10(120);
// //bai3
// tinh1chian = (so) => {
//     let tong = 0;
//     let i = 1;
//     while (i <= so) {
//         let chian = 1 / i;
//         tong += chian;
//         i++;
//     }
//     console.log("tong so 1/n la", tong);
//     return tong;
// }
// tinh1chian(10);
// //bai2
// tinhtich = (so) => {
//     let tich = 0;
//     let i = 0;
//     while (i <= so) {
//         let nhan2 = i * 2
//         tich += nhan2;
//         i++;
//     }
//     console.log("tich so  la", tich);
//     return tich;

// }
// tinhtich(10)
// // bai4
// tinh1chia2nhann = (so) => {
//     let i = 1;
//     ketqua = 0;
//     while (i <= so) {
//         ketqua = 2 ^ i;
//         i++;
//     }
//     console.log("ket qua la i mu la", ketqua)
//     return ketqua;
// }
// tinh1chia2nhann(10)
// // bai 5
// tinh1chiangoac = (so) => {
//     let i = 1;
//     ketqua = 0;
//     while (i <= so) {
//         let kqtrongngoac = 2 * i + 1;
//         let chia1vsngoac = 1 / kqtrongngoac;
//         kqpheptinh += chia1vsngoac;
//         i++;
//     }
//     console.log("ket qua la", kqpheptinh)
//     return kqpheptinh;
// }
// tinh1chia2nhann(15)
// // bai 7
// bai7 = (so) => {
//     let i = 1;
//     let ketquab7 = 0;
//     while (i <= so) {
//         let ketquangoac = i + 1;
//         ketquab7 += i / ketquangoac;
//         i++;
//     }
//     console.log("ket qua bai 7 la", ketquab7)
//     return ketquab7;
// }
// bai7(10)
// // bai 8
// bai8 = (so) => {
//     let i = 0;
//     let ketquab8 = 0;
//     while (i <= so) {
//         let tuSo = 2 * i + 1;
//         let mauSo = 2 * i + 2;
//         ketquab8 += tuSo / mauSo
//         i++;
//     }
//     console.log("ket qua bai 8 la", ketquab8)
//     return ketquab8;
// }
// bai8(10)
// // bai 6
// bai6 = (so) => {
//     let i = 0;
//     let ketquab6 = 0;
//     while (i <= so) {
//         ketquab6 += 1 / (i * (i + 1));
//         i++
//     }
//     console.log("ket qua bai 6 la", ketquab6);
//     return ketquab6;
// }
// bai6(10)
// // bai 9
// bai9 = (so) => {
//     let ketqua9 = 1;
//     let i = 1;
//     while (i <= so) {
//         ketqua9 *= i;
//         i++;
//     }
//     console.log("ket qua bai 9 la", ketqua9);
//     return ketqua9;
// }
// bai9(10)
// //bai 10
// bai10 = (coSo, somu) => {
//     if (coSo == 0 && somu == 0) return;
//     if (somu == 0 && coSo != 0) return 1;
//     if (coSo == 0 && somu != 0) return 0;

//     let i = 1;
//     let result = somu;
//     while (i <= somu) {
//         result *= coSo;
//     }
//     // console.log("luy thua mu", somu, "cua so", so, "la", Math.pow(so, somu))
//     return 0;
// }
// bai10(4, 2)
// //bai 12
// bai12 = (so1, so2) => {
//     let ketqua12 = 0;
//     let i = 1;
//     while (i <= so1) {
//         ketqua12 += Math.pow(so2, i);
//         i++;
//     }
//     console.log("ket qua bai 12 la", ketqua12)
//     return ketqua12;
// }
// bai12(2, 2)
// //bai13
// bai13 = (coSo, soMu) => {
//     let ketqua13 = 0;
//     let i = 1;
//     while (i <= soMu) {
//         ketqua13 += Math.pow(coSo, 2 * i);
//         i++;
//     }
//     console.log("ket qua bai 13 la", ketqua13)
//     return ketqua13;
// }
// bai13(2, 2)
// //bai11
// bai11 = (so) => {
//     let ketqua11 = 0;
//     for (let i = 1; i <= so; i++) {
//         // tinh: 1x2x3x4x...i
//         let phanTuNhan = 1;
//         for (let j = 1; j <= i; j++) {
//             phanTuNhan *= j;
//         }

//         console.log('phanTuNhan', phanTuNhan)
//         ketqua11 += phanTuNhan;
//     }

//     console.log("ket qua bai 9 la", ketqua11);
//     return ketqua11;
// }
// bai11(5)
// //bai14
// bai14 = (soMu, coSo) => {
//     if (coSo === 0) return 0;
//     let ketqua14 = 0;
//     let i = 0;
//     while (i <= soMu) {
//         ketqua14 += Math.pow(coSo, 2 * i + 1);
//         i++;
//     }
//     console.log("ket qua bai 14 la", ketqua14)
//     return ketqua14;
// }
// bai14(1, 2)
// //bai15
// bai15 = (so) => {
//     let ketqua15 = 0;
//     for (let i = 0; i <= so; i++) {
//         let tong = 0;
//         for (let j = 0; j <= i; j++) {
//             tong += j;
//         }
//         ketqua15 += tong;
//     }
//     console.log("ket qua bai 15 la", ketqua15);
//     return ketqua15;
// }
// bai15(5)
// bai 16Bài 16: Tính S(n) = x + x^2/1 + 2 + x^3/1 + 2 + 3 + … + x^n/1 + 2 + 3 + …. + N
bai16 = (coSo, soMu) => {
    let ketqua16 = 0;
    let cong = 0;
    for (let i = 1; i <= soMu; i++) {
        cong += i;
        ketqua16 += Math.pow(coSo, i) / cong;
    }
    console.log("ket qua bai 16 la", ketqua16)
    return ketqua16;
}
bai16(5, 5)
//bai17Tính S(n) = x + x^2/2! + x^3/3! + … + x^n/N!
bai17 = (coSo, soMu) => {
    let i = 1;
    let ketqua17 = 0;
    while (i <= soMu) {
        ketqua17 += Math.pow(coSo, i) / i
        i++;
    }
    console.log("ket qua bai 17 la ", ketqua17)
    return ketqua17;
}
bai17(5, 5)
//bai 18: Tính S(n) = 1 + x^2/2! + x^4/4! + … + x^2n/(2n)!
bai18 = (coSo, soMu) => {
    let i = 1;
    let ketqua18 = 0;
    while (i <= soMu) {
        ketqua18 += Math.pow(coSo, i * 2) / (i * 2)
        i++;
    }
    console.log("ket qua bai 18 la ", ketqua18)
    return ketqua18;
}
bai18(5, 5)
//bai 19Tính S(n) = 1 + x + x^3/3! + x^5/5! + … + x^(2n+1)/(2n+1)!
bai19 = (coSo, soMu) => {
    let i = 1;
    let ketqua19 = 0;
    while (i <= soMu) {
        ketqua19 += Math.pow(coSo, 2 * i + 1) / (2 * i + 1)
        i++;
    }
    console.log("ket qua bai 19 la ", ketqua19)
    return ketqua19;
}
bai19(9, 9)
// bai 20Bài 20: Liệt kê tất cả các “ước số” của số nguyên dương n
bai20 = (number) => {
    let uoc = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            uoc.push(i);
        }
    }
    console.log("Các ước số của số nguyên dương", number, "là", uoc);
    return uoc;
}
bai20(30)
//Bài 21: Tính tổng tất cả các “ ước số” của số nguyên dương n
bai21 = (number) => {
    let uoc = [];
    let ketqua21 = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            uoc.push(ketqua21 += i);
        }
    }
    console.log("tinh tong uoc cua", number, " là", ketqua21);
    return ketqua21;
}
bai21(30)
//Bài 22:Tính tích tất cả các “ước số” của số nguyên dương n
bai22 = (number) => {
    let uoc = [];
    let ketqua22 = 1;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            uoc.push(ketqua22 *= i);
        }
    }
    console.log(" bai22 tinh tich uoc cua", number, " là", ketqua22);
    return ketqua22;
}
bai22(30)
//Bài 23: Đếm số lượng “ước số” của số nguyên dương n
const bai23 = (number) => {
    let dem = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            dem++;
        }
    }
    console.log("So luong uoc so cua", number, "la", dem);
    return dem;
}
bai23(30);
//Bài 24: Liệt kê tất cả các “ước số lẻ” của số nguyên dương n
//Bài 27: Đếm số lượng “ước số chẵn” của số nguyên dương n
lietKeUocSoChanSoLe = (number) => {
    let chan = 0;
    let le = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            if (i % 2 === 0) {
                console.log("uoc so chan cua", number, "la", i)
                chan++;
            } else {
                console.log("uoc so le cua", number, "la", i)
                le++;
            }
        }
    }
    return {
        soChan: chan,
        soLe: le
    };
}
let result24 = lietKeUocSoChanSoLe(8);
console.log('bai 24', result24.soChan)
console.log('bai 24', result24.soLe)
//Bài 25: Tính tổng tất cả các “ước số chẵn” của số nguyên dương n
bai25 = (number) => {
    let tong = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            if (i % 2 === 0) {
                tong += i;
            }
        }
    }
    console.log("tong cua cac uoc so chan la", tong)
    return tong;
}
bai25(30)
//Bài 26: Tính tích tất cả các “ước số lẻ” của số nguyên dương n
bai26 = (number) => {
    let tich = 1;
    if (number == 0) {
        console.log("tich uoc le cua 0 la", 0)
        return 0;
    }
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            if (i % 2 === 0) {
            } else {
                tich *= i;
            }
        }
    }
    console.log("tich le cua", number, "la", tich)
    return tich;
}
bai26(0)
//Bài 31: Cho số nguyên dương n. Kiểm tra xem n có phải là số nguyên tố hay không
bai31 = (number) => {
    if (number % 1 === 0) {
        if (number % number === 0) {
            console.log(" la so nguyen to")
        }
    }
    if (number <= 1) {
        console.log("khong la so nguyen to")
    }
    if (number % 2 === 0) {
        if (number % 3 === 0) {
            console.log("khong la so nguyen to")
        }
    }

}
bai31(7)
//Bài 30: Cho số nguyên dương n. Kiểm tra xem n có phải là số hoàn thiện hay không
 bai30 = (number) => {
    let tonGuoc = 0;

    if (number <= 1) {
        console.log("Khong phai so hoan thien");
        return;
    }
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            tonGuoc += i;
        }
    }
    if (tonGuoc === number) {
        console.log("So hoan thien");
    } else {
        console.log("So khong hoan thien");
    }
};
bai30(6);
//Bài 32: Cho số nguyên dương n. Kiểm tra xem n có phải là số chính phương hay không

const bai32 = (number) => {
    let so = Math.sqrt(number); 
    if (number < 0) {
        console.log(number, "khong phai la so chinh phuong");
        return;
    }
   for (let i = 0; i < number; i++) {
    if (i === so) { 
        console.log(number, "la so chinh phuong");
    } else {
    }
    if(so % 2 === 0){
    } 
    else{
        console.log("khong la so chinh phuong")
    }
    return;
   } 
}
bai32(6)
//Bài 33: Tính S(n) = CanBac2(2+CanBac2(2+….+CanBac2(2 + CanBac2(2)))) có n dấu căn

bai33 = (number) => {
    let ketqua33 = Math.sqrt(2);
    for (let i = 0; i < number; i++) {
     ketqua33 += Math.sqrt(2 + ketqua33)
    }
    console.log("ket qua 33",ketqua33)
    return ketqua33;
  }
  bai33(5)
  //Bài 34: Tính S(n) = CanBac2(n+CanBac2(n – 1 + CanBac2( n – 2 + … + CanBac2(2 + CanBac2(1)  có n dấu căn
  bai34 = (number) => {
    let canBac2 = Math.sqrt(2);
    let ketqua34 = 0;
    for (let i = 0; i < number; i++) {
      ketqua34 +=  Math.sqrt(number - i) + canBac2;
    }
    console.log("ket qua 34",ketqua34)
    return ketqua34;
  }
  bai34(10)
//Bài 36: Tính S(n) = CanBac2(n! + CanBac2((n-1)! +CanBac2((n – 2)! + … + CanBac2(2!) + CanBac2(1!)))) có n dấu căn
//Bài 37: Tính S(n) = CanBac N(N + CanBac N – 1(N – 1 + … + CanBac3(3 + CanBac2(2))) có n – 1 dấu căn
//tao 1 mang co n phan tu va sap sep tang dan va loai bo gia tri giong nhau
function mang(mangA) {
    for (let i = 0; i < mangA.length; i++) {
        for (let j = i + 1; j < mangA.length; j++) {
            if (mangA[i] > mangA[j]) {
                [mangA[i], mangA[j]] = [mangA[j], mangA[i]];
            }
        }
    }
    console.log(mangA);
}

let mangA = [5, 2, 3, 4, 1];
mang(mangA);
function array(mangb){
    let mangc = [];
    for (let i = 0; i < mangb.length; i++) {
        if(i === mangb[i]){
            if(i!== mangc[i]){
                mangc.push(i)
            }
        }
    }
    console.log(mangc)
    return mangc;
}
let mangb = [1,1,2,2,3,3,4,5];
array(mangb);