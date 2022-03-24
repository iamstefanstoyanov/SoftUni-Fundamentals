/*
function distinctArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
               i = 0;
               j = 0;
            }
        }
    }
        console.log(arr.join(" "));
}
function distinctArray(arr) {
    console.log([...new Set(arr)].join(' '));
}
*/
function distinctArray(arr) {
    let newArray = [];
    for(let number of arr) {
        if(!newArray.includes(number)){
            newArray.push(number);
        }
    }
    console.log(newArray.join(' '));
}

distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])