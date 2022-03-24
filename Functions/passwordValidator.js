function passwordValidator(str) {
    isValidLength = false;
    isValidLetters = false;
    isValidDigits = false;

    if (str.length >= 6 && str.length <= 10) {
        isValidLength = true;
    } else {
        console.log('Password must be between 6 and 10 characters')
    }
    if (str.match(/^[a-zA-Z0-9]+$/g)) {
        isValidLetters = true;
    } else {
        console.log('Password must consist only of letters and digits')
    }
    if (str.match(/[0-9]{2,}/g)) {
        isValidDigits = true;
    } else {
        console.log('Password must have at least 2 digits')
    }
    if (isValidLength && isValidLetters && isValidDigits) {
        console.log('Password is valid')
    }
}
function passwordValidator(str) {//not working
    function isValidLength(pass) {
        return pass.length >= 6 && pass.length <= 10;
    }

    function isValidLetters(pass) {
        for (let char of pass) {
            let curChar = char.charAt(0);
            if (!(curChar >= 65 && curChar <= 90) && !(curChar >= 97 && curChar <= 122) && !(curChar >= 48 && curChar <= 57)) {
                return false;
            }
        }
        return true;
    }

    function isValidDigits(pass) {
        let count = 0;
        for (let char of pass) {
            let curChar = char.charAt(0);
            if (curChar >= 48 && curChar <= 57) {
                count++;
            }
        }
        return count >= 2 ? true : false;
    }
    let isLengthEnought = isValidLength(str);
    let isLetAndDigOnly = isValidLetters(str);
    let isAtLeastTwoDigits = isValidDigits(str);
    if (isLengthEnought && isLetAndDigOnly && isAtLeastTwoDigits) {
        console.log('Password is valid')
    }
    if (!isLengthEnought) {
        console.log('Password must be between 6 and 10 characters')
    }
    if (!isLetAndDigOnly) {
        console.log('Password must consist only of letters and digits')
    }
    if (!isAtLeastTwoDigits) {
        console.log('Password must have at least 2 digits')
    }
}
passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')