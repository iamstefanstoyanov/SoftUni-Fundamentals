function loadingBar(n) {
    let bar = "[..........]".split('')
    for (let i = 0; i < (n / 10); i++) {
        bar.splice(i + 1, 1, "%")
    }
    if(n<100){
        console.log(`${n}% ${bar.join('')}`);
        console.log(`Still loading...`);
    }else{
        console.log(`${n} Complete!`);
        console.log(bar.join(''));
    } 
}
loadingBar(30)
loadingBar(50)
loadingBar(100)