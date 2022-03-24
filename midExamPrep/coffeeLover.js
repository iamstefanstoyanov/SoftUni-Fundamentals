function coffee(array) {
    let nameOfCoffees = array.shift().split(' ');
    let commandsCount = Number(array.shift());
    for (let i = 0; i < commandsCount; i++) {
        let currentCommands = array[i].split(' ');

        if (currentCommands[0] === 'Include') {
            nameOfCoffees.push(currentCommands[1]);
        } else if (currentCommands[0] === 'Remove') {
            if (currentCommands[1] === 'first') {
                let needToRemove = Number(currentCommands[2]);
                nameOfCoffees.splice(0, needToRemove);
            } else {
                let needToRemove = Number(currentCommands[2]);
                nameOfCoffees.splice(nameOfCoffees.length - needToRemove,
                    needToRemove)
            }
        } else if (currentCommands[0] === 'Prefer') {
            let firstNum = Number(currentCommands[1]);
            let secondNum = Number(currentCommands[2]);
            if ((firstNum >= 0 && firstNum < nameOfCoffees.length) && (secondNum >= 0 && secondNum < nameOfCoffees.length)) {
                let coffee1 = nameOfCoffees[firstNum]
                let coffee2 = nameOfCoffees[secondNum]
                nameOfCoffees[firstNum] = coffee2
                nameOfCoffees[secondNum] = coffee1
            } else {
                continue;
            }
        } else{
            nameOfCoffees.reverse();
        }
    }
    console.log(`Coffees:\n${nameOfCoffees.join(' ')}`)
    console.log();
}
coffee(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 2",
    "Prefer 3 1",
    "Reverse"
])

console.log("--------------")
coffee(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
    "5",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 0 1",
    "Prefer 3 1",
    "Reverse"
])

console.log("--------------")
coffee(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
    "3",
    "Include OrdinaryCoffee",
    "Remove first 1",
    "Prefer 4 1"
])