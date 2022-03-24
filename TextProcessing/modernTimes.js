function modernTimes(input) {
    let sentence = input.split(' ');
    sentence.forEach(element => {
        if (element.startsWith('#') && element.length > 1) {
            let letter = element.substr(1)
            if (letter.match("^[a-zA-Z]+$")) {
                console.log(letter)
            }
        }
    });
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')