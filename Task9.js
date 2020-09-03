//Declaring variable
let word = prompt("Enter a word to check if its a palendrome!: ");

//Method to check if the word is a palendrome
function CheckPalendrome(wordText){
    let secondText = "";
    let done =true;

    //loop used to reverse a string
    for (var x = wordText.length - 1; x >= 0; x--){
        secondText += wordText[x];
    }

    //compared both string to see if its a match
    for (var y = wordText.length - 1; y >= 0; y--){
        if(secondText[y] != wordText[y])
            done = false;
            break;

    }

    // return the value
    if (done == true){
        return "Yes";
    }else if (done == false)
        return "No";

}


let finalWord = CheckPalendrome(word);
console.log(finalWord);