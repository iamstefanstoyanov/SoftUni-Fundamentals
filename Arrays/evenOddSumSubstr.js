function evenOddSumSubstr(arr) {
    let sumOdd = 0;
    let sumEven = 0;
    for(let i = 0; i < arr.length; i++) {
        if(Number(arr[i])%2===0){
            sumEven += Number(arr[i]);
        }else{
            sumOdd += Number(arr[i]);
        }
    }
    console.log(sumEven-sumOdd);
}
evenOddSumSubstr([1, 2, 3, 4, 5, 6])
evenOddSumSubstr([3, 5, 7, 9])
evenOddSumSubstr([2, 4, 6, 8, 10])