function login(user) {
    let username = user.shift()
    let truePassSplit = username.split("")
    let reverseTruePass = truePassSplit.reverse()
    let joinTruePass = reverseTruePass.join("")
    for (let i = 1; i <= 4; i++) {
        pass = user.shift()
        if (joinTruePass === pass) {
            console.log(`User ${username} logged in.`)
            break;
        } else {
            if(i===4){
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log(`Incorrect password. Try again.`)
        }
    }  
}
login(['sunny','rainy','cloudy','sunny','not sunny'])