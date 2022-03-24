
function addAndSubstract(x, y, z) {
    function add(first, second) {
        return first + second;
    }
    let substract = (addRes, thirdNum) => addRes - thirdNum;
    let result = add(x,y);
    let finalRes = substract(result,z);
    console.log(finalRes)
};
addAndSubstract(23,
    6,
    10
)
addAndSubstract(1,
    17,
    30
)
addAndSubstract(42,
    58,
    100
)

function addAndSubstract(x, y, z) {
    let res = 0;
    sum(x, y);
    subtract(z);
    console.log(res);

    function sum(x, y) {
        res += x + y
    }

    function subtract(z) {
        res -= z
    }
}
