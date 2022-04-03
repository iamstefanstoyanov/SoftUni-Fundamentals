function emojiDetector(arr) {
    let cool = arr[0]
        .split("")
        .filter(x => !isNaN(x))
        .filter(x => x !== " " && x !== "")
        .join("")
        .split("")
        .map(Number)
        .reduce((a, v) => a * v, 1)
        let r = /::[A-Z][a-z]{2,}::|\*\*[A-Z][a-z]{2,}\*\*/g
    let matches = arr[0].match(r).filter(x => x !== "")
    let emojis = matches.length
    matches = matches.filter(
        x =>
            x
                .split(x[0])
                .filter(x => x !== "")
                .join("")
                .split("")
                .reduce((a, v) => a + v.charCodeAt(0), 0) > cool
    )

    console.log(`Cool threshold: ${cool}`)
    console.log(`${emojis} emojis found in the text. The cool ones are:`)
    matches.forEach(x => console.log(x))
}
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])
