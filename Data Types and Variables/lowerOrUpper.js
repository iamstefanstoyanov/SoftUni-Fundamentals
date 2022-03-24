function lowerOrUpper(l) {
    let x = l.charCodeAt(0)
    if (x >= 65 && x <= 90) {
        console.log(`upper-case`)
    } else {
        console.log(`lower-case`)
    }
}
lowerOrUpper("L")
lowerOrUpper("f")