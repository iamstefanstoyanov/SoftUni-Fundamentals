function cutAndReverse(text) {
    let firstHalf = text.split('').slice(0, text.length / 2).reverse().join('');
    let secHalf = text.split('').slice(text.length / 2, text.length).reverse().join('');
    console.log(firstHalf)
    console.log(secHalf)
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')