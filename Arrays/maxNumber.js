function maxNumber(arr) {
    let result = [];
    while (arr.length !== 0) {
        let current = arr.shift();
        let biggest = Math.max(...arr);
        if (current > biggest) {
            result.push(current);
        }
    }
    console.log(result.join(' '));
}
maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])