const decoder = code => {
    let stringSplit = code.split("")
    let result = ""
    
    for (let i=0; i<stringSplit.length; i++) {
        if (!isNaN(+stringSplit[i])){ i += +stringSplit[i] 
        } else{
            result += stringSplit[i]
        }
       
    }
    console.log(result);
    return result
    
}

decoder('0A4akjfSS')
decoder('0O2xcM5ngbrdG')
decoder('2bnL0U1mC2osK0Y')