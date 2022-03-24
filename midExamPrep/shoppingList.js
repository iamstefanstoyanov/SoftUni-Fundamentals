function shoppingList(arr) {
    let list = arr.shift().split('!');
    while (arr[0] !== 'Go Shopping!') {
        let command = arr.shift().split(' ');
        let event = command[0];
        if (event === 'Urgent') {
            let item = command[1];
            if (!list.includes(item)) {
                list.unshift(item);
            } else {
                continue;
            }
        } else if (event === 'Unnecessary') {
            let item = command[1];
            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.splice(index, 1);
            } else {
                continue;
            }
        }else if (event === 'Correct'){
            let oldItem = command[1];
            let newItem = command[2];
            if (list.includes(oldItem)) {
                let index = list.indexOf(oldItem);
                list.splice(index, 1, newItem);
            } else {
                continue;
            }
        }else{
            let item = command[1];
            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.push(list[index]);
                list.splice(index, 1);
            } else {
                continue;
            }
        }
    }
    console.log(list.join(', '));
}
shoppingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]));
shoppingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]));