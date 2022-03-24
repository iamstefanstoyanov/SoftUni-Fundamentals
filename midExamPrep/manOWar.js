function manOWar(mainArr) {
    let piateShip = mainArr.shift().split('>').map(Number);
    let warShip = mainArr.shift().split('>').map(Number);
    let maxHealthCapacity = +mainArr.shift();
    while (mainArr[0] !== 'Retire') {
        let command = mainArr.shift().split(' ');
        if (command[0] === 'Fire') {
            let index = Number(command[1]);
            let damage = Number(command[2]);
            if (index >= 0 && index <= warShip.length) {
                warShip[index] -= damage;
                for (let i = 0; i < warShip.length; i++) {
                    if (warShip[i] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        return;
                    }
                }
            } else {
                continue;
            }
        } else if (command[0] === 'Defend') {
            let startIndex = Number(command[1]);
            let endIndex = Number(command[2]);
            let damage = Number(command[3]);
            if (startIndex >= 0 && startIndex < piateShip.length && endIndex >= 0 && endIndex < piateShip.length) {
                for (let i = startIndex; i <= endIndex; i++) {
                    piateShip[i] -= damage;
                    if (piateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }
            }else{
                continue;
            }

        } else if (command[0] === 'Repair') {
            let index = Number(command[1]);
            let health = Number(command[2]);
            if (index >= 0 && index < piateShip.length) {
                piateShip[index] += health;
                if(piateShip[index]>maxHealthCapacity){
                    piateShip[index]=maxHealthCapacity;
                }
            }else{
                continue;
            }
        } else {
            let count = 0;
            for (let i = 0; i < piateShip.length; i++){
                if(piateShip[i]<(maxHealthCapacity*0.2)){
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }
    let pirateShipStatus = 0;
    let warShipStatus = 0;
    for(let el of piateShip){
        pirateShipStatus += el;
    }
    for(let el of warShip){
        warShipStatus += el;
    }
    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${warShipStatus}`);
}
manOWar((["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]));
manOWar((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"
]));