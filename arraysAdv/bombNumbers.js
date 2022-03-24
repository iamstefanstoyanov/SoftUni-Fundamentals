function bombNumbers(field, bomb) {
    let bombNumber = bomb[0];
    let bombPower = bomb[1];

    for (let i = 0; i < field.length; i++) {
        if (bombNumber === field[i]) {
            if (i - bombPower >= 0) {
                field.splice(i - bombPower, 2 * bombPower + 1);
                i = -1;
            } else {
                let index = i - bombPower + 2 * bombPower + 1
                if (index > field.length) {
                    index = field.length
                }
                field.splice(0, index);
                i = -1;
            }
        }
    }
let sum = field.reduce((a, b) => a + b, 0);
console.log(sum);

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)
console.log('-----------')
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)
console.log('-----------')
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
)
console.log('-----------')
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
)
console.log('-----------')