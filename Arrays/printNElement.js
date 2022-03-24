function printNElement(arr) {
    let step = Number(arr.pop());
    let printLine = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || i % step === 0) {
            printLine += "" + arr[i] + " ";
        }
    }
    console.log(printLine);
}
printNElement(['5', '20', '31', '4', '20', '2'])
printNElement(['dsa', 'asd', 'test', 'test', '2'])
printNElement(['1', '2', '3', '4', '5', '6'])