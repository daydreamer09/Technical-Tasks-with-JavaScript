// Declaring variables
let positiveIntegerArray = [1,2,3,4,5,6,7,8,9,12,17,41];
let primeIntegerArray = [];

// functio to pick out the prime numbers
function PrimeNumberChecker(array){
    let secondArray = [];
    
    //Picking out the prime numbers and putting it in another array
    for (let x =0; x < array.length; x++){
        if (array[x] == 2 || array[x] % 2 != 0)
            secondArray.push(array[x]); 
    }

    //checking the second array for any non-prime numbers
    for (let y = 0; y < secondArray.length; y++){
        if (secondArray[y] === 1)
         delete secondArray[y];
    }
    return secondArray;
}

// calling the function to process an array and display the result
primeIntegerArray = PrimeNumberChecker(positiveIntegerArray)
console.log(primeIntegerArray);
