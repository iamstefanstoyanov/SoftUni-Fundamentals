function counterStrike(arr) {
    let energy = +arr.shift();
    let wins = 0;
    while (arr[0] !== 'End of battle') {
        let distance = +arr.shift()
        if ((energy - distance) >= 0) {
            energy -= distance
            wins++;
            if (wins % 3 === 0) {
                energy += wins;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`)
            return;
        }
    }
    console.log(`Won battles: ${wins}. Energy left: ${energy}`)
}

counterStrike((["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"
]))
counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"
]))