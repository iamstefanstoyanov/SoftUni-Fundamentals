function companyUsers(arr) {
    let db = {}
    arr.forEach(x => {
        const [company, employee] = x.split(" -> ")
        if (db[company] === undefined) db[company] = []
        if (!db[company].includes(employee)) db[company].push(employee)
    })
    const result = Object.entries(db).sort((x, y) => x[0].localeCompare(y[0]))
    result.forEach(x => {
        console.log(`${x[0]}`)
        x[1].forEach(x => console.log(`-- ${x}`))
    })

}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )
