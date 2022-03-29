function fancyBarcodes(input) {
    let x = Number(input.shift())
    let r = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g
    input = input.slice(0, x)

    input.forEach(x => {
        let matches = (x.match(r) || []).filter(x => x !== "")
        if (matches.length > 0) {
            let a = matches[0].split("").filter(x => !isNaN(Number(x)))
            a = a.length > 0 ? a.reduce((a, v) => a + v, "") : null

            console.log(`Product group: ${a === null ? "00" : a}`)
        } else {
            console.log(`Invalid barcode`)
        }
    })
}
