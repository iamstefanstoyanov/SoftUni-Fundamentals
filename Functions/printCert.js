function printCert(grade, arr) {
    if(pass(grade)){
        printHeader();
        printName(arr);
        formatGrade(grade);
    }else{
        console.log(`Student does not qualify`)
    }
    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }

    function printName(nameArr) {
        console.log(nameArr[0] + " " + nameArr[1])
    }

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

    function pass(grade) {
        return grade >= 3;
    }

}
printCert(5.25, ['John', 'Smith'])
console.log('------')
printCert(4.3, ['Stefan', 'Stoyanov'])
console.log('------')
printCert(2.8, ['George', 'Dely'])