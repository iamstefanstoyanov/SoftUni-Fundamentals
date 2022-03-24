function blackFlag(arr) {
    let days = +arr[0];
    let dailyPlunder = +arr[1];
    let expPlundered = +arr[2];
    let plundered =0;
    for (let i = 1; i <= days; i++) {
        plundered+=dailyPlunder
        if(i%3===0){
            let morePlunder = dailyPlunder/2;
            plundered+=morePlunder;
        }
        if(i%5===0){
            plundered-=(plundered*0.3)
        }
    }
    if(plundered>=expPlundered){
        console.log(`Ahoy! ${plundered.toFixed(2)} plunder gained.`)
    }else{
        let percentage = (plundered/expPlundered)*100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }
}
blackFlag((["5",
    "40",
    "100"
]));
blackFlag((["10",
    "20",
    "380"
]));