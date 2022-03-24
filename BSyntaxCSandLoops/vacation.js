function vacation(people, type, day) {
    let price = 0;
    switch (day) {
        case "Friday":
            if (type === "Students") {
                price = 8.45;
            } else if (type === "Business") {
                price = 10.90;
            } else {
                price = 15;
            }
            break;
        case "Saturday":
            if (type === "Students") {
                price = 9.8;
            } else if (type === "Business") {
                price = 15.6;
            } else {
                price = 20;
            }
            break;
        case "Sunday":
            if (type === "Students") {
                price = 10.46;
            } else if (type === "Business") {
                price = 16;
            } else {
                price = 22.5;
            }
            break;
    }
    let totalPrice = price * people
    if(type === "Students" && people>=30){
        totalPrice *= 0.85;
    }else if(type === "Business" && people >=100){
        totalPrice -= price * 10;
    }else if(type === "Regular" && people>=10 && people <=20){
        totalPrice *= 0.95;
    }
    
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(110,
    "Business",
    "Sunday"
    )