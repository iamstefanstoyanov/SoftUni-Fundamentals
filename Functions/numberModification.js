function numberModification(n) {
    let sum = 0;
    let count = 0;
    let isReached = false;
    let num = String(n).split('')
    while(!isReached) {
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
            count++;
        }
        if(sum/count < 5){
            num.push('9')
            sum =0;
            count = 0;
        }else{
            isReached = true;
            break;
        }
        
    }
    console.log(num.join(''))
}
numberModification(101)
numberModification(5835)