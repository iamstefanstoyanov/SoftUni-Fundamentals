function gladiatorInventory(inventory) {
    let equipment = inventory.shift().split(' ');
    for (let i = 0; i < inventory.length; i++) {
        let command = inventory[i].split(' ');
        let event = command[0];
        let item = command[1];
        if (event === 'Buy') {
            if (!equipment.includes(item)) {
                equipment.push(item);
            } else {
                break;
            }
        } else if (event === 'Trash') {
            if (equipment.includes(item)) {
                let index = equipment.indexOf(item);
                equipment.splice(index, 1);
            } else {
                break;
            }
        } else if (event === 'Repair') {
            if (equipment.includes(item)) {
                let index = equipment.indexOf(item);
                equipment.splice(index, 1);
                equipment.push(item)
            } else {
                break;
            }
        } else {
            item = item.split('-')
            let curItem = item[0];
            let from = item[1];
            if (equipment.includes(curItem)) {
                let index = equipment.indexOf(curItem)
                equipment.splice(index + 1, 0, `${curItem}:${from}`)
            }
        }
    }
    console.log(equipment.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
])
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
])