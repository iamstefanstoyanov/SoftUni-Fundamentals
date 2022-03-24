function rounding(n1, n2) {
    if (n2 > 15) {
        n2 = 15;
        console.log(parseFloat(n1.toFixed(n2)))
    }else{
        console.log(parseFloat(n1.toFixed(n2)))
    }

}
rounding(3.1415926535897932384626433832795,17)