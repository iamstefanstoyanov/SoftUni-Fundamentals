function oddNumbers(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            let num = arr[i] * 2;
            newArr.unshift(num);
        }
    }
    console.log(newArr.join(' '));
}

function oddNumbers(arr) {
    let filterdNum = arr.filter((x, i) => i % 2 == 1);
    let doubled = filterdNum.map(x => x * 2);
    let res = doubled.reverse();
    console.log(res.join(' '));
}

function oddNumbers(arr) {
    console.log(arr
        .filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' '));
}
arr=> arr
        .filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' ');

oddNumbers([10, 15, 20, 25])
oddNumbers([3, 0, 10, 4, 7, 3])