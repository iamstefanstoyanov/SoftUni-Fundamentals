function pirates(input) {
    let line = input.shift();
    let targets = {};
    while (line !== 'Sail') {
        let [city, population, gold] = line.split('||');
        if (!targets.hasOwnProperty(city)) {
            targets[city] = [Number(population), Number(gold)];
            //направи ми града с масив популация и голд
        } else {
            targets[city][0] += Number(population);
            targets[city][1] += Number(gold);
        }
        line = input.shift();
    }
    line = input.shift();
    while (line !== 'End') {
        let [command, city, people, gold] = line.split('=>');
        if (command === 'Plunder') {
            targets[city][0] -= Number(people);
            targets[city][1] -= Number(gold);
            if (targets[city][0] <= 0 || targets[city][1] <= 0) {
                if (targets[city][0] < 0) {
                    people = Number(people) + Number(targets[city][0]);
                } else if (targets[city][1] < 0) {
                    gold = Number(gold) + Number(targets[city][1]);
                }
                delete targets[city]
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`)
                console.log(`${city} has been wiped off the map!`)
            } else {
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`)
            }
        } else if (command === 'Prosper') {
            let amount = Number(people);
            if (amount > 0) {
                targets[city][1] += amount;
                console.log(`${people} gold added to the city treasury. ${city} now has ${targets[city][1]} gold.`)
            } else {
                console.log(`Gold added cannot be a negative number!`)
            }
        }
        line = input.shift();
    }
    let cities = Object.values(targets).length;
    if (cities < 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    } else {
        console.log(`Ahoy, Captain! There are ${cities} wealthy settlements to go to:`)
        Object.entries(targets).forEach((key)=>{console.log(`${key[0]} -> Population: ${key[1][0]} citizens, Gold: ${key[1][1]} kg`)})
    }

}
pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]))
console.log('----------------')
pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]))
//"{town} plundered! {gold} gold stolen, {people} citizens killed.
//{town} has been wiped off the map!
//Gold added cannot be a negative number!
//{gold added} gold added to the city treasury. {town} now has {total gold} gold.