let decoder = (str) => {
 let key = Number(str[0])
 let word = ""

    for (let i = 1; i < str.length; i++){
    let string = str[i].charCodeAt() + key 
    word += String.fromCharCode(string)       
}
return word

}

console.log(decoder('2fcjjm'));