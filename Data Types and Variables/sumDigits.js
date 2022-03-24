function sumDigits(n) {
    let sum = 0
    let num = String(n)
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    console.log(sum)
}
sumDigits(245678)
sumDigits(97561)
sumDigits(543)