let balancedParens = (str) => {
    
    return !str.split('').reduce((previousChar, thisChar) => {
        if(thisChar === '(' || thisChar === '{' || thisChar === '[' ) {
            return ++previousChar;
        } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') {
            return --previousChar;
        }

        return previousChar
    }, 0);
}

console.log(balancedParens("This [( is unbalanced."));
console.log(balancedParens("({This (is {[(a)]} balanced) }string.)"));
console.log(balancedParens("This is{}} () also )]] unbalanced."));  
console.log(balancedParens("[{(Balanced.)}]"));