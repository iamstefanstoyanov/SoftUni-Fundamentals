function airPollution(city, input) {
    city = city.map(row => row.split(' ').map(x => Number(x)));
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let event = command[0];
        let value = Number(command[1]);
        switch (event) {
            case 'breeze':
                for(let i = 0; i < city[value].length; i++) {
                    city[value][i] -= 15;
                    if(city[value][i]<0){
                        city[value][i] = 0;
                    }
                }
                ;
                break;
            case 'gale':
                for(let i = 0; i < city.length; i++) {
                    city[i][value] -=20;
                    if(city[i][value]<0){
                        city[i][value] = 0;
                    }
                }
                ;
                break;
            case 'smog':
                for(let i = 0; i < city.length; i++) {
                    for(let j = 0; j < city[i].length; j++) {
                        city[i][j] +=value;
                    }
                }
                ;
                break;
        }
    }
    city = city.map(x =>{if (x <0) x = 0})
    let res = []
    for(let i = 0; i < city.length; i++) {
        for(let j = 0; j < city[i].length; j++){
            if(city[i][j]>=50){
                res.push(`[${i}-${j}]`)
            }

        }
    }
    console.log(res.length>0? `Polluted areas: ${res.join(', ')}`:`No polluted areas`)

}
airPollution(['5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24'
    ],
    ['breeze 1', 'gale 2', 'smog 25']
)
console.log('-----------')
airPollution(['5 7 3 28 32',
        '41 12 49 30 33',
        '3 16 20 42 12',
        '2 20 10 39 14',
        '7 34 4 27 24'
    ],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']
)
console.log('-----------')
airPollution(['5 7 2 14 4',
        '21 14 2 5 3',
        '3 16 7 42 12',
        '2 20 8 39 14',
        '7 34 1 10 24'
    ],
    ['breeze 1', 'gale 2', 'smog 35']
)
