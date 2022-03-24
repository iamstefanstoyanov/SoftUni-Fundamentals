function theLift(arr) {
    let peopleWaiting = Number(arr.shift());
    let lifts = arr.shift().split(' ').map(Number);
    for (let i = 0; i < lifts.length; i++) {
        let currentLift = lifts[i];
        for (let j = peopleWaiting; j > 0; j--) {
            if (currentLift < 4) {
                peopleWaiting--
                currentLift++;
            } else {
                break;
            }
        }
        lifts[i] = currentLift;
    }
    let isFull = lifts.filter(x => x < 4);
    if (isFull.length > 0) {
        console.log(`The lift has empty spots!
        ${lifts.join(' ')}`)
    } else if (isFull.length == 0 && peopleWaiting > 0) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!
        ${lifts.join(' ')}`)
    } else {
        console.log(lifts.join(' '))
    }
}
theLift(["20", "0 2 0"]);
theLift(["15", "0 0 0 0 0"])
theLift(["20", "0 0 0 0 0"])