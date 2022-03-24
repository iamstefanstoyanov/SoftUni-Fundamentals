function passGenerator(input) {
    //let firstString = input[0];
    //let secondString = input[1];
    //let thirdString = input[2];
    let [firstString, secondString, thirdString] = input; //деструкториране
    let combined = firstString.concat(secondString);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let revPass = "";
    thirdString = thirdString.toLowerCase();
    let vowelIndex = 0;
    for (let i = 0; i < combined.length; i++) {
        if (vowels.includes(combined[i])) {
            let indexOfChar = vowelIndex % thirdString.length;
            vowelIndex++
            let currentChar = thirdString.charAt(indexOfChar);
            revPass += currentChar.toUpperCase();
        } else {
            revPass += combined[i]
        }
    }
    console.log(`Your generated password is ${revPass.split('').reverse().join('')}`);
}

passGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
])
passGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
])
passGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
])