function softUni(arr) {
    arr = arr.map(Number);
    let studPerHuor = arr[0] + arr[1] + arr[2];
    let studPending = arr[3];
    let hourNeeded = 0;
    while (studPending > 0) {
        hourNeeded++
        if(hourNeeded%4!==0){
            studPending-=studPerHuor
        }
    }
    console.log(`Time needed: ${hourNeeded}h.`)
}
softUni(['5', '6', '4', '46'])
softUni(['1', '2', '3', '45'])
softUni(['1', '1', '1', '18'])