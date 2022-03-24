function city(info) {
    let props = Object.keys(info);
    for (let prop of props) {
        console.log(`${prop} -> ${info[prop]}`);
    }
}
function city(info) {
    for (let prop of Object.keys(info)) {
        console.log(`${prop} -> ${info[prop]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})