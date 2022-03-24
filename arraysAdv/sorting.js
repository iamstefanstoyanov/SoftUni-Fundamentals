function sorting(arr) {
    arr.sort(function (a, b) {
        return b - a;
    });
    for(let i = 0; i < arr.length; i+=2) {
        let curEl = arr.pop();
        arr.splice(i,0,curEl);
    }
    console.log(arr.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])