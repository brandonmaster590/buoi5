let bauCu = [
    { ungCuVien: 'A', soPhieu: 50 },
    { ungCuVien: 'B', soPhieu: 30 },
    { ungCuVien: 'C', soPhieu: 20 }
];

// 1. Tính tổng phiếu
let tongPhieu = 0;
for (let phieu of bauCu) {
    tongPhieu += phieu.soPhieu;
}

console.log("Tổng số phiếu:", tongPhieu);

// 2. In chi tiết từng ứng cử viên
for (let i in bauCu) {
    let ucv = bauCu[i];
    console.log(`Ứng cử viên ${ucv.ungCuVien} nhận ${ucv.soPhieu} phiếu.`);
}
