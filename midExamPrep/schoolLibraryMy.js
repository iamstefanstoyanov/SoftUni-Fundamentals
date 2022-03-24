function schoolLibrary(arr) {
    let list = arr.shift().split('&');
    while (arr[0] !== 'Done') {
        let input = arr.shift().split(' | ');
        let command = input[0];
        if (command == 'Add Book') {
            let name = input[1];
            if(!list.includes(name)) {
                list.unshift(name);
            }else{
                continue;
            }
        } else if (command == 'Take Book') {
            let name = input[1];
            if(list.includes(name)) {
                let index = list.indexOf(name);
                list.splice(index, 1);
            }else{
                continue;
            }
        } else if (command == 'Swap Books') {
            let name1 = input[1];
            let name2 = input[2];
            if(list.includes(name1)&&list.includes(name2)) {
                firstIndex = list.findIndex(x => x === name1)
                secondIndex = list.findIndex(x => x === name2)
                list[firstIndex] = name2
                list[secondIndex] = name1
            }else{
                continue;
            }

        } else if (command == 'Insert Book') {
            let name = input[1];
            if(!list.includes(name)) {
                list.push(name);
            }else{
                continue;
            }
        } else {
            let index = Number(input[1]);
            if(index >=0&&index < list.length) {
                console.log(list[index]);
            }else{
                continue;
            }
        }
    }
    console.log(list.join(', '))
}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Done"
])
console.log("-----------")
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | David Copperfield",
    "Done"
])

console.log("-----------")
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
    "Check Book | 2",
    "Swap Books | Don Quixote | Ulysses",
    "Done"
])