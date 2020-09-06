//Asking the user to enter password
let password= prompt("Please input your password: "); // ask user for password

function PasswordValidator(enteredPassword){
    
    // declaring variables with regular expressions
    var numbers = /^[0-9]+$/, 
        letters = /^[A-Za-z]+$/,
        numbersAndLetters = /^[0-9a-zA-Z]+$/,
        numberLettersAndSpecialCharacters = /^[@_!#$%^&*()<>?/|}{~:0-9a-zA-Z]*$/ ;
    //checking the type of input entered
    if (enteredPassword.match(numbers)){ //checking for only numbers
        return 0;
    }else if(enteredPassword.match(letters)){ //checking for only letters
        return 1;
    }else if (enteredPassword.match( numbersAndLetters)){ //checking for numbers and letters
        return 2;
    }else if(enteredPassword.match(numberLettersAndSpecialCharacters)){ // checking for numbers, letters, and special characters
        return 3;
    }

}

// calling the function to process an array and display the result
let passwordValide  = PasswordValidator(password);
console.log(passwordValide);
