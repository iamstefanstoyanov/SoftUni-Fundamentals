function rightPlace(str, char, res){
let result = str.replace('_',char);
let finalRes = result === res ? "Matched" : "Not Matched"
console.log(finalRes)
}
rightPlace('Str_ng', 'i', 'String')