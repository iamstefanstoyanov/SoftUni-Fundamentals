function reverseAString(str){
   let strSplit =  str.split("")
   let revStr = strSplit.reverse()
   let joinStr = revStr.join("")
   console.log(joinStr)
}
reverseAString("Hello")