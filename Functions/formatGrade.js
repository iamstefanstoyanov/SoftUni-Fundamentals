function formatGrade(grade) {
    let desc = "";
    let g = grade.toFixed(2);
    if (g < 3) {
        g = 2
        desc = "Fail"
    } else if (g < 3.50) {
        desc = "Poor"
    } else if (g < 4.50) {
        desc = "Good"
    } else if (g < 5.50) {
        desc = "Very good"
    } else {
        desc = "Excellent"
    }
    console.log(`${desc} (${g})`)
}
formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)