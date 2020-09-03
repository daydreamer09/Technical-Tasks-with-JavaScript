//Declaring variables 
let integer = 0;
let primeNumber , unchecked = true;

//Asking the user for an integer
do{
    integer = prompt("Please enter a postive integer: ");
    if (integer < 0)
        console.log('This is not a positive number');
    if (integer === 0)
        console.log("Integer must be more than 0");
} while (integer <= 0); 

//functio to check if it is a prime number
function PrimeNumberChecker (positiveNumber){
    if (positiveNumber == 1){ 
        return false;
    } 
    if (positiveNumber == 2 ){
        return true;
    }

    // To check for values greater than 2
    if (positiveNumber === 1 || positiveNumber === 2){
        unchecked = false;
    }
    while (unchecked === true){
        if ( positiveNumber%2 != 0){
            return true;
        }
        else{
            return false;
        }
    }    
}

//Printing out the result to console
console.log(`Is ${integer} a prime number?`);
primeNumber = PrimeNumberChecker(integer);
console.log(primeNumber);
