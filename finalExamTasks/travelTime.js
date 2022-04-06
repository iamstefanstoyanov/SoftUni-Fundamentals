function travelTime(arr) {
    let data = {}
    arr.forEach(x => {
        const [country, town, price] = x.split(" > ")
        if (data[country] === undefined) data[country] = {}
        if (data[country][town] === undefined) data[country][town] = Number(price)
        if (data[country][town] > Number(price)) data[country][town] = Number(price)
    })

    arr = Object.entries(data).sort((x, y) => x[0].localeCompare(y[0]))
    arr = arr.map(x => [x[0], Object.entries(x[1]).sort((x, y) => x[1] - y[1])])
    arr.forEach(x => {
        console.log(`${x[0]} -> ${x[1].reduce((a, v) => (a += `${v[0]} -> ${v[1]} `), "").trim()}`)
    })
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
])

function test(input) {
    let destinations = {};
    for (let line of input) {
        let country = line.split(' > ')[0]
        destinations[country] = {};
    }
    for (let line of input) {
        let [country, town, price] = line.split(' > ');
        if (!destinations[country].hasOwnProperty(town)) {
            destinations[country][town] = Number(price)
        } else {
            if (destinations[country][town] > Number(price)) {
                destinations[country][town] = Number(price)
            }
        }
    }
    let res = Object.entries(destinations).sort((x, y) => x[0].localeCompare(y[0]))
    res = res.map(x => [x[0], Object.entries(x[1]).sort((x, y) => x[1] - y[1])])
    res.forEach(x => {
        console.log(`${x[0]} -> ${x[1].reduce((a, v) => (a += `${v[0]} -> ${v[1]} `), "").trim()}`)
    })
}