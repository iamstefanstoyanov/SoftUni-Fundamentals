function numbers(mainArr) {
    let arr = mainArr.split(' ').map(Number);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    let newArr = arr.filter(x => x > average)
    if (newArr.length <= 5) {
        if (newArr.length == 0) {
            console.log('No');
            return;
        }
        console.log(newArr.sort(function (a, b) {
            return b - a;
        }).join(' '));
    } else {
        console.log(newArr.sort(function (a, b) {
            return b - a;
        }).splice(0, 5).join(' '))
    }
}
numbers('1');
console.log('----------------')
numbers('10 20 30 40 50');
console.log('----------------')
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
console.log('----------------')
numbers('-1 -2 -3 -4 -5 -6');
console.log('----------------')