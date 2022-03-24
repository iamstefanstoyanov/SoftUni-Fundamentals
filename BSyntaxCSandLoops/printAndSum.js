function printAndSum(n1,n2){
    let sum = 0;
    let printLine = "";
    for(let i = n1;i<=n2;i++){
        sum += i
        printLine += "" + i + " "
    }
    console.log(printLine)
    console.log(`Sum: ${sum}`)
}
printAndSum(5,10)