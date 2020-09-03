let wholeNumbers = [1,2,4,3,7,9,6,12,23] //original array with both even and odd numbers
let summedUpNumbers=[0,0]; // declaring the array to contain the result

//function to sum up even amd odd numbers
function CheckPrimeNumbers(num){ //parsing the array into the function
    let oddSum = 0 , evenSum = 0;

    //sum up even numbers and odd numbers
    for(var x = 0; x < num.length; x++ ){
        if (num[x]% 2 === 0)
           evenSum += num[x]; 
         else if (num[x]%2 != 0)
            oddSum +=num[x];
    }

    //returning the value as an array 
    let result = [evenSum, oddSum];
    return result;
}

//Calling the function and placing the resut in the empty array
summedUpNumbers = CheckPrimeNumbers(wholeNumbers);
console.log(summedUpNumbers);
