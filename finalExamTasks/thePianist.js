function thePianist(arr) {
    arr = arr.slice(0, arr.indexOf("Stop"))
    let pieces = []
    let initialPieces = Number(arr.shift())
    let actions = {
        Add: add,
        Remove: remove,
        ChangeKey: changeKey
    }

    for (let i = 0; i < initialPieces; i += 1) {
        pieces.push(arr.shift().split("|"))
    }

    function getIndex(a) {
        return pieces.findIndex(x => x[0] === a)
    }

    function add(a, b, c) {
        if (pieces.every(x => x[0] !== a)) {
            pieces.push([a, b, c])
            console.log(`${a} by ${b} in ${c} added to the collection!`)
            return
        }
        console.log(`${a} is already in the collection!`)
    }

    function remove(a) {
        if (getIndex(a) !== -1) {
            pieces.splice([getIndex(a)], 1)
            console.log(`Successfully removed ${a}!`)
            return
        }
        console.log(`Invalid operation! ${a} does not exist in the collection.`)
    }

    function changeKey(a, b) {
        if (getIndex(a) !== -1) {
            pieces[getIndex(a)][2] = b
            console.log(`Changed the key of ${a} to ${b}!`)
            return
        }
        console.log(`Invalid operation! ${a} does not exist in the collection.`)
    }

    arr.forEach(x => {
        let [command, a, b, c] = x.split("|")
        actions[command](a, b, c)
    })
    pieces = pieces
        .forEach(x => console.log(`${x[0]} -> Composer: ${x[1]}, Key: ${x[2]}`))
}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])
console.log('-----------------')
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
])