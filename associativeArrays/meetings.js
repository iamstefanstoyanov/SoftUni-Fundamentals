function meetings(input) {
    let meetings = {};
    for (let line of input) {
        let [weekday, name] = line.split(" ");
        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`)
        } else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`)
        }
    }
    for(let el in meetings){
        console.log(`${el} -> ${meetings[el]}`)
    }  
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
])