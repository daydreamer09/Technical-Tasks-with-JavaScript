// Declaring variables 
let text = "hello world";
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//method to shifit the position of the alphabet
function ConsonantPositionShift(aplhaCharacters, word){
    let stringArray =[];
    let changed = false;// boolean checker

    // to split the string into an array
    for (var y = word.length - 1; y >= 0; y--){
        stringArray.push(word[y]);
    }
    stringArray.reverse();
    
    //shifitng the position of each array element that is a consonant
    for(var x = 0; x < stringArray.length; x++){
        var startString = stringArray[x];
        //checking to find the consnants and changing its position
        if (!(startString === "a" || startString === "e" || startString === "i" || startString === "o" || startString === "u")){
            for (var z = 0; z < aplhaCharacters.length; z++){
                if(startString === aplhaCharacters[z]){
                    stringArray[x] = aplhaCharacters[z+1];
                    changed = true;
                    
                    //performing a double check
                    if (changed === true && (stringArray[x] === "a" || stringArray[x] === "e" || stringArray[x] === "i" || stringArray[x] === "o" || stringArray[x] === "u")){
                        stringArray[x] = aplhaCharacters[z+2];
                    }
                        
                    changed = false;
                }
            }
        }
        
    }

    //turning the array back into a string and returning the result
    let result = "";
    for (var n = 0; n < stringArray.length; n++){
        result = stringArray.join('');
    }

    return result;
}

// calling the function to process an array and display the result
let finalResult = ConsonantPositionShift(alphabet, text);
console.log(finalResult);