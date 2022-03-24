function revAnArrayOfStrings(str) {
    for (let i = 0; i < str.length / 2; i++) {
        let k = str.length - 1 - i;
        let temp = str[i];
        str[i] = str[k];
        str[k] = temp;
    }
    console.log(str.join(' '));
}

revAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])
revAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop'])
revAnArrayOfStrings(['33', '123', '0', 'dd'])