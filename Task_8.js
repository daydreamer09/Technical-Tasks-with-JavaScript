// declaring variables
let resultArrayOfThree =[];
let n = prompt("Please Enter last digit for the group of numbers? ");


// function that searches for 3 in a  group of n numbers
function SelectThrees(digit){
    let mod = 0, textDigit = 0;
    let arrayOfThrees = [];

    // loops the list to seacrh for digits with 3
    for (var x = 0; x <= digit; x++){
        textDigit = x;
        while (textDigit != 0){
            mod = textDigit % 10;

            // verifies and selects the digits 
            
            if (mod == 3)
             arrayOfThrees.push(x);


             textDigit = Math.floor(textDigit/10);
        }
    }

    return arrayOfThrees;
}

// calling the function to process an array and display the result
resultArrayOfThree = SelectThrees(n);
console.log(resultArrayOfThree);
console.log(resultArrayOfThree.length);
