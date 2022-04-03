function aMinerTask(input) {
    let res = {};
    for (let i = 0; i < input.length; i += 2) {
        if (!res.hasOwnProperty(input[i])) {
            res[input[i]] = 0;
            res[input[i]] += Number(input[i + 1])
        } else {
            res[input[i]] += Number(input[i + 1])
        }
    }
    let result = Object.entries(res);
    result.forEach(x => {
        console.log(`${x[0]} -> ${x[1]}`);
    })
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )