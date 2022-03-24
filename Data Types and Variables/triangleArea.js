function area(x, y, z) {
    let p = (x + y + z) / 2;
    let s = Math.sqrt(p*((p - x)*(p - y)*(p - z)))
    console.log(s)
}
area(2,
    3.5,
    4
)
area(3, 5.5, 4)