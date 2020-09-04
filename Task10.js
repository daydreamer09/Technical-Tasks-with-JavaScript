// Declaring the variables
let text = "google";

//funtction to find the character with the most occurence
function CharacterCount(word){
    //Declaring variables
    let stringArray = [];
    sum = [0];
    counter = 1; // Initializing the Counter

    //Splitng the text into parts of an array
    for (var y = word.length - 1; y >= 0; y--){
        stringArray.push(word[y]);
    }
    stringArray.reverse();

    // Searching the array for more occurence
    for(var x = 0; x < word.length; x++){
        var startString = stringArray[x];
        for (var y = x+1; y < word.length; y++){

            if (startString === stringArray[y]){
                counter++;
            }
            
        }
        
        //re-Initializing the counter and pushing the results into an array
        sum.push(counter);
        sum.push(startString);
        counter = 1;
        
    }

    // checking for the highest occurence 
    let max = 0, maxArray = [];
    for (var n = 0; n < sum.length; n++){
        if (sum[n] > max)
            max = sum[n]
    }


    // pushing the results with the highest occurence into another array
    for (var n = 0; n < sum.length; n++){
        if (sum[n] === max ){
            maxArray.push(sum[n]);
            maxArray.push(sum[n+1]);
        }
    }

    return(maxArray);
    
}

//// calling the function to process an array and display the result
let count = CharacterCount(text);
count.reverse();
console.log(count);
    