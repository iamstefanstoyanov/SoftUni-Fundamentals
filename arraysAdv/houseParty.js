function houseParty(arr) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let curEl = arr[i].split(' ');
        let name = curEl.shift();
        let command = curEl.join(' ');
        if (command === "is going!") {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                list.push(name);
            }
        } else {
            if (list.includes(name)) {
                let remove = list.indexOf(name);
                list.splice(remove,1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    for (let el of list) {
        console.log(el);
    }
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);
console.log('---------------')
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);