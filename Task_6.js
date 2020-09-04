// declaring variables
let firstArray = [8,9,2,1,4,5,6];
let sum = 19;

// bubble sort method for firstArray
for (var y = 0; y< firstArray.length; y++){
    for (var x = 0; x < firstArray.length; x++){
        if (firstArray[x] > firstArray[x+1]){
            let temp = firstArray[x];
            firstArray[x] = firstArray[x+1];
            firstArray[x+1] = temp;
        }
    }
}

//function to find three numbers in firstArray Equal to the sum integer
function ArrayAndSum(array, sum){
    //declaring variables
    let done = false;
    let result =[];
    let firstElement = 0, secondElement = 0, lastElement = 0;
    

    //method to determine which numbers are equal to the sum    
    for (var i = 1; i < array.length; i++){ //looping around the array and check the values
        for(var j = i + 1; j < array.length; j++){ // looping for second value
            for (var k = j+1; k < array.length; k++){ // looping for the third value
                if((array[i]+array[j]+array[k]) === sum){
                    done = true;
                    firstElement = array[i];
                    secondElement = array[j];
                    lastElement = array[k];
                    break;
                }       
            }
        }
    }
        if (done === true){ // assigning the values to variables
            result.push(firstElement);
            result.push (secondElement);
            result.push(lastElement);
        } else if(done === false){
            result.push(-1);
        }
    

    

    return result;
}

// calling the function to process an array and display the result
let finalArray = ArrayAndSum(firstArray, sum);
console.log(finalArray);
