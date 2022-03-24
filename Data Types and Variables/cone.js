function cone(radius, height){
let vol = 1/3*Math.PI*Math.pow(radius, 2)*height
let s = Math.sqrt(Math.pow(radius, 2)+Math.pow(height, 2))
let b = Math.PI*radius*s
let sArea = Math.PI*Math.pow(radius, 2)
let tsa = sArea+b
console.log(`volume = ${vol.toFixed(4)}`)
console.log(`area = ${tsa.toFixed(4)}`)
}
cone(3,
    5
    )
cone(3.3,
    7.8
    )