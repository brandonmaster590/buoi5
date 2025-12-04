for (let n = 2; n <= 100; n++) {
    let laNguyenTo = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            laNguyenTo = false;
            break;
        }
    }

    if (laNguyenTo) {
        console.log(n + " là số nguyên tố");
    }
}
