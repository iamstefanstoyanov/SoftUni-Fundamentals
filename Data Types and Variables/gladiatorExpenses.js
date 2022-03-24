function gladiatorExpenses(lostCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmet = 0;
    let sword = 0;
    let sheild = 0;
    let armor = 0;
    for (let i = 1; i <= lostCount; i++) {
        if (i % 2 === 0) {
            helmet++
        }
        if (i % 3 === 0) {
            sword++
        }
        if (i % 6 === 0){
            sheild++
            if(sheild%2===0){
                armor++
            }
        }
    }
    let totalExp = helmet*helmetPrice+sword*swordPrice+sheild*shieldPrice+armor*armorPrice;
    console.log(`Gladiator expenses: ${totalExp.toFixed(2)} aureus`)
}
gladiatorExpenses(7,
    2,
    3,
    4,
    5
)
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
)