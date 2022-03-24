function inventory(arr) {
    let items = arr.shift().split(', ');
    while (arr[0] !== 'Craft!') {
        let command = arr.shift().split(' - ');
        if(command[0] === 'Collect'){
            let item = command[1];
            if(!items.includes(item)){
                items.push(item);
            }else{
                continue;
            }
        }else if(command[0] === 'Drop'){
            let item = command[1];
            if(items.includes(item)){
                let index = items.indexOf(item);
                items.splice(index, 1);
            }else{
                continue;
            }
        }else if(command[0] === 'Combine Items'){
            let newItems = command[1].split(':');
            let oldItem = newItems[0]
            let newItem = newItems[1]
            if(items.includes(oldItem)){
                let index = items.indexOf(oldItem);
                items.splice(index+1, 0,newItem);
            }else{
                continue;
            }
        }else{
            let item = command[1];
            if(items.includes(item)){
                let index = items.indexOf(item);
                let newItem = items[index]
                items.splice(index, 1);
                items.push(newItem)
            }else{
                continue;
            }
        }
    }
    console.log(items.join(', '))
}

inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!'])
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])