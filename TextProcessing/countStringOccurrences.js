function countStringOccurrences(text, word) {
    let count = 0;
    let splited = text.split(' ');
    for (let el of splited) {
        if (el === word) {
            count++;
        }
    }
    console.log(count)
}
countStringOccurrences('This is a word and it also is a sentence',
    'is'
)
countStringOccurrences('softuni is great place for learning new programming languages',
    'softuni'
)