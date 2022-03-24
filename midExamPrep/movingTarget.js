/*
function movingTarget(arr){
    let targets = arr.shift().split(' ').map(Number);
    while (arr[0] !== 'End') {
        let input = arr.shift().split(' ');
        let index = +input[1];
        let value = +input[2];
        if(input[0]=='Shoot'){
            if(index<=targets.length){
                if(targets[index]>value){
                    targets[index] -= value;
                }else{
                    targets.splice(index, 1)
                }
            }else{
                continue;
            }
        }else if(input[0]=='Add'){
            if(index<=targets.length){
                targets.splice(index, 0, value);
            }else{
                console.log('Invalid placement!')
                continue;
            }
        }else{
            if((index+value)<targets.length&&(index-value)>=0){
                let radius = 1+value*2;
                targets.splice(index-value, radius)
            }else{
                console.log('Strike missed!')
                continue;
            }
        }
    }
    console.log(targets.join('|'));
}
*/
function movingTarget(arr) {
    arr = arr.filter(x => x !== "")
    let targets = arr.shift().split(" ").map(Number)
    const actions = {
        Shoot: shoot,
        Add: add,
        Strike: strike,
        End: end,
    }

    function shoot(i, p) {
        if (targets[i] !== undefined) {
            targets[i] -= p
            if (targets[i] <= 0) {
                targets.splice(i, 1)
            }
        }
    }

    function add(i, v) {
        if (targets[i] !== undefined) {
            targets.splice(i, 0, v)
        } else {
            console.log(`Invalid placement!`)
        }
    }

    function strike(i, r) {
        if (targets[i + r] !== undefined && targets[i - r] !== undefined) {
            targets.splice(i - r, r * 2 + 1)
        } else {
            console.log(`Strike missed!`)
        }
    }

    function end() {
        console.log(targets.join("|"))
    }

    arr.forEach(x => {
        const [command, a, b] = x
            .split(" ")
            .map(x => (isNaN(x) ? x : Number(x)))
        actions[command](a, b)
    })
}
movingTarget((["52 74 23 44 96 110",
"Strike 0 2",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",

"End"])
);
movingTarget((["1 2 3 4 5",
"Strike 0 1",
"End"])
);