// Incomplete code for password validator
let password= prompt("Please input your password: "); // ask user for password

function PasswordValidator(enteredPassword){
    //checking the type of input entered
    if(isNaN(enteredPassword)){
        return 0;
    }else if(isNaN(enteredPassword) == false){
        return 1;
    }

}

// calling the function to process an array and display the result
let passwordValide  = PasswordValidator(password);
console.log(passwordValide);