function storeProvision(availableStock, deliveredStock) {
    let storedProd = {};
    for (let i = 0; i < availableStock.length; i += 2) {
        let currentProd = availableStock[i];
        storedProd[currentProd] = Number(availableStock[i + 1])
    }
    for(let i = 0; i< deliveredStock.length; i += 2) {
        let currentProd = deliveredStock[i];
        if(!storedProd.hasOwnProperty(currentProd)){
            storedProd[currentProd] = 0;
        }
        storedProd[currentProd]+=Number(deliveredStock[i+1])
    }
    for(let product in storedProd){
        console.log(`${product} -> ${storedProd[product]}`)
    }
}
storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)
storeProvision([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
)