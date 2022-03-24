function taxCalculator(arr) {
    let list = arr.shift().split(">>");
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        let currentCar = list[i].split(' ');
        let type = currentCar[0];
        let years = Number(currentCar[1]);
        let miles = Number(currentCar[2]);
        if (type === 'family') {
            let tax = 50 + ((Math.floor(miles / 3000)) * 12) - (years * 5);
            sum += tax;
            console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
        } else if (type === 'heavyDuty') {
            let tax = 80 + ((Math.floor(miles / 9000)) * 14) - (years * 8);
            sum += tax;
            console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
        } else if (type === 'sports') {
            let tax = 100 + ((Math.floor(miles / 2000)) * 18) - (years * 9);
            sum += tax;
            console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
        } else {
            console.log('Invalid car type.');
        }
        
    }
    console.log(`The National Revenue Agency will collect ${sum.toFixed(2)} euros in taxes.`);
}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])
console.log('``````````````````````````````')
taxCalculator(['family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012'])