function oddAndEvenSum(n) {
    let even = 0;
    let odd = 0;
    let num = String(n).split('')
    for (let i = 0; i < num.length; i++) {
        if (Number(num[i]) % 2 === 0) {
            even += Number(num[i])
        } else {
            odd += Number(num[i])
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}

function oddAndEvenSum(n) {
    let numAsString = n.toString();

    function totalOddSum(numAsString) {
        let oddSum = 0;
        for (let i = 0; i < numAsString.length; i++) {
            let curNum = Number(numAsString[i]);
            if (curNum % 2 !== 0) {
                oddSum += curNum
            }
            
        }
        return oddSum;
    }
    function totalEvenSum(numAsString) {
        let evenSum = 0;
        for (let i = 0; i < numAsString.length; i++) {
            let curNum = Number(numAsString[i]);
            if (curNum % 2 === 0) {
                evenSum += curNum
            }
            
        }
        return evenSum;
    }
    console.log(`Odd sum = ${totalOddSum(numAsString)}, Even sum = ${totalEvenSum(numAsString)}`)
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)
//