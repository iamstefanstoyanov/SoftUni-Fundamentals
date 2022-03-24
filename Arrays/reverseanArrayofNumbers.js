function revAnArrayOfNum(n, inputArr) {
    let arr = [];
    let output = ""
    for (let i = 0; i < n; i++) {
        arr.push(Number(inputArr.shift(i)))
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        output+="" + arr[i] + " "
    }
    console.log(output)
}
revAnArrayOfNum(3, [10, 20, 30, 40, 50])
revAnArrayOfNum(4, [-1, 20, 99, 5])
revAnArrayOfNum(2, [66, 43, 75, 89, 47])