    let numbers = [1, 4, 11, 2, 37, -4];
    let smallest = numbers[0];
    let biggest = numbers[0];
    
    for(let i=1; i< numbers.length; i++)
    {
        if(numbers[i] > biggest)
    biggest = numbers[i];
        else if(numbers[i] < smallest)
    smallest = numbers[i];
    }
    console.log ("Largest Number is : " + biggest);
    console.log ("Smallest Number is : " + smallest);
