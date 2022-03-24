function factorialDivision(x, y) {
    let firstRes = x;
    let secondRes = y;
    for (let i = x-1; i > 0; i--) {
        firstRes *= i
    }
    for (let m = y-1; m > 0; m--) {
        secondRes *= m
    }
    let div = firstRes / secondRes;
    console.log(div.toFixed(2));
}
factorialDivision(5, 2)
factorialDivision(6, 2)