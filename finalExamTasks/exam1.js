function stringManipulator(arr) {
    let text = arr.shift();
    while (arr[0] != 'End') {
        let command = arr.shift().split(' ')
        if (command[0] == 'Translate') {
            let char = command[1]
            let repl = command[2];
            while (text.includes(char)) {
                text = text.replace(char, repl);
            }
            console.log(text)
        } else if (command[0] == 'Includes') {
            let substring = command[1];
            if (text.includes(substring)) {
                console.log('True')
            } else {
                console.log('False')
            }
        } else if (command[0] == 'Start') {
            let substring = command[1];
            if (text.startsWith(substring)) {
                console.log('True')
            } else {
                console.log('False')
            }
        } else if (command[0] == 'Lowercase') {
            text = text.toLowerCase();
            console.log(text)
        } else if (command[0] == 'FindIndex') {
            let char = command[1];
            let x = text.lastIndexOf(char);
            console.log(x)
        } else {
            let startIndex = Number(command[1]);
            let count = Number(command[2]);
            let newText = text.substring(startIndex, startIndex +count)
            text = text.replace(newText, '')
            console.log(text)
        }

    }
}
stringManipulator((["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"
]))
stringManipulator((["*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"
]))