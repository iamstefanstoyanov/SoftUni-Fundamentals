function shootForTheWin(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let count = 0;
    while (arr[0] !== 'End') {
        let taget = +arr.shift();
        if (taget < targets.length) {
            count++
            let value = targets[taget];
            targets[taget] = -1
            targets = targets.map((x) => {
                if (x > value) {
                    return x - value;
                } else if (x <= value && x !== -1) {
                    return x + value;
                } else {
                    return x
                }
            });
        } else {
            continue;
        }
    }
    console.log(`Shot targets: ${count} -> ` + targets.join(' '))
}
shootForTheWin((["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]));