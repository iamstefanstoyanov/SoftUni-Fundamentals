function treasureHunt(arr){
    let chest = arr.shift().split('|');
    while(arr[0]!=='Yohoho!'){
        let command = arr.shift().split(' ');
        if(command[0]==='Loot'){
            command = command.slice(1)
            for(let i = 0; i < command.length; i++){
                if(!chest.includes(command[i])){
                    chest.unshift(command[i]);
                }else{
                    continue;
                }
            }
        }else if(command[0]==='Drop'){
            let index = Number(command[1]);
            if(index<=chest.length&&index>=0){
                let loot = chest[index];
                chest.splice(index, 1);
                chest.push(loot);
            }else{
                continue;
            } 
        }else{
            let steal = Number(command[1])
            let newArr = [];
            newArr = chest.slice(-steal)
            console.log(newArr.join(', '))
            let chest2 = chest.splice(-steal, steal)
        }
    }
    if(chest.length == 0){
        console.log('Failed treasure hunt.')
    }else{
        let chestLength = chest.length;
        let sum = 0;
        for(let i = 0; i < chest.length; i++){
            sum+=Number(chest[i].length)
        }
        let atg = sum/chestLength;
        console.log(`Average treasure gain: ${atg.toFixed(2)} pirate credits.`);
        
    }
}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])
);
treasureHunt((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
);