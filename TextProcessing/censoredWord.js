/*
function censoredWord(sentence, word) {
    let censored = sentence;
    while (censored.includes(word)) {
        censored = censored.replace(word, "*".repeat(word.length));
    }
    console.log(censored)
}
*/
function censoredWord(sentence, word) {
    let tokens = sentence.split(word);
    console.log(tokens.join('*'.repeat(word.length)));
}

censoredWord('A small sentence with some words', 'small')
censoredWord('Find the hidden word', 'hidden')
