function sumOfOddNumbers(n) {
    let count = n
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        if (i === 1 ||i % 2 !== 0) {
            sum += i;
            count--
            console.log(i)
        }
        if(count===0){
            break;
        }
    }
    console.log("Sum: " + sum)
}
sumOfOddNumbers(5)