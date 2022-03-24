function personInfo(firstName, lastName, age) {
    let res = {
        firstName: firstName,//можем да ги подадем катп стрингове
        lastName: lastName,
        age: age
    };
    /*
    let res = {
         firstName,//можем да ги подадем катп стрингове
         lastName,
         age
    };
    */
    //може да създадем празен стринг и да вкарваме пропъртита вътре
    return res;
}
console.log(personInfo("Peter",
    "Pan",
    "20"
))
console.log(personInfo("George",
    "Smith",
    "18"
))