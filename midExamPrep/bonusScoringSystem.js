function bonusScoringSystem(arr) {
    let numOfStudents = +arr.shift();
    let numOfLectures = +arr.shift();
    let addBonus = +arr.shift();
    let attendances = arr.map(Number);
    let maxBonus = 0;
    let bestStud = 0;
    for (let i = 0; i < numOfStudents; i++) {
        let currentBonus = maxBonus;
        let newMaxBonus = (attendances[i] / numOfLectures) * (5 + addBonus);
        if (currentBonus < newMaxBonus) {
            maxBonus = newMaxBonus
            bestStud = attendances[i]
        } else {
            continue;
        }
    }
    console.log(`Max Bonus: ${Math.round(maxBonus.toFixed(2))}.`)
    console.log(`The student has attended ${bestStud} lectures.`)
}
bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);