function spiceMustFlow(startingYield) {
    let spice = 0;
    let days = 0;
    while (startingYield >= 100) {
        days++
        spice += startingYield;
        spice -= 26;
        startingYield -= 10;
    }
    spice-=26;
    if (spice < 0) {
        spice = 0;
    }
    console.log(days)
    console.log(spice)
}
spiceMustFlow(111)
spiceMustFlow(450)