function heroRecruitment(input) {
    let heros = {};
    while (input[0] != 'End') {
        let line = input.shift().split(' ');
        if (line[0] == 'Enroll') {
            let heroName = line[1];
            if (!heros.hasOwnProperty(heroName)) {
                heros[heroName] = [];
            } else {
                console.log(`${heroName} is already enrolled.`)
            }
        } else if (line[0] == 'Learn') {
            let heroName = line[1];
            let spellName = line[2];
            if (!heros.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`)
            } else {
                if (heros[heroName].includes(spellName)) {
                    console.log(`${heroName} has already learnt ${spellName}.`)
                } else {
                    heros[heroName].push(spellName)
                }
            }
        } else {
            let heroName = line[1];
            let spellName = line[2];
            if (!heros.hasOwnProperty(heroName)) {
                console.log(`${heroName} doesn't exist.`)
            } else {
                if (!heros[heroName].includes(spellName)) {
                    console.log(`${heroName} doesn't know ${spellName}.`)
                } else {
                    heros[heroName].splice(heros[heroName].indexOf(spellName), 1)
                }
            }
        }
    }
    
    console.log('Heroes:')
    let res = Object.entries(heros);
    for (let el of res) {
        console.log(`== ${el[0]}: ${el[1].join(', ')}`);
    }
}
heroRecruitment(["Enroll Stefan",
"Enroll Peter",
"Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn Stefan ItShouldWork2",
"Learn Stefan ItShouldWork3",
"Learn John ItShouldNotWork",
"Unlearn George Dispel",
"Unlearn Stefan ItShouldWork",
"End"])

console.log('----------------')
heroRecruitment(["Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn Stefan ItShouldWork",
"Unlearn Stefan NotFound",
"End"])

console.log('----------------')
heroRecruitment(["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Peter Dispel",
"End"])
