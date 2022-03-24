function charactersInRange(x, y) {
    let a = x.charCodeAt(0);
    let b = y.charCodeAt(0);
    let printLine = "";
    if (a > b) {
        for (let i = b + 1; i < a; i++) {
            printLine += "" + String.fromCharCode(i) + " ";
        }
    } else {
        for (let i = a + 1; i < b; i++) {
            printLine += "" + String.fromCharCode(i) + " ";
        }
    }
    console.log(printLine);

}

function charactersInRange(x, y) {
    let charInRange = [];
    let startChar = Math.min(x.charCodeAt(0), y.charCodeAt(0));
    let endChar = Math.max(x.charCodeAt(0), y.charCodeAt(0));

    for (let i = startChar + 1; i < endChar; i++) {
        charInRange.push(String.fromCharCode(i))
    }
    console.log(charInRange.join(' '))
}

charactersInRange('a',
    'd'
)
charactersInRange('#',
    ':'
)
charactersInRange('C',
    '#'
)