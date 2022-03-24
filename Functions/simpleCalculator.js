function calculator(x, y, str) {
    let res = 0;
    switch (str) {
        case "add":
            res = x + y;
            break;
        case "subtract":
            res = x - y;
            break;
        case "divide":
            res = x / y;
            break;
        case "multiply":
            res = x * y;
            break;
    }
    console.log(res)
}
calculator(5,
    5,
    'multiply'
)
calculator(40,
    8,
    'divide'
)
calculator(12,
    19,
    'add'
)
calculator(50,
    13,
    'subtract'
)