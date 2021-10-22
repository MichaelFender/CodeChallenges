function pigLatin(string){
    let stringIntoList = string.split(" ")
    let consonants = 'bcdfghjklmnpqrstvwxyz'
    //console.log(stringIntoList);
    for(let i = 0; i < stringIntoList.length; i++){
        //console.log(stringIntoList[i]);
        //console.log(stringIntoList[i][0]);
        if(consonants.includes(stringIntoList[i][0])){
            stringIntoList[i] = stringIntoList[i].slice(1) + stringIntoList[i][0] + 'ay'
            //console.log(fixedWord);
        } else {
            stringIntoList[i] = stringIntoList[i] + 'yay'
            //console.log(fixedVowelWord);
        }
        
    }
    //console.log(stringIntoList);
    let result = stringIntoList.join(' ')
    //console.log(result);
    return result
}

let newString = pigLatin("break this string into pieces")
console.log(newString);