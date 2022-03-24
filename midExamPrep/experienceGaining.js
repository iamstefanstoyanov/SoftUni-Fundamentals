function expGain(input) {
    let exp = input.shift();
    let count = input.shift();
    let sum = 0;
    let battles =0;
    for (let i = 1; i <= count; i++) {
        battles++
        sum += input[i-1]
        if (i % 3 === 0) {
            sum += (input[i-1] * 0.15);
        }
        if (i % 5 === 0) {
            sum -= (input[i-1] * 0.10);
        }
        if (i % 15 === 0) {
            sum += (input[i-1] * 0.05);
        }
        
        if (sum >= exp) {
            break;
        }
    }
    let diff = Math.abs(exp - sum);
    if(sum >= exp){
        console.log(`Player successfully collected his needed experience for ${battles} battles.`)
    }else{
        console.log(`Player was not able to collect the needed experience, ${diff.toFixed(2)} more needed.`)
    }
}
expGain(([500,
    5,
    50,
    100,
    200,
    100,
    30
]))
expGain(([500,
    5,
    50,
    100,
    200,
    100,
    20
]))
expGain(([400,
    5,
    50,
    100,
    200,
    100,
    20
]))