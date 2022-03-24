/*
let person = {
    name: 'Peter',
    age: 20,
    //secName: undefined - празно
};

console.log(person.name);

person.age++;
console.log(person.age);

person.age = 24;
console.log(person.age);

person['age'] = 25;
console.log(person['age']);

person.age++;

let propName = 'age';
console.log(person[propName]);

console.log(person);

person.lastName = 'Stefan';
//person[lastName] = 'Stefan2';
console.log(person);

////////////////////////////////////////////////

let person = {
    sayHello: function () {
        console.log('Hi,guys')
    }
}
let person = {
    sayHello() {
        console.log('Hi,guys')
    }
}
let person = {
    name: 'Peter',
    age: 20,
    sayHi() {
        console.log('hello')
    }
};
person.sayHi()

let person = {
    name: 'Peter',
    age: 20,
};
let keys = Object.keys(person)
let values = Object.values(person)
let entries = Object.entries(person)

for(let key of keys) {
    console.log(key)
}
for(let key of values) {
    console.log(key)
}
for(let key of entries) {
    console.log(key)
}
for(let key of keys) {
    console.log(key, person[key])
}

//изтриване на ел от обект
//delete person.name
//person.age === null ? cat.age = 7 : 0
*/
let cat = {
    name: 'Stefan',
    hello:(text)=>console.log(text),
}
cat.hello('Maw')

console.log(Object.keys(cat))
console.log(Object.values(cat))
let kvp = Object.entries(cat)
console.log(kvp)

//копиране на обект в нова променлва различиен от оригиналния 
//онелт с ваъзможност да се модифицира без да променя първият
//Objecy.assign(el, object)
