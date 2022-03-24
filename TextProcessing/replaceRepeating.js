function solve(text) {
    let unique = "";
    for (let i = 0; i < text.length; i++) {
        let currentChar = text.charAt(i);
        let nextChar = text.charAt(i + 1);
        if (currentChar !== nextChar) {
            unique += currentChar
        }
    }
    console.log(unique)
}