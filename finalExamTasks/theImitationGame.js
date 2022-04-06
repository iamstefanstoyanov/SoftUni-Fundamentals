function theImitationGame(input) {
    let commands = {
        Move,
        Insert,
        ChangeAll
    }
    let message = input.shift();
    while(input[0]!='Decode'){
        let line = input.shift().split('|');
        let commandName = line[0];
        let command = commands[commandName];
        message = command(message, line[1], line[2]);
    }
    console.log(`The decrypted message is: ${message}`)
    function Move(str,num){
        let start = str.substring(0, num);
        let end = str.substring(num);
        return end + start;
    }
    function Insert(str,index,text){
        let start = str.substring(0, index)
        let end = str.substring(index)
        return start + text + end
    }
    function ChangeAll(str, match, text) {
        let tokens = str.split(match);
        return tokens.join(text)
    }
}
theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o',

    'Move|3',

    'Decode'
])
theImitationGame(['owyouh',

    'Move|2',

    'Move|3',

    'Insert|3|are',

    'Insert|9|?',

    'Decode'
])