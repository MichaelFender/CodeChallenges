// Write your code below

function uniqueCharacters(str)
{
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false
                return true
            }

            let input = "Bobo"
 
if (uniqueCharacters(input) == true)
    console.log("The String " + input + " has all unique characters")
else
    console.log("The String " + input + " has duplicate characters")