/*
function crStudent(name, grade){
let res = {};
res.name = name;
res.grade = grade;
return res;
}
let myStudent = crStudent('Stefan',5.3)
console.log(myStudent.name)
console.log(myStudent.grade)
let otherStudent = crStudent('Lora', 4.5)
console.log(otherStudent.name)
console.log(otherStudent.grade)
*/
class Student{
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }
    sayHi(){
        console.log(`${this.name} says Hi!`)
    }
}
let myStudent = new Student('Stefan',5.3)
console.log(myStudent.name)
console.log(myStudent.grade)
myStudent.sayHi()
let otherStudent = new Student('Lora',4.5)
console.log(otherStudent.name)
console.log(otherStudent.grade)
otherStudent.sayHi()