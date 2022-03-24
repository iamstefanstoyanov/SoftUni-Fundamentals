function firstAndLastKel(arr) {
    let k = arr.shift();
    let firstEl = arr.slice(0, k);
    let lastEl = arr.slice(- k);
    console.log(firstEl.join(" "));
    console.log(lastEl.join(" "));
}
firstAndLastKel([2,
    7, 8, 9
])
firstAndLastKel([3,
    6, 7, 8, 9
])
firstAndLastKel([4,
    6, 7, 8, 9,10
])