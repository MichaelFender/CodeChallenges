// Write your solution below:

function shirtSort(str) {
    let small = ''
    let medium = ''
    let large = ''

    for (let i = 0; i <str.length; i++){
        if (str[i] === 's'){
            small += 's'
        }else if (str[i] === 'm'){
            medium += 'm'
        }else{
            large += 'l'
        }
    }
    return small + medium + large
}
console.log(shirtSort('lms'))
console.log(shirtSort('llllssmsmsmlmslmlmslmslmslmslmlsmlsmlsmlsmlsmlsmlsm'))