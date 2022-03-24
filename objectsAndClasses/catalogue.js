function catalogue(input) {
    let dictionary = input.reduce((a, v) => {
        let letter = v.charAt(0)
        a[letter] = []
        return a
    }, {})

    input.forEach(x => {
        let letter = x.charAt(0)
        let formatted = x.split(" : ").join(": ")
        dictionary[letter].push(formatted)
    })

    dictionary = Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0]))
    dictionary.forEach(x => {
        console.log(`${x[0]}${x[1].sort((a, b) => a.localeCompare(b)).join("\n  ")}`)
    })
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
])