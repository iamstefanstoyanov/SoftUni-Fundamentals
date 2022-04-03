function bossRush(input) {
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let line = input[i];
        let regex = /\|(?<Name>[A-Z]{4,})\|\:\#(?<Title>[A-Za-z]+\s[A-Za-z]+)\#/
        let match = line.match(regex);

        if (match) {
            let name = match[1]
            let title = match[2]
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armour: ${title.length}`);
        } else {
            console.log("Access denied!");
        }
    }
}
bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])
bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'])
