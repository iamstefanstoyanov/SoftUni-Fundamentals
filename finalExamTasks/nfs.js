function nfs(arr) {
    let n = Number(arr.shift())
    let cars = {}
    for (let i = 0; i < n; i++) {
        let [a, b, c] = arr.shift().split("|")
        cars[a] = cars[a] || {}
        cars[a].mileage = Number(b)
        cars[a].fuel = Number(c)
    }
    arr = arr.slice(0, arr.indexOf("Stop"))
    let actions = { Drive: drive, Refuel: refuel, Revert: revert }

    function drive(c, d, f) {
        if (cars[c].fuel < f) {
            console.log("Not enough fuel to make that ride")
            return null
        }

        cars[c].mileage += d
        cars[c].fuel -= f
        console.log(
            `${c} driven for ${d} kilometers. ${f} liters of fuel consumed.`
        )
        if (cars[c].mileage >= 100000) {
            console.log(`Time to sell the ${c}!`)
            delete cars[c]
        }
    }

    function refuel(c, f) {
        if (cars[c].fuel + f > 75) {
            f = 75 - cars[c].fuel
            cars[c].fuel = 75
        } else {
            cars[c].fuel += f
        }

        console.log(`${c} refueled with ${f} liters`)
    }

    function revert(c, k) {
        cars[c].mileage -= k
        if (cars[c].mileage < 10000) {
            cars[c].mileage = 10000
        } else {
            console.log(`${c} mileage decreased by ${k} kilometers`)
        }
    }

    arr.forEach(x => {
        let [command, a, b, c] = x
            .split(" : ")
            .map(x => (isNaN(x) ? x : Number(x)))
        actions[command](a, b, c)
    })

    cars = Object.entries(cars)

    cars.forEach(x =>
        console.log(
            `${x[0]} -> Mileage: ${x[1].mileage} kms, Fuel in the tank: ${x[1].fuel} lt.`
        )
    )
}
nfs([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  )
  console.log('----------------')
nfs([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )