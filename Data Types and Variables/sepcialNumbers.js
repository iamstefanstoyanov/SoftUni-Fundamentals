function sepcialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let firstN = i % 10;
        let secondN = parseInt(i / 10);
        let sum = firstN + secondN
        console.log(sum === 5 || sum === 7 || sum === 11 ? `${i} -> True` : `${i} -> False`)
    }
}
sepcialNumbers(15)