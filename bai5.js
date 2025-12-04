let soTienVay = 500;
let laiSuat = 0.05;

if (soTienVay <= 100 || soTienVay >= 1000) {
    console.log("Số tiền vay không hợp lệ!");
} else {
    let soDu = soTienVay;

    for (let nam = 1; nam <= 10; nam++) {
        soDu = soDu * (1 + laiSuat);
        console.log(`Năm ${nam}: Số dư = ${soDu.toFixed(2)} USD`);

        if (soDu > soTienVay * 2) {
            console.log("Số dư đã vượt quá 2 lần tiền vay → Dừng tính toán.");
            break;
        }
    }
}
