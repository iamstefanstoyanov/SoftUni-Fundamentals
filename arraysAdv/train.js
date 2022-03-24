function train(arr) {
    let wagons = arr.shift().split(" ").map(Number);
    let maxCapacity =  Number(arr.shift());
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let event = command[0];
        let value = Number(command[1]);
        if (event === 'Add') {
            wagons.push(value);
        } else {
            for(let j = 0; j < maxCapacity; j++) {
                let value = Number(command[j]);
                if ((wagons[j] + value) <= maxCapacity) {
                    wagons[j] += value;
                    break;
                } else {
                    let enoughtSpace = wagons.indexOf(wagons.find(el => (el + value) <= maxCapacity));
                    wagons[enoughtSpace] += value;
                    break;
                }
            }
           
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23','75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
])
console.log("-----")
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
])