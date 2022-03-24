function calculator(x,op,y){
    let res = 0;
switch(op){
    case "+":res = x + y ;break;
    case "-":res = x - y ;break;
    case "/":res = x / y ;break;
    case "*":res = x * y ;break;
}
console.log(res.toFixed(2))
}
calculator(5,
    '+',
    10
    )
calculator(25.5,
    '-',
    3
    )