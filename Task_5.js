// declaring variables
let word = "Mr John Doe";

//function to replace whitespace
function RemoveWhiteSpace(testWord){
   let newWord = testWord.replace(/ /g, "%20"); //use of .replace() to create a new string with final result
    return newWord;
}

//Calling the function and displaying the result
let finalWord = RemoveWhiteSpace(word);
console.log(finalWord);
