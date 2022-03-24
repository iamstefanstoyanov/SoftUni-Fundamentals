function addAndSubstract(arr) {
    let sum = 0;
    let newSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] % 2 === 0) {
            arr.splice(i, 1, arr[i] + i);
            newSum += arr[i];
        } else {
            arr.splice(i, 1, arr[i] - i);
            newSum += arr[i];
        }
    }
    console.log("[ " + arr.join(", ") + " ]" );
    console.log(sum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35])
addAndSubstract([-5, 11, 3, 0, 2])