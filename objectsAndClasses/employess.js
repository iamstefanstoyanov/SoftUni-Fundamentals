function employees(input) {
    let list = {};
    for (let employee of input) {
        list.name = employee
        list.personalNumber = employee.length;
        console.log(`Name: ${list.name} -- Personal Number: ${list.personalNumber}`)
    }
    
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])