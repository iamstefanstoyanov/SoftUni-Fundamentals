function aMinerTask(arr){
    let result = {}
    for (let i = 0; i < arr.length; i += 1) {
        if (i % 2 === 0) {
            if (result[arr[i]] === undefined) result[arr[i]] = 0
        } else {
            result[arr[i - 1]] += Number(arr[i])
        }
    }

    Object.entries(result).forEach(x => console.log(`${x[0]} -> ${x[1]}`))
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