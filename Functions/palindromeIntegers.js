function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let primeEl = String(arr[i]);
        let el = String(arr[i]).split('').reverse().join('');
        if (el === primeEl) {
            console.log('true')
        } else {
            console.log('false')
        }
    }
}
function palindromeIntegers(arr) {
    let arrOfNums = arr;
    function isPalindrome(num) {
        let startNum = num;
        let revNum = Number(num.toString().split('').reverse().join(''));
        if(startNum === revNum){
            return true;
        }else{
            return false;
        }
    }
    for(let i = 0; i < arrOfNums.length; i++){
        let curNum = arrOfNums[i];
        console.log(isPalindrome(curNum))
    }
}

palindromeIntegers([123, 323, 421, 121])
palindromeIntegers([32, 2, 232, 1010])