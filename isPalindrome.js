// Write your code below
function isPalindrome(word) {
    let j = word.length - 1
    for (let i = 0; i < (word.length - 1) / 2; i++ )
      if (word[i] !== word[j]) 
        return false
        return true
  }
  let input = "boob"
  
  if (isPalindrome(input) == true)
      console.log(input +  " is palindrome")
  else
      console.log(input + " is not a palindrome")