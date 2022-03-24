function arrayByTwoCriteria(input) {
    let sortedArr = input.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    });
    console.log(sortedArr.join("\n"));
}
arrayByTwoCriteria(['alpha', 'beta', 'gamma'])
arrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])