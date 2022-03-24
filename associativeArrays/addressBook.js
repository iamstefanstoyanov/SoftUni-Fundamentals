function addressBook(input) {
    let addressBook = {};
    for (let line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }
    let sorted = Object.entries(addressBook);
    sorted.sort((a, b) => {
        let namaA = a[0];
        let namaB = b[0];
        return (namaA.localeCompare(namaB))
    }); //сортира по азбучен ред.
    for (let [name, address] of sorted) {
        console.log(`${name} -> ${address}`)
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
])
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
])
