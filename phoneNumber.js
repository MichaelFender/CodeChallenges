function createPhoneNumber(phone){
    var number = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < number.length; i++)
    {
      number = number.replace('x', phone[i]);
    }
    
    return number;
  }

console.log(createPhoneNumber('1234567890'));