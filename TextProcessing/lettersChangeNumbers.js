function lettersChangeNumbers(text) {
    let words = text.split(" ").filter((el) => el !== "");
    let totalSum = 0;
    const isUppercase = (Letter) => Letter.toUpperCase() === Letter;
    const getAlfabetPos = (Letter) => Letter.charCodeAt(0) - 96;
    words.forEach((el) => {
        let letBefore = el[0];
        let lastLetter = el[el.length - 1];
        let number = +el.substring(1, el.length - 1);
        let beforePosition = getAlfabetPos(letBefore.toLowerCase());
        let lastPosition = getAlfabetPos(lastLetter.toLowerCase());
        if(isUppercase(letBefore)){
            number /= beforePosition;
        }else{
            number *= beforePosition;
        }
        if(isUppercase(lastLetter)){
            number -= lastPosition
        }else{
            number += lastPosition;
        }
        totalSum+=number;
    });
    console.log(totalSum.toFixed(2))
}
lettersChangeNumbers("A12b s17G");
lettersChangeNumbers("P34562Z q2576f   H456z");
lettersChangeNumbers("a1A");