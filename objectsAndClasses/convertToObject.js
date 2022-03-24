function convertToObject(objAsStr) {
    let obj = JSON.parse(objAsStr);
    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`)
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')