function plantDiscovery(arr) {
    let n = Number(arr.shift())
    let data = {}
    let actions = {
        Rate: rate,
        Update: update,
        Reset: reset
    }
    for (let i = 0; i < n; i++) {
        let [p, r] = arr.shift().split("<->")
        data[p] = data[p] || {}
        data[p].rarity = r
        data[p].ratings = data[p].ratings || []
    }

    arr = arr.slice(0, arr.indexOf("Exhibition"))

    function rate(p, r) {
        data[p].ratings.push(r)
    }

    function update(p, r) {
        data[p].rarity = r
    }

    function reset(p) {
        data[p].ratings = []
    }

    arr.forEach(x => {
        try {
            let commands = x.split(": ")
            commands[1] = commands[1].split(" - ")
            commands = [commands[0], ...commands[1]].map(x =>
                isNaN(x) ? x : Number(x)
            )
            actions[commands[0]](commands[1], commands[2])
        } catch (e) {
            console.log("error")
        }
    })

    data = Object.entries(data).sort((a, b) => {
        return a[0].localeCompare(b[0]);
    })

    console.log(`Plants for the exhibition: `)
    data.forEach(x => {
        let average =
            x[1].ratings.reduce((a, b) => a + b, 0) / x[1].ratings.length
        console.log(
            `- ${x[0]}; Rarity: ${x[1].rarity}; Rating: ${(isNaN(average)
                ? 0
                : average
            ).toFixed(2)}`
        )
    })
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])
