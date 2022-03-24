function arrModifier(arr) {  
    let nums = arr.shift().split(' ').map(Number);
    let arrLength = arr.length -1;
    for (let i = 0; i < arrLength; i++) {
        let command = arr.shift().split(' ')
        let event = command[0]
        let el1 = Number(command[1]);
        let el2 = Number(command[2]);
        if (event === 'swap') {
            let firstEl = nums[el1]
            let secElement = nums[el2]
            nums[el1] = secElement;
            nums[el2] = firstEl;

        } else if (event === 'multiply') {
           nums[el1] *=nums[el2]
        } else {
            nums = nums.map(el => el - 1);
        }
    }
    console.log(nums.join(', '));
}
arrModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
arrModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])