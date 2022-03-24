function computerStore(arr) {
    let type = arr.pop();
    arr = arr.map(Number);
    if (arr.length <= 0) {
        console.log('Invalid order!')
        return;
    }
    let totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            console.log('Invalid price!');
            continue;
        }
        totalPrice += arr[i];
    }
    if(!totalPrice > 0){
        console.log('Invalid order!');
        return;
    }
    let tax = totalPrice * 0.2;
    let finalPrice = totalPrice + tax;
    if(type === 'special') {
        finalPrice *=0.9;
    }
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalPrice.toFixed(2)}$
    Taxes: ${tax.toFixed(2)}$
    -----------
    Total price: ${finalPrice.toFixed(2)}$`)
}
computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]))
console.log('---------------')
computerStore(([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]))
console.log('---------------')
computerStore(([
    'regular'
]))
console.log('---------------')