function objToJSON(name, lastName, hairColor,){
    let obj = {name, lastName,hairColor};
    let res =JSON.stringify(obj);
    console.log(res);
}
objToJSON('George', 'Jones', 'Brown')
objToJSON('Peter', 'Smith', 'Blond')