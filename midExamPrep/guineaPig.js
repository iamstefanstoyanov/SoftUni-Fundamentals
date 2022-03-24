function guineaPig(arr) {
    let foodInGr = +arr[0] * 1000;
    let hayInGr = +arr[1] * 1000;
    let coverInGr = +arr[2] * 1000;
    let weightInGr = +arr[3] * 1000;
    let day = 1;
    while (day<=30) {
        foodInGr -= 300;
        if (day % 2 === 0) {
            hayInGr -= (foodInGr * 0.05);
        }
        if (day % 3 === 0) { 
            coverInGr -= (weightInGr / 3);
        }
        day++;
    }
    let foodInKg = foodInGr/ 1000;
    let hayInKg = hayInGr/ 1000;
    let coverInKg = coverInGr/ 1000;
    if (foodInKg > 0 && hayInKg > 0 && coverInKg > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodInKg.toFixed(2)}, Hay: ${hayInKg.toFixed(2)}, Cover: ${coverInKg.toFixed(2)}.`)
    } else if (foodInKg <= 0 || hayInKg <= 0 || coverInKg <= 0) {
        console.log('Merry must go to the pet store!')
    }
}
guineaPig(["9",
    "5",
    "5.2",
    "1"
])
console.log('----------------')
guineaPig(["10",
    "5",
    "5.2",
    "1"
])
console.log('----------------')
guineaPig(["1",
    "1.5",
    "3",
    "1.5"
])

