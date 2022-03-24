function tseamAccount(arr) {
    let acc = arr.shift().split(' ')
    for (let i = 0; i < arr.length; i++) {
        let event = arr[i].split(' ')
        let command = event[0]
        let game = event[1]

        if (command === 'Install') {
            if (!acc.includes(game)) {
                acc.push(game);
            }
        } else if (command === 'Uninstall') {
            if (acc.includes(game)) {
                let index = acc.indexOf(game)
                acc.splice(index, 1)
            }
        } else if (command === 'Update') {
            if (acc.includes(game)) {
                let index = acc.indexOf(game)
                acc.splice(index, 1)
                acc.push(game)
            }
        } else if (command === 'Expansion') {
            game = game.split('-')
            let spiel = game[0]
            let exp = game[1]
            if (acc.includes(spiel)) {
                let index = acc.indexOf(spiel)
                acc.splice(index + 1, 0, `${spiel}:${exp}`)
            }
        } else if (command === 'Play!') {
            console.log(acc.join(' '));
            break;
        }
    }
}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
)
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
)
