function schoolLibrary(arr) {
    arr = arr.filter(x => x !== "")
    let shelf = arr.shift().split("&") || []
    const actions = {
        "Add Book": addBook,
        "Take Book": takeBook,
        "Swap Books": swapBooks,
        "Insert Book": insertBook,
        "Check Book": checkBook,
    }

    function addBook(book) {
        if (!shelf.includes(book)) {
            shelf.unshift(book)
        }
    }

    function takeBook(book) {
        if (shelf.includes(book)) {
            shelf = shelf.filter(x => x !== book)
        }
    }

    function swapBooks(book1, book2) {
        if (shelf.includes(book1) && shelf.includes(book2)) {
            firstIndex = shelf.findIndex(x => x === book1)
            secondIndex = shelf.findIndex(x => x === book2)
            shelf[firstIndex] = book2
            shelf[secondIndex] = book1
        }
    }

    function insertBook(book) {
        shelf.push(book)
    }

    function checkBook(index) {
        if (shelf[index] !== undefined) {
            console.log(shelf[index])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const [action, parameter1, parameter2] = arr[i].split(" | ")
        if (action === "Done") break

        try {
            actions[action](parameter1, parameter2)
        } catch (e) {
            continue
        }
    }

    return shelf.join(", ")
}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"]
)
console.log("-----------")
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"])

console.log("-----------")
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])